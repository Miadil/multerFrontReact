import { useState } from "react";

import axios from "axios";

import "./App.css";

function App() {
  const [firstname, setFirstname] = useState("");
  const [email, setEmail] = useState("");
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
    // ajoutez les autres champs à formData
    fromData.append("firstname", firstname);
    fromData.append("email", email);
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
        <br />
        <input
          type="text"
          name="firstName"
          value={firstname}
          placeholder="Firstname"
          onChange={(e) => setFirstname(e.target.value)}
        />
        <br />
        <input
          type="email"
          name="email"
          value={email}
          placeholder="email@yolo.com"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />

        <button type="button" onClick={handleUpload}>
          Upload
        </button>
      </div>
    </>
  );
}

export default App;
