import { formatSize } from "@/utils";

export const SelectedPlan = ({ seleceted }: any) => {
  return (
    <div className="sticky top-0 self-start">
      <ul>
        <li className="flex items-center justify-between border-b py-3">
          <span>Validity</span>
          <span>
            {seleceted.longevity} {seleceted?.longevity === 1 ? "Day" : "Days"}
          </span>
        </li>
        <li className="flex items-center justify-between border-b py-3">
          <span>Internet (Regular)</span>
          <span> {formatSize(seleceted.data)}</span>
        </li>
        <li className="flex items-center justify-between border-b py-3">
          <span>Internet (4G) </span>
          <span> {formatSize(seleceted.fourg)}</span>
        </li>
        <li className="flex items-center justify-between border-b py-3">
          <span>Minutes (Any Network) </span>
          <span> {seleceted.voice} Min</span>
        </li>
        <li className="flex items-center justify-between border-b py-3">
          <span>Bioscope </span>
          <span> {formatSize(seleceted?.bioscope)}</span>
        </li>
        <li className="flex items-center justify-between border-b py-3">
          <span>SMS </span>
          <span> {seleceted?.sms} SMS</span>
        </li>
        <li className="flex items-center justify-between border-b py-3">
          <span>
            Missed Call Alert{" "}
            <span className="block text-[12px] text-gray-500">
              Validity: 30 days
            </span>
          </span>
          <span>{seleceted.mca === 0 ? "Off" : "On"}</span>
        </li>
      </ul>
    </div>
  );
};
export default SelectedPlan;
