import ProductCard from '../components/ProductCard'
import CTAButton from '../components/CTAButton'
import FishDestaque from '../imagens/blusaElegante.png'
import SecondDestaque from '../imagens/vestido.png'
function Home() {
  return (
    <main className="pt-20">
      <section className="text-center p-6 bg-gray-50">
        <h1 className="text-3xl font-bold text-gray-800">Promoções de verão</h1>
        <p className="text-gray-600 mt-2">40% OFF em peças selecionadas</p>
        <button className="mt-4 px-6 py-2 bg-gray-800 text-white rounded">Ver produtos</button>
      </section>

      <section className="p-6">
        <h2 className="text-xl font-semibold mb-4">Destaques</h2>
        <div className="grid grid-cols-2">
          <div className="image  text-center">

            <ProductCard
              image={FishDestaque}
              name="Blusa Casual"
              price="89,90"
            />
             <ProductCard
              image={FishDestaque}
              name="Blusa Casual"
              price="89,90"
            />
            
          </div>
          <div className="image p-2 text-center">

            <ProductCard
              image={FishDestaque}
              name="Blusa Casual"
              price="89,90"
            />
             <ProductCard
              image={FishDestaque}
              name="Blusa Casual"
              price="89,90"
            />
           
          </div>
        
          <h2 className="text-xl font-semibold mb-4">Novidades</h2>
          
          <div className="image p-2  text-center">

             <ProductCard
                image={FishDestaque}
                name="Vestido Floral"
                price="129,90"
              />
              <ProductCard
                image={FishDestaque}
                name="Macacão Plus Size"
                price="179,90"
              />

          </div>
          <div className="image p-2  text-center">

            <ProductCard
              image={FishDestaque}
              name="Blusa Casual"
              price="89,90"
            />
             <ProductCard
              image={FishDestaque}
              name="Blusa Casual"
              price="89,90"
            />

          </div>

            
          

          <div className="mt-10 text-center">
            <CTAButton text="Ver Mais Produtos" onClick={() => alert("Ver mais")} />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
