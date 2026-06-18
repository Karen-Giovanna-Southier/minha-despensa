import { formatarPreco } from '../utils/dados';
import styles from '../components/StatsCards.module.css';

const cards = [
  {
    key: 'total',
    label: 'TOTAL DE ITENS',
    sublabel: 'na despensa',
    iconBg: '#EFF6FF',
  },
  {
    key: 'precisaComprar',
    label: 'PRECISO COMPRAR',
    sublabel: 'itens faltando',
    iconBg: '#FFF5F5',
  },
  {
    key: 'poucoEstoque',
    label: 'POUCO ESTOQUE',
    sublabel: 'acabando',
    iconBg: '#FFFBEB',
  },
  {
    key: 'proximaCompra',
    label: 'PRÓXIMA COMPRA',
    sublabel: 'valor estimado',
    iconBg: '#F0FDF4',
    isPreco: true,
  },
];
export default function StatsCards({ stats }) {
  return (
    <div className={styles.grid}>
      {cards.map(card => (
        <div key={card.key} className={styles.card}>
          <div className={styles.cardLeft}>
            <span className={styles.label}>{card.label}</span>
            <span className={styles.value}>
              {card.isPreco ? formatarPreco(stats[card.key]) : stats[card.key]}
            </span>
            <span className={styles.sublabel}>{card.sublabel}</span>
          </div>
          <div className={styles.iconWrap} style={{ background: card.iconBg }}>
            <span className={styles.icon}>{card.icon}</span>
          </div>
        </div>
      ))}
    </div>
  );
}