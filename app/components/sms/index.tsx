import PlanBoxWrapper from "../plan-box-wrapper";

export const SMS = ({ seleceted, plans, eligibility, handleSelect }: any) => {
  return (
    <PlanBoxWrapper>
      <div>
        <div className="font-bold">SMS</div>
        <div className="text-teal-500 font-semibold">{seleceted.sms} SMS</div>
      </div>
      <div className="flex items-center flex-wrap gap-3">
        {plans.sms.map((data: any, index: any) => {
          const isEligible = eligibility.sms.includes(data);
          return (
            <button
              disabled={!isEligible}
              onClick={() => handleSelect("sms", data)}
              key={index}
              className={`text-sm p-[2px] w-[60px] h-[60px] rounded-full shadow-md border flex items-center justify-center ${
                seleceted.sms === data ? "bg-teal-500 text-white" : ""
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
export default SMS;
