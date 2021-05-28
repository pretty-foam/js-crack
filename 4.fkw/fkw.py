import execjs

node =execjs.get()

ctx = node.compile(open("fkw.js","r",encoding="utf-8").read())

funcName = "md5('{}')".format("123")
pwd =ctx.eval(funcName)
print(pwd)