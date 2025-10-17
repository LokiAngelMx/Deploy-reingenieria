from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Permite llamadas desde el frontend (CORS abierto)

@app.route('/api/saludo', methods=['GET'])
def obtener_saludo():
    """
    Este endpoint retorna un simple saludo en formato JSON.
    """
    datos_respuesta = {
        'mensaje': 'Hola desde el backend!',
        'status': 'exitoso'
    }
    return jsonify(datos_respuesta)

if __name__ == '__main__':
    # Ejecutar servidor Flask
    app.run(debug=True, port=5001)
