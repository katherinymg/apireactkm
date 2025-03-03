import { Link } from 'react-router-dom'
import notFoundImage from '../img/error404.jpg'

const NotFound = () => {
  return (
    <main className='container text-center mt-5'>
      <h2 className='mt-4 text-danger'>¡UPS! La página que buscas no ha sido encontrada.</h2>
      <p className="text-muted">La ruta que intentas consultar no existe.</p>
      <div className='d-flex flex-column align-items-center p-3'>
        <img src={notFoundImage} alt='Pagina notfound' className='img-fluid w-25' />      
        <Link to='/' className='btn btn-primary mt-3'>
          Volver al inicio
        </Link>
      </div>


    </main>

  );
};
export default NotFound;