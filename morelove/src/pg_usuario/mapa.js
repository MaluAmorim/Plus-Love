import React from 'react';
import '../App.css';
import NavBar from '../pg_home/NavBar'
import Botao from './botoes'
import TituloM from './tituloM'
import Footer from '../pg_home/footer'
import Busca from '../pg_usuario/busca'



function Usuario() {
        return(
            <div>
                <NavBar />
                <Botao />
                <TituloM />
                <Busca />
                <Footer />
            </div>
        );
}

export default Usuario