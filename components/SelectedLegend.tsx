import { SelectedLegendObject } from "../typings";

interface SelectedLegendProps {
  selected?: SelectedLegendObject;
}

function SelectedLegend({ selected }: SelectedLegendProps) {
  return (
    <div className="flex flex-col p-2 m-2 bg-project-silver  rounded-lg">
      <h3 className="flex mx-auto">Currently selected legend:</h3>
      <h3 className="flex text-xl mx-auto">{selected?.LegendName}</h3>
      <img src={selected?.ImgAssets.icon} alt={"IMG"} className="h-56" />
    </div>
  );
}

export default SelectedLegend;
