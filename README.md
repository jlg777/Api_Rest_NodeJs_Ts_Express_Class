

<div> <p style="text-align:center"> <img align="center" src="./public/programador.png" alt="JuveYell" width="300px"> </p> </div> <h2 align="center" style="color:#CD5C5C">JLG'777' <img src="https://github.com/blackcater/blackcater/raw/main/images/Hi.gif" height="22" /></h2> <p align="center"> <a href="https://git.io/typing-svg"><img src="https://readme-typing-svg.demolab.com?font=Fira+Code&duration=4000&pause=1000&multiline=true&random=false&width=435&lines=Un+proyecto+creado+por+J0RG1T0" alt="Typing SVG" /></a> </p> <hr>

## 📧 Conéctate conmigo:

[![GMAIL](https://img.shields.io/badge/Gmail-Gmail?style=white&logo=Gmail&logoColor=white&color=%23EA4335)](proyectojlg777@gmail.com)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-LinkedIn?style=white&logo=LinkedIn&logoColor=white&color=%230A66C2)](https://linkedin.com/in/)
[![Discord](https://img.shields.io/badge/Discord-Discord?style=white&logo=Discord&logoColor=white&color=%235865F2)](jorgeg777#9720)

## 🎫 API de Gestión de Posteos

_Este proyecto es una API desarrollada con **Node.js**, **TypeScript** y **Express**. Permite gestionar posteos (entradas de blog, publicaciones) almacenados en una base de datos MySQL. La API permite operaciones CRUD sobre los posteos._

## 🪢 Características

- **Operaciones CRUD**:

  - Crear un nuevo posteo
  - Obtener todos los posteos o por ID
  - Actualizar un posteo por ID
  - Eliminar un posteo por ID

- **Base de datos MySQL**:
  La información de los posteos se almacena en una base de datos MySQL.

## 🚀 Comenzando

_Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas._

### Requisitos previos

- Tener **Node.js** y **npm** instalados. Si no los tienes, puedes descargarlos [aquí](https://nodejs.org/)
- Tener MySQL instalado y configurado en tu máquina local o usar una base de datos remota.

## 🔧 Instalación

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/minimal)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/minimal)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/minimal/devcontainer.json)

#### 🧍‍♂️🧍‍♂️ Clonar el repositorio

```bash
git clone https://github.com/jlg777/04_api_rest_nodejs_ts_express.git
```

#### 🚢 Navegar al directorio del proyecto

```bash
Copiar
cd 04_api_rest_nodejs_ts_express
```

#### 🚨 Instalar dependencias

```bash
npm install
```

#### 🛠️ Configuración de la base de datos

Asegúrate de tener una base de datos MySQL llamada posteos y una tabla posts configurada con al menos los siguientes campos:

```sql
Copiar
CREATE TABLE posts (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255),
  content TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

#### 💽 Configuración de las variables de entorno

# Crear un archivo .env en la raíz del proyecto con las siguientes variables:
```bash
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=root
DB_NAME=posteos
PORT=3000
```

#### 🪂 Iniciar la aplicación

Para el desarrollo:
```arduino
Copiar
npm run dev
Esto iniciará el servidor en http://localhost:3000.
```

Para producción:
```arduino
Copiar
npm run build
npm run start
```

#### 🚀 Estructura del proyecto

Dentro de tu proyecto verás las siguientes carpetas y archivos:

```text
Copiar
/
├── public/
├── src/
│   └── controllers/
│   └── routes/
│   └── db/
│   └── app.ts
│   └── index.ts
└── package.json
```

- Descripción de las carpetas
  - public/: Contiene archivos estáticos como imágenes.
  - src/controllers/: Aquí se encuentran los controladores que gestionan la lógica de los endpoints.
  - src/routes/: Contiene las rutas de la API.
  - src/db/: Contiene la configuración y conexión a la base de datos MySQL.
  - src/app.ts: Configuración de la aplicación Express.

## 🧞 Comandos

Todos los comandos se ejecutan desde la raíz del proyecto, desde una terminal:

| Command         | Action                                       |
| :-------------- | :------------------------------------------- |
| `npm install`   | Installs dependencies                        |
| `npm run dev`   | Starts local dev server at `localhost:3000`  |
| `npm run build` | Build your production site to `./dist/`      |
| `npm run start` | Preview your build locally, before deploying |

## 🚧 Uso

Una vez que el servidor esté en ejecución, puedes interactuar con la API a través de las siguientes rutas:

Rutas disponibles:

- GET /: Devuelve un mensaje simple: "Bienvenido a la API de Posteos!".

- GET /api/posteos: Devuelve todos los posteos en formato JSON.

- GET /api/posteos/:id: Devuelve el posteo correspondiente al ID proporcionado.

- POST /api/posteos: Crea un nuevo posteo. Los datos deben incluir:

  -title: Título del posteo
  -content: Contenido del posteo

-PUT /api/posteos/:id: Actualiza el posteo con el ID proporcionado. Debes enviar los mismos parámetros que en el POST.

- DELETE /api/posteos/:id: Elimina el posteo con el ID proporcionado.

## 🛠️ Construido con

**Node.js**: Entorno de ejecución de JavaScript.
**Express**: Framework web utilizado para construir la API RESTful.
**TypeScript**: Tipado de datos.
**MySQL2**: Paquete para interactuar con la base de datos MySQL.
**Morgan**: Middleware para logging HTTP.

## ✒️ Autores

**Jorge Grandía** - _Trabajo Inicial_ - [JLG777](https://github.com/jlg777)
- **Jorge Grandía** - _Documentación_ - [JLG777](#jlg777)

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - mira el archivo LICENSE.md para detalles

## 🎁 Expresiones de Gratitud

- Comenta a otros sobre este proyecto 📢
- Invita una cerveza 🍺 o un café ☕ a alguien del equipo.
- Da las gracias públicamente 🤓.
- Dona con cripto a esta dirección:
    * (btc) 16ApGFxMXfF8ktysSkmLBzLEJPHubtwKjp
    * (btc-SegWit) bc1q0v8fvv3gvga02h9xspcg7npghjfyny20lavc37
    * (Ethereum) 0x1ee2842c194c95bc54473c6b27d602fc0bfc81a9
---
⌨️ con ❤️ por JLG777 😊

_Copyright (c) [2025] [jlg777]_
