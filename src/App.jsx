import './styles/global.css';
import { useDespensa } from './hooks/useDespensa';
import Header from './components/Header';
import StatsCards from './components/StatsCards';
import FilterBar from './components/FilterBar';
import KanbanBoard from './components/KanbanBoard';
import AddProductModal from './components/AddProductModal';

export default function App() {
  const {
    produtos, stats,
    busca, setBusca,
    filtroCategoria, setFiltroCategoria,
    filtroMercado, setFiltroMercado,
    filtroPrioridade, setFiltroPrioridade,
    filtroOrdem, setFiltroOrdem,
    mercadosDisponiveis, categoriasDisponiveis,
    modalAberto, produtoEditando,
    abrirModal, fecharModal, salvarProduto,
    excluirProduto,
  } = useDespensa();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header
        busca={busca}
        setBusca={setBusca}
        onAdicionar={() => abrirModal()}
      />

      <StatsCards stats={stats} />

      <FilterBar
        filtroCategoria={filtroCategoria} setFiltroCategoria={setFiltroCategoria}
        filtroMercado={filtroMercado} setFiltroMercado={setFiltroMercado}
        filtroPrioridade={filtroPrioridade} setFiltroPrioridade={setFiltroPrioridade}
        filtroOrdem={filtroOrdem} setFiltroOrdem={setFiltroOrdem}
        categoriasDisponiveis={categoriasDisponiveis}
        mercadosDisponiveis={mercadosDisponiveis}
      />

      <KanbanBoard
        produtos={produtos}
        onEditar={abrirModal}
        onExcluir={excluirProduto}
        onAdicionar={abrirModal}
      />

      <AddProductModal
        aberto={modalAberto}
        onFechar={fecharModal}
        onSalvar={salvarProduto}
        produtoEditando={produtoEditando}
      />
    </div>
  );
}