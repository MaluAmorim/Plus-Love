import React from 'react';
import Perfil from '../img/perfil.png'
import {Link} from 'react-router-dom'

const Footer = () =>{
	return (
			<div className="rodape" id="cont">
				<div className="container">
					<div className="row">
						<div className="col-md-4 menu">
							<h3>Menu</h3>
							<ul className="navbar-nav">
					             <li className="nav-item dropdown">
							          <a className="nav-link" href="#chamada">Inicio</a>
							      </li>
							      <li className="nav-item dropdown">
							          <a className="nav-link" href="#cadastrar">Cadastro</a>
							      </li>
							      <li className="nav-item dropdown">
							          <a className="nav-link" href="#podio">Pódio</a>
							      </li>
							      <li className="nav-item">
							          <a className="nav-link" href="#quem">Quem Somos</a>
							      </li>
							      <li className="nav-item">
							          <a className="nav-link" href="#parceria">Parceiros</a>
							      </li>
							      <li className="nav-item">
							          <a className="nav-link" href="#cont">Contato</a>
							      </li>
							      <li className="nav-item dropdown">
							          <a className="nav-link dropdown-toggle" href="#teste" id="navbardrop" data-toggle="dropdown">
								        <img src={Perfil} className="d-inline-block" alt="Imagem1" />
							          </a>
							          <div className="dropdown-menu">
							              <Link to='/usuario'>
											  <button type="button" className="btn btn-success">
													Usuário
											  </button>
										  </Link>
							              <Link to='/perfil_e'>
											  <button type="button" className="btn btn-success">
													Estabelecimento
											  </button>
										  </Link>
							          </div>
							      </li>
					        </ul>
						</div>
						
						<div className="col-md-4 contatos">
							<h3>Contato</h3>
							<h5>TEL: (11) 1234-5678</h5>
							<h5>CEL: (11) 91234-5678</h5>
							<h5>E-mail: pluslove@pluslove.com.br</h5>
							<h5>E-mail: pluslove@pluslove.com.br</h5>
						</div>

						<div className="col-md-4 formulario">
							<h3>Envie suas dicas</h3>
					        <form>
					            <input className="form-control" type="text" name="username" placeholder="Nome" />
					            <input className="form-control" type="text" name="username" placeholder="E-mail" />
					            <textarea className="form-control" name="message" rows="5" cols="30" placeholder="Digite sua Mensagem"></textarea>
					        	<input type="submit" className="btn btn-primary botao_enviar" value="Enviar" />
					        </form>
						</div>
					</div>
				</div>
			</div>
	)
}


export default Footer