export const CATEGORIAS = [
    'Mercearia', 'Hortifruti', 'Laticínios', 'Carnes',
    'Limpeza', 'Higiene', 'Bebidas', 'Padaria', 'Congelados', 'Outros'
];

export const UNIDADES = ['un', 'kg', 'g', 'L', 'ml', 'pct', 'cx', 'dz'];

export const STATUS_CONFIG = {
    'Tenho em Casa': { cor: '#22C55E' },
    'Pouco Estoque': { cor: '#F59E0B' },
    'Preciso Comprar': { cor: '#EF4444' },
    'Comprado': { cor: '#3B82F6' },
};

export const PRIORIDADE_CONFIG = {
    'Alta': { label: 'ALTA', color: '#991B1B', bg: '#FEE2E2' },
    'Media': { label: 'MÉDIA', color: '#92620A', bg: '#FEF3C7' },
    'Baixa': { label: 'BAIXA', color: '#1A6B4A', bg: '#E6F4ED' },
};

export const PRODUTOS_INICIAIS = [
    {
        id: '1', nome: 'Leite Integral', quantidade: 4, unidade: 'L',
        categoria: 'Laticínios', status: 'Tenho em Casa', mercado: 'Pão de Açúcar',
        preco: 5.49, prioridade: 'Media', tags: ['essencial'], data: '2026-05-23', observacoes: ''
    },
    {
        id: '2', nome: 'Banana Prata', quantidade: 1, unidade: 'kg',
        categoria: 'Hortifruti', status: 'Tenho em Casa', mercado: 'Hortifruti Local',
        preco: 6.90, prioridade: 'Baixa', tags: [], data: '2026-05-23', observacoes: ''
    },
    {
        id: '3', nome: 'Café em Pó', quantidade: 1, unidade: 'pct',
        categoria: 'Mercearia', status: 'Pouco Estoque', mercado: 'Carrefour',
        preco: 18.90, prioridade: 'Alta', tags: ['essencial'], data: '2026-05-23', observacoes: ''
    },
    {
        id: '4', nome: 'Arroz 5kg', quantidade: 0, unidade: 'pct',
        categoria: 'Mercearia', status: 'Preciso Comprar', mercado: 'Atacadão',
        preco: 28.00, prioridade: 'Alta', tags: [], data: '2026-05-23', observacoes: ''
    },
    {
        id: '5', nome: 'Detergente', quantidade: 0, unidade: 'un',
        categoria: 'Limpeza', status: 'Preciso Comprar', mercado: 'Assaí',
        preco: 2.99, prioridade: 'Media', tags: [], data: '2026-05-23', observacoes: ''
    },
    {
        id: '6', nome: 'NESCAL', quantidade: 1, unidade: 'un',
        categoria: 'Mercearia', status: 'Comprado', mercado: '',
        preco: 10.99, prioridade: 'Media', tags: [], data: '2026-05-23', observacoes: ''
    },
    {
        id: '7', nome: 'Pão Francês', quantidade: 6, unidade: 'un',
        categoria: 'Padaria', status: 'Comprado', mercado: '',
        preco: 1.20, prioridade: 'Baixa', tags: [], data: '2026-05-23', observacoes: ''
    },
];

export const gerarId = () => Math.random().toString(36).slice(2, 9);

export const formatarPreco = (valor) =>
    `R$ ${Number(valor).toFixed(2).replace('.', ',')}`;

export const formatarData = (iso) => {
    if (!iso) return '';
    const [y, m, d] = iso.split('-');
    return `${d}/${m}/${y}`;
};