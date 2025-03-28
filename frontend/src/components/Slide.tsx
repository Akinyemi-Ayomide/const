import two from '../assets/two.jpg'
const Slide = () => {
  return (
    <div>
      <div className="w-full h-40 flex justify-center item-center bg-amber-700 py-48 mt-20" style={{
        backgroundImage:`url(${two})`, backgroundSize:'cover', backgroundPosition:'center'
      }}>
        <h1 className='text-white text-3xl text-center font-bold bg-black'>Transforming Spaces with Excellence</h1>
      </div>
    </div>
  );
};

export default Slide;
