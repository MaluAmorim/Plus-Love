import React from 'react';
import imgpar from '../img/parceiros.jpg';
import imgSlider1 from '../img/parceiro1.png';
import imgSlider2 from '../img/parceiros2.png';
import imgSlider3 from '../img/parceiros3.jpg';

const Parceiros = () =>{
	return (
		<div>
			<div className="parceiros" id="parceria">
				<div className="container">
					<h1>Parceiros</h1>
					<div className="row justify-content-center">
						<div className="col-md-6">
						<img src={imgpar} alt="Imagem1"/>
						</div>
						<div className="col-md-6  slide-parceiro">
							<div id="demo" className="carousel slide" data-ride="carousel">
								<ul className="carousel-indicators">
									<li data-target="#demo" data-slide-to="0" className="active"></li>
									<li data-target="#demo" data-slide-to="1"></li>
									<li data-target="#demo" data-slide-to="2"></li>
								</ul>
								<div className="carousel-inner">
									<div className="carousel-item active">
										<img src={imgSlider1} alt="Imagem1"/>
									</div>
									<div className="carousel-item">
										<img src={imgSlider2} alt="Imagem1"/>
									</div>
									<div className="carousel-item">
										<img src={imgSlider3} alt="Imagem1"/>
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
					</div>
				</div>
			</div>
		</div>
	)
}


export default Parceiros