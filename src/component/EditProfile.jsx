import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Avatar } from 'primereact/avatar'


const AvatarpProfile = () => {
    const [profileImage, setProfileImage] = useState(null);
    
    const handleImageChange = (e) => {
        setProfileImage(e.target.files[0]);
    };
    const handleProfileUpdate = async (e) => {
        e.preventDefault();
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
        if (profileImage) {
            const reader = new FileReader();
      
            reader.onload = (event) => {
              const base64Image = event.target.result;
              localStorage.setItem('profileImage', base64Image);
            };
      
            reader.readAsDataURL(profileImage);
          }
    }
    const image = localStorage.getItem("profileImage");
    const deleteProfile = (e)=>{
        e.preventDefault();
        localStorage.removeItem("profileImage");
    }
    return (
        <div>
            <form onSubmit={handleProfileUpdate}>
                <h2>Update Profile</h2>
                {
                    image?(
                        <img src={image} style={{width:"100px", borderRadius:"50%" }} alt="foto"/>
                        ):(
                        <Avatar icon='pi pi-user' size='large'/>
                    )
                }
                <br/>
                <input type="file" onChange={handleImageChange} />
                <button type="submit">Update</button>
                <button onClick={deleteProfile}>Delete</button>
            </form>
        </div>

    )
}

export default AvatarpProfile