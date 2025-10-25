# 🛍️ Back-End Node.js - Gestión de Productos (FakeStore API)

Este proyecto es un desafío práctico desarrollado con **Node.js**, que permite **gestionar productos desde la terminal** utilizando la **API FakeStore**.  
El sistema interpreta comandos ingresados en consola para **consultar, crear y eliminar productos** de forma dinámica.

---

## 🚀 Características

- Consultar todos los productos  
- Consultar un producto por su ID  
- Crear un nuevo producto  
- Eliminar un producto existente  
- Manejo de peticiones asíncronas con `fetch`  
- Estructura profesional y organizada

---

## ⚙️ Instalación

1. Clonar el repositorio:

   ```bash
   git clone https://github.com/kiki995/Back-End-Node-JS.git
   cd Back-End-Node-JS

Instalar dependencias:

npm install

Asegurar que package.json contenga:

{
  "type": "module",
  "scripts": {
    "start": "node index.js"
  }
}

Ejecutar el proyecto:

npm run start

🧠 Comandos Disponibles

🔹 Consultar todos los productos

npm run start GET products

🔹 Consultar un producto por ID

npm run start GET products/15

🔹 Crear un nuevo producto

npm run start POST products "Camiseta Azul" 250 "remeras"

🔹 Eliminar un producto

npm run start DELETE products/7

🧩 Tecnologías Utilizadas

Node.js

ESModules

node-fetch

FakeStore API

👨‍💻 Autor

Cristian Miranda📍 Argentina🔗 GitHub

📄 Licencia

Proyecto bajo licencia ISC, libre para uso educativo y profesional.

💬 “Desarrollado como parte del desafío técnico de TechLab — demostrando dominio de asincronismo, APIs y Node.js.”
