import { Link } from 'react-router-dom';
import { feature } from '../assets/Feature';

interface FeatureItem {
  id: number;
  name: string;
  img: string[];
}

const Feature = () => {
  return (
    <div className="mt-20">
      {/* Title Section */}
      <div className="flex flex-col justify-center items-center">
        {/* <img src="" alt="icon" className="mr-2" /> */}
        <h1 className="text-4xl font-bold">Featured <span className='text-amber-800'>Project</span></h1><p className='bg-black h-0.5 mt-5 w-[100%] md:w-[85%]'></p>
      </div>

      {/* Feature List */}
      <div className="flex md:flex-row flex-col justify-center gap-4 mt-5">
        {feature.map((item: FeatureItem) => (
          <div key={item.id} className="  rounded-lg">
            <Link to={`/details/${item.id}`}>
              {' '}
              <img
                src={item.img[0]}
                alt={item.name}
                className="w-full h-70 object-cover rounded-md"
              />
              <p className="mt-2 px-2 text-lg font-semibold">{item.name}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feature;
