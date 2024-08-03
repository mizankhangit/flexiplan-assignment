import { formatSize } from "@/utils";
import PlanBoxWrapper from "../plan-box-wrapper";

export const InternetRegular = ({
  seleceted,
  plans,
  eligibility,
  handleSelect,
}: any) => {
  return (
    <PlanBoxWrapper>
      <div>
        <div className="font-bold">Internet</div>
        <div className="">Regular</div>
        <div className="text-green-500 font-semibold">
          {formatSize(seleceted.data)}
        </div>
      </div>
      <div className="flex items-center flex-wrap gap-3">
        {plans.data.map((data: any, index: any) => {
          const isEligible = eligibility?.data?.includes(data);
          return (
            <button
              disabled={!isEligible}
              onClick={() => handleSelect("data", data)}
              key={index}
              className={`text-sm p-[2px] w-[60px] h-[60px] rounded-full shadow-md border  flex items-center justify-center ${
                seleceted?.data === data ? "bg-green-500 text-white" : ""
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
export default InternetRegular;
