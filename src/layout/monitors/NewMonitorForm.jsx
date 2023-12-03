import { useState } from "react";

const NewMonitorForm = () => {
  const [name, setName] = useState("");
  const [resolution, setResolution] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleResolutionChange = (e) => {
    setResolution(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to handle form submission here
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={handleNameChange} />
      </label>
      <label>
        Resolution:
        <input
          type="text"
          value={resolution}
          onChange={handleResolutionChange}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default NewMonitorForm;
