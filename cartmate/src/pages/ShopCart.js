import { CartCard } from "../components";
import { useCart } from "../context/CartContext";

export const ShopCart = () => {
  const { total, cartList } = useCart();
  console.log(cartList)

  return (
    <main>
      <section className="flex justify-center items-center">
        <p className="inline-block text-2xl">Cart Items: {cartList.length} / ${total}</p>
      </section>
      <section className="mt-6">
        { cartList.map((product) => (
          <CartCard key={product.id} product={product} />
        )) }
      </section>
    </main>
  )
}
