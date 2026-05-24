import { STATUS_CONFIG } from '../utils/dados';
import ProductCard from './ProductCard';
import styles from './Column.css';

export default function Column({ status, produtos, onEditar, onExcluir, onAdicionar }) {
  const config = STATUS_CONFIG[status];
  const lista = produtos.filter(p => p.status === status);

  return (
    <div className={styles.column}>
      <div className={styles.columnHeader}>
        <div className={styles.columnTitle}>
          <span
            className={styles.dot}
            style={{ background: config.cor }}
          />
          <span className={styles.emoji}>{config.emoji}</span>
          <span className={styles.titulo}>{status}</span>
          <span className={styles.count}>{lista.length}</span>
        </div>
        <button
          className={styles.btnAdd}
          onClick={() => onAdicionar(status)}
          title={`Adicionar em ${status}`}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="M12 5v14M5 12h14"/>
          </svg>
        </button>
      </div>

      <div className={styles.cards}>
        {lista.length === 0 ? (
          <div className={styles.empty}>
            <span>Nenhum item aqui</span>
          </div>
        ) : (
          lista.map(produto => (
            <ProductCard
              key={produto.id}
              produto={produto}
              onEditar={onEditar}
              onExcluir={onExcluir}
            />
          ))
        )}
      </div>
    </div>
  );
}