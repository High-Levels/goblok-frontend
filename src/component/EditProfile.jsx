import React from 'react'
import { useState } from 'react'
import { useRef } from 'react'
import axios from 'axios'
import { Avatar } from 'primereact/avatar'
import { Toast } from 'primereact/toast';
import { FileUpload } from 'primereact/fileupload';
import { ProgressBar } from 'primereact/progressbar';
import { Button } from 'primereact/button';
import { Tooltip } from 'primereact/tooltip';
import { Tag } from 'primereact/tag';


export default function EditpProfile() {
    const toast = useRef(null);
    const [totalSize, setTotalSize] = useState(0);
    const fileUploadRef = useRef(null);
    
    const onTemplateSelect = (e) => {
        let _totalSize = totalSize;
        let files = e.files;

        Object.keys(files).forEach((key) => {
            _totalSize += files[key].size || 0;
            
        });

        setTotalSize(_totalSize);
    };

    const onTemplateUpload = (e) => {
        let _totalSize = 0;

        e.files.forEach((file) => {
            _totalSize += file.size || 0;
        });

        setTotalSize(_totalSize);
        localStorage.setItem("profileImage", files);
        toast.current.show({ severity: 'info', summary: 'Success', detail: 'File Uploaded' });
    };

    const onTemplateRemove = (file, callback) => {
        setTotalSize(totalSize - file.size);
        callback();
    };

    const onTemplateClear = () => {
        setTotalSize(0);
    };

    const headerTemplate = (options) => {
        const { className, chooseButton, uploadButton, cancelButton } = options;
        const value = totalSize / 10000;
        const formatedValue = fileUploadRef && fileUploadRef.current ? fileUploadRef.current.formatSize(totalSize) : '0 B';

        return (
            <div className={className} style={{ backgroundColor: 'transparent', display: 'flex', alignItems: 'center' }}>
                {chooseButton}
                {uploadButton}
                {cancelButton}
                <div className="flex align-items-center gap-3 ml-auto">
                    <span>{formatedValue} / 1 MB</span>
                    <ProgressBar value={value} showValue={false} style={{ width: '10rem', height: '12px' }}></ProgressBar>
                </div>
            </div>
        );
    };

    const itemTemplate = (file, props) => {
        return (
            <div className="flex align-items-center flex-wrap">
                <div className="flex align-items-center" style={{ width: '40%' }}>
                    <img alt={file.name} role="presentation" src={file.objectURL} width={100} />
                    <span className="flex flex-column text-left ml-3">
                        {file.name}
                        <small>{new Date().toLocaleDateString()}</small>
                    </span>
                </div>
                <Tag value={props.formatSize} severity="warning" className="px-3 py-2" />
                <Button type="button" icon="pi pi-times" className="p-button-outlined p-button-rounded p-button-danger ml-auto" onClick={() => onTemplateRemove(file, props.onRemove)} />
            </div>
        );
    };

    const emptyTemplate = () => {
        return (
            <div className="flex align-items-center flex-column">
                <i className="pi pi-image mt-3 p-5" style={{ fontSize: '5em', borderRadius: '50%', backgroundColor: 'var(--surface-b)', color: 'var(--surface-d)' }}></i>
                <span style={{ fontSize: '1.2em', color: 'var(--text-color-secondary)' }} className="my-5">
                    Drag and Drop Image Here
                </span>
            </div>
        );
    };

    const chooseOptions = { icon: 'pi pi-fw pi-images', iconOnly: true, className: 'custom-choose-btn p-button-rounded p-button-outlined' };
    const uploadOptions = { icon: 'pi pi-fw pi-cloud-upload', iconOnly: true, className: 'custom-upload-btn p-button-success p-button-rounded p-button-outlined' };
    const cancelOptions = { icon: 'pi pi-fw pi-times', iconOnly: true, className: 'custom-cancel-btn p-button-danger p-button-rounded p-button-outlined' };

    return (
        <div>
            <Toast ref={toast}></Toast>

            <Tooltip target=".custom-choose-btn" content="Choose" position="bottom" />
            <Tooltip target=".custom-upload-btn" content="Upload" position="bottom" />
            <Tooltip target=".custom-cancel-btn" content="Clear" position="bottom" />

            <FileUpload ref={fileUploadRef} name="demo[]" accept="image/*" maxFileSize={1000000}
                onUpload={onTemplateUpload} onSelect={onTemplateSelect} onError={onTemplateClear} onClear={onTemplateClear}
                headerTemplate={headerTemplate} itemTemplate={itemTemplate} emptyTemplate={emptyTemplate}
                chooseOptions={chooseOptions} uploadOptions={uploadOptions} cancelOptions={cancelOptions} />
        </div>
    )
}

// const AvatarpProfile = () => {
//     const [profileImage, setProfileImage] = useState(null);
    
//     const handleImageChange = (e) => {
//         setProfileImage(e.target.files[0]);
//     };
//     const handleProfileUpdate = async (e) => {
        
        // e.preventDefault();

        // const formData = new FormData();
        // formData.append('profileImage', profileImage);

        // try {
        //     await axios.post('http://13.239.136.211/api/blog/update/profile/picture', formData, {
        //         headers: {
        //             'Content-Type': 'multipart/form-data',
        //         },
        //     });

        //     // Panggil fungsi onProfileUpdate dengan argumen true untuk menandakan profil telah diperbarui
        //     // onProfileUpdate(true);
        //     console.log(formData);
        // } catch (error) {
        //     console.error('Profile update error:', error);
        // }
    //     if (profileImage) {
    //         const reader = new FileReader();
      
    //         reader.onload = (event) => {
    //           const base64Image = event.target.result;
    //           localStorage.setItem('profileImage', base64Image);
    //         };
      
    //         reader.readAsDataURL(profileImage);
    //       }
    // }
//     const image = localStorage.getItem("profileImage");
//     const deleteProfile = (e)=>{
        
//         localStorage.removeItem("profileImage");
//     }
//     return (
//         <div>
//             <form onSubmit={handleProfileUpdate}>
//                 <h2>Update Profile</h2>
//                 {
//                     image?(
//                         <img src={image} style={{width:"100px", borderRadius:"50%" }} alt="foto"/>
//                         ):(
//                         <Avatar icon='pi pi-user' size='large'/>
//                     )
//                 }
//                 <br/>
//                 <input type="file" onChange={handleImageChange} />
//                 <button type="submit">Update</button>
//                 <button onClick={deleteProfile}>Delete</button>
//             </form>
//         </div>

//     )
// }

// export default AvatarpProfile