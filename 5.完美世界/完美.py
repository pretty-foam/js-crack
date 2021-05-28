import requests
from lxml import etree
import execjs

headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36"
}

resp_text = requests.get("https://passport.wanmei.com/sso/login?service=passport&isiframe=1&location=2f736166652f",headers=headers).text

tree = etree.HTML(resp_text)
key = tree.xpath("//input[@id='e']/@value")[0]
print(key)

node = execjs.get()
ctx = node.compile(open("./wanmei.js","r",encoding="utf-8").read())
funcName= "getpwd({})".format(123)
ret = ctx.eval(funcName)
print(ret)