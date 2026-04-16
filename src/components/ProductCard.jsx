import React from "react";


const Star = ({ active }) => (
    <svg
        className={`rating__star ${active ? "rating__star--active" : "rating__star--inactive"}`}
        viewBox="0 0 16 15"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M7.6084 0L9.40451 5.52786H15.2169L10.5146 8.94427L12.3107 14.4721L7.6084 11.0557L2.90612 14.4721L4.70223 8.94427L-5.38826e-05 5.52786H5.81229L7.6084 0Z" />
    </svg>
);

const Rating = ({ value = 0, max = 5 }) => {
    return (
        <div className="rating">
            {Array.from({ length: max }, (_, i) => (
                <Star key={i} active={i < value} />
            ))}
        </div>
    );
};

export default function ProductCard({ product, onBuy, onRemove, isCart }) {
    return (
        <div className="product-card">

            <div className="product-card__image">
                <img
                    src={`/images/products/${product.image}.png`}
                    alt={product.title}
                />
            </div>

            <div className="d-flex flex-wrap flex-space-between flex-align-items gap-10px">
                <p className="product-card__code">
                    Vendor code: {product.vendorCode}
                </p>

                <Rating value={product.rating} />
            </div>

            <p className="product-card__title">
                {product.title}
            </p>

            <div className="product-card__price">
                <span className="product-card__price-current">
                    {product.price} €
                </span>

                {product.oldPrice && (
                    <span className="product-card__price-old">
                        {product.oldPrice} €
                    </span>
                )}
            </div>

            {isCart ? (
                <button
                    className="product-card__btn product-card__btn--remove"
                    onClick={onRemove}
                >
                    Remove
                </button>
            ) : (
                <button
                    className="product-card__btn"
                    onClick={() => onBuy(product)}
                >
                    Buy
                </button>
            )}
        </div>
    );
}