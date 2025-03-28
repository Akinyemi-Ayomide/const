import { Link } from 'react-router-dom';
const Section1 = () => {
  return (
    <div className="flex flex-col md:flex-row justify-around py-10 mt-10 bg-white rounded-2xl">
      <div className="">
        
        <div>
          <h1 className="text-2xl font-bold">MOSES VICTOR ADEIZA</h1>
          <p className="text-amber-800">victormoses381@gmail.com</p>
          <p>We are dedicated to delivering exceptional results</p>
        </div>
      </div>
      <div>
        <button className="py-2 px-4 sm:mt-2 bg-black text-white mt-2 rounded-2xl">
          <Link to="https://wa.me/2349064831310">Learn More</Link>
        </button>
      </div>
    </div>
  );
};

export default Section1;
