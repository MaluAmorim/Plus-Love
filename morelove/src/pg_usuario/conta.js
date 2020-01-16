import React from 'react';
import Perfil from '../img/perfil.png'

const Conta = () =>{
	return (
			<div className="conta">
				<div className="container">
					<div className="row foto_conta justify-content-center">
						<div className="col-md-5">
							<img src={Perfil} alt="Imagem1" />
						</div>
					</div>

					<div className="row foto_conta">
						<div className="col-md-6">
							<label><b>Nome</b></label>
							<input className="form-control" type="text" placeholder="Nome" />
							<br />
						</div>
						<div className="col-md-6">
							<label><b>Sobrenome</b></label>
							<input className="form-control" type="text" placeholder="Sobrenome" />
							<br />
						</div>
						<div className="col-md-6">
							<label><b>Data de Nascimento</b></label>
							<input className="form-control" type="text" placeholder="Data de Nascimento" />
							<br />
						</div>
						<div className="col-md-6">
							<label><b>E-mail</b></label>
							<input className="form-control" type="text" placeholder="E-mail" />
							<br />
						</div>
						<div className="col-md-6">
							<label><b>Senha</b></label>
							<input className="form-control" type="text" placeholder="Senha" /><label> Redefinir Senha</label>
							<br />
						</div>
						<div className="col-md-6">
							<label><b>Sexualidade</b></label>
							<input className="form-control" type="text" placeholder="Sexualidade" />
							<br />
						</div>
						<div className="col-md-12 ">
							<button className="btn btn success " type="button">Salvar</button>
							<br />
						</div>
					</div>

				</div>
			</div>
			)
}
export default Conta
