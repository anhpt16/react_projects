import { useCart } from "../context/CartContext"

export const CartCard = ({product}) => {
  const { removeFromCart } = useCart();

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
        <button onClick={() => removeFromCart(product)} className="p-2 text-white bg-red-500 rounded-lg">Loại bỏ</button>
      </div>
    </div>
  )
}
