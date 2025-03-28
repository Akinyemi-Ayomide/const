import one from '../assets/one.jpg';
import two from '../assets/two.jpg';
import three from '../assets/three.jpg';
const OurService = () => {
  return (
    <div className="mt-20">
      <div className="flex  justify-center item-center">
        <h1 className="text-4xl font-bold">Our Service</h1>
      </div>
      <div className="flex flex-col md:flex-row justify-center gap-5 mt-20">
        <div className="flex flex-col justify-center items-center">
          <img src={two} alt="img" className="h-20 rounded-full" />
          <h1 className="mt-4 font-bold ">Construction</h1>
          <p className="mt-2">Rental & Commercial</p>
        </div>
        <div className=" flex flex-col justify-center items-center">
          {' '}
          <img src={two} alt="img" className="h-20 rounded-full" />
          <h1 className="mt-4 font-bold ">Construction</h1>
          <p className="mt-2">Rental & Commercial</p>
        </div>
        <div className=" flex flex-col justify-center items-center">
          {' '}
          <img src={two} alt="img" className="h-20 rounded-full" />
          <h1 className="mt-4 font-bold ">Construction</h1>
          <p className="mt-2">Rental & Commercial</p>
        </div>
      </div>
    </div>
  );
};

export default OurService;
