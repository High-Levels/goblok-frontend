import React from 'react'
import { useState, useRef } from 'react'
import axios from 'axios'
import { Avatar } from 'primereact/avatar'
import { Button } from 'primereact/button'
import { Toast } from 'primereact/toast';
import { editUser } from '../services/auth'





const EditProfileImage = () => {
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
    const handleUpload= async(e, id)=>{
        e.preventDefault();
        const formData = new FormData();
            formData.append('picture', selectedFile);
            try{
                await editUser(id, formData,{
                    Headers:{
                        'Content-Type':'multipart/form-data',
                    }
                });
                console.log(formData);
            }catch{
                console.log("error");
            }
    }
    const onUpload = async (e) => {
        e.preventDefault();
        if (selectedFile) {
            const reader = new FileReader();
            reader.onloadend = async(id) => {
                const dataUrl = reader.result;
                // await editUser('picture', formData,{
                //     Headers:{
                //         'Content-Type':'multipart/form-data',
                //     }
                // });
                localStorage.setItem("profileImage",dataUrl);
                console.log(dataUrl);
            };
            
            // const formData = new FormData();
            // formData.append('picture', selectedFile);
            // try {
            //     await axios.put('/api/user/profile', formData, {
            //         headers: {
            //             'Content-Type': 'multipart/form-data',
            //         },
            //     });

            //     alert('Foto profil berhasil diperbarui');
            // } catch (error) {
            //     console.error(error);
            //     alert('Terjadi kesalahan saat memperbarui foto profil');
            // }
            reader.readAsDataURL(selectedFile);
        }
        
        toast.current.show({ severity: 'info', summary: 'Success', detail: 'Foto profil telah di update' });
    };

    const clearFile = () => {
        setSelectedFile(null);
        setPreviewUrl(null);
    };
    const deleteImage = () => {
        localStorage.removeItem("profileImage");
        toast.current.show({ severity: 'info', summary: 'Success', detail: 'Foto profil telah dihapus' });
    }
    return (
        <div>
            <Toast ref={toast}></Toast>
            {previewUrl && <img src={previewUrl} alt="Preview" style={{ width: "100px", borderRadius: "50%" }} />}
            <br />
            <br />
            <input type="file" onChange={onFileSelect} className='mb-4' />
            <br />
            <Button label="Upload" onClick={onUpload} disabled={!selectedFile} className='mb-2' />
            <br />
            <Button label="Clear" onClick={clearFile} disabled={!selectedFile} className='mb-2' />
            <br />
            <Button label="Delete Image" onClick={deleteImage} />
        </div>
    );
};

export default EditProfileImage;