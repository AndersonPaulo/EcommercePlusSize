function Produtos() {
  return (
    <main className="pt-20 p-6">
      <h1 className="text-2xl font-bold mb-4">Produtos</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="border p-2 text-center">
          <img src="https://via.placeholder.com/200x250" alt="Produto" />
          <p>Camiseta básica</p>
          <p className="font-bold">R$ 79,90</p>
          <button className="mt-2 px-4 py-1 bg-gray-800 text-white rounded">Comprar</button>
        </div>
        {/* Pode repetir para mais produtos */}
      </div>
    </main>
  );
}

export default Produtos;
