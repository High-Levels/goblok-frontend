import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const AvatarpProfile = () => {
    const [profileImage, setProfileImage] = useState(null);

    const handleImageChange = (e) => {
        setProfileImage(e.target.files[0]);
    };
    const handleProfileUpdate = async (e) => {
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
    return (
        <div>
            <form onSubmit={handleProfileUpdate}>
                <h2>Update Profile</h2>
                <input type="file" onChange={handleImageChange} />
                <button type="submit">Update</button>
            </form>
        </div>

    )
}

export default AvatarpProfile