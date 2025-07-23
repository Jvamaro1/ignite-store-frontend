from flask import Blueprint, jsonify, send_from_directory
import os

products_bp = Blueprint('products', __name__)

# Dados dos produtos
PRODUCTS_DATA = [
    {
        "id": 1,
        "name": "Ignite V15",
        "model": "V15",
        "puffs": 1500,
        "description": "Pod descartável com 1500 puffs, ideal para quem busca praticidade e qualidade.",
        "price": 45.90,
        "original_price": 54.90,
        "discount": 16,
        "rating": 4.2,
        "reviews": 127,
        "image": "ignite-v15.png",
        "in_stock": True,
        "characteristics": [
            "1500 puffs",
            "5% de nicotina",
            "Bateria recarregável",
            "Design ergonômico"
        ],
        "flavors": ["Blue Raspberry Ice", "Aloe Grape", "Banana Ice", "Dragon Fruit", "Icy Mint"]
    },
    {
        "id": 2,
        "name": "Ignite V35",
        "model": "V35",
        "puffs": 3500,
        "description": "Pod descartável com 3500 puffs, perfeito para uso prolongado.",
        "price": 65.90,
        "original_price": 79.90,
        "discount": 18,
        "rating": 4.3,
        "reviews": 89,
        "image": "ignite-v35.png",
        "in_stock": True,
        "characteristics": [
            "3500 puffs",
            "5% de nicotina",
            "Bateria recarregável",
            "Design ergonômico"
        ],
        "flavors": ["Blue Raspberry Ice", "Aloe Grape", "Banana Ice", "Dragon Fruit", "Icy Mint"]
    },
    {
        "id": 3,
        "name": "Ignite V50",
        "model": "V50",
        "puffs": 5000,
        "description": "Pod descartável premium com 5000 puffs e tecnologia avançada.",
        "price": 85.90,
        "original_price": 99.90,
        "discount": 14,
        "rating": 4.5,
        "reviews": 203,
        "image": "ignite-v50.png",
        "in_stock": True,
        "characteristics": [
            "5000 puffs",
            "5% de nicotina",
            "Bateria recarregável",
            "Design ergonômico"
        ],
        "flavors": ["Blue Raspberry Ice", "Aloe Grape", "Banana Ice", "Dragon Fruit", "Icy Mint"]
    },
    {
        "id": 4,
        "name": "Ignite V60",
        "model": "V60",
        "puffs": 6000,
        "description": "Pod descartável com 6000 puffs, oferecendo experiência superior.",
        "price": 95.90,
        "original_price": 109.90,
        "discount": 13,
        "rating": 4.4,
        "reviews": 156,
        "image": "ignite-v60.png",
        "in_stock": True,
        "characteristics": [
            "6000 puffs",
            "5% de nicotina",
            "Bateria recarregável",
            "Design ergonômico"
        ],
        "flavors": ["Blue Raspberry Ice", "Aloe Grape", "Banana Ice", "Dragon Fruit", "Icy Mint"]
    },
    {
        "id": 5,
        "name": "Ignite V80",
        "model": "V80",
        "puffs": 8000,
        "description": "Pod descartável de alta performance com 8000 puffs.",
        "price": 115.90,
        "original_price": 129.90,
        "discount": 11,
        "rating": 4.6,
        "reviews": 178,
        "image": "ignite-v80.png",
        "in_stock": True,
        "characteristics": [
            "8000 puffs",
            "5% de nicotina",
            "Bateria recarregável",
            "Design ergonômico"
        ],
        "flavors": ["Blue Raspberry Ice", "Aloe Grape", "Banana Ice", "Dragon Fruit", "Icy Mint"]
    },
    {
        "id": 6,
        "name": "Ignite V150",
        "model": "V150",
        "puffs": 15000,
        "description": "O mais avançado pod descartável com 15000 puffs.",
        "price": 165.90,
        "original_price": 189.90,
        "discount": 13,
        "rating": 4.7,
        "reviews": 245,
        "image": "ignite-v150.png",
        "in_stock": True,
        "characteristics": [
            "15000 puffs",
            "5% de nicotina",
            "Bateria recarregável",
            "Design ergonômico"
        ],
        "flavors": ["Blue Raspberry Ice", "Aloe Grape", "Banana Ice", "Dragon Fruit", "Icy Mint"]
    },
    {
        "id": 7,
        "name": "Ignite V150 Pro",
        "model": "V150 Pro",
        "puffs": 15000,
        "description": "A versão premium do V150 com recursos exclusivos.",
        "price": 185.90,
        "original_price": 209.90,
        "discount": 11,
        "rating": 4.6,
        "reviews": 134,
        "image": "ignite-v150-pro.png",
        "in_stock": True,
        "characteristics": [
            "15000 puffs",
            "5% de nicotina",
            "Bateria recarregável",
            "Design ergonômico"
        ],
        "flavors": ["Blue Raspberry Ice", "Aloe Grape", "Banana Ice", "Dragon Fruit", "Icy Mint"]
    },
    {
        "id": 8,
        "name": "Ignite V250",
        "model": "V250",
        "puffs": 25000,
        "description": "O pod mais duradouro da linha Ignite com 25000 puffs.",
        "price": 225.90,
        "original_price": 259.90,
        "discount": 13,
        "rating": 4.8,
        "reviews": 67,
        "image": "ignite-v250.png",
        "in_stock": False,
        "characteristics": [
            "25000 puffs",
            "5% de nicotina",
            "Bateria recarregável",
            "Design ergonômico"
        ],
        "flavors": ["Blue Raspberry Ice", "Aloe Grape", "Banana Ice", "Dragon Fruit", "Icy Mint"]
    }
]

@products_bp.route('/products', methods=['GET'])
def get_products():
    """Retorna todos os produtos"""
    return jsonify(PRODUCTS_DATA)

@products_bp.route('/products/<int:product_id>', methods=['GET'])
def get_product(product_id):
    """Retorna um produto específico"""
    product = next((p for p in PRODUCTS_DATA if p['id'] == product_id), None)
    if product:
        return jsonify(product)
    return jsonify({'error': 'Produto não encontrado'}), 404

@products_bp.route('/images/<filename>')
def serve_image(filename):
    """Serve as imagens dos produtos"""
    images_dir = os.path.join(os.path.dirname(os.path.dirname(__file__)), 'static', 'images')
    return send_from_directory(images_dir, filename)

