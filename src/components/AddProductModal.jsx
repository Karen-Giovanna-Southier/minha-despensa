import { useState, useEffect } from 'react';
import { CATEGORIAS, UNIDADES } from '../utils/dados';
import styles from '../components/AddProductModal.module.css';

const STATUS_OPCOES = ['Tenho em Casa', 'Pouco Estoque', 'Preciso Comprar', 'Comprado'];
const PRIORIDADE_OPCOES = ['Alta', 'Media', 'Baixa'];
const PRIORIDADE_LABEL = { Alta: 'Alta', Media: 'Média', Baixa: 'Baixa' };

const FORM_INICIAL = {
  nome: '', quantidade: 1, unidade: 'un', prioridade: 'Media',
  categoria: 'Mercearia', status: 'Preciso Comprar',
  mercado: '', preco: '', data: new Date().toISOString().split('T')[0],
  observacoes: '', tags: '',
};

export default function AddProductModal({ aberto, onFechar, onSalvar, produtoEditando }) {
  const [form, setForm] = useState(FORM_INICIAL);

  useEffect(() => {
    if (produtoEditando) {
      setForm({
        ...produtoEditando,
        tags: produtoEditando.tags?.join(', ') || '',
        preco: produtoEditando.preco ?? '',
      });
    } else {
      setForm(FORM_INICIAL);
    }
  }, [produtoEditando, aberto]);

  if (!aberto) return null;

  function handleChange(campo, valor) {
    setForm(prev => ({ ...prev, [campo]: valor }));
  }

  function handleSubmit() {
    if (!form.nome.trim()) return alert('Informe o nome do produto.');
    const dados = {
      ...form,
      quantidade: Number(form.quantidade) || 1,
      preco: Number(form.preco) || 0,
      tags: form.tags ? form.tags.split(',').map(t => t.trim()).filter(Boolean) : [],
    };
    onSalvar(dados);
  }

  return (
    <div className={styles.overlay} onClick={e => e.target === e.currentTarget && onFechar()}>
      <div className={styles.modal}>
        <div className={styles.modalHeader}>
          <div>
            <h2 className={styles.modalTitle}>
              {produtoEditando ? 'Editar Produto' : 'Adicionar Produto'}
            </h2>
            <p className={styles.modalSub}>Preencha as informações do item</p>
          </div>
          <button className={styles.btnFechar} onClick={onFechar}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M18 6 6 18M6 6l12 12"/>
            </svg>
          </button>
        </div>

        <div className={styles.modalBody}>
          <Field label="NOME DO PRODUTO">
            <input
              className={styles.input}
              placeholder="Ex: Leite Integral"
              value={form.nome}
              onChange={e => handleChange('nome', e.target.value)}
              autoFocus
            />
          </Field>

          <div className={styles.row3}>
            <Field label="QUANTIDADE">
              <input
                className={styles.input}
                type="number"
                min="0"
                value={form.quantidade}
                onChange={e => handleChange('quantidade', e.target.value)}
              />
            </Field>
            <Field label="UNIDADE">
              <select className={styles.input} value={form.unidade} onChange={e => handleChange('unidade', e.target.value)}>
                {UNIDADES.map(u => <option key={u} value={u}>{u}</option>)}
              </select>
            </Field>
            <Field label="PRIORIDADE">
              <select className={styles.input} value={form.prioridade} onChange={e => handleChange('prioridade', e.target.value)}>
                {PRIORIDADE_OPCOES.map(p => <option key={p} value={p}>{PRIORIDADE_LABEL[p]}</option>)}
              </select>
            </Field>
          </div>

          <div className={styles.row2}>
            <Field label="CATEGORIA">
              <select className={styles.input} value={form.categoria} onChange={e => handleChange('categoria', e.target.value)}>
                {CATEGORIAS.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </Field>
            <Field label="STATUS">
              <select className={styles.input} value={form.status} onChange={e => handleChange('status', e.target.value)}>
                {STATUS_OPCOES.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            </Field>
          </div>

          <div className={styles.row2}>
            <Field label="MERCADO">
              <input
                className={styles.input}
                placeholder="Ex: Pão de Açúcar"
                value={form.mercado}
                onChange={e => handleChange('mercado', e.target.value)}
              />
            </Field>
            <Field label="PREÇO (R$)">
              <input
                className={styles.input}
                type="number"
                min="0"
                step="0.01"
                placeholder="0,00"
                value={form.preco}
                onChange={e => handleChange('preco', e.target.value)}
              />
            </Field>
          </div>

          <Field label="DATA DA COMPRA">
            <input
              className={styles.input}
              type="date"
              value={form.data}
              onChange={e => handleChange('data', e.target.value)}
            />
          </Field>

          <Field label="TAGS (separadas por vírgula)">
            <input
              className={styles.input}
              placeholder="essencial, favorito, promoção..."
              value={form.tags}
              onChange={e => handleChange('tags', e.target.value)}
            />
          </Field>

          <Field label="OBSERVAÇÕES">
            <textarea
              className={`${styles.input} ${styles.textarea}`}
              placeholder="Notas, marca preferida..."
              value={form.observacoes}
              onChange={e => handleChange('observacoes', e.target.value)}
              rows={3}
            />
          </Field>
        </div>

        <div className={styles.modalFooter}>
          <button className={styles.btnCancelar} onClick={onFechar}>Cancelar</button>
          <button className={styles.btnSalvar} onClick={handleSubmit}>
            {produtoEditando ? 'Salvar Alterações' : 'Salvar Produto'}
          </button>
        </div>
      </div>
    </div>
  );
}

function Field({ label, children }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      <label style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.5px', color: 'var(--text-muted)' }}>
        {label}
      </label>
      {children}
    </div>
  );
}