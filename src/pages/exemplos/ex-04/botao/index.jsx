import styles from './index.module.css';

<<<<<<< HEAD
function Botao({ texto, aoClicar, acao }) {
    return (
        <button
            className={`${styles.botao} ${acao === '+' ? styles.mais : styles.menos}`}
=======
function Botao({ texto, tipo, aoClicar }) {
    return (
        <button
            className={`${styles.botao} ${styles[tipo]}`}
>>>>>>> 4fca654b883cc7c2cc162630240c2b27e426a4c4
            onClick={aoClicar}
        >
            {texto}
        </button>
    );
}

export default Botao;