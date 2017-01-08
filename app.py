from flask import Flask, render_template
import json
import sys
# Set the static url path related to the path in the html: <script src = ""></script>
app = Flask(__name__, static_url_path='')
@app.route('/')
def index():
    return app.send_static_file('index.html')


@app.route('/dynamic')
def dynamic():
    return render_template('index.html')

@app.route('/getGraph')
def getGraph():
    with open('data/graph.json') as data_file:
        data = json.load(data_file)
        print data
        return json.dumps(data)

if __name__ == '__main__':
    app.run(debug=True)



