import { useAuth } from "@/component/auth/context/Authcontex";

const Dashboard = () => {
  const { user } = useAuth();

  if (!user) {
    return <p>Please log in to view your dashboard.</p>;
  }
  return (
    <div className="pt-6 px-4">
      <h1>
        Welcome, <span className="text-xl text-teal-600">{user.email}</span>
      </h1>
      <p className="text-lg ">this is Dashboard page</p>
    </div>
  );
};

export default Dashboard;
