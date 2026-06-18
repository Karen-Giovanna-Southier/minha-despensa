import styles from '../components/Header.module.css';

export default function Header({ busca, setBusca, onAdicionar }) {
  return (
    <header className={styles.header}>
      <div className={styles.brand}>
        <div className={styles.logo}>🛒</div>
        <div>
          <h1 className={styles.title}>Minha Despensa</h1>
          <p className={styles.subtitle}>Organize suas compras e o que tem em casa</p>
        </div>
      </div>

      <div className={styles.actions}>
        <div className={styles.searchWrap}>
          <svg className={styles.searchIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
          </svg>
          <input
            className={styles.search}
            type="text"
            placeholder="Buscar produto..."
            value={busca}
            onChange={e => setBusca(e.target.value)}
          />
          {busca && (
            <button className={styles.clearSearch} onClick={() => setBusca('')}>×</button>
          )}
        </div>

        <button className={styles.notif} aria-label="Notificações">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/>
            <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>
          </svg>
        </button>

        <button className={styles.btnAdicionar} onClick={onAdicionar}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="M12 5v14M5 12h14"/>
          </svg>
          Adicionar Produto
        </button>
      </div>
    </header>
  );
}