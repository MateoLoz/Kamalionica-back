# Kamalionica Back-end Layer

## Routes
- api/products
- api/pedidos

---

## api/products

- GET https://kamalionica-back.onrender.com/api/products
- POST https://kamalionica-back.onrender.com/api/products

---
## POST format Example api/products 

<pre> ``` {
    "titulo": 
    "ejemoplo titulo",
    "imagen": [ "https://ejemploimagen.jpg","https://ejemploimagen2.jpg" ],
    "info": "informacion corta ejemplo",
    "descripcion": "informacion mas detallada larga ejemplo.",
    "precio": 90000,
    "talles": [24, 26, 28, 30] }
    ``` </pre>

---
## api/pedidos
- GET https://kamalionica-back.onrender.com/api/pedidos
- POST https://kamalionica-back.onrender.com/api/pedidos

---
## POST format Example api/pedidos

<pre>```json {
    "carrito": {
        "items": [
            {
                "titulo": "Jean Mom",
                "info": "Jean Mom 100% algodon",
                "talle": "24",
                "imagen": "https://cloud.camper.com/is/image/JGVzaG9wMDNtYmlnZ3JleSQ=/AU00005-003_LF.jpg",
                "precio": "90000"
            }
        ],
    "total":"90000",
    "provincia":"Tucuman",
    "email":"mateobinance1@gmail.com",
     "direccion":"Mi casa 123"
    }
}  </pre>
