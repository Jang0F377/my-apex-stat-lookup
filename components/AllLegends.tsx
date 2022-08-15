import { GlobalLegendsObject, Legends } from "../typings";

interface AllLegendsProps {
  legends?: Legends;
}

interface RenderLegendCardProps {
  name: string;
  legend?: GlobalLegendsObject["data"];
}

function AllLegends({ legends }: AllLegendsProps) {
  const data = [];
  for (let key in legends) {
    data.push({
      name: key,
      stuff: legends?.[`${key}`]?.data,
    });
  }

  return (
    <div className="bg-project-silver px-2 py-2 rounded-lg mx-1.5  border-2 border-black md:px-2.5 md:py-3">
      <h2 className="text-3xl text-center my-1 py-1 font-medium">
        Legend Details:
      </h2>
      <section className="space-y-2">
        {data ? (
          data.map((x) =>
            x.stuff ? (
              <RenderLegendDataCard
                key={x.name}
                legend={x.stuff}
                name={x.name}
              />
            ) : (
              <div />
            )
          )
        ) : (
          <div />
        )}
      </section>
    </div>
  );
}

export default AllLegends;

const RenderLegendDataCard = ({ legend, name }: RenderLegendCardProps) => {
  return (
    <div className="rounded-lg text-white  bg-muted-dark-red border border-black">
      <h1 className="text-3xl mt-0.5 text-center md:tracking-wide font-medium text-project-silver">
        {name}
      </h1>
      <div className="grid items-center p-1 md:grid-cols-2  lg:grid-cols-3 md:space-x-3">
        {legend?.map((a) => (
          <div key={a.key} className="mx-1 col-span-1 p-1  border-black">
            <h2 className=" mx-auto text-center font-semibold py-1 my-1">
              {a.name}
            </h2>
            <hr className="my-3 border-black" />
            <div className="flex justify-between flex-row items-center">
              <div className="flex ">Value:</div>
              <div className="flex ">{a.value}</div>
            </div>
            <div className="flex justify-between flex-row items-center">
              <div className="flex ">Rank:</div>
              <div className="flex ">{a.rank.rankPos}</div>
            </div>
            <div className="flex justify-between flex-row items-center">
              <div className="flex ">Top Percent:</div>
              <div className="flex ">{a.rank.topPercent}%</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
