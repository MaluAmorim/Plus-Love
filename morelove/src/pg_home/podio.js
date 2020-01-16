import React from 'react';
import fundo from '../img/Fundo-azul.jpg';
import podio1 from '../img/podio1.png';
import podio2 from '../img/podio2.png';
import podio3 from '../img/podio3.png';
import img1 from '../img/churrascaria.jpg';
import img2 from '../img/balada.jpg';
import img3 from '../img/cinema.png';
import img4 from '../img/praia.jpg';
import img5 from '../img/restaurante.jpg';

var fundo_podio = {
	backgroundImage: "url(" +fundo+ ")"
}

const Podio = () =>{
	return (
			<div className="podio"  id="podio" style={fundo_podio}>
			    <div className="container">
			        <div className="row">
			            <div className="col-md-12 text-center">
			                <h2>Melhores Estabelecimentos Avaliados</h2>
			               
				                <div className="row justify-content-around">
				                    <div className="col-md-3 align-self-center img_p">
				                    	<div className="img_trofeu">
			                     			<img src={podio2} alt="Imagem1"/>
				                    	</div>
				                     		<img src={img1} alt="Imagem1"/>
				                    		<h4>Churrascarias</h4>
				                    </div>
				                    
				                    <div className="col-md-4 align-self-center img_1">
				                    	<div className="img_trofeu">
			                     			<img src={podio1} alt="Imagem1"/>
				                    	</div>
				                    	<div className="imgPrima">
				                     		<img src={img2} alt="Imagem1"/>
				                    		<h4>Balada</h4>
				                    	</div>
				                    </div>

				                    <div className="col-md-3 align-self-center img_p">
				                    	<div className="img_trofeu">
			                     			<img src={podio3} alt="Imagem1"/>
				                    	</div>
				                     		<img src={img3} alt="Imagem1"/>
				                    		<h4>Cinema</h4>
				                    </div>
			                    </div>

				                <div className="row justify-content-center">
				                    <div className="col-md-4 align-self-center apontar">
				                    		<div className="bola"></div>
				                    		<div className="bola2"></div>
				                    		<div className="bola1"></div>
			                    	</div>
			                    	<div className="col-md-4 align-self-center apontar">
				                    		<div className="bola"></div>
				                    		<div className="bola2"></div>
				                    		<div className="bola1"></div>
			                    	</div>
			                    	<div className="col-md-4 align-self-center apontar">
				                    		<div className="bola"></div>
				                    		<div className="bola2"></div>
				                    		<div className="bola1"></div>
			                    	</div>
			                    </div>
			                    

				                <div className="row justify-content-center linha1">
				                    <div className="col-md-2 align-self-center img_f">
			                     		<img src={img1} alt="Imagem1"/>
				                    </div>
				                    <div className="col-md-2 align-self-center img_f">
			                     		<img src={img2} alt="Imagem1"/>
				                    </div>
				                    <div className="col-md-2 align-self-center img_f">
			                     		<img src={img3} alt="Imagem1"/>
				                    </div>
				                    <div className="col-md-2 align-self-center img_f">
			                     		<img src={img4} alt="Imagem1"/>
				                    </div>
				                    <div className="col-md-2 align-self-center img_f">
			                     		<img src={img5} alt="Imagem1"/>
				                    </div>
				                    <div className="col-md-2 align-self-center img_f">
			                     		<img src={img1} alt="Imagem1"/>
				                    </div>
				                </div>

			            </div>
			        </div>
			    </div>
			</div>
	)
}


export default Podio

