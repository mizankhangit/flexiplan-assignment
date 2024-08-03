export const PlanBoxWrapper = ({ children }: any) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-4 py-6 border-b">
      {children}
    </div>
  );
};
export default PlanBoxWrapper;
