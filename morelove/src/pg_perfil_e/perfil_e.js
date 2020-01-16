import React from 'react';
import '../App.css';
import NavBar from '../pg_home/NavBar'
import BotaoE from './botaoE'
import Titulo from './titulo'
import Galeria from './galeria_e'
import Descricao from './descricao'
import Localizacao from './localizacao'
import Footer from '../pg_home/footer'


function Perfil_E() {
    return(
        <div>
            <NavBar />
            <BotaoE />
            <Titulo />
            <Galeria />
            <Descricao />
            <Localizacao />
            <Footer />
        </div>
    )
}

export default Perfil_E