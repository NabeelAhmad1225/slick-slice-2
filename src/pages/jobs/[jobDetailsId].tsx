import { GetStaticProps, GetStaticPaths } from "next";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Jobs from "../../../data/jobs.json";
import { JobDetailsInterface } from "../../../interface/jobDetails";
import JobDetails from "../../../components/jobs/JobDetails";
type Props = {
  jobDetails: JobDetailsInterface;
};

const JobDetailsPage = ({ jobDetails }: Props) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading ...</div>;
  }

  if (!jobDetails) {
    return <ErrorPage statusCode={404} />;
  }

  return <JobDetails jobDetails={jobDetails} />;
};
export default JobDetailsPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = Jobs.map((jobDetails) => ({
    // jobDetailsId it should be same a file name else it wont work
    params: { jobDetailsId: jobDetails.id.toString() },
  }));
  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const jobDetails = Jobs.find((p) => p.id.toString() === params?.jobDetailsId);

  if (!jobDetails) {
    return { notFound: true };
  }
  return {
    props: {
      jobDetails,
    },
  };
};
