import React from 'react';
import '../App.css';
import NavBar from './NavBar';
import Chamada from './chamada';
import Galeria from './galeria_home';
import Cadastro from './cadastro';
import Podio from './podio';
import QuemSomos from './quem_somos';
import Parceiros from './parceiros';
import Footer from './footer';

const Home = () =>{
	return (
		<div>
	      <NavBar />
	      <Chamada />
	      <Galeria />
	      <Cadastro />
	      <Podio />
	      <QuemSomos />
	      <Parceiros />
	      <Footer />
	    </div>
	)
}


export default Home