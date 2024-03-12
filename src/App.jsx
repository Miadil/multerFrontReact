import { useState } from "react";

import axios from "axios";

import "./App.css";

function App() {
  const [files, setFiles] = useState({}); //a coriger

  const handleUpload = () => {
    console.log("upload files01 ", files);
    const fromData = new FormData();
    // fromData.append("file", files);

    // files.forEach((file) => {
    //   console.log("file forEach", file);
    //   fromData.append("file", file);
    // });
    for (let i = 0; i < files.length; i++) {
      console.log("file for", files[i]);

      fromData.append("files", files[i]);
    }
    axios
      .post("http://localhost:4242/upload", fromData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.error(err));
  };

  return (
    <>
      <div>
        <input
          type="file"
          multiple //add ici multiple
          onChange={(e) => setFiles(e.target.files)} //retirer le [0]
        />
        <button type="button" onClick={handleUpload}>
          Upload
        </button>
      </div>
    </>
  );
}

export default App;
