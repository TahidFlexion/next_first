import React from "react";

function ProductDetails({ item, error }) {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <h1 className="text-3xl font-bold text-center text-gray-700 mb-6">
        Product Information
      </h1>
      {error ? (
        <div className="text-red-500 text-center">
          <p>Error: {error}</p>
        </div>
      ) : item ? (
        <div className="container mx-auto p-4 bg-white shadow-md rounded-lg">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-96 object-cover rounded-lg"
          />
          <h2 className="text-2xl font-semibold text-gray-800 mt-4">
            {item.title}
          </h2>
          <p className="text-gray-600 text-sm mt-2">
            <strong>Price:</strong> ${item.price}
          </p>
          <p className="text-gray-600 text-sm mt-4">{item.description}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export const getServerSideProps = async (context) => {
  const { id } = context.params;

  try {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    if (!res.ok) {
      throw new Error(
        `Failed to fetch product with id ${id}, Status: ${res.status}`
      );
    }
    const item = await res.json();

    return {
      props: { item, error: null },
    };
  } catch (error) {
    return {
      props: {
        item: null,
        error: error.message || "An unexpected error occurred.",
      },
    };
  }
};

export default ProductDetails;
