import requests
import re
import execjs

headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36",

}

url = "http://eip.chanfine.com/resource/js/session.jsp?_=1621158595784&s_ajax=true"
resp =requests.get(url,headers=headers)

session = resp.cookies.get_dict()["JSESSIONID"]
print(session)
node = execjs.get()

ctx = node.compile(open("./chanfine.js","r",encoding="utf-8").read())
funcName = 'getpwd("{}","{}")'.format("123",session)

ret = ctx.eval(funcName)
print(ret)