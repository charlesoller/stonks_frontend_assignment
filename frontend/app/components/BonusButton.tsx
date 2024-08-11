import Tooltip from "./Tooltip";
import { PiTreasureChestBold } from "react-icons/pi";

export default function BonusButton() {
  return (
    <Tooltip text="Bonus">
      <button className="rounded bg-[#51DB84] hover:bg-[#5cffbe] px-2.5 py-1">
        <PiTreasureChestBold color="black" className="animate-rock"/>
      </button>
    </Tooltip>
  )
}