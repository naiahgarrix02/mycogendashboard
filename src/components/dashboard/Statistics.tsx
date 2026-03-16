import { Stats } from "../../constants/index.tsx";

const Statistics = () => {
  return (
    <div className="flex flex-row gap-1 mt-4">
      <div className="grid grid-cols-3 grid-rows-2 gap-1 text-left w-2/3">
        {Stats.map((stat: Stats) => (
          <div
            key={stat.title}
            className="flex flex-col bg-white p-8 gap-4 rounded-xl"
          >
            <h3 className="text-lg font-bold text-[20px]">{stat.title}</h3>
            <p className="text-[44px] font-medium">{stat.value}</p>
            <p className="text-gray-500 text-[14px]">{stat.subcopy}</p>
          </div>
        ))}
      </div>
      <div className="w-1/3 bg-white rounded-xl p-8 text-left">
        <h3 className="text-lg font-bold text-[20px]">Customer Insights</h3>
      </div>
    </div>
  );
};

export default Statistics;
