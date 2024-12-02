import Link from "next/link";
import React from "react";

function Users({ data }) {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <h1 className="text-3xl font-bold text-center text-gray-700 mb-6">
        server side component
      </h1>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800 truncate">
                {item.title}
              </h2>
              <p className="text-gray-600 text-sm mt-2">
                <strong>Price:</strong> ${item.price}
              </p>
              <p className="text-gray-600 text-sm mt-1 truncate">
                {item.description}
              </p>
              <Link href={`/server/${item.id}`}>
                <p className="text-blue-500 mt-4 inline-block cursor-pointer">
                  View Details
                </p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export const getServerSideProps = async () => {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    if (!res.ok) {
      throw new Error(`Failed to fetch products, Status: ${res.status}`);
    }
    const data = await res.json();

    return {
      props: { data },
    };
  } catch (error) {
    return {
      props: { data: [] },
    };
  }
};

export default Users;
