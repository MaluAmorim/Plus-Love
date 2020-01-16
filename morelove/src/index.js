import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import App from './App';
import Perfil from './pg_perfil_e/perfil_e';
import Usuario from './pg_usuario/usuario';
import Mapa from './pg_usuario/mapa';


ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={App} />
            <Route exact path='/perfil_e' component={Perfil} />
            <Route exact path='/usuario' component={Usuario} />
            <Route exact path='/mapa' component={Mapa} />
        </Switch>
    </BrowserRouter>
, document.getElementById('root'));
 

