import styles from './index.module.css';

function Atividade01() {
  return (
    <div className={styles.container}>
      <h1 className={styles.titulo}>Atividade 1</h1>
      <p className={styles.texto}>
        Conteúdo mínimo para componente React
      </p>
    </div>
  );
}

export default Atividade01;