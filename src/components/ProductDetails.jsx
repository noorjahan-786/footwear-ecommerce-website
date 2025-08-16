import React from "react";
import { products } from "../assets/products";

const ProductDetail = ({ id }) => {
  const product = products.find((p) => p._id === id);

  const avgRating = (
    product.reviews.reduce((acc, review) => acc + review.rating, 0) /
    product.reviews.length
  ).toFixed(1);

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-2xl font-bold">{product.name}</h2>

      <div className="flex items-center my-2">
        {[1, 2, 3, 4, 5].map((i) => (
          <span key={i} className={`text-xl ${i <= Math.round(avgRating) ? 'text-black' : 'text-gray-300'}`}>
            ★
          </span>
        ))}
        <span className="ml-2 text-gray-600">({avgRating})</span>
      </div>

      <div className="text-lg">
        <span className="font-semibold">₹{product.price}</span>
        {product.discount && (
          <span className="text-green-600 ml-2">({product.discount}% OFF)</span>
        )}
      </div>

      <h3 className="mt-4 text-xl font-semibold">Customer Reviews</h3>
      {product.reviews.map((rev, index) => (
        <div key={index} className="border-b py-2">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((i) => (
              <span key={i} className={`text-sm ${i <= rev.rating ? 'text-black' : 'text-gray-300'}`}>
                ★
              </span>
            ))}
          </div>
          <p className="text-sm italic text-gray-600">by {rev.user} on {rev.date}</p>
          <p className="text-base">{rev.comment}</p>
        </div>
      ))}
    </div>
  );
};


export default ProductDetail;
