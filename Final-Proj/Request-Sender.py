import requests
import json

# r1 = requests.post('http://127.0.0.1:3007/api/reguser', data={'username': '', 'password': '111111'})
r1 = requests.post('http://127.0.0.1:3007/api/login', data={'username': 'b', 'password': '111111'})
print(r1.content.decode())

token = json.loads(r1.content.decode())['token']
# r2 = requests.get('http://127.0.0.1:3007/my/userinfo', headers={'Authorization': token})
# r2 = requests.post('http://127.0.0.1:3007/my/userinfo', data={'id': 4, 'nickname': 'A', 'email': '123@hotmail.com'}, headers={'Authorization': token})
# r2 = requests.post('http://127.0.0.1:3007/my/updatepwd', data={'oldPwd': 'aaaaaa', 'newPwd': '000000'}, headers={'Authorization': token})
# r2 = requests.post('http://127.0.0.1:3007/my/update/avatar', data={'avatar': 'data:image/png;base64,VE9PTUFOWVNFQ1JFVFM='}, headers={'Authorization': token})
# r2 = requests.post('http://127.0.0.1:3007/my/article/addcates', data={'name': 'Physics', 'alias': 'Sci'}, headers={'Authorization': token})
# r2 = requests.get('http://127.0.0.1:3007/my/article/deletecate/3', headers={'Authorization': token})
r2 = requests.post('http://127.0.0.1:3007/my/article/updatecate', data={'Id': '4', 'name': 'Chemistry', 'alias': 'Che'}, headers={'Authorization': token})
print('\n' + r2.content.decode())






""" 
a - 000000
b - 111111
admin - 000000 
"""