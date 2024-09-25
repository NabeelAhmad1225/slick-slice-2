import Link from "next/link";
import Tags from "../Tags";

export default function PortfolioCard({ data }: any) {
  return (
    <>
      <div className="min-h-full relative bg-white card rounded-xl overflow-hidden shadow-sm border-4 border-gray-100 hover:border-b-tertiary duration-1000 grid gap-4">
        <img
          className="w-20 h-20 rounded-full shadow-lg z-10 object-contain"
          src={data?.logo ?? ""}
          alt={data?.heading ?? ""}
        />

        {/* <div className="absolute top-6 right-0 w-full flex flex-col items-end">
          <div className="card py-0 mb-2">
            <Link href="#" className="btn btn-tertiary btn-xs text-tertiary">
              view
            </Link>
          </div>
        </div> */}

        <Tags tags={data?.tags ?? []} parentId={data?.id ?? ""} />
        <div className="mt-1">
          <h2 className="text-responsive-xl">{data?.heading ?? ""}</h2>
          <p className="text-responsive-base">{data?.description ?? ""}</p>
        </div>
      </div>
    </>
  );
}
