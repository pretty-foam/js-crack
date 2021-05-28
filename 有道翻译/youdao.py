#coding:utf-8
import requests
import time
import random
from hashlib import md5

#请求地址
url = "https://fanyi.youdao.com/translate_o?smartresult=dict&smartresult=rule"

#关键词
key = "猫"
#时间戳
lts = str(int(time.time()*1000))
#随机整数0-10加lts
salt = lts+str(random.randint(0,10))
#sign
sign_str = "fanyideskweb" + key + salt + "Tbh5E8=q6U3EXe+&L[4c@"

md = md5()
md.update(sign_str.encode())
#md5
sign = md.hexdigest()

#i为关键字key，salt就是salt，sign为sign，lts为lts
payload = "i={}&from=AUTO&to=AUTO&smartresult=dict\
&client=fanyideskweb&salt={}&\
sign={}&lts={}\
&bv=9ff8102373b1562471f4b6881a5653e9&doctype=json\
&version=2.1&keyfrom=fanyi.web&action=FY_BY_REALTlME".format(key,salt,sign,lts)


headers = {
  'Connection': 'keep-alive',
  'Pragma': 'no-cache',
  'Cache-Control': 'no-cache',
  'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90"',
  'Accept': 'application/json, text/javascript, */*; q=0.01',
  'X-Requested-With': 'XMLHttpRequest',
  'sec-ch-ua-mobile': '?0',
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36',
  'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
  'Origin': 'https://fanyi.youdao.com',
  'Sec-Fetch-Site': 'same-origin',
  'Sec-Fetch-Mode': 'cors',
  'Sec-Fetch-Dest': 'empty',
  'Referer': 'https://fanyi.youdao.com/',
  'Accept-Language': 'zh-CN,zh;q=0.9',
  'Cookie': 'OUTFOX_SEARCH_USER_ID=-1227696632@10.169.0.83; JSESSIONID=aaa6VKnhPaRlthWkgJXMx; OUTFOX_SEARCH_USER_ID_NCOO=76047885.09383464; DICT_UGC=be3af0da19b5c5e6aa4e17bd8d90b28a|; JSESSIONID=abc0rt8wPcO7G5XpuJXMx; _ntes_nnid=8ded6b98659a06aadc89bc17cb882ed1,1622181498729; ___rl__test__cookies=1622183211868'
}
#data需要编码为utf-8，不然中文翻译会报错
response = requests.request("POST", url, headers=headers, data=payload.encode("utf-8"))

print(response.json())
