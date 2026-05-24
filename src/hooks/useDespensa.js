import { useState, useMemo } from 'react';
import { PRODUTOS_INICIAIS, gerarId } from '../utils/dados';

export function useDespensa() {
  const [produtos, setProdutos] = useState(PRODUTOS_INICIAIS);
  const [busca, setBusca] = useState('');
  const [filtroCategoria, setFiltroCategoria] = useState('Todas');
  const [filtroMercado, setFiltroMercado] = useState('Todos');
  const [filtroPrioridade, setFiltroPrioridade] = useState('Todas');
  const [filtroOrdem, setFiltroOrdem] = useState('Mais recentes');
  const [modalAberto, setModalAberto] = useState(false);
  const [produtoEditando, setProdutoEditando] = useState(null);

  const produtosFiltrados = useMemo(() => {
    let lista = [...produtos];

    if (busca.trim()) {
      const termo = busca.toLowerCase();
      lista = lista.filter(p =>
        p.nome.toLowerCase().includes(termo) ||
        p.categoria.toLowerCase().includes(termo) ||
        p.mercado.toLowerCase().includes(termo)
      );
    }

    if (filtroCategoria !== 'Todas')
      lista = lista.filter(p => p.categoria === filtroCategoria);

    if (filtroMercado !== 'Todos')
      lista = lista.filter(p => p.mercado === filtroMercado);

    if (filtroPrioridade !== 'Todas')
      lista = lista.filter(p => p.prioridade === filtroPrioridade);

    if (filtroOrdem === 'Mais recentes')
      lista.sort((a, b) => b.data.localeCompare(a.data));
    else if (filtroOrdem === 'Mais antigos')
      lista.sort((a, b) => a.data.localeCompare(b.data));
    else if (filtroOrdem === 'Menor preço')
      lista.sort((a, b) => a.preco - b.preco);
    else if (filtroOrdem === 'Maior preço')
      lista.sort((a, b) => b.preco - a.preco);
    else if (filtroOrdem === 'A-Z')
      lista.sort((a, b) => a.nome.localeCompare(b.nome));

    return lista;
  }, [produtos, busca, filtroCategoria, filtroMercado, filtroPrioridade, filtroOrdem]);

  const stats = useMemo(() => {
    const total = produtos.length;
    const precisaComprar = produtos.filter(p => p.status === 'Preciso Comprar').length;
    const poucoEstoque = produtos.filter(p => p.status === 'Pouco Estoque').length;
    const proximaCompra = produtos
      .filter(p => p.status === 'Preciso Comprar' || p.status === 'Pouco Estoque')
      .reduce((acc, p) => acc + Number(p.preco), 0);
    return { total, precisaComprar, poucoEstoque, proximaCompra };
  }, [produtos]);

  const mercadosDisponiveis = useMemo(() => {
    const set = new Set(produtos.map(p => p.mercado).filter(Boolean));
    return ['Todos', ...Array.from(set)];
  }, [produtos]);

  const categoriasDisponiveis = useMemo(() => {
    const set = new Set(produtos.map(p => p.categoria).filter(Boolean));
    return ['Todas', ...Array.from(set)];
  }, [produtos]);

  function adicionarProduto(dados) {
    setProdutos(prev => [{ ...dados, id: gerarId() }, ...prev]);
  }

  function editarProduto(dados) {
    setProdutos(prev => prev.map(p => p.id === dados.id ? { ...p, ...dados } : p));
  }

  function excluirProduto(id) {
    setProdutos(prev => prev.filter(p => p.id !== id));
  }

  function mudarStatus(id, novoStatus) {
    setProdutos(prev => prev.map(p => p.id === id ? { ...p, status: novoStatus } : p));
  }

  function abrirModal(produto = null) {
    setProdutoEditando(produto);
    setModalAberto(true);
  }

  function fecharModal() {
    setProdutoEditando(null);
    setModalAberto(false);
  }

  function salvarProduto(dados) {
    if (produtoEditando) editarProduto({ ...produtoEditando, ...dados });
    else adicionarProduto(dados);
    fecharModal();
  }

  return {
    produtos: produtosFiltrados,
    stats,
    busca, setBusca,
    filtroCategoria, setFiltroCategoria,
    filtroMercado, setFiltroMercado,
    filtroPrioridade, setFiltroPrioridade,
    filtroOrdem, setFiltroOrdem,
    mercadosDisponiveis,
    categoriasDisponiveis,
    modalAberto, produtoEditando,
    abrirModal, fecharModal, salvarProduto,
    excluirProduto, mudarStatus,
  };
}