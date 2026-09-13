import { MdOutlineStar } from 'react-icons/md';
import type { ITechType } from '../../type/TechnologyType';

export interface TechnologyProps {
  technology: ITechType;

  handleCartUpdate: (technology: ITechType) => void;

  cartTechnology: ITechType[];
}

export default function Technology({
  technology,
  handleCartUpdate,
  cartTechnology,
}: TechnologyProps) {

  const isAdded = cartTechnology.filter(
  (item) => item.id === technology.id
).length > 0;

  return (
    <div className="border border-gray-300 rounded-xl px-4 py-4">
      <div className="flex justify-between">
        <svg viewBox="0 0 100 100" className="w-10 h-10">
          <image
            href={technology.icon}
            width="100"
            height="100"
          />
        </svg>

        <button className="bg-[#E0F2FE] mx-4 my-2 px-4 py-2 rounded-xl">
          {technology.badge}
        </button>
      </div>

      <h2 className="text-2xl">
        {technology.name}
      </h2>

      <p className="py-2">
        {technology.description}
      </p>

      <div className="flex gap-2 font-semibold py-2">
        <h4>{technology.category}</h4>

        <h4>{technology.difficulty}</h4>

        <h4 className="flex items-center gap-1">
          <MdOutlineStar className="text-yellow-300" />
          {technology.rating}
        </h4>
      </div>

      <div>
        <button
          onClick={() => handleCartUpdate(technology)}
          className={`rounded-xl w-full py-1 ${
            isAdded
              ? 'bg-gray-400 text-white'
              : 'bg-black text-white'
          }`}
        >

          {isAdded ? 'Added' : 'Add to Stack'}
        </button>
      </div>
    </div>
  );
}
