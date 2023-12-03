import { useEffect, useState } from "react";
import CustomButton from "../CustomButton";

const MonitorsMenu = ({
  setSelectedBrand,
  setNewMonitorModalVisible,
  setProducts,
}) => {
  const [monitors, setMonitors] = useState([
    { id: "kikokostadinov", name: "Kiko Kostadinov" },
    { id: "diesel", name: "Diesel" },
  ]);

  useEffect(() => {
    //Load monitors saved
  }, []);
  return (
    <div className="@apply inline-flex flex-col items-start mt-14 pr-8 ml-16	w-52 	">
      <h1 className="text-2xl font-bold">Monitors</h1>
      {monitors.map((monitor) => (
        <div
          key={monitor.id}
          className="cursor-pointer"
          onClick={() => {
            setProducts([]);
            setSelectedBrand(monitor);
          }}
        >
          <div className="flex gap items-center gap-14 py-4">
            {monitor.name} +
          </div>
        </div>
      ))}
      <CustomButton onClick={() => setNewMonitorModalVisible(true)} />
    </div>
  );
};

export default MonitorsMenu;
