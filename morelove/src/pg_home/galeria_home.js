import React from 'react';
import img1 from '../img/churrascaria.jpg';
import img2 from '../img/balada.jpg';
import img3 from '../img/cinema.png';
import img4 from '../img/praia.jpg';
import img5 from '../img/restaurante.jpg';


const Galeria = () =>{
	return (
		<div className="galeria">
		    <div className="container">
				<div id="galeria">
		        <div className="row justify-content-center titulo_galeria">
		        	<h4>Estabelecimentos disponiveis para avaliação!</h4>
	            </div>
		        <div className="row justify-content-center">
					<div className="col-md-2 align-self-center img_f">
		         		<img src={img1} alt="Imagem1"/>
		            </div>
		            <div className="col-md-2 align-self-center img_f">
		         		<img src={img2} alt="Imagem1"/>
		            </div>
		            <div className="col-md-3 align-self-center img_f">
		         		<img src={img3} alt="Imagem1"/>
		            </div>
		            <div className="col-md-2 align-self-center img_f">
		         		<img src={img4} alt="Imagem1"/>
		            </div>
		            <div className="col-md-2 align-self-center img_f">
		         		<img src={img5} alt="Imagem1"/>
		            </div>
				</div>
				</div>
			</div>
		</div>
	)
}


export default Galeria