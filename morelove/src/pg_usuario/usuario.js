import React from 'react';
import '../App.css';
import NavBar from '../pg_home/NavBar'
import Botao from './botoes'
import TituloU from './tituloU'
import Conta from './conta'
import Footer from '../pg_home/footer'


function Usuario() {
        return(
            <div>
                <NavBar />
                <Botao />
                <TituloU />
                <Conta />
                <Footer />
            </div>
        );
}

export default Usuario