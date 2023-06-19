import React from 'react'
import { Card } from 'primereact/card'
import { useState, useEffect } from 'react'
import { Avatar } from 'primereact/avatar'
import { Dialog } from 'primereact/dialog'
import EditProfileImage from './EditProfileImage'
import axios from 'axios'

const CardProfileDetail = () => {
    const [visible, setVisible] = useState(false);
    const [user, setUser]= useState(null);

    useEffect(() => {
        fetchUserData();
    }, []);
    const fetchUserData = async () => {
        try {
            const response = await axios.get(`http://13.239.136.211/api/blog/list/users`);
            const users= response.data.Data[0];
            setUser(users);
            console.log(users);
        } catch (error) {
            console.error(error);
        }
    }
    const showDialog = () => {
        setVisible(true);
    };
    const hideDialog = () => {
        setVisible(false);
    };
    const profileImage = localStorage.getItem("profileImage");
    return (
        <div className='card'>
            <Card>
                <div className='flex justify-content-center flex-wrap'>
                    {
                        profileImage ? (
                            <img src={profileImage} onClick={showDialog} style={{ width: "100px", borderRadius: "50%" }} alt="profile" />
                        ) : (
                            <Avatar icon="pi pi-user-edit" size="xlarge" onClick={showDialog} />
                        )
                    }
                </div>
                <Dialog className='text-center' visible={visible} onHide={hideDialog} onClick={fetchUserData}>
                    <EditProfileImage />
                </Dialog>
                <div className='flex justify-content-center flex-wrap'>
                    {user && <h2>{user.username}</h2>}
                </div>
                <div className='flex justify-content-around flex-wrap'>
                    <div className='flex align-item-center justify-content-center'>
                        <h5>YOUR POST</h5>
                    </div>
                    <div className='flex align-item-center justify-content-center'>
                        <h5>FOLLOWERS</h5>
                    </div>
                    <div className='flex align-item-center justify-content-center'>
                        <h5>FOLLOWING</h5>
                    </div>
                </div>
                <div className='flex justify-content-around flex-wrap'>
                    <span>0</span>
                    <span>2,5k</span>
                    <span>2k</span>
                </div>
                <div>
                    <p className='text-center'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae
                        numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae
                        numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
                    </p>
                </div>
                <div className='flex flex-column'>
                    <a href='/profile' className='pt-5'>
                        {
                            user && <i className='pi pi-envelope' style={{ fontSize: "1rem", color: '#708090' }}> {user.email}</i>
                        }
                        
                    </a>
                    <a href='/profile' className='pt-5'>
                        <i className='pi pi-phone' style={{ fontSize: "1rem", color: '#708090' }}> 08123456789</i>
                    </a>
                    <a href='/profile' className='pt-5'>
                        <i className='pi pi-calendar' style={{ fontSize: "1rem", color: '#708090' }}> 28-2-1998</i>
                    </a>
                </div>
            </Card>
        </div>
    )
}

export default CardProfileDetail