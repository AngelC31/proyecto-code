import '../styles/Landing.css'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <div>
      <img width="100%" height='100%' src='https://firebasestorage.googleapis.com/v0/b/ghostgym-f8921.appspot.com/o/pexels-photo-1954524.webp?alt=media&token=0bb61692-7eab-49b7-b05b-652bd6dd9973' />

      <section className="bg-dark text-center">
        <h2 class=" mb-6 fz-28 title-gotham-black">
          <span class="text-white ">ELIGE UNA SUSCRIPCION</span>
        </h2>

        <div>
          <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
            <div class="col">
              <div class="card mb-4 rounded-3 shadow-sm">
                <div class="card-header py-3 bg-warning">
                  <h4 class="my-0 fw-bold ">BRONCE</h4>
                </div>
                <div class="card-body">
                  <h1 class="card-title pricing-card-title">$150<small class="text-muted fw-light"></small></h1>
                  <ul class="list-unstyled mt-3 mb-4">
                    <li><h3 className="fw-bold">Incluye:</h3></li>
                    <li>Duración de una semana</li>
                    <li>Acceso general</li>
                    <li>Instructor</li>
                  </ul>
                  <br/>
                  <Link to='/formr'><button type="button" class="w-100 btn btn-lg btn-dark btn-outline-warning">Suscribirme</button></Link>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card mb-4 rounded-3 shadow-sm">
                <div class="card-header py-3 bg-warning">
                  <h4 class="my-0 fw-bold">PLATA</h4>
                </div>
                <div class="card-body">
                  <h1 class="card-title pricing-card-title">$400</h1>
                  <ul class="list-unstyled mt-3 mb-4">
                    <li><h3 className="fw-bold">Incluye:</h3></li>
                    <li>Duración de un mes</li>
                    <li>Acceso general</li>
                    <li>Instructor particular</li>
                    <li>Programas de ejercicio</li>
                  </ul>
                  <button type="button" class="w-100 btn btn-lg btn-dark btn-outline-warning">Suscribirme</button>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card mb-4 rounded-3 shadow-sm border-primary">
                <div class="card-header py-3 bg-warning">
                  <h4 class="my-0 fw-bold">ORO</h4>
                </div>
                <div class="card-body">
                  <h1 class="card-title pricing-card-title">$500<small class="text-muted fw-light"></small></h1>
                  <ul class="list-unstyled mt-3 mb-4">
                    <li><h3 className="fw-bold">Incluye:</h3></li>
                    <li>Durcación de un mes y medio</li>
                    <li>Acceso general</li>
                    <li>Instructor particular</li>
                    <li>Programas de ejercicio</li>
                  </ul>
                  <button type="button" class="w-100 btn btn-lg btn-dark btn-outline-warning">Suscribirme</button>
                </div>
              </div>
            </div>
            
          </div>

        </div>
      </section>



    </div>

  )
}
export default Landing