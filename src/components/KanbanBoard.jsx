
import styles from '../components/KanbanBoard.module.css';
import { useState } from 'react';
import Column from './Column';

const COLUNAS = ['Tenho em Casa', 'Pouco Estoque', 'Preciso Comprar', 'Comprado'];

export default function KanbanBoard({ produtos, onEditar, onExcluir, onAdicionar, onMudarStatus }) {
  const [arrastando, setArrastando] = useState(null);
  const [colunaAlvo, setColunaAlvo] = useState(null);

  function handleDragStart(produto) {
    setArrastando(produto);
  }

  function handleDragOver(e, status) {
    e.preventDefault();
    setColunaAlvo(status);
  }

  function handleDrop(status) {
    if (arrastando && arrastando.status !== status) {
      onMudarStatus(arrastando.id, status);
    }
    setArrastando(null);
    setColunaAlvo(null);
  }

  function handleDragEnd() {
    setArrastando(null);
    setColunaAlvo(null);
  }

  return (
    <div className={styles.board}>
      {COLUNAS.map(status => (
        <Column
          key={status}
          status={status}
          produtos={produtos}
          onEditar={onEditar}
          onExcluir={onExcluir}
          onAdicionar={() => onAdicionar(null)}
          onDragOver={(e) => handleDragOver(e, status)}
          onDrop={() => handleDrop(status)}
          isDragOver={colunaAlvo === status}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
        />
      ))}
    </div>
  );
}