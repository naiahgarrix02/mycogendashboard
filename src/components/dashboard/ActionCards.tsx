import { actionCards } from "../../constants/index.tsx";

function ActionCards() {
  return (
    <div className="grid grid-cols-4 gap-6">
      {actionCards.map((card) => (
        <div
          key={card.title}
          className={`${card.bg}
  p-6 rounded-3xl backdrop-blur-sm shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)]
  transition-all
  duration-200
  cursor-pointers`}
        >
          <h3 className="text-sm font-semibold text-gray-800">{card.title}</h3>
          <p className="text-sm text-gray-600 mt-2 leading-relaxed">
            {card.description}
          </p>
        </div>
      ))}
    </div>
  );
}

export default ActionCards;
