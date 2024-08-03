import { formatSize } from "@/utils";
import PlanBoxWrapper from "../plan-box-wrapper";

export const Bioscope = ({
  seleceted,
  plans,
  eligibility,
  handleSelect,
}: any) => {
  return (
    <PlanBoxWrapper>
      <div>
        <div className="font-bold">Bioscope</div>
        <div className="text-pink-500 font-semibold">
          {formatSize(seleceted.bioscope)}
        </div>
        <div className="">Only used to watch Bioscope</div>
      </div>
      <div className="flex items-center flex-wrap gap-3">
        {plans.bioscope.map((data: any, index: any) => {
          const isEligible = eligibility.bioscope.includes(data);
          return (
            <button
              disabled={!isEligible}
              onClick={() => handleSelect("bioscope", data)}
              key={index}
              className={`text-sm p-[2px] w-[60px] h-[60px] rounded-full shadow-md border flex items-center justify-center ${
                seleceted.bioscope === data ? "bg-pink-500 text-white" : ""
              } ${!isEligible ? "bg-gray-200 cursor-not-allowed" : ""}`}
            >
              {formatSize(data)}
            </button>
          );
        })}
      </div>{" "}
    </PlanBoxWrapper>
  );
};
export default Bioscope;
