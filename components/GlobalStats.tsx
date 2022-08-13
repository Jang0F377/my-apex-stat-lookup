import { ResGlobalObject } from "../typings";
import { DesktopComputerIcon } from "@heroicons/react/outline";
import { useEffect, useState } from "react";

interface GlobalStatsProps {
  global?: ResGlobalObject;
}

function GlobalStats({ global }: GlobalStatsProps) {
  return (
    <div className="bg-project-silver rounded-lg  border-2 border-black px-2.5 py-1.5">
      <h2 className="text-3xl text-center my-1 py-1 font-medium">
        At a glance:
      </h2>
      <div className="flex flex-col .5">
        {/*Top is tag/platform/platform logo/level/prestige*/}
        <section className="flex flex-row w-full space-x-3">
          <div className="flex w-full justify-evenly text-white rounded-lg bg-muted-dark-red border-2 border-black p-1 ">
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
          <div className="flex w-full justify-evenly text-white rounded-lg bg-muted-dark-red border-2 border-black  p-1">
            <div className="flex flex-col items-center p-1">
              <p className="font-semibold text-xl">My Level</p>
              <p className=" my-auto font-medium text-lg">{global?.level}</p>
            </div>
            <div className="flex  ">
              {global?.levelPrestige ? (
                <div className="flex flex-col items-center ">
                  <p className="font-semibold text-xl ">Prestige Level</p>
                  <p className=" my-auto font-medium lg:text-lg">
                    {global?.levelPrestige === 1
                      ? "1st Prestige"
                      : global?.levelPrestige === 2
                      ? "2nd Prestige"
                      : global?.levelPrestige === 3
                      ? "3rd Prestige"
                      : "ERR"}
                  </p>
                </div>
              ) : (
                <div className="flex flex-col items-center">
                  <p className="font-semibold text-xl ">Prestige</p>

                  <p className=" my-auto font-medium text-sm">I&apos;m</p>
                  <p className=" my-auto font-medium text-sm">on my</p>
                  <p className=" my-auto font-medium text-sm">way!</p>
                </div>
              )}
            </div>
          </div>
        </section>
        {/*Split Grid in Half under Top tag to show*/}
        {/*BR Rank ============ Arena Rank*/}
        <div className="flex flex-row justify-evenly lg:my-6 text-white">
          <section className="flex flex-col lg:px-14 py-2 rounded-lg bg-muted-dark-red border-2 border-black ">
            <h1 className="text-2xl text-center font-semibold lg:tracking-wide">
              Apex BR
            </h1>
            <div className="text-center">
              <h3>Current Split:</h3>
              <p>Season 14 - First</p>
            </div>
            <hr className="my-3 border-black" />
            <div className="text-center">
              <h3>Current rank:</h3>
              <p>{global?.rank.rankName}</p>
            </div>

            <div>
              <img src={global?.rank.rankImg} alt={"ERR"} />
            </div>
            <div className="text-center ">
              <h3>Division</h3>
              <p>{global?.rank.rankDiv}</p>
            </div>
          </section>
          <section className="flex flex-col lg:px-14 py-2  rounded-lg bg-muted-dark-red border-2 border-black">
            <h1 className="text-2xl text-center font-semibold lg:tracking-wide">
              Arenas
            </h1>
            <div className="text-center">
              <h3>Current Split:</h3>
              <p>Season 14 - First</p>
            </div>
            <hr className="my-3 border-black" />
            <div className="text-center">
              <h3>Current rank:</h3>
              <p>{global?.arena.rankName}</p>
            </div>

            <div>
              <img src={global?.arena.rankImg} alt={"ERR"} />
            </div>
            <div className="text-center ">
              <h3>Division</h3>
              <p>{global?.arena.rankDiv}</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default GlobalStats;
