
from flask import Flask
from flask import request
from flask_cors import CORS, cross_origin
import instagram_user_info
import news_api

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/')
def hello_world():
    name = request.args.get('name', default = "World", type = str)
    return "Hello " + name
print()
@app.route('/idtoname')
@cross_origin()
def convertIdToName():
    id = request.args.get('id', default = "fail", type = str)
    name = False
    if id != "fail":
        name = instagram_user_info.useridToUsername(id)
    if name: return name
    return id

@app.route('/nametoid')
@cross_origin()
def convertNameToId():
    name = request.args.get('name', type = str)
    return instagram_user_info.usernameToUserId(name)

@app.route('/news')
@cross_origin()
def getNews():
    query = request.args.get('q', type = str)
    pageNum = request.args.get('p', type = str)
    pageSize = request.args.get('s', type = str)
    apiKey = request.args.get('k', type = str)
    return news_api.getNews(query, pageNum, pageSize, apiKey)
