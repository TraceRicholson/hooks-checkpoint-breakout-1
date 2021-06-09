import { useEffect } from "react"

function App () {
  const [products, setProducts] = useState([])
  const [updateProducts, setUpdateProducts] = useState(false)

  useEffect(async() => {
    async function fetchProducts() {
      await fetch()
            .then((res) => res.json())
            .then((json) => setProducts(json))
    }
    fetchProducts()
  }, [updateProducts])

  if (!updateProducts) setUpdateProducts(true)

  return (
    <div className='App'>
      <header>GALV STORE</header>
      <ProductsContext.Provider value={products}>

      </ProductsContext.Provider>
    </div>
  )
}

export default App;