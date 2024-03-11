import { useState } from "react";

import axios from "axios";

import "./App.css";

function App() {
  const [files, setFiles] = useState();

  const handleUpload = () => {
    console.log(files);
    const fromData = new FormData();
    fromData.append("file", files);
    // files.forEach((file) => {
    //   fromData.append("file", file);
    // });
    axios
      .post("http://localhost:4242/upload", fromData)
      .then((res) => {})
      .catch((err) => console.error(err));
  };

  return (
    <>
      <div>
        <input
          type="file"
          // multiple //add ici multiple
          onChange={(e) => setFiles(e.target.files[0])} //retirer le [0]
        />
        <button type="button" onClick={handleUpload}>
          Upload
        </button>
      </div>
    </>
  );
}

export default App;
