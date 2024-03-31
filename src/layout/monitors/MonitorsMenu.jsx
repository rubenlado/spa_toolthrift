import { useEffect, useState } from "react";
import CustomButton from "../CustomButton";
import "./monitorsMenu.css";

const MonitorsMenu = ({
  setSelectedBrand,
  setNewMonitorModalVisible,
  setProducts,
}) => {
  const [monitors, setMonitors] = useState([
    { id: "all", name: "All" },
    { id: "custom", name: "Jeans" },
    { id: "kikokostadinov", name: "Kiko Kostadinov" },
    { id: "undercover", name: "Undercover" },
    { id: "junyawatanabe", name: "Junya Watanabe" },
    { id: "driesvannoten", name: "Dries Van Noten" },
    { id: "marcjacobs", name: "Marc Jacobs" },
    { id: "martinerose", name: "Martine Rose" },
    { id: "rickowens", name: "Rick Owens" },
    { id: "rafsimons", name: "Raf Simons" },
    { id: "yohjiyamamoto", name: "Yohji Yamamoto" },
    { id: "anndemeulemeester", name: "Ann Demeulemeester" },
    { id: "alexandermcqueen", name: "Alexander McQueen" },
    { id: "diesel", name: "Diesel" },
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

      {monitors?.length > 0 ? (
        <div className="monitors-menu__list">
          {monitors.map((monitor) => (
            <div
              className="cursor-pointer hover:bg-gray-100 py-2 rounded-md"
              key={monitor.id}
              onClick={() => {
                setProducts([]);
                setSelectedBrand(monitor);
              }}
            >
              {monitor.name}
            </div>
          ))}
        </div>
      ) : (
        <div className="monitors-menu__list mt-4">No monitors added yet!</div>
      )}
      <CustomButton
        text="Add monitor"
        onClick={() => setNewMonitorModalVisible(true)}
        className={"mt-4"}
      />
    </div>
  );
};

export default MonitorsMenu;
