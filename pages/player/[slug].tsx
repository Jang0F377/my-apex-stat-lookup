import { useEffect, useState } from "react";
import { ApiResponse } from "../../typings";
import { useRouter } from "next/router";
import SelectedLegend from "../../components/SelectedLegend";
import Realtime from "../../components/Realtime";

function Player() {
  const router = useRouter();
  const { system, gamertag } = router.query;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [playerStats, setPlayerStats] = useState<ApiResponse>();

  const URL = `https://obscure-shelf-17700.herokuapp.com/https://api.mozambiquehe.re/bridge?player=${gamertag}&platform=${system}`;

  async function api(url: string) {
    setLoading(true);
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
        setPlayerStats(data);
      })
      .then(() => setLoading(false))
      .catch(() => setError(true));
  }

  useEffect(() => {
    api(URL)
      .then()
      .catch(() => setError(true));
  }, []);

  return (
    <div>
      {loading ? (
        <div className="text-7xl text-black text-center p-20 m-10 animate-pulse">
          ...Loading
        </div>
      ) : error ? (
        <div className="text-7xl text-black text-center p-20 m-10 animate-pulse">
          ...Error
        </div>
      ) : (
        <div className="mx-auto max-w-7xl">
          <section className="">
            <h1 className="text-5xl text-black text-center p-5 m-5">
              {playerStats?.global.name}
            </h1>
            <Realtime realtime={playerStats?.realtime} />
          </section>
          <section className="flex ">
            <SelectedLegend selected={playerStats?.legends.selected} />
          </section>
        </div>
      )}
    </div>
  );
}

export default Player;
