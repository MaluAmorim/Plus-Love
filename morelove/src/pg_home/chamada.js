import React from 'react';
import celular from '../img/nosso_app.png'
import celular2 from '../img/nosso_app2.png'
import celular3 from '../img/nosso_app3.png'
import fundo from '../img/nosso_app_fundo.png'
import app1 from '../img/appstory.png'
import app2 from '../img/googleplay.png'

var fundo_app = {
	backgroundImage: "url(" +fundo+ ")"
}


const Chamada = () =>{
	return (
		<div>
			<div className="jumbotron" id="chamada" style={fundo_app}>
				<div className="chamada_app">
					<div className="container-fluid">
						<div className="row">
							<div className="col-md-6 banner">
								<div id="demo" className="carousel slide" data-ride="carousel">
									<ul className="carousel-indicators">
										<li data-target="#demo" data-slide-to="0" className="active"></li>
										<li data-target="#demo" data-slide-to="1"></li>
										<li data-target="#demo" data-slide-to="2"></li>
									</ul>
									<div className="carousel-inner">
										<div className="carousel-item active">
											<img src={celular} alt="Imagem1"/>
										</div>
										<div className="carousel-item">
											<img src={celular2} alt="Imagem1"/>
										</div>
										<div className="carousel-item">
											<img src={celular3} alt="Imagem1"/>
										</div>
									</div>
									<a className="carousel-control-prev" href="#demo" data-slide="prev">
										<span className="carousel-control-prev-icon"></span>
									</a>
									<a className="carousel-control-next" href="#demo" data-slide="next">
									<span className="carousel-control-next-icon"></span>
								</a>
								</div>
							</div>
							<div className="col-md-6 chama align-self-center">
								<div className="row">
									<div className="col-md-12">
										<h1>Se torne um avaliador LGBT+</h1>
										<h2>O Amor pode mudar o mundo</h2>
									</div>
								</div>
								<div className="row justify-content-center">
									<div className="col-md-12">
										Sua voz é muito importante, e pode transformar vidas. <br />
										Avalie Estabelecimentos (lugares e espaços).<br />
										Mostre sua opinião para as pessoas da comunidade.<br />
										Transforme lugares a partir de suas notas.<br />
										
										<button type="button" className="btn btn-primary" data-toggle="modal" data-target="#avaliador1">
											Quero ser avaliador
										</button>
										<div className="row google">
											<div className="col-md-6">
												<img src={app1} className="d-inline-block align-top" alt="Imagem1"/>
												<img src={app2} className="d-inline-block align-top" alt="Imagem1"/>
											</div>
											
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}


export default Chamada