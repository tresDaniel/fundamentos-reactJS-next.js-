export default function Header(props){
    //props é somente leitura
    return (
        <header>
            <h1>{props.titulo}</h1>
        </header>
    );
}