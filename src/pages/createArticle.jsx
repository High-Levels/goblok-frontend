// import React from 'react'
import DanteEditor from "dante3/package/esm";
import { Button } from "primereact/button";

const CreateArticle = () => {
  return (
    <div style={{ padding: "100px" }}>
      <DanteEditor bodyPlaceholder={"Title"} />
      <DanteEditor bodyPlaceholder={"Type content here ..."} />
      <Button label="Create Article" severity= "Primary" className="mt-3" />
    </div>
  );
};

export default CreateArticle;
