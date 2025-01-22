import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { add, remove } from "../store/cartSlice";


export const ProductCard = ({product}) => {
    const cartList = useSelector(state => state.cart.cartList);
    const dispatch = useDispatch();
    const [isInCart, setIsInCart] = useState(false);

    useEffect(() => {
        const productInCart = cartList.find(item => item.id === product.id);
        if (productInCart) {
            setIsInCart(true);
        } else {
            setIsInCart(false);
        }
    }, [cartList, product.id])

  return (
    <div className="mr-4 mb-4 w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="flex justify-center items-center">
            <img className="w-full object-cover h-64 p-8 rounded-t-lg" src={product.image} alt="product" />
        </div>
        <div className="p-8 pt-0">
            <div>
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{product.name}</h5>
            </div>
            <div className="flex items-center justify-between">
                <span className="text-xl font-semibold text-gray-900 dark:text-white">${product.price}</span>
                { !isInCart
                    ? (<button onClick={() => dispatch(add(product))} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Thêm giỏ hàng</button>) 
                    : (<button onClick={() => dispatch(remove(product))} className="p-2 text-white bg-red-500 rounded-lg">Loại bỏ</button>) 
                }
            </div>
        </div>
    </div>
  )
}
