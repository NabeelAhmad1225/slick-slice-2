export default function JobDetailsQual({ jobDetails }: any) {
  return (
    <>
      <div className="card style-card shadow-lg bg-white leading-8 row-start-4 md:row-span-3">
        <h1 className="pb-4">Job Qualification</h1>
        <ul className="list-disc  list-inside ">
          {jobDetails.qualification.map((qualification: any, index: number) => (
            <li key={index}>{qualification}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
