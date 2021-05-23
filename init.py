#!/usr/bin/env python3.7

from flask import Flask, render_template, request
import sys
sys.path.append("/ROKArmy-wage-check/ROKArmy-wage-check/python")
from wage_calculator import *

app = Flask(__name__)

@app.route('/')
def hello():
	query = request.args.to_dict()
	if bool(query) == True:
		response = query['ipdae']
		main(response)
		return str(main(response))
	return render_template('index.html')

if __name__ == '__main__':
	app.run(host='0.0.0.0', port='5000', debug=True)

