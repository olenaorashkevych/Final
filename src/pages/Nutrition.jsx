import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import CartList from "./Cartlist";
import SortingModal from "../components/SortingModal";

export default function Nutrition() {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [activeSort, setActiveSort] = useState('rating');

    // 🔹 отримати товари
    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/products?sort=${activeSort}`)
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, [activeSort]);

    // 🔹 завантажити корзину
    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
        setCart(savedCart);
    }, []);

    // 🔹 додати в корзину
    const addToCart = (product) => {
        const updatedCart = [...cart, product];
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    // 🔹 видалити з корзини
    const removeFromCart = (index) => {
        const updatedCart = cart.filter((_, i) => i !== index);
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };


    return (
        <section className="products">
            <div className="container">
                <SortingModal activeSort={activeSort} setActiveSort={setActiveSort} />

                <div className="products__grid">
                    {products.length > 0
                        ? products.map((product) => (
                            <ProductCard
                                key={product._id}
                                product={product}
                                onBuy={addToCart}
                            />
                        ))
                        : "Loading..."}
                </div>

                <CartList cart={cart} onRemove={removeFromCart} setCart={setCart} />
            </div>
        </section>
    );
}