import { useState } from 'react';

import styles from './index.module.css';

export default function Atividade02() {
<command />
  const [num, setNum] = useState(10);

  return (
    <div className={styles.container}>
      <div className={styles.containerHorizontal}>

        <label
          className={styles.botao}
          onClick={() => setNum(num - 1)}
        >-1</label>

        <label className={styles.texto}>
          Contador {num}
        </label>

        <label
          className={styles.botao}
          onClick={() => setNum(num + 1)}
        >+1</label>

      </div>

      <label
        className={styles.botao}
        onClick={() => setNum(0)}
      >Zerar</label>

    </div>
  );
}