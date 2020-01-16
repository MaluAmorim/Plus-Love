import React from 'react';

const Descricao = () =>{
	return (

		<div className="descricao" >
			<div className="container-fluid">
			  	<div className="row justify-content-around">
				  	<div className="col-md-5 desc">
				  		<p>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, 
				  		e vem sendo utilizado desde o século XVI, 
				  		quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. 
				  		Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, 
				  		permanecendo essencialmente inalterado.</p>
					</div>
					<div className="col-md-5">
						<br />
						<label><b>Segmento:</b></label>
						<select className="form-control" name="" id="">
							<option value="">Churrascaria</option>
							<option value="">Bar</option>
							<option value="">Restaurante</option>
							<option value="">Balada</option>
							<option value="">Praia</option>
						</select>
					  	<div className="row justify-content-around">
						  	<div className="col-md-12 seg">
							<br />
							<label><b>Contatos:</b></label><br />
							<label><b>Tel: </b>1234-5678 </label><br />
							 <label><b>Email: </b>contato@contato.com</label><br />
							 <label><b>Site: </b> siteestabelecimento.com.br </label><br />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
export default Descricao

