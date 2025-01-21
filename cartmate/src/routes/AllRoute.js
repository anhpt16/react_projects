import { Routes, Route } from 'react-router-dom';
import { ProductList, ShopCart, PageNotFound } from '../pages';

export const AllRoute = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="cart" element={<ShopCart />}/>
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    </div>
  )
}
