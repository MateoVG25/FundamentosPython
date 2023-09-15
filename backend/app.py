from flask import Flask, render_template, request
import json

app = Flask(__name__)

@app.route('/')
def index():
   return render_template('index.html')
   
@app.route('/calculate', methods=['POST'])  
def calculate():
   data = request.get_json()
   # Hacer el cálculo según datos recibidos
   result = calculate(data['input1'], data['input2'], data['operation']) 
   return json.dumps({'result': result})

def calculate(input1, input2, operation):
   # Lógica de cálculo
   if operation == "+":
      return input1 + input2
   # etc
   return result
   
if __name__ == '__main__':
   app.run(debug=True)