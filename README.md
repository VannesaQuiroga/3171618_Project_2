#  Agencia de Turismo - Gestión de Paquetes Turísticos

Aplicación web desarrollada con **React, TypeScript y Vite** que permite gestionar paquetes turísticos mediante operaciones básicas de **crear, visualizar, actualizar y eliminar**.

El sistema está diseñado para administrar paquetes de viaje mostrando información como destino, precio, duración y disponibilidad.

---

#  Descripción del Proyecto

Esta aplicación permite a los usuarios gestionar paquetes turísticos de forma sencilla.
Se pueden registrar nuevos viajes, visualizar los existentes en tarjetas, editar su información o eliminarlos.

La aplicación implementa operaciones CRUD básicas utilizando **componentes funcionales de React y manejo de estado con Hooks**.

---

#  Tecnologías Utilizadas

* **React**
* **TypeScript**
* **Vite**
* **CSS**
* **React Hooks (useState, useEffect)**

---

#  Estructura del Proyecto

```
src
│
├── components
│   ├── Header.tsx
│   ├── ItemCard.tsx
│   ├── ItemForm.tsx
│   └── ItemList.tsx
│
├── styles
│   └── App.css
│
├── types
│
├── App.tsx
├── main.tsx
│
index.html
package.json
tsconfig.json
vite.config.ts
README.md
```

---

#  Funcionalidades

## 1️ Visualizar Paquetes Turísticos

* Se muestran todos los paquetes registrados.
* Cada paquete se presenta en una tarjeta.
* Se muestran propiedades como:

  * Título del viaje
  * Destino
  * Precio
  * Duración en días
  * Estado de disponibilidad.

## 2️ Agregar Paquetes Turísticos

El sistema permite agregar nuevos paquetes mediante un formulario que incluye:

* Título
* Destino
* Precio
* Duración del viaje
* Disponibilidad

Incluye validación básica de campos obligatorios.

Después de agregar un paquete, el formulario se limpia automáticamente.

## 3️ Eliminar Paquetes

Cada tarjeta incluye un botón **Eliminar** que permite remover el paquete de la lista inmediatamente.

## 4️ Editar Paquetes

Los paquetes existentes pueden modificarse mediante el botón **Editar**.

Cuando se selecciona editar:

* El formulario se llena automáticamente con la información actual del paquete.
* Se pueden modificar sus datos y actualizar la información.

---

#  Instalación y Ejecución

Para ejecutar el proyecto en tu máquina local:

### 1️ Clonar el repositorio

```
git clone <url-del-repositorio>
```

### 2️ Instalar dependencias

Si usas **pnpm**

```
pnpm install
```

Si usas **npm**

```
npm install
```

### 3️ Ejecutar el servidor de desarrollo

```
pnpm run dev
```

o

```
npm run dev
```

### 4️ Abrir en el navegador

```
http://localhost:5173
```

---

#  Componentes del Proyecto

### Header

Muestra el título de la aplicación y una breve descripción.

### ItemForm

Formulario utilizado para:

* Crear paquetes turísticos
* Editar paquetes existentes

### ItemList

Se encarga de mostrar todos los paquetes registrados.

### ItemCard

Representa cada paquete turístico en forma de tarjeta con su información y botones de acción.

---

#  Objetivo del Proyecto

El objetivo de este proyecto es aplicar conceptos fundamentales de desarrollo frontend utilizando:

* Componentes en React
* Manejo de estado con Hooks
* Tipado con TypeScript
* Organización modular del código
* Implementación de operaciones CRUD

---

#  Autor
Eliana Vannesa Cortes Quiroga

