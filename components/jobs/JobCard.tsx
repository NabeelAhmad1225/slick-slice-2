import Link from "next/link";
export default function JobCard({ data }: any) {
  return (
    <>
      <article className="card style-card bg-white grid gap-2 ">
        <h3 className="text-responsive-xl">{data?.name ?? ""}</h3>

        <h4 className="text-[#4A3EF7]">{data?.salary}PLN</h4>

        <div className="flex flex-row gap-card">
          <div className="flex flex-row gap-2 items-center text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
              />
            </svg>

            <p className="text-gray-400 font-poppins font-medium capitalize">
              {data?.type ?? ""}
            </p>
          </div>
          <div className="flex flex-row gap-2 items-center text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>

            <p className="text-gray-400 font-poppins font-medium capitalize">
              {data?.date ?? ""}
            </p>
          </div>
        </div>

        <p className="text-responsive-base mt-2 line-clamp-1 ">
          {data?.description ?? ""}
        </p>

        <div className="flex justify-end mt-2">
          {/* <button className=""> */}
          <Link
            className="btn btn-secondary hover:btn-primary border-tertiary  btn-xs min-w-[6rem] justify-center text-center text-body "
            href={`/jobs/${data.id}`}
          >
            Apply
          </Link>
          {/* </button> */}
        </div>
      </article>
    </>
  );
}
