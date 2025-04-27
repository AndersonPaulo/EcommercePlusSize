function Carrinho() {
  return (
    <main className="pt-20 p-6">
      <h1 className="text-2xl font-bold mb-4">Seu Carrinho</h1>
      <div className="border p-4">
        <p>Produto: Camiseta Básica</p>
        <p>Preço: R$ 79,90</p>
        <button className="mt-2 px-4 py-1 bg-red-600 text-white rounded">Remover</button>
      </div>
      <div className="mt-4">
        <button className="px-6 py-2 bg-green-600 text-white rounded">Finalizar Compra</button>
      </div>
    </main>
  );
}

export default Carrinho;
