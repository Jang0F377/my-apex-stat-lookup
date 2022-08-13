import { GlobalLegendsObject } from "../typings";

interface AllLegendsProps {
  legends?: GlobalLegendsObject;
}

function AllLegends({ legends }: AllLegendsProps) {
  console.log(legends);
  return (
    <div className="bg-project-silver rounded-lg  border-2 border-black px-2.5 py-1.5">
      <h2 className="text-3xl text-center my-1 py-1 font-medium">
        Legend Details:
      </h2>
    </div>
  );
}

export default AllLegends;
