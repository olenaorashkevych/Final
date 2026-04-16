import Payment from "../components/Payment";
import ProductCard from "../components/ProductCard";

export default function CartList({ cart, onRemove, setCart }) {
    return (
        <>
            <div className="cart">
                <h2 className="cart__title">Cart</h2>

                {cart.length === 0 ? (
                    <p className="cart__empty">Cart is empty</p>
                ) : (
                    <div className="products__grid">
                        {cart.map((item, index) => (
                            <ProductCard
                                key={index}
                                product={item}
                                isCart
                                onRemove={() => onRemove(index)}
                            />
                        ))}
                    </div>
                )}
            </div>

            <Payment cart={cart} setCart={setCart} />
        </>
    );
}