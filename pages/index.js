import Layout from '../components/Layout';
import Listado from '../components/Listado';
import Curso from '../components/Curso';
import Entrada from '../components/Entrada';
import styles from '../styles/Blog.module.css';

export default function Home({guitarras , curso , entradas}) {

  return (

    <div  >
        <Layout 
          pagina='Inicio'
          guitarra ={guitarras[3]}
        > 
          <main className='contenedor'>
            <h1 className="heading">Nuestra Colección</h1>

            <Listado 
                guitarras ={guitarras}
              />     
          </main>

          <Curso 
            curso ={curso}
          />

          <section className='contenedor'>
            <h1 className='heading'>Nuestro Blog</h1>
            <div className={styles.blog}>
                { entradas.map(entrada => (
                  <Entrada 
                    entrada = {entrada}
                    key={entrada.id}
                  />
                )) }

              </div>
          </section>

        </Layout>

    </div>
  )

}

export async function getServerSideProps() {

  try {
    const urlGuitarras = `${process.env.API_URL}/guitarras`;
    const urlCursos = `${process.env.API_URL}/cursos`;
    const urlBlogs = `${process.env.API_URL}/blogs?_limit=3`;

    const [resGuitarras , resCursos , resBlog] = await Promise.all([
      fetch(urlGuitarras),
      fetch(urlCursos),
      fetch(urlBlogs),
    ])

    const [guitarras , curso , entradas] = await Promise.all([
      resGuitarras.json(),
      resCursos.json(),
      resBlog.json()
    ])
    

    return {
      props: {
        guitarras,
        curso,
        entradas
      }
    }

  } catch (error) {
    console.log(error)
  }


} 
