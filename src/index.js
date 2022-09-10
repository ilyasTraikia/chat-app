import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import './style/index.css';
import App from './main/App';
import {Home,Messages,Notifications,Settings,Login,Register} from './routes/index'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
     <Routes>
      <Route path="/" element={<App />}>
        <Route index element={ <Home /> }/>
        <Route path="home" element={<Home />} />
        <Route path="messages" element={<Messages />} />
        <Route path="notifications" element={<Notifications/>} />
        <Route path="settings" element={<Settings />} />
        <Route
         path="*"
         element={
          <main style={{ padding: "1rem" }}>
           <p>There's nothing here!</p>
          </main>
          
      }
    />
      </Route>
      <Route path="/login" element = {<Login />} />
      <Route path="/register" element = {<Register />} />
    </Routes>
  </BrowserRouter>
);

