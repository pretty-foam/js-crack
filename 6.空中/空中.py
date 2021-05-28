import requests
import re
import execjs

headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36",
    "Referer": "https://passport.kongzhong.com/"
}

url = "https://sso.kongzhong.com/ajaxLogin?j=j&jsonp=j&service=https://passport.kongzhong.com/&_=1621157782627"
resp =requests.get(url,headers=headers)

dc = re.findall('{"dc":"(\w+)",',resp.text)[0]
node = execjs.get()

ctx = node.compile(open("./kongzhong.js","r",encoding="utf-8").read())
funcName = 'getpwd("{}","{}")'.format("123",dc)

ret = ctx.eval(funcName)
print(ret)