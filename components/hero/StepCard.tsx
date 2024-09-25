export default function StepCard({ data, index }: any) {
  return (
    <>
      <article
        // aria-label={data?.heading ?? ""}
        tabIndex={0}
        className="card rounded-xl  bg-[#fff] overflow-hidden shadow-sm border-4 border-gray-100  hover:border-b-accent duration-1000"
      >
        <div className="flex flex-row justify-between">
          <h3 className="text-responsive-xl font-bold">
            {index + 1}. {data?.heading ?? ""}
          </h3>
          <img className="w-10 h-10" src={data.icon} alt={data.heading} />
        </div>

        <p className="text-responsive-base mt-2">{data?.body ?? ""}</p>
      </article>
    </>
  );
}
