import { useState, useEffect } from "react";

export default function JobForm({ data }: any) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [cv, setCv] = useState(null);
  const [isHidden, setIsHidden] = useState(false);
  const handleFirstNameChange = (event: any) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event: any) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event: any) => {
    setEmail(event.target.value);
  };

  const handlePhoneChange = (event: any) => {
    setPhone(event.target.value);
  };

  const handleCv = (event: any) => {
    setCv(event.target.files[0]);
  };
  const handleSubmit = (event: any) => {
    event.preventDefault();

    // Do something with the form data, such as sending it to a server
    console.log({
      firstName,
      lastName,
      email,
      phone,
      cv,
    });
  };
  const toggleVisibility = () => {
    // console.log("data :>> ", data);
    setIsHidden(data);
    // console.log("isHidden :>> ", isHidden);
  };
  return (
    <>
      <div
        className={` ${
          isHidden ? "hidden" : ""
        }  bg-white style-card w-3/4 max-w-4xl mx-auto py-8 my-4 transition duration-150 ease-in-out z-10 fixed top-0 right-0 bottom-0 left-0 overflow-auto`}
      >
        <div className=" flex justify-evenly">
          <div>
            <h1 className="text-responsive-2xl text-center">
              Job Application Form
            </h1>
            <p className="text-responsive-lg text-center">
              Please Fill Out the Form Below to Submit Your Job Application!
            </p>
          </div>
          <div>
            <button className="btn btn-tertiary" onClick={toggleVisibility}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-10 h-10  "
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
          </div>
        </div>
        <form action="" className="p-8" onSubmit={handleSubmit}>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="first-name"
                className="block text-responsive-lg font-medium leading-6 text-gray-900"
              >
                First name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  value={firstName}
                  onChange={handleFirstNameChange}
                  required
                  autoComplete="given-name"
                  className="outline-accent block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:border-indigo-300
                focus:ring
                    focus:ring-indigo-200
                    focus:ring-opacity-50 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="last-name"
                className="block text-responsive-lg font-medium leading-6 text-gray-900"
              >
                Last name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="last-name"
                  value={lastName}
                  onChange={handleLastNameChange}
                  required
                  id="last-name"
                  autoComplete="family-name"
                  className="outline-accent block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label
                htmlFor="email"
                className="block text-responsive-lg font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  value={email}
                  onChange={handleEmailChange}
                  required
                  type="email"
                  autoComplete="email"
                  className="outline-accent block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label
                htmlFor="phone"
                className="block text-responsive-lg font-medium leading-6 text-gray-900"
              >
                Phone number
              </label>
              <div className="mt-2">
                <input
                  id="phone"
                  name="phone"
                  value={phone}
                  onChange={handlePhoneChange}
                  required
                  type="number"
                  autoComplete="phone number"
                  className="outline-accent block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="cover-photo"
                className="block text-responsive-lg font-medium leading-6 text-gray-900"
              >
                CV
              </label>
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div className="text-center">
                  <div className="mt-4 flex text-responsive-lg leading-6 text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                      <span>Upload a file</span>
                      <input
                        id="file-upload"
                        name="file-upload"
                        onChange={handleCv}
                        required
                        type="file"
                        className="sr-only"
                      />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-responsive-base leading-5 text-gray-600">
                    PNG, JPG, GIF up to 10MB
                  </p>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="btn btn-primary w-full sm:col-span-2 sm:col-start-3 justify-center "
            >
              Apply
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
