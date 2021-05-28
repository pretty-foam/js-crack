import requests
import execjs

headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36"
}

url = "http://login.shikee.com/getkey?v=9672f5c145e4549710afe0d9af56c69f"
resp =requests.get(url,headers=headers)
rsa_n = resp.text.split('"')[1].strip()

node = execjs.get()

ctx = node.compile(open("./shikee.js","r",encoding="utf-8").read())
funcName = 'getpwd("{}","{}")'.format("123456",rsa_n)

ret = ctx.eval(funcName)
print(ret)