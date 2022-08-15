import { useEffect, useState } from "react";
import { CraftingRotationObject } from "../../../typings";
import CrafterRotation from "../../../components/CrafterRotation";

function Crafter() {
  const [crafter, setCrafter] = useState<Array<CraftingRotationObject>>();
  const [crafterLoading, setCrafterLoading] = useState(true);
  const crafterUrl = `https://obscure-shelf-17700.herokuapp.com/https://api.mozambiquehe.re/crafting`;

  async function getCrafterData(url: string) {
    if (!crafterLoading) setCrafterLoading(true);
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
        setCrafter(data);
      })
      .then(() => setCrafterLoading(false))
      .catch((err) => console.warn(err));
  }

  useEffect(() => {
    getCrafterData(crafterUrl)
      .then()
      .catch((err) => console.warn(err));
  }, []);

  return (
    <div className="xl:max-w-7xl lg:max-w-6xl lg:mx-auto mt-5 mb-1.5 p-2">
      {crafterLoading ? (
        <div className="text-3xl lg:text-7xl text-bright-light-red text-center py-10 lg:py-0 lg:p-20 m-10 animate-pulse">
          ...Loading
        </div>
      ) : (
        <>
          <h2 className="text-3xl lg:text-4xl text-center my-1 py-1 font-medium">
            In the Crafter:
          </h2>
          <p className="text-sm text-center animate-pulse">
            Data/Images provided by{" "}
            <a
              target="_blank"
              href="https://apexlegendsstatus.com/"
              rel="noreferrer"
            >
              Apex Legends Status
            </a>
          </p>
          <div className="space-y-2 md:space-y-3 ">
            {crafter?.map((x) =>
              x.bundleType === "weekly" ? (
                <CrafterRotation crafts={x?.bundleContent} />
              ) : (
                <div />
              )
            )}

            {crafter?.map((x) =>
              x.bundleType === "daily" ? (
                <CrafterRotation crafts={x?.bundleContent} />
              ) : (
                <div />
              )
            )}
            {crafter?.map((x) =>
              x.bundleType === "permanent" && x.bundle !== "ammo" ? (
                <CrafterRotation crafts={x?.bundleContent} />
              ) : (
                <div />
              )
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default Crafter;
