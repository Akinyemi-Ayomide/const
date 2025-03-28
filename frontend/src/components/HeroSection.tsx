import three from '../assets/three.jpg';
const HeroSection = () => {
  return (
    <div className="mt-15">
       
      <div className='relative z-0'>
        <div
          className="flex flex-col justify-center items-center w-full h-96 "
          style={{
            backgroundImage: `url(${three})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          
          <h1 className="text-4xl text-white font-bold ">Welcome to our</h1>
          <h1 className="text-4xl text-white font-bold">
          
            {' '}
            Construction Company
          </h1>
          <p className="mt-4 text-white">Building Dream into Reality</p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
