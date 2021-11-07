import Header from "../components/Header";
import Layout from "../components/Layout";

export default function Exemplo(){
    return (
        <Layout titulo="Usando Componentes">
            <Header titulo="Next.js & React" />
            <Header titulo="Aprende Next na prática" />
        </Layout>
    );
}