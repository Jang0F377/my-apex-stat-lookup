import {
  MapRotationObject,
  RotationCurrentNextInterface,
} from "../../../typings";
import { useEffect, useState } from "react";

interface CurrentMapProps {
  current?: RotationCurrentNextInterface["current"];
}

interface NextMapProps {
  next?: RotationCurrentNextInterface["next"];
}

function MapRotation() {
  const [rotation, setRotation] = useState<MapRotationObject>();
  const [mapLoading, setMapLoading] = useState(false);
  const mapUrl = `https://obscure-shelf-17700.herokuapp.com/https://api.mozambiquehe.re/maprotation?version=2`;

  async function getMapData(url: string) {
    setMapLoading(true);
    const headers: HeadersInit = {
      Authorization: `${process.env.NEXT_PUBLIC_APEX_STAT_API}`,
    };
    const opts: RequestInit = {
      method: "GET",
      headers: headers,
    };

    return await fetch(url, opts)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setRotation(data);
      })
      .then(() => setMapLoading(false))
      .catch((err) => console.warn(err));
  }

  useEffect(() => {
    getMapData(mapUrl)
      .then()
      .catch((err) => console.warn(err));
  }, []);

  return (
    <div className="xl:max-w-7xl lg:max-w-6xl lg:mx-auto mt-5 mb-1.5 p-2">
      <h2 className="text-3xl lg:text-4xl text-center my-1 py-1 font-medium">
        Map Rotation:
      </h2>
      <p className="text-sm text-center text-dark-red animate-pulse">
        Data/Images provided by{" "}
        <a
          target="_blank"
          href="https://apexlegendsstatus.com/"
          rel="noreferrer"
        >
          Apex Legends Status
        </a>
      </p>
      {mapLoading ? (
        <div className="text-3xl lg:text-7xl text-bright-light-red text-center py-10 lg:py-0 lg:p-20 m-10 animate-pulse">
          ...Loading
        </div>
      ) : (
        <div className="bg-project-silver flex flex-col text-dark-red   rounded-lg  border-2 border-black ">
          <div className="flex flex-col md:flex-row  justify-evenly items-center ">
            <section className="  p-2 flex flex-col md:flex-row  items-center border-b border-muted-dark-red">
              <section className="flex flex-col  m-1 p-0.5 ">
                <h2 className="text-lg md:text-3xl text-center font-medium ">
                  BR Pubs
                </h2>
                <div className="">
                  <CurrentMap current={rotation?.battle_royale?.current} />
                </div>
              </section>
              <section className="flex  flex-col m-1 p-0.5 ">
                <h2 className="text-lg md:text-3xl text-center font-medium ">
                  BR Ranked
                </h2>
                <div className="">
                  <RankedMap current={rotation?.ranked?.current} />
                </div>
              </section>
              {/**/}
            </section>
          </div>
          <div className="flex flex-col md:flex-row justify-evenly ">
            <section className="  p-2 flex flex-col md:flex-row  items-center border-t border-muted-dark-red">
              <section className="flex flex-col  m-1 p-0.5 ">
                <h2 className="text-lg md:text-3xl text-center font-medium ">
                  Arenas Pubs
                </h2>
                <div className="">
                  <CurrentMap current={rotation?.arenas?.current} />
                </div>
              </section>
              <section className="flex flex-col  m-1 p-0.5 ">
                <h2 className="text-lg md:text-3xl text-center font-medium ">
                  Arenas Ranked
                </h2>
                <div className="">
                  <CurrentMap current={rotation?.arenasRanked?.current} />
                </div>
              </section>
              {/**/}
            </section>
          </div>
        </div>
      )}
    </div>
  );
}

export default MapRotation;

const CurrentMap = ({ current }: CurrentMapProps) => {
  return (
    <div className="flex text-sm md:text-base flex-col mx-auto">
      <h1 className=" font-medium text-center">{current?.map}</h1>
      <img src={current?.asset} alt={"ERR"} className="mx-auto h-32 lg:h-36 " />
      <p className="text-center">For approx:</p>
      <p className="text-center">{current?.DurationInMinutes} more minutes</p>
    </div>
  );
};

const RankedMap = ({ current }: CurrentMapProps) => {
  const dateSlice = current?.readableDate_end.split(" ")[0];

  return (
    <div className="flex text-sm md:text-base flex-col mx-auto">
      <h1 className=" font-medium text-center">{current?.map}</h1>
      <img src={current?.asset} alt={"ERR"} className="mx-auto h-32 lg:h-36 " />
      <p className="text-center">Until:</p>
      <p className="text-center">{dateSlice}</p>
    </div>
  );
};
const NextMap = ({ next }: NextMapProps) => {};
