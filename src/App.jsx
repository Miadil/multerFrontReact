import { useState } from "react";

import axios from "axios";

import "./App.css";

function App() {
  const [file, setFile] = useState();

  const handleUpload = () => {
    const fromData = new FormData();
    fromData.append("file", file);
    axios
      .post("http://localhost:4242/upload", fromData)
      .then((res) => {})
      .catch((err) => console.error(err));
  };

  return (
    <>
      <div>
        <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        <button type="button" onClick={handleUpload}>
          Upload
        </button>
      </div>
    </>
  );
}

export default App;
