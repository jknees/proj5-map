import flask

app = app.Flask(__name__)
import CONFIG

@app.route("/")
@app.route("/index")
def index():
	raw = open('places.txt')
	flask.session['Places'] = pre.process(raw)
	return flask.rendertemplate('index.html')