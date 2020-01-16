import React from 'react';
import {Link} from 'react-router-dom';

const Botao = () =>{
	return (
			<div className="botao">
				<div className="container-fluid">
					<div className="row justify-content-center perfil_E">
						<div className="col-md-3">
							<Link to='/usuario'>
							   <button>
								   <a href="#teste">
								        Configuração de Conta
								    </a>
							    </button>
						  	</Link>
						</div>

						<div className="col-md-3">
							<Link to='/mapa'>
							   <button>
								   <a href="#teste">
								        No Mapa
								    </a>
							    </button>
						  	</Link>
						</div>

						<div className="col-md-3">
							<button>Avaliações</button>
						</div>
					</div>
				</div>
			</div>
			)
}
export default Botao