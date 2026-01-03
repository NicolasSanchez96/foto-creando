Foto Creando

Portfolio fotográfico profesional – React + Bootstrap + Spring Boot

Foto Creando es una plataforma personal donde presento un trabajo fotográfico en diversas categorías: Books, Gastronomía, Personal, Eventos y Exposiciones.
El objetivo del proyecto es mostrar mis trabajos de forma estética, organizada y con una navegación intuitiva para el usuario

Este proyecto marca el inicio de mi recorrido en React, donde implementé rutas dinámicas, componentes reutilizables y un diseño visual estetico.

Tecnologías utilizadas

Frontend:
React
React Router
Bootstrap
CSS personalizado
Estructura modular por componentes

Backend (Próximamente)
Spring Boot
API REST para manejar datos dinámicos

Características principales

✔ Barra lateral fija con navegación vertical
✔ Secciones principales: Inicio, Books, Gastronomía, Personal, Eventos, Exposiciones, Contacto
✔ Álbumes dinámicos usando un único componente reutilizable
✔ Rutas personalizadas para cada álbum (/books/ema, /gastro/madre, etc.)
✔ Scroll horizontal en galerías
✔ Imágenes importadas y organizadas en carpetas por categoría
✔ Diseño adaptado al estilo artístico fotográfico

Estructura del proyecto
src/
 ├── components/
 │   └── Album/        # Componente que renderiza portadas y álbumes
 ├── pages/
 │   ├── Books/
 │   ├── Gastronomia/
 │   ├── Personal/
 │   ├── Eventos/
 │   ├── Exposiciones/
 │   └── Contacto/
 ├── imagenes/         # Todas las fotos separadas por categorías
 ├── App.js            # Rutas y navegación general
 └── index.js

Navegación
El proyecto utiliza React Router para manejar rutas como:
/books
/books/ema
/gastro/madre
/personal/mdq24
/eventos/kiara
etc.
Cada categoría reutiliza el componente <AlbumPage /> recibiendo un array de imágenes como prop.

Cómo ejecutar el proyecto
-Clonar el repositorio:git clone https://github.com/tu-usuario/foto-creando.git
-Instalar dependencias:npm install
-Ejecutarlo: npm start
-Abrir en el navegador:http://localhost:3000

Objetivo
Desarrollar un portfolio fotográfico profesional que pueda escalar a futuro integrando un backend con base de datos y panel de administración.

Autor:
Nicolás Sanchez
Desarrollador Web
🔗 LinkedIn: https://www.linkedin.com/in/nicolas-sanchez-6621321ba/

📄 Licencia
Este proyecto se publicó únicamente con fines educativos y de portfolio.
