import { use } from 'react';
import type { ITechType } from '../../type/TechnologyType';
import { MdOutlineStar } from 'react-icons/md';
import Technology from './Technology';

export interface TechnologiesProps {
  technologiesPromise: Promise<ITechType[]>;
}

export default function Technologies({
  technologiesPromise,
}: TechnologiesProps) {
  const technologies = use(technologiesPromise);

  return (
    <div className='max-w-7xl mx-auto'>
        <h2 className='text-2xl font-bold mb-5'>Explore the Technologies</h2>
    <div className='max-w-7xl mx-auto grid grid-cols-10 gap-5'>
            
        <div className='col-span-7 grid grid-cols-3 gap-3'>
      {technologies.map((technology, index) => <Technology key={index}  technology={technology}/>
        
      )}
    </div>

    <div className='col-span-3 h-fit border-1'>
        <h2 className='text-2xl'>Your Stack</h2>
    </div>

    </div>

    </div>
  );
}
