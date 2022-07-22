import Layout from "../components/Layout";
import Image from 'next/image';
import styles from '../styles/Nosotros.module.css';

const Nosotros = () => {
  return (
      <div>
          <Layout
            pagina='Nosotros'
          > 
            <main className={'contenedor'}>
            <h2 className="heading">Nosotros</h2>

              <div className={styles.contenido}>
                
                <Image layout="responsive" src='/img/nosotros.jpg' width={600} height={450} alt='imagen sonbre nosotros' />

                <div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh urna, ullamcorper vitae magna a, sagittis vestibulum ipsum. Cras quis dictum nibh. Ut ex erat, ultrices et pulvinar non, sodales sit amet turpis. Phasellus non diam sit amet diam rhoncus convallis.
                  </p>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh urna, ullamcorper vitae magna a, sagittis vestibulum ipsum. Cras quis dictum nibh. Ut ex erat, ultrices et pulvinar non, sodales sit amet turpis. Phasellus non diam 
                    </p>
                </div>


              </div>
            </main>
          </Layout>

      </div>

  )
}

export default Nosotros;