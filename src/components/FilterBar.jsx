import styles from './FilterBar.css';

export default function FilterBar({
  filtroCategoria, setFiltroCategoria,
  filtroMercado, setFiltroMercado,
  filtroPrioridade, setFiltroPrioridade,
  filtroOrdem, setFiltroOrdem,
  categoriasDisponiveis,
  mercadosDisponiveis,
}) {
  return (
    <div className={styles.bar}>
      <div className={styles.filtrosLabel}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>
        </svg>
        Filtros:
      </div>

      <Select value={filtroCategoria} onChange={setFiltroCategoria} options={categoriasDisponiveis} />
      <Select value={filtroMercado} onChange={setFiltroMercado} options={mercadosDisponiveis} />
      <Select
        value={filtroPrioridade}
        onChange={setFiltroPrioridade}
        options={['Todas', 'Alta', 'Media', 'Baixa']}
        labels={{ Todas: 'Todas prioridades', Alta: 'Alta', Media: 'Média', Baixa: 'Baixa' }}
      />
      <Select
        value={filtroOrdem}
        onChange={setFiltroOrdem}
        options={['Mais recentes', 'Mais antigos', 'A-Z', 'Menor preço', 'Maior preço']}
      />
    </div>
  );
}

function Select({ value, onChange, options, labels = {} }) {
  return (
    <div className={styles.selectWrap}>
      <select
        className={styles.select}
        value={value}
        onChange={e => onChange(e.target.value)}
      >
        {options.map(op => (
          <option key={op} value={op}>{labels[op] || op}</option>
        ))}
      </select>
      <svg className={styles.chevron} width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m6 9 6 6 6-6"/>
      </svg>
    </div>
  );
}