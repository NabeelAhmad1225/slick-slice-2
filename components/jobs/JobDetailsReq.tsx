export default function JobDetailsReq({ jobDetails }: any) {
  return (
    <>
      <div className=" row-start-3  sm:row-auto ">
        <h1 className="pb-4">Job Requirement</h1>
        <div className="card style-card shadow-lg bg-white  ">
          <ul>
            {jobDetails.skill_requirement.map((req: any, index: number) => {
              return (
                <li className="pb-4" key={index}>
                  {req.skill} Level - {req.level}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
