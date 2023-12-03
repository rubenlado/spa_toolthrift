import { useState } from "react";
import { BsArrowLeftShort } from "react-icons/bs";
const Sidebar = () => {
  const [open, setOpen] = useState(true);
  return (
    <div
      className={`bg-vinted-blue h-screen p-5 pt-8 ${
        open ? "w-72" : "w-20"
      } duration-300 relative`}
    >
      <BsArrowLeftShort
        className={`bg-white text-vinted-blue text-3xl rounded-full absolute -right-3 top-9 border border-dark-purple cursor-pointer ${
          !open && "rotate-180"
        }`}
        onClick={() => setOpen(!open)}
      />
      <h1
        className={`text-white origin-left font-medium text-2xl duration-300 ${
          !open && "scale-0"
        }`}
      >
        Toolthrift
      </h1>
    </div>
  );
};

export default Sidebar;
