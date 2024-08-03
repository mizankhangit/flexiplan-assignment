import PlanBoxWrapper from "../plan-box-wrapper";

export const Validity = ({ seleceted, plans, handleSelectValidity }: any) => {
  return (
    <PlanBoxWrapper>
      <div>
        <div className="font-bold">Validity</div>
        <div className="text-green-500 font-semibold">
          {seleceted?.longevity} {seleceted?.longevity === 1 ? "Day" : "Days"}
        </div>
      </div>
      <div className="flex items-center flex-wrap gap-3">
        {plans?.longevity?.map((day: any, index: any) => {
          return (
            <button
              onClick={() => handleSelectValidity(day)}
              key={index}
              className={`text-sm p-[2px] w-[60px] h-[60px] rounded-full shadow-md border flex items-center justify-center ${
                seleceted?.longevity === day ? "bg-green-500 text-white" : ""
              }`}
            >
              {day}
            </button>
          );
        })}
      </div>
    </PlanBoxWrapper>
  );
};
export default Validity;
