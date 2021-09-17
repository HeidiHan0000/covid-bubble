import time
from flask_cors import CORS, cross_origin
from flask import Flask
from flask.helpers import send_from_directory
app = Flask(__name__, static_folder ='react-flask-app/build', static_url_path='')
cors = CORS(app)

@app.route('/time')
def get_current_time():
    return {'time': time.time()}

@app.route('/api', methods = ['GET'])
@cross_origin()
def index():
    return {
        "tutorial": "Flask React"
    }

@app.route('/')
@cross_origin()
def serve():
    return send_from_directory(app.static_folder, 'index.html')

if __name__=='__main__':
    app.run()