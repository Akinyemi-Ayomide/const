import { useState, ChangeEvent, FormEvent } from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Info: React.FC = () => {
  const [form, setForm] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form Submitted:', form);
    // API call or further processing
  };

  return (
    <div className="flex justify-center items-center mt-20 bg-white opacity-85 py-10 rounded-2xl">
      <div className="grid md:grid-cols-2 md:w-[70%] items-center">
        <div className="item-right mb-6">
          <h1 className="text-3xl font-bold px-2">
            Get In <span className="text-amber-800">Touch</span>
          </h1>

          <p className="px-2">
            Have a project in mind? Contact us today for a consultation.
          </p>
        </div>
        <div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-2 px-2">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
              className="w-full py-2 px-4 border rounded"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className="w-full py-2 px-4 border rounded"
            />
            <textarea
              name="message"
              placeholder="Message"
              value={form.message}
              onChange={handleChange}
              className="w-full py-2 px-4 border rounded"
            ></textarea>
            <button className="px-4 py-2 bg-amber-700 text-white rounded-2xl">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Info;
