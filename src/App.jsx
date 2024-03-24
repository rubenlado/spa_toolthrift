import { useState, useEffect } from "react";
import ItemCard from "./layout/ItemCard";
import io from "socket.io-client";
import MonitorsMenu from "./layout/monitors/MonitorsMenu";
import { Modal } from "./layout/Modal";
import NewMonitorForm from "./layout/monitors/NewMonitorForm";
import InitialPage from "./layout/InitialPage";
import "./App.css";

const socket = io("/");

const App = () => {
  const [products, setProducts] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState();
  const [newMonitorModalVisible, setNewMonitorModalVisible] = useState(false);

  /**
  //Monorepo
    const vintedClient = new VintedClient();

  useEffect(() => {
    vintedClient.getProducts({ brandId: selectedBrand?.id, setProducts });
  }, [selectedBrand?.id]);
  */

  useEffect(() => {
    if (!selectedBrand?.id) {
      return;
    }
    socket.emit("get products", { brand: selectedBrand.id });
  }, [selectedBrand?.id]);

  useEffect(() => {
    let isValidScope = true;

    socket.on("product", (data) => {
      if (!isValidScope) {
        return;
      }

      if (!products.includes(data.id)) {
        setProducts((curr) => [data, ...curr]);
      }
    });
    return () => {
      // cleanup code, disconnect
      // socket.disconnect()
      isValidScope = false;
    };
  }, [selectedBrand?.id, products]);

  return (
    <>
      <Modal
        open={newMonitorModalVisible}
        onClose={() => setNewMonitorModalVisible(false)}
      >
        <NewMonitorForm />
      </Modal>
      <div className="flex w-full h-full p-7 verflow-hidden">
        <MonitorsMenu
          setSelectedBrand={setSelectedBrand}
          setNewMonitorModalVisible={setNewMonitorModalVisible}
          setProducts={setProducts}
        />
        {selectedBrand ? (
          <div className="h-full overflow-auto w-full">
            {selectedBrand.name && (
              <div className="flex  border-b-2 border-gray-100	header">
                <h1>{selectedBrand?.name}</h1>
              </div>
            )}
            <div className="item-grid">
              {products.map((product, index) => (
                <ItemCard key={`${product.id}${index}`} product={product} />
              ))}
            </div>
          </div>
        ) : (
          <InitialPage />
        )}
      </div>
    </>
  );
};

export default App;
