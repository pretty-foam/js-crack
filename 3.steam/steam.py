import requests
import execjs

url = "https://store.steampowered.com/login/getrsakey/"

data = {
'donotcache': '1621145215432',
'username': '3030235482@qq.com'
}

headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4"
}

resp_json = requests.post(url=url,headers=headers,data=data).json()
print(resp_json['publickey_mod'])
print(resp_json['publickey_exp'])

node =execjs.get()

ctx = node.compile(open("./steam.js","r",encoding="utf-8").read())
ret = ctx.eval("getpwd('{}','{}','{}')".format("123",resp_json['publickey_exp'],resp_json['publickey_mod']))
print(ret)