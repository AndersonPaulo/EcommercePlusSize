function ProductCard({ image, name, price }) {
    return (
      <div className="bg-white rounded-2xl shadow hover:shadow-lg transition p-4">
        <img
          src={image}
          alt={name}
        />
        <h2 className="mt-4 text-lg font-semibold text-dark">{name}</h2>
        <p className="text-primary text-center font-bold text-xl mt-1">R$ {price}</p>
        <button className="mt-4  bg-primary text-white py-2 rounded-xl hover:bg-blue-600 transition">
          Adicionar ao carrinho
        </button>
      </div>
    )
  }
  
  export default ProductCard
  