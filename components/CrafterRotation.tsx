import { CrafterItemObject } from "../typings";

interface CrafterRotationProps {
  crafts?: Array<CrafterItemObject>;
}

function CrafterRotation({ crafts }: CrafterRotationProps) {
  const fixString = (str?: string) => {
    let strArr = str?.split("_");
    return strArr?.join(" ");
  };

  return (
    <div className="bg-project-silver max-w-lg mx-auto flex flex-col md:flex-row text-dark-red rounded-lg  border-2 border-black pt-1.5 pb-0.5">
      {crafts?.map((x) => (
        <div className="flex flex-col text-center mx-auto" key={x?.item}>
          <div className="m-1">{fixString(x?.itemType.name)}</div>

          <img
            src={x?.itemType.asset}
            alt={"ERR"}
            className="mx-auto h-32 lg:h-36"
          />
          <h2
            style={{ color: `${x?.itemType.rarityHex}` }}
            className="mt-3 -mb-2"
          >
            {x?.cost} materials
          </h2>
          <div
            style={{ color: `${x?.itemType.rarityHex}` }}
            className="flex rounded-full p-3 mx-auto max-w-screen-sm justify-center"
          >
            {x?.itemType.rarity}
          </div>
        </div>
      ))}
    </div>
  );
}

export default CrafterRotation;
