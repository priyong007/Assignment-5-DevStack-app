import { use, useState } from 'react';
import type { ITechType } from '../../type/TechnologyType';
import Technology from './Technology';

export interface TechnologiesProps {
  technologiesPromise: Promise<ITechType[]>;
}

export default function Technologies({
  technologiesPromise,
}: TechnologiesProps) {
  const technologies = use(technologiesPromise);

  const [cartTechnology, setCartTechnology] = useState<ITechType[]>([]);

  const handleCartUpdate = (technology: ITechType): void => {
    const isAlreadyAdded = cartTechnology.some(
      (item) => item.id === technology.id
    );

    if (isAlreadyAdded) {

      setCartTechnology((prev) =>
        prev.filter((item) => item.id !== technology.id)
      );
    } else {

      setCartTechnology((prev) => [...prev, technology]);
    }
  };


  const handleDeleteAll = (): void => {
    setCartTechnology([]);
  };

  return (
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-2xl font-bold mb-2">
        Explore the <span className='bg-gradient-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent font-bold'>Technologies</span>
      </h2>

      <h4 className="mb-5 font-medium">
        Pick one technology per category to build your ideal stack.
      </h4>

      <div className="grid grid-cols-1 lg:grid-cols-10 gap-5">

        {/* Left side: Technology cards */}
        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
          {technologies.map((technology, ind) => (
            <Technology
              key={ind}
              technology={technology}
              handleCartUpdate={handleCartUpdate}
              cartTechnology={cartTechnology}
            />
          ))}
        </div>

        {/* Right side: Your Stack */}
        <div className="lg:col-span-3 h-fit border border-gray-300 rounded-xl p-4">
          <h2 className="text-2xl font-bold mb-2">
            Your Stack
          </h2>

          <h4 className="mb-4">
            {cartTechnology.length}  Technology Selected
          </h4>

          {/* Selected technologies */}
          <div className="space-y-3">
            {cartTechnology.map((technology) => (
              <div
                key={technology.id}
                className="flex items-center justify-between border border-gray-200 rounded-lg p-2"
              >
                <div className="flex items-center gap-2">
                  <svg viewBox="0 0 100 100" className="w-8 h-8">
                    <image
                      href={technology.icon}
                      width="100"
                      height="100"
                    />
                  </svg>

                  <span className="font-medium">
                    {technology.name}
                  </span>
                </div>

                {/* Single delete button */}
                <button
                  onClick={() => handleCartUpdate(technology)}
                  className="text-xl text-gray-400 hover:text-red-500"
                  title="Remove technology"
                >
                  ×
                </button>
              </div>
            ))}
          </div>

         
          {cartTechnology.length > 0 && (
            <button
              onClick={handleDeleteAll}
              className="mt-5 w-full rounded-lg bg-white-500 py-2 font-bold text-red-600 border border-red-400 "
            >
              Delete All
            </button>
          )}
        </div>

      </div>
    </div>
  );
}
