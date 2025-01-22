import { useDispatch } from "react-redux";
import { remove } from "../store/cartSlice";

export const CartCard = ({product}) => {
  const dispatch = useDispatch();

  return (
    <div className="p-4 flex justify-between items-center border border-slate-300 rounded mt-8">
      <img className="w-48 max-h-28 object-cover" src={product.image} alt="Product" />
      <div>
        <p>{product.name}</p>
      </div>
      <div>
        <p>${product.price}</p>
      </div>
      <div>
        <button onClick={() => dispatch(remove(product))} className="p-2 text-white bg-red-500 rounded-lg">Loại bỏ</button>
      </div>
    </div>
  )
}
