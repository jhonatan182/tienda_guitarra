import Guitarra from "./Guitarra";
import style from '../styles/Listado.module.css';

const Listado = ({guitarras}) => {


  return (
      <div className={style.listado}>
        {guitarras.map(guitarra => (
            <Guitarra  
                key={guitarra.id} 
                guitarra={guitarra}
            />
        ))}
      </div>

  )
}

export default Listado;