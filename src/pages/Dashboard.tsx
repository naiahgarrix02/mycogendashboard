import Search from "../components/ui/Search";
import Notifications from "../assets/icons/notifications.svg";
import pfp from "../assets/icons/pfp.jpg";
import ActionCards from "../components/dashboard/ActionCards";
import Statistics from "../components/dashboard/Statistics";

function Dashboard() {
  return (
    <div>
      <div className=" flex flex-row items-center gap-4 mb-8">
        <Search />
        <div className="w-fit h-fit p-3 rounded-full bg-white relative items-center justify-center flex">
          <img
            src={Notifications}
            alt="Notifications"
            className="h-6 w-6 text-gray-500 "
          />
        </div>
        <div className="flex flex-row gap-3 items-center">
          <div className="w-fit text-right flex flex-col items-end justify-center">
            <p className="whitespace-nowrap text-sm text-black font-bold">
              Sarah Johnson
            </p>
            <p className="whitespace-nowrap text-sm text-gray-500">
              Store Manager
            </p>
          </div>
          <div className="h-12 w-12 rounded-full overflow-hidden">
            <img
              src={pfp}
              alt="Profile Picture"
              className="h-full w-full rounded-full object-cover"
            />
          </div>
        </div>
      </div>

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

      <div className="mt-4">
        <ActionCards />
        <Statistics />
      </div>
    </div>
  );
}
export default Dashboard;
