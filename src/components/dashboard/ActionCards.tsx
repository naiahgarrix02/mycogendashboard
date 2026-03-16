import { actionCards } from "../../constants/index.tsx";
import arrowUp from "../../assets/icons/arrowUp.svg";

function ActionCards() {
  return (
    <div className="grid grid-cols-4 gap-2">
      {actionCards.map((card) => (
        <div
          key={card.title}
          className={`${card.bg}
  p-4 rounded-xl backdrop-blur-sm shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)]
  transition-all
  duration-200
  cursor-pointers justify-start items-start flex flex-col`}
        >
          <div className="w-full flex flex-row justify-between">
            <h3 className="text-sm font-semibold text-gray-800">
              {card.title}
            </h3>
            <img src={arrowUp} alt="Arrow Up" className="w-6 h-auto"/>
          </div>

          <p className="text-sm text-gray-500 mt- leading-relaxed">
            {card.description}
          </p>
        </div>
      ))}
    </div>
  );
}

export default ActionCards;
