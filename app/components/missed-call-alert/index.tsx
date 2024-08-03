import PlanBoxWrapper from "../plan-box-wrapper";

export const MissedCallAlert = ({ seleceted, handleSelect }: any) => {
  return (
    <PlanBoxWrapper>
      <div>
        <div className="font-bold">Missed Call Alert</div>
        <div className="text-[#2196f3] font-semibold">
          {seleceted.mca === 0 ? "Off" : "On"}
        </div>
        <div>Validity: 30 days</div>
      </div>
      <label className="switch">
        <input
          defaultChecked={seleceted.mca === 1 ? true : false}
          type="checkbox"
          onChange={(e) => {
            const val = e.target.checked === true ? 1 : 0;
            handleSelect("mca", val);
          }}
        />
        <span className="slider round"></span>
      </label>
    </PlanBoxWrapper>
  );
};
export default MissedCallAlert;
