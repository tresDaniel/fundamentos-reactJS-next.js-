import Layout from "../components/Layout"

export default function Jsx(){
    const titulo = <h1>JSX é um conceito central</h1>

    function Subtitulo() {
        return <h2>{"muito legal".toUpperCase()}</h2>
    }
    return (
        <Layout titulo="Entendendo o JSX">
        <div>
            {titulo}
            {Subtitulo()}
            <p>
                {JSON.stringify({nome: 'João', idade: 30})}
            </p>
        </div>
        </Layout>
    )
}