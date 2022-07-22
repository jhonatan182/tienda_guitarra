import Layout from "../components/Layout";
import Listado from "../components/Listado";

const Tienda = ({guitarras}) => {


  return (
      <div>
          <Layout
            pagina='Tienda Virtual'
          >
            <main className="contenedor">
              <h1 className="heading">Nuestra Coleccion</h1>  

              <Listado 
                guitarras ={guitarras}
              />
            
              
            </main>



          </Layout>

      </div>

  )
}
 
export async function getServerSideProps() {

  try {
    const url = `${process.env.API_URL}/guitarras`;

    const respuesta = await fetch(url);
    const guitarras = await respuesta.json();

    return {
      props: {
        guitarras
      }
    }

  } catch (error) {
    console.log(error)
  }


} 

export default Tienda;