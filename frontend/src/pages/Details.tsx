import { useParams } from 'react-router-dom';
import { feature } from '../assets/Feature'; // Ensure correct import

const Details = () => {
  const { id } = useParams();
  const data = feature.find((item) => item.id === Number(id));

  // If no matching feature is found
  if (!data) {
    return <h2>Feature not found</h2>;
  }

  return (
    <div>
      <h1 className="font-bold text-3xl capitalize md:text-5xl mx-2 mt-20">{data.name}</h1>
      <hr className="my-2  h-5 bg-gray-700" />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 w-full h-auto gap-4 justify-center">
        {data.img.map((image, index) => (
          <div
            key={index}
            className="flex px-2 sm:basis-[calc(50%-8px)] md:basis-[calc(50%-8px)]"
          >
            <img
              src={image}
              alt={`Feature ${data.id} - ${index + 1}`}
              className="w-full h-auto rounded-lg object-cover shadow-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Details;
