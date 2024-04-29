import { useSelector } from "react-redux"
import ProductList from "./ProductList"

function SingleProducts() {
    const { products, price } = useSelector((store) => store.products)
  return (
    <div className="mx-auto w-[900px] py-10">
        {products.map((item) => {
            return <ProductList key={item.id} item={item}/>
        })}
        <div className="flex justify-between">
            <h2 className="text-3xl">Total: </h2>
            <p className="text-xl">{price}$</p>
        </div>
    </div>
  )
}

export default SingleProducts