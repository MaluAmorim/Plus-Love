import React from 'react';

const Busca = () =>{
	return (

			<div className="filtro">
				<div className="container">
					<div className="row">
						<div className="col-md-3 coluna_filtro">
							<div className="row">
								<div className="col-md-12">
									<form className="example">
									  <input type="text" className="form-control" placeholder="Buscar..." name="search" />
									  <button type="submit" className="bta btn-success"><i className="fa fa-search"></i></button>
									</form>
								</div>
							</div>
							<h4>Filtre sua Busca</h4>
							<div className="row">
								<div className="col-md-12">
									<h5>Tipos de Estabelecimentos</h5>
									<form>
									  	<input type="radio" name="gender" /> Balada<br />
									  	<input type="radio" name="gender" /> Restaurante<br/>
								 	 	<input type="radio" name="gender" /> Cinema <br />  
									 	<input type="radio" name="gender" /> Churrascaria <br />  
									 	<input type="radio" name="gender" /> Praia <br />  
									 	<input type="radio" name="gender" /> Lanchonete <br />  
									</form>
								</div>
							</div>

							<div className="row">
								<div className="col-md-12">
									 <input type="radio" name="gender" value="other" />  Melhor Avaliado<br />
								</div>
							</div>
						</div>
						
						<div className="col-md-9 estaFiltrados">
							<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.9705939852984!2d-46.652966685022115!3d-23.569499584678855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c71dae6d5d%3A0xad3f19523186c1a3!2sAv.%20Brigadeiro%20Lu%C3%ADs%20Ant%C3%B4nio%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-PT!2sbr!4v1577729921733!5m2!1spt-PT!2sbr" allowfullscreen=""></iframe>
						</div>
					</div>
				</div>
			</div>

			)
}
export default Busca