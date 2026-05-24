import Column from './Column';
import styles from './KanbanBoard.css';

const COLUNAS = ['Tenho em Casa', 'Pouco Estoque', 'Preciso Comprar', 'Comprado'];

export default function KanbanBoard({ produtos, onEditar, onExcluir, onAdicionar }) {
  return (
    <div className={styles.board}>
      {COLUNAS.map(status => (
        <Column
          key={status}
          status={status}
          produtos={produtos}
          onEditar={onEditar}
          onExcluir={onExcluir}
          onAdicionar={() => onAdicionar(status)}
        />
      ))}
    </div>
  );
}