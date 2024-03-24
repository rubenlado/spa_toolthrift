import { useEffect, useState } from "react";
import CustomButton from "../CustomButton";
import "./monitorsMenu.css";

const MonitorsMenu = ({
  setSelectedBrand,
  setNewMonitorModalVisible,
  setProducts,
}) => {
  const [monitors, setMonitors] = useState([
    { id: "custom", name: "Jeans" },
    { id: "kikokostadinov", name: "Kiko Kostadinov" },
    { id: "diesel", name: "Diesel" },
    { id: "marcjacobs", name: "Marc Jacobs" },
    { id: "martinerose", name: "Martine Rose" },
    { id: "rickowens", name: "Rick Owens" },
    { id: "rafsimons", name: "Raf Simons" },
    { id: "yohjiyamamoto", name: "Yohji Yamamoto" },
    { id: "undercover", name: "Undercover" },
    { id: "junyawatanabe", name: "Junya Watanabe" },
    { id: "driesvannoten", name: "Dries Van Noten" },
    { id: "anndemeulemeester", name: "Ann Demeulemeester" },
    { id: "alexandermcqueen", name: "Alexander McQueen" },
    { id: "helmutlang", name: "Helmut Lang" },
    { id: "issey", name: "Issey Miyake" },
    { id: "miharayasuhiro", name: "Mihara Yasuhiro" },
    { id: "maisonmargiela", name: "Maison Margiela" },
  ]);

  useEffect(() => {
    //Load monitors saved
  }, []);
  return (
    <div className="monitors-menu">
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
