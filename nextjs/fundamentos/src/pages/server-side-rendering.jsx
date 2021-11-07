import Layout from "../components/Layout";

export async function getServerSideProps(){
    return {
        props: {
            numero: Math.random()
        }
    }
}

export default function Dinamico(props){
    return (
        <Layout titulo="Conteúdo Gerado Dinamicamente">
            <div>{props.numero}</div>
        </Layout>
    )
}