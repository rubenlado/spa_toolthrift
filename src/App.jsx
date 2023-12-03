import { useState, useEffect } from "react";
import ItemCard from "./layout/ItemCard";
import io from "socket.io-client";
import MonitorsMenu from "./layout/monitors/MonitorsMenu";
import { Modal } from "./layout/Modal";
import NewMonitorForm from "./layout/monitors/NewMonitorForm";
import "./App.css";

const socket = io("/");

const App = () => {
  const [products, setProducts] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState("diesel");
  const [newMonitorModalVisible, setNewMonitorModalVisible] = useState(false);

  useEffect(() => {
    if (!selectedBrand.id) {
      return;
    }
    socket.emit("get products", { brand: selectedBrand.id });
  }, [selectedBrand.id]);

  useEffect(() => {
    let isValidScope = true;

    socket.on("product", (data) => {
      if (!isValidScope) {
        return;
      }

      if (!products.includes(data.id)) {
        setProducts((curr) => [data, ...curr]);
        console.log("nuevo producto", data);
      }

      console.log("eyyy tio", data);
    });
    return () => {
      // cleanup code, disconnect
      // socket.disconnect()
      isValidScope = false;
    };
  }, [selectedBrand.id, products]);

  return (
    <div className="flex w-full h-full pt-7">
      <Modal
        open={newMonitorModalVisible}
        onClose={() => setNewMonitorModalVisible(false)}
      >
        <NewMonitorForm />
      </Modal>
      <MonitorsMenu
        setSelectedBrand={setSelectedBrand}
        setNewMonitorModalVisible={setNewMonitorModalVisible}
        setProducts={setProducts}
      />
      <div className="max-h-screen overflow-auto w-full">
        <div className="flex  border-b-2 border-gray-100	">
          <h1>{selectedBrand?.name}</h1>
        </div>

        <div className="grid grid-cols-5 gap-4">
          {products.map((product, index) => (
            <ItemCard key={`${product.id}${index}`} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
