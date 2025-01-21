import { ProductCard } from "../components";

export const ProductList = () => {
  const list = [
    {id: 1, name: "Dầu gội", price: 12, image: "/dau_goi.jpg"},
    {id: 2, name: "Điện thoại", price: 149, image: "/dien_thoai.jpg"},
    {id: 3, name: "Đồng hồ", price: 100, image: "/dong_ho.jpg"},
    {id: 4, name: "Ghế", price: 85, image: "/ghe.jpg"},
    {id: 5, name: "Máy ảnh", price: 159, image: "/may_anh.jpg"},
    {id: 6, name: "Son", price: 68, image: "/son.jpg"},
    {id: 7, name: "Sữa rửa mặt", price: 25, image: "/sua_rua_mat.jpg"},
    {id: 8, name: "Tai nghe", price: 65, image: "/tai_nghe.jpg"},
    {id: 9, name: "Túi sách", price: 200, image: "/tui_sach.jpg"},
  ]

  return (
    <main className="flex flex-wrap other:justify-evenly">
      {list.map((product) => (
        <ProductCard key={product.id} product={product}/>
      ))}
    </main>
  )
}
