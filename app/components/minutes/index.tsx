import PlanBoxWrapper from "../plan-box-wrapper";

export const Minutes = ({
  seleceted,
  plans,
  eligibility,
  handleSelect,
}: any) => {
  return (
    <PlanBoxWrapper>
      <div>
        <div className="font-bold">Minutes</div>
        <div className="text-red-500 font-semibold">{seleceted.voice} Min</div>
        <div className="">Any Local Number</div>
      </div>
      <div className="flex items-center flex-wrap gap-3">
        {plans.voice.map((data: any, index: any) => {
          const isEligible = eligibility.voice.includes(data);
          return (
            <button
              disabled={!isEligible}
              onClick={() => handleSelect("voice", data)}
              key={index}
              className={`text-sm p-[2px] w-[60px] h-[60px] rounded-full shadow-md border flex items-center justify-center ${
                seleceted.voice === data ? "bg-red-500 text-white" : ""
              } ${!isEligible ? "bg-gray-200 cursor-not-allowed" : ""}`}
            >
              {data}
            </button>
          );
        })}
      </div>
    </PlanBoxWrapper>
  );
};
export default Minutes;
