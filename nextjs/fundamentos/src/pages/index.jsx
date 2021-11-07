import Link from 'next/link'
import Navigate from '../components/Navigate'

export default function Home() {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            flexWrap: 'wrap'
        }}>
            <Navigate destino="/estiloso" texto="Estiloso"/>
            <Navigate destino="/exemplo" texto="Exemplo" cor="#9400D3"/>
            <Navigate destino="/jsx" texto="JSX" cor="crimson"/>
            <Navigate destino="/navegacao" texto="Navegação #01" cor="green" />
            <Navigate destino="/cliente/rn/123" texto="Navegação #02" cor="navy" />
            <Navigate destino="/estado" texto="Componente com Estado" cor="pink" />
            <Navigate destino="/integracao_1" texto="Integração com API #01" cor="#42a9a9" />
            <Navigate destino="/estatico" texto="Conteúdo Estático" cor="#fa054a" />
            <Navigate destino="/server-side-rendering" texto="Conteúdo Gerado Dinamicamente" cor="#ad1e54" />

        </div>
    )
}
