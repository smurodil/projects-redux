import { decreaseAmount, increaseAmount, removeItem } from '../features/products/productSlice'
import { useDispatch } from 'react-redux'

function ProductList({ item }) {
  const dispatch = useDispatch()
  return (
    <div className='flex justify-between text-center mb-5 items-center bg-neutral-600 text-white p-10'>
      <img src={item.thumbnail} alt="" className='w-56 object-cover h-56'/>
      <div>
        <h3 className='font-bold text-xl mb-2'>
            {item.title}
        </h3>
        <p className='font-medium mb-2'>
          ${item.price}
        </p>
        <button onClick={() => {
          if(item.amount ===1){
            dispatch(removeItem(item.id))
          }else{
            dispatch(decreaseAmount(item.id))
          }
        }} className='text-white btn btn-secondary border rounded px-1 py-1'>
          Remove
        </button>
      </div>
      <div className='flex gap-2 items-center'>
        <button onClick={() => {
          if(item.amount === 1){
            dispatch(removeItem(item.id))
          } else{
            dispatch(decreaseAmount(item.id))
          }
        }} className=' inline-block  btn btn-error text-white text-2xl'>
            -
        </button>
        <p className='font-bold text-2xl'>{item.amount}</p>
        <button onClick={() => dispatch(increaseAmount(item.id))} className=' inline-block btn btn-success text-white text-2xl'>+</button>
      </div>
    </div>
  )
}

export default ProductList