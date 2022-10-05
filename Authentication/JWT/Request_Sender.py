import requests
import json

r1 = requests.post('http://127.0.0.1:8888/api/login',
                   data={'username':'admin', 'password': '000000'})
token = json.loads(r1.content.decode())["token"]

print('Bearer ' + token)

params = {'Authorization': 'Bearer ' + token}
r2 = requests.get('http://127.0.0.1:8888/admin/getinfo', headers=params)

print(r2.content.decode())
