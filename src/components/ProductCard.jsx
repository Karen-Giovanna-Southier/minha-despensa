import { formatarPreco, formatarData, PRIORIDADE_CONFIG } from '../utils/dados';
import styles from './ProductCard.css';

export default function ProductCard({ produto, onEditar, onExcluir }) {
  const prioridade = PRIORIDADE_CONFIG[produto.prioridade];

  return (
    <div className={styles.card}>
      <div className={styles.cardTop}>
        <div className={styles.cardHeader}>
          <span className={styles.nome}>{produto.nome}</span>
          {prioridade && (
            <span
              className={styles.badge}
              style={{ color: prioridade.color, background: prioridade.bg }}
            >
              {prioridade.label}
            </span>
          )}
        </div>
        <p className={styles.info}>
          {produto.quantidade} {produto.unidade} · {produto.categoria}
        </p>
      </div>

      <div className={styles.preco}>{formatarPreco(produto.preco)}</div>

      {produto.mercado && (
        <div className={styles.mercado}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
            <polyline points="9 22 9 12 15 12 15 22"/>
          </svg>
          {produto.mercado}
        </div>
      )}

      {produto.tags && produto.tags.length > 0 && (
        <div className={styles.tags}>
          {produto.tags.map(tag => (
            <span key={tag} className={styles.tag}>🏷 {tag}</span>
          ))}
        </div>
      )}

      {produto.observacoes && (
        <p className={styles.obs}>{produto.observacoes}</p>
      )}

      <div className={styles.cardFooter}>
        <span className={styles.data}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
            <line x1="16" y1="2" x2="16" y2="6"/>
            <line x1="8" y1="2" x2="8" y2="6"/>
            <line x1="3" y1="10" x2="21" y2="10"/>
          </svg>
          {formatarData(produto.data)}
        </span>
        <div className={styles.acoes}>
          <button className={styles.btnAcao} onClick={() => onEditar(produto)} title="Editar">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
            </svg>
          </button>
          <button className={`${styles.btnAcao} ${styles.btnExcluir}`} onClick={() => onExcluir(produto.id)} title="Excluir">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="3 6 5 6 21 6"/>
              <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/>
              <path d="M10 11v6M14 11v6"/>
              <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}