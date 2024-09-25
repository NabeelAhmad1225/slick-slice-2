import Link from "next/link";
// import careerData from "../../data/career.json";
export default function CareerCard({ data }: any) {
  return (
    <>
      <div
        key={data.id}
        className="relative bg-white rounded-lg shadow-[0_0_50px_rgb(18,18,18,0.15)]  p-10 mx-4 mb-7"
      >
        <h3 className="mb-2 text-heading  text-responsive-xl font-poppins">
          {data?.name ?? ""}
        </h3>
        <h4 className="font-poppins text-primary">{data?.salary}PLN</h4>
        <div className="flex flex-row gap-4 pt-2">
          <div className="flex flex-row gap-2 items-center text-gray-400">
            <i className="fa-solid fa-briefcase"></i>
            <p className="text-gray-400 font-poppins font-medium capitalize">
              {data?.time ?? ""}
            </p>
          </div>
          <div className="flex flex-row gap-2 items-center text-gray-400">
            <i className="fa-regular fa-clock"></i>
            <p className="text-gray-400 font-poppins font-medium capitalize">
              {data?.date ?? ""}
            </p>
          </div>
        </div>
        <p className="font-poppins font-normal  text-responsive-base pt-2">
          {data?.description ?? ""}
        </p>
        <Link className="flex justify-end pt-4" href={`/career/${data.id}`}>
          <button className="btn hover:btn-primary font-semibold px-4 py-1 btn-secondary">
            Apply
          </button>
        </Link>
      </div>
    </>
  );
}
