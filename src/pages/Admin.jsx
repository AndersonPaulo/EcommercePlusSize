import { useState } from "react";

function AdminPainel() {
  const [produtos, setProdutos] = useState([]);
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");

  const adicionarProduto = () => {
    setProdutos([...produtos, { nome, preco }]);
    setNome("");
    setPreco("");
  };

  return (
    <main className="pt-20 p-6">
      <h1 className="text-2xl font-bold mb-4">Painel Administrativo</h1>
      <div className="mb-4 space-y-2">
        <input
          type="text"
          placeholder="Nome do produto"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          className="border p-2 rounded w-full"
        />
        <input
          type="text"
          placeholder="Preço"
          value={preco}
          onChange={(e) => setPreco(e.target.value)}
          className="border p-2 rounded w-full"
        />
        <button
          onClick={adicionarProduto}
          className="px-4 py-2 bg-gray-800 text-white rounded"
        >
          Adicionar Produto
        </button>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-2">Produtos Cadastrados</h2>
        <ul className="space-y-2">
          {produtos.map((produto, index) => (
            <li key={index} className="border p-2 rounded">
              {produto.nome} - R$ {produto.preco}
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}

export default AdminPainel;
