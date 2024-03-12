import { useState } from "react";

import axios from "axios";

import "./App.css";

function App() {
  const [files, setFiles] = useState({
    image1: null,
    image2: null,
    image3: null,
    // ajoutez plus de clés si vous en avez besoin
  });

  const handleFileChange = (e) => {
    setFiles({
      ...files,
      [e.target.name]: e.target.files[0],
    });
  };

  const handleUpload = () => {
    console.log("upload files01 ", files);
    const fromData = new FormData();
    // fromData.append("file", files);

    // files.forEach((file) => {
    //   console.log("file forEach", file);
    //   fromData.append("file", file);
    // });
    // for (let i = 0; i < files.length; i++) {
    //   console.log("file for", files[i]);

    //   fromData.append("files", files[i]);
    // }
    for (let key in files) {
      if (files[key]) {
        console.log(key, files[key]);
        fromData.append(key, files[key]);
      }
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
        <input type="file" name="image1" onChange={handleFileChange} />
        <input type="file" name="image2" onChange={handleFileChange} />
        <input type="file" name="image3" onChange={handleFileChange} />
        <button type="button" onClick={handleUpload}>
          Upload
        </button>
      </div>
    </>
  );
}

export default App;
