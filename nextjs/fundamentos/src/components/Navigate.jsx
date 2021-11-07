import Link from 'next/link'
import styles from '../styles/Navigate.module.css'

export default function Navigate(props) {
    return (
        <Link href={props.destino} passHref>
            <div className={styles.navigate} style={{
                backgroundColor: props.cor ?? 'dodgerblue'
            }}>
                {props.texto}
            </div>
                
        </Link>
    )    
}