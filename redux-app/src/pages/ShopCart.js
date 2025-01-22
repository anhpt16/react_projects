import { CartCard } from "../components";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../store/cartSlice";

export const ShopCart = () => {
  const cartList = useSelector(state => state.cart.cartList);
  const total = useSelector(state => state.cart.total);

  return (
    <main>
      <section className="flex justify-center items-center">
        <p className="inline-block text-2xl">Cart Items: {cartList.length} / ${total}</p>
      </section>
      <section className="mt-6">
        {cartList.map(product => (
          <CartCard key={product.id} product={product} />
        ))}      
      </section>
    </main>
  )
}
