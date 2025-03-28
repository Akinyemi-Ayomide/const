const Testimonial = () => {
  return (
    <div>
      <div className="flex justify-center items-center mt-20 py-10">
        <div className="grid md:grid-cols-2 md:w-[70%] items-center ">
          <div className="item-right mb-5">
            <h1 className="text-3xl font-bold">Client <span className="text-amber-800">Testimonials</span></h1>
            <p>What our clients say about us</p>
          </div>
          <div className="flex flex-row gap-2  overflow-x-auto">
            <div className="bg-gray-200 py-4 px-2  rounded-2xl">
              <p>
                Great Job! Your dedication and effort really shine through in
                this work. Keep it up!
              </p>
            </div>
            <div className="bg-gray-200 py-4 px-2 rounded-2xl">
              <p>
                Impressive Work! The attention to detail and clarity make this
                stand out. Well done!
              </p>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
