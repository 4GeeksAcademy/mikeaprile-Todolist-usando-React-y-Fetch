import React from "react";          // Importar React en el paquete
import ReactDOM from "react-dom";   // Importar React-DOM en el paquete
import "../styles/index.css";       // Importar estilos de CSS en el paquete

//Importar tus componentes
import { Home } from "./component/Home.jsx";

//render your react application
ReactDOM.render(<Home />, document.querySelector("#app"));
