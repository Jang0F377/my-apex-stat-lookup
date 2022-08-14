import { GlobalLegendsObject } from "../typings";

interface AllLegendsProps {
  legends?: GlobalLegendsObject;
}

function AllLegends({ legends }: AllLegendsProps) {
  return (
    <div className="bg-project-silver rounded-lg  border-2 border-black md:px-2.5 py-1.5">
      <h2 className="text-3xl text-center my-1 py-1 font-medium">
        Legend Details:
      </h2>
      <p className="flex text-center text-4xl animate-pulse text-white">
        COMING SOON..
      </p>
    </div>
  );
}

export default AllLegends;
