import React from "react";
import { URL } from "./URL";
import { Link } from "react-router-dom";
class FormRegister extends React.Component  {

	state = {
		form: {
			"nombre": "",
			"apellido": "",
			"correo": "",
			"contra": ""

		}
	}
	handlerSubmit = e => {
		e.preventDefault();
	}
	handlerChange = async e => {
		await this.setState({
			form: {
				...this.state.form,
				[e.target.name]: e.target.value
			}
		})

	}
	handlerButton = () => {


	}

	render() {
		return (
				<div className="container text-center">

					<section className="fixed-bottom container text-center">
				<div className="card  rounded-3 container col-8">
							<div className="omb_login">
								<div className="card-header bg-warning">
									<h3 className="fw-bold text-center">Registro de Usuario</h3>
								</div>
					<div className="card-body">
						<div className="row omb_row-sm-offset-3">
							<div className="col-xs-12 col-sm-6">
								<form onSubmit={this.handlerSubmit} className="omb_loginForm" action="" autocomplete="off" method="POST">
									
									<div className="input-group">
										<span className="input-group-addon"><i className="fa fa-lock" for="nombre"></i></span>
										<input type="text" className="form-control" id="nombre" name="nombre" placeholder="Nombre" onChange={this.handlerChange} />
									</div>
									<br />
									<div className="input-group">
										<span className="input-group-addon"><i className="fa fa-lock" for="apellido"></i></span>
										<input type="text" className="form-control" id="apellido" name="apellido" placeholder="Apellido" onChange={this.handlerChange} />
									</div>
									<br />
									<div className="input-group">
										<span className="input-group-addon"><i className="fa fa-lock" for="correo"></i></span>
										<input type="text" className="form-control" id="correo" name="correo" placeholder="Correo Electronico" onChange={this.handlerChange} />
									</div>
									<br />
									<div className="input-group">
										<span className="input-group-addon"><i className="fa fa-lock" for="contra"></i></span>
												<input type="text" className="form-control" id="contra" name="contra" placeholder="Contrase&ntilde;a" onChange={this.handlerChange} />
									</div>

									<br />




								</form>

							</div>
							<div class="d-grid gap-2 col-6 mx-auto">
								<br />
								<button class="btn btn-dark btn-outline-warning" onClick={this.handlerButton} type="submit">Registrarme</button>

							</div>

						</div>

							<div className="text-center">
								<p>
									<a href="/form">Ya tengo una cuenta</a>
								</p>
							</div>
									</div>
								</div>
					</div>
						
					</section>

				</div>
			
		)
	}

}

export default FormRegister