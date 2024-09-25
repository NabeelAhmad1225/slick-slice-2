import JobDetailsInfo from "./JobDetailsInfo";
import JobDetailsOver from "./JobDetailsOver";
import JobDetailsQual from "./JobDetailsQual";
import JobDetailsReq from "./JobDetailsReq";

// import BreadCrumb from "../BreadCrumb";
export default function JobDetails({ jobDetails }: any) {
  return (
    <>
      <div className="wrapper bg-secondary ">
        {/* <BreadCrumb jobDetails={jobDetails} /> */}
        <div className="container pt-8 pb-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[minmax(0,1fr)_20rem] gap-card ">
          <JobDetailsInfo jobDetails={jobDetails} />
          <div>
            <div className="pb-card">
              <JobDetailsReq jobDetails={jobDetails} />
            </div>
            <JobDetailsQual jobDetails={jobDetails} />
          </div>
          <JobDetailsOver jobDetails={jobDetails} />
        </div>
      </div>
    </>
  );
}
