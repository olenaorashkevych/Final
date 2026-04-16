import { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

const Payment = ({ cart, setCart }) => {
    const { isAuth } = useAuth();

    const stripe = useStripe();
    const elements = useElements();

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");

    // 🔹 рахуємо суму
    const totalAmount = cart.reduce((sum, item) => sum + item.price, 0);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) return;

        setLoading(true);
        setError("");

        try {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/create-payment-intent`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ amount: totalAmount * 100 })
            });

            const data = await res.json();

            const result = await stripe.confirmCardPayment(data.clientSecret, {
                payment_method: {
                    card: elements.getElement(CardElement)
                }
            });

            if (result.error) {
                setError(result.error.message);
            } else if (result.paymentIntent.status === "succeeded") {
                setSuccess(true);

                // ✅ очистка корзини
                setCart([]);
                localStorage.removeItem("cart");
            }
        } catch (err) {
            setError("Щось пішло не так 😢");
        }

        setLoading(false);
    };

    // ❌ не авторизований
    if (!isAuth) {
        return (
            <div className="payment payment--not-auth">
                <p>Щоб купити — потрібно авторизуватися</p>

                <Link to="/login" className="payment__login-btn">
                    Перейти до входу
                </Link>
            </div>
        );
    }

    // ✅ успішна оплата
    if (success) {
        return (
            <div className="payment payment--success">
                <h3>Оплата пройшла успішно ✅</h3>
                <p>Дякуємо за покупку!</p>
            </div>
        );
    }

    return (
        <>
            <form className="payment" onSubmit={handleSubmit}>
                <h3 className="payment__title">Оплата</h3>

                {/* 💰 СУМА */}
                <p className="payment__total">
                    До оплати: {totalAmount} €
                </p>

                <div className="payment__card">
                    <CardElement
                        options={{
                            style: {
                                base: {
                                    fontSize: "16px",
                                    color: "#1a1a1a",
                                    fontFamily: "Arial, sans-serif",
                                    "::placeholder": {
                                        color: "#999"
                                    }
                                },
                                invalid: {
                                    color: "#e53935"
                                }
                            }
                        }}
                    />
                </div>

                {error && <p className="payment__error">{error}</p>}

                <button
                    className="payment__btn"
                    type="submit"
                    disabled={loading || cart.length === 0}
                >
                    {loading ? "Оплата..." : "Оплатити"}
                </button>
            </form>

            {/* 🔥 ТЕСТОВІ ДАНІ ПОВЕРНУЛИ */}
            <div className="payment__test">
                <p><strong>Тестові дані для оплати:</strong></p>
                <p>Карта: 4242 4242 4242 4242</p>
                <p>Дата: будь-яка майбутня</p>
                <p>CVC: будь-які 3 цифри</p>
            </div>
        </>
    );
};

export default Payment;