import { useState } from "react";
import JobForm from "./JobForm";
export default function JobDetailsOver({ jobDetails }: any) {
  const [visible, setVisible] = useState(false);
  const formHandler = () => {
    if (visible) {
      setVisible(false);
    } else {
      setVisible(true);
    }
  };
  return (
    <>
      <div className="md:sticky md:top-3  h-fit row-start-1 sm:col-start-2  sm:row-start-2 ">
        <h1 className="pb-4">Job OverView</h1>
        <div className="card style-card shadow-lg bg-white  grid  gap-4 grid-cols-[minmax(0,1fr)_5rem] align-middle">
          <h2 className="font-light text-gray-700 text-responsive-base">
            Professional Level:
          </h2>
          {jobDetails.professional_level}
          <h2 className="font-light text-gray-700 text-responsive-base">
            Employment Type:
          </h2>
          {jobDetails.type}
          <h2 className="font-light text-gray-700 text-responsive-base">
            Offer Salary:
          </h2>
          <span>
            {jobDetails.salary}
            <span className="text-responsive-sm"> PKR / month</span>
          </span>
          <h2 className="font-light text-gray-700 text-responsive-base">
            Job Environment:
          </h2>
          <span className="bg-warning text-white text-center rounded-full ">
            {jobDetails.environment}
          </span>
          <hr className="col-span-2" />
          <button
            className="btn rounded-lg  mt-2 btn-sm btn-primary w-full justify-center col-span-2 justify-self-center "
            onClick={formHandler}
          >
            APPLY Now
          </button>
          {visible && <JobForm data={visible} />}
        </div>
      </div>
    </>
  );
}
