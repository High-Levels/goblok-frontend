import React from 'react'
import { useState, useRef } from 'react'
import axios from 'axios'
import { Avatar } from 'primereact/avatar'
import { Button } from 'primereact/button'
import { Toast } from 'primereact/toast';




const AvatarpProfile = () => {
    const toast = useRef(null)
    const [selectedFile, setSelectedFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);

    const onFileSelect = (event) => {
        const file = event.target.files[0];

        if (file) {
            setSelectedFile(file);

            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewUrl(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const onUpload = () => {
        if (selectedFile) {
            const reader = new FileReader();
            reader.onloadend = () => {
              const dataUrl = reader.result;
              localStorage.setItem('profileImage', dataUrl);
              console.log('Image uploaded and saved to localStorage.');
            };
            reader.readAsDataURL(selectedFile);
          }
          toast.current.show({ severity: 'info', summary: 'Success', detail: 'Foto profil telah di update' });
    };

    const clearFile = () => {
        setSelectedFile(null);
        setPreviewUrl(null);
    };
    const deleteImage =()=>{
        localStorage.removeItem("profileImage");
        toast.current.show({ severity: 'info', summary: 'Success', detail: 'Foto profil telah dihapus' });
    }
    return (
        <div>
            <Toast ref={toast}></Toast>
            {previewUrl && <img src={previewUrl} alt="Preview" style={{width:"100px", borderRadius:"50%" }} />}
            <br/>
            <br/>
            <input type="file" onChange={onFileSelect} className='mb-4' />
            <br/>
            <Button label="Upload" onClick={onUpload} disabled={!selectedFile} className='mb-2' />
            <br/>
            <Button label="Clear" onClick={clearFile} disabled={!selectedFile} className='mb-2' />
            <br/>
            <Button label="Delete Image" onClick={deleteImage} />
        </div>
    );
};

export default AvatarpProfile