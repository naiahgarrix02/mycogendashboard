import Search from "../components/ui/Search";

function Dashboard() {
  return (
    <div>
      <Search />
      <div className="flex items-start justify-between">
        <div className="text-left">
          <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
          <p className="text-sm text-gray-500 mt-2">
            Welcome back! Here's what's happening with your store today.
          </p>
        </div>

        <button className="bg-black text-white px-5 py-2 rounded-full">
          {" "}
          + New Order
        </button>
      </div>
    </div>
  );
}
export default Dashboard;
