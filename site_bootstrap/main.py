from flask import Flask, render_template, request

app = Flask(__name__)


@app.route('/')
def home():
    return render_template('home.html')


@app.route('/search', methods=['POST'])
def search_results():
    name = request.form['name']
    # aqui você pode inserir a lógica para realizar a busca com o nome digitado
    # vamos simular alguns resultados aqui
    results = [
        {'name': 'João', 'age': 25},
        {'name': 'Maria', 'age': 30},
        {'name': 'Pedro', 'age': 35}
    ]
    return render_template('results.html', name=name, results=results)
