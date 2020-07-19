from flask import Flask,request
from flask_cors import CORS
import json

app=Flask(__name__)
CORS(app, supports_credentials=True)
# 只接受POST方法访问

@app.route("/login",methods=["POST"])

def check():    # 默认返回内容
    
    return_dict= {'return_code': 200, 'return_info': '处理成功', 'result': False}

    # 判断传入的json数据是否为空
    if request.get_data() is None:
        return_dict['return_code'] = '5004'
        return_dict['return_info'] = '请求参数为空'
        return json.dumps(return_dict, ensure_ascii=False)
    
    # 获取传入的参数
    get_Data=request.get_data()
    get_Data=json.loads(get_Data)

    
    if get_Data.get('username')=='admin' and get_Data.get('password')=='123456':
        
        return_dict = {'return_code': 1, 'return_info': '登陆成功', 'result': 0,'token':'0'}
        
    return json.dumps(return_dict, ensure_ascii=False)


if __name__ == "__main__":
    print(' * Server服务开启……')
    app.run(host='127.0.0.1',port=7777,debug=False)
