import { formatSize } from "@/utils";
import PlanBoxWrapper from "../plan-box-wrapper";

export const Internet4G = ({
  seleceted,
  plans,
  eligibility,
  handleSelect,
}: any) => {
  return (
    <PlanBoxWrapper>
      <div>
        <div className="font-bold">Internet</div>
        <div className="">4G Only</div>
        <div className="text-green-500 font-semibold">
          {formatSize(seleceted.fourg)}
        </div>
        <div className="text-gray-500">4G enabled handset + SIM required</div>
      </div>
      <div className="flex items-center flex-wrap gap-3">
        {plans.fourg.map((data: any, index: any) => {
          const isEligible = eligibility.fourg.includes(data);
          return (
            <button
              disabled={!isEligible}
              onClick={() => handleSelect("fourg", data)}
              key={index}
              className={`text-sm p-[2px] w-[60px] h-[60px] rounded-full shadow-md border flex items-center justify-center ${
                seleceted.fourg === data ? "bg-green-500 text-white" : ""
              } ${!isEligible ? "bg-gray-200 cursor-not-allowed" : ""}`}
            >
              {formatSize(data)}
            </button>
          );
        })}
      </div>
    </PlanBoxWrapper>
  );
};
export default Internet4G;
