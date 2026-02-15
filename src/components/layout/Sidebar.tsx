import { useLocation, Link } from "react-router-dom";
import { sidebarNav } from "../../constants";
import { ReactComponent as AddIcon } from "../../assets/icons/add.svg";

function Sidebar() {
  const location = useLocation();
  return (
    <div className="flex flex-col h-full p-4 justify-between">
      <div>
        <div className="mb-16 text-2xl font-bold px-4 py-2 text-left">
          Mycogen
        </div>

        <nav className="flex flex-col gap-0.5">
          {sidebarNav.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link
                to={item.path}
                key={item.label}
                className={`flex items-center gap-4 px-4 py-4 rounded-xl transition ${isActive ? "bg-black font-semibold text-white" : "hover:bg-gray-50"} w-full text-left`}
              >
                <Icon
                  className={`w-5 h-5 ${isActive ? "stroke-white" : "stroke-[8B8B93]"}`}
                />
                <span
                  className={`text-[16px] font-medium ${isActive ? "text-white" : "text-[#404E69]"}`}
                >
                  {item.label}
                </span>
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="mt-10 px-4 py-2 ">
        <button className="text-[16px] text-white bg-black px-4 py-4 w-full gap-4 rounded-full items-center justify-center flex">
          <AddIcon className="w-5 h-5 fill-white" />
          Add Product
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
