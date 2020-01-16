import React from 'react';
import {Link} from 'react-router-dom'


const BotaoE = () =>{
	return (

			<div className="botao">
				<div className="container-fluid">
					<div className="row perfil_E justify-content-center">
						<div className="col-md-3">
							<Link to='/perfil_e'>
							   <button>
								   <a href="#teste">
								        Perfil
								    </a>
							    </button>
							  </Link>
						</div>
						<div className="col-md-3">
							<button>Avaliação</button>
						</div>
						<div className="col-md-3">
							<button>Destaques</button>
						</div>
					</div>					
				</div>
			</div>
			)
}
export default BotaoE
