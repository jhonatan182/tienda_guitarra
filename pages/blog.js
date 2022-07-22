import Layout from "../components/Layout";
import Entrada from "../components/Entrada";
import styles from '../styles/Blog.module.css';

/* extraendo nuestro props de la funcion getServerSideProps */

const Blog = ({entradas}) => {

  return (
      <div>
          <Layout
            pagina='Blog'
          >
            <main className="contenedor">
              <h2 className="heading">Blog</h2>

              <div className={styles.blog}>
                { entradas.map(entrada => (
                  <Entrada 
                    entrada = {entrada}
                    key={entrada.id}
                  />
                )) }

              </div>
            </main>
        

          </Layout>

      </div>

  )
}

export async function getServerSideProps() {

  const url = `${process.env.API_URL}/blogs`;
  const respuesta = await fetch(url);
  const entradas = await respuesta.json();

  /* esto se pasa como props al componente principal */
  return {
    props : {
      entradas
    }
  }

}


export default Blog;