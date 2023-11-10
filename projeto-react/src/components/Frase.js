import styles from './frase.module.css';

function Frase() {
    return (
        <div clasName={styles.fraseContainer}>
            <p className={styles.fraseContent}>Este é um componente com uma frase!</p>
        </div>
    )
}

export default Frase