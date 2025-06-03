# 📦 My Portfolio - React + Vite + Bootstrap 5

A modern, scalable React.js portfolio starter built with Vite, Bootstrap 5, and React Router DOM.

---

## 🚀 Features

- ⚡ Fast development using [Vite](https://vitejs.dev/)
- 🎨 Styling with [Bootstrap 5](https://getbootstrap.com/)
- 🌐 Page navigation with [React Router](https://reactrouter.com/)
- 🧱 Modular file structure for scalability
- 🧠 Easy to extend with services, store, and more

---

## 📁 Project Structure

```bash
src/
├── assets/             # Images, icons, etc.
├── components/         # Reusable UI components (Header, Footer)
├── layouts/            # Shared layout wrappers
├── pages/              # Individual route pages (Home, About, Contact)
├── router/             # React Router setup
├── services/           # API and data layer (optional)
├── store/              # State management (optional)
├── hooks/              # Custom React hooks
├── utils/              # Utility functions
├── styles/             # Global styles (Bootstrap import)
├── App.jsx             # Optional wrapper component
└── main.jsx            # Application entry point
```

---

## 📦 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/rubankumarsankar/Setup-Bootstrap-5.git
cd Setup-Bootstrap-5

```

### 2. Install Dependencies

```bash
npm install

npm install path

npm install react-router-dom

npm install bootstrap

npm install react-bootstrap bootstrap



```

### 3. Run the Development Server

```bash
npm run dev

```

##  Dependencies

Package	             Purpose
react	             UI library
react-dom	         DOM rendering
react-router-dom	 Routing and navigation
bootstrap	         CSS framework
vite	             Build tool


## How to Add New Pages

### 1 Create a new file in src/pages/ (e.g. Portfolio.jsx)

### 2 Add a route inside src/router/index.jsx:

```bash

{ path: 'portfolio', element: <Portfolio /> }

```

### 2 Custom Styling

## Bootstrap is included via:

```bash
@import "bootstrap/dist/css/bootstrap.min.css";
```

in src/index.css.

You can add custom CSS or override Bootstrap styles there.


### 3 Add a link in the Header.jsx navigation.

### Building for Production

```bash
npm run build

```

# Then, preview the production build:

```bash
npm run preview

```


### 📄 License

Ruby Tech © [Rubankumar Sankar]

