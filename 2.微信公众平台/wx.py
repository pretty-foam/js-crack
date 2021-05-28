import execjs

node = execjs.get()

ctx = node.compile(open("./wechat.js","r",encoding="utf-8").read())
pwd = ctx.eval("getpwd('{}')".format("123"))
print(pwd)