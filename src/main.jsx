import React from 'react';
import ReactDOM from 'react-dom';
// import {HelloWorldApp} from "./HelloWorldApp.jsx";
import {MyFirstApp} from "./MyFirstApp.jsx";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MyFirstApp
      title="Eres el usuario 1"
      subtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias at consectetur consequuntur dicta dignissimos ea esse est exercitationem id iusto minima nemo nihil, odio, officia quibusdam reprehenderit tempora veniam voluptatum."
      operation={2}
    />
  </React.StrictMode>
);