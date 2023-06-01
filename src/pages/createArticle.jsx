// import React from 'react'
// import axios from "axios";
// import DanteEditor from "dante3/package/esm";
import { Button } from "primereact/button";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { Editor } from "primereact/editor";
import "primereact/resources/primereact.min.css";
// import "primereact/resources/themes/saga-blue/theme.css";
import "quill/dist/quill.bubble.css";
import axios from "axios";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
// import { Controller, useForm } from "react-hook-form";

const CreateArticle = () => {
  // const [article, setArticle] = useState({
  //   title: "",
  //   content: "",
  // });

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      title: title,
      content: content,
    };
    // console.log(article);
    console.log(title);
    console.log(content);
    try {
      const res = await axios.post(
        `http://13.239.136.211/api/blog/create/article`,
        payload
      );
      console.log(res);
      swal({
        title: "Good Job",
        text: res.data.message,
        icon: "success",
      });
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: "100px" }}>
      <Editor
        // onTextChange={(e) => setArticle({ ...article, title: e.htmlValue })}
        onTextChange={(e) => setTitle(e.htmlValue)}
        theme="bubble"
        placeholder="Judul"
        style={{
          fontSize: "32px",
          padding: "0",
          fontWeight: "bold",
        }}
      />
      {/* <input
        type="text"
        placeholder="Judul"
        onChange={(e) => setTitle(e.target.value)}
        style={{
          border: "none",
          outline: "none",
          fontSize: "32px",
          fontWeight: "bold",
        }}
      /> */}

      <Editor
        // onTextChange={(e) => setArticle({ ...article, content: e.htmlValue })}
        onTextChange={(e) => setContent(e.htmlValue)}
        // theme="bubble"
        placeholder="Ketikkan konten artikel di sini ..."
        style={{ padding: "0" }}
      />

      <Button
        label="Create Article"
        type="submit"
        severity="Primary"
        className="mt-3 p-2"
      />
    </form>
  );
};

export default CreateArticle;
