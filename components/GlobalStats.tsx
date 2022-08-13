import { ResGlobalObject } from "../typings";
import { DesktopComputerIcon } from "@heroicons/react/outline";
import { useState } from "react";

interface GlobalStatsProps {
  global?: ResGlobalObject;
}

function GlobalStats({ global }: GlobalStatsProps) {
  return (
    <div className="bg-project-silver rounded-lg px-1 pb-1 ">
      <h2 className="text-3xl text-center mt-1 p-1">A little about me:</h2>
      <div className="flex flex-col .5">
        {/*Top is tag/platform/platform logo/level/prestige*/}
        <section className="flex flex-row w-full space-x-3">
          <div className="flex w-full justify-evenly text-project-silver rounded-lg bg-muted-dark-red border-2 border-black p-1 ">
            <div className="flex flex-col items-center p-1">
              <p className="  font-semibold text-xl">Gamertag</p>
              <p className=" my-auto font-medium text-lg">{global?.name}</p>
            </div>
            <div className="flex flex-col items-center  p-1">
              <p className="font-semibold text-xl">Platform</p>
              <img
                src="/ps-logo-removebg-preview.webp"
                alt={"PS"}
                className="flex-shrink-0 bg-white rounded  h-10 w-10"
              />
            </div>
          </div>
          <div className="flex w-full justify-evenly text-project-silver rounded-lg bg-muted-dark-red border-2 border-black  p-1">
            <div className="flex flex-col items-center p-1">
              <p className="font-semibold text-xl">My Level</p>
              <p className=" my-auto font-medium text-lg">{global?.level}</p>
            </div>
            <div className="flex  ">
              {global?.levelPrestige ? (
                <div className="flex flex-col items-center ">
                  <p className="font-semibold text-xl ">Prestige Level</p>
                  <p className=" my-auto font-medium text-lg">
                    {global?.levelPrestige}
                  </p>
                </div>
              ) : (
                <div className="flex flex-col items-center">
                  <p>I&apos;m</p>
                  <p>on my</p>
                  <p>way!</p>
                </div>
              )}
            </div>
          </div>
        </section>
        {/*Split Grid in Half under Top tag to show*/}
        {/*BR Rank ============ Arena Rank*/}
        <div className="flex flex-row justify-evenly lg:my-6">
          <section className="flex flex-col px-16 pb-16 rounded-lg bg-muted-light-red">
            <h1 className="text-2xl text-center font-semibold">Apex BR</h1>
            <hr className="my-3 border-black" />
          </section>
          <section className="flex flex-col px-16 pb-16 rounded-lg bg-muted-light-red">
            <h1 className="text-2xl text-center font-semibold">Arenas</h1>
            <hr className="my-3 border-black" />
          </section>
        </div>
      </div>
      {JSON.stringify(global, null, 2)}
    </div>
  );
}

export default GlobalStats;
