"use client";
import Link from "next/link";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

function Dummy() {
  const { data, error } = useSWR("https://dummyjson.com/users", fetcher);
  console.log("data", data);

  if (error) {
    return <h5 className="text-red-500 text-center">Error fetching data.</h5>;
  }

  if (!data) {
    return <p className="text-gray-500 text-center">Loading...</p>;
  }

  return (
    <div className="h-screen overflow-y-auto">
      <div className="min-h-screen bg-gray-100 flex items-center justify-center py-10">
        <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-6">
          <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
            User List
          </h1>
          {data.users.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.users.map((user) => (
                <Link
                  href={`/dummyuser/${user.id}`}
                  key={user.id}
                  className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <img
                    src={user.image}
                    alt={user.firstName}
                    className="w-24 h-24 rounded-full mx-auto mb-4"
                  />
                  <h2 className="text-lg font-semibold text-center text-gray-700">
                    {user.firstName} {user.lastName}
                  </h2>
                  <p className="text-sm text-center text-gray-500">
                    {user.email}
                  </p>
                </Link>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-600">No users found.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Dummy;
