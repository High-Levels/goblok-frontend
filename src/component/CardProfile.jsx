import { Card } from 'primereact/card';
import { Avatar } from 'primereact/avatar';
import { PanelMenu } from 'primereact/panelmenu';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';
import { Dialog } from 'primereact/dialog';
import { useState } from 'react';
import EditProfile from './EditProfile';


const CardProfile = () => {
    const [isLoggedIn] = useState(
        localStorage.getItem("refreshToken")
    );
    const navigasi = useNavigate()
    const handleLogout = () => {
        try {
            localStorage.removeItem('accessToken')
            localStorage.removeItem('refreshToken')
            //   setIsLoggedIn(false)
            navigasi('/login')
            //   toast.info('Logged out successfully')
        } catch (error) {
            console.log(error)
        }
    }
    const items = [
        {
            label: 'File',
            icon: 'pi pi-fw pi-file',
            items: [
                {
                    label: 'New',
                    icon: 'pi pi-fw pi-plus',
                    items: [
                        {
                            label: 'Bookmark',
                            icon: 'pi pi-fw pi-bookmark'
                        },
                        {
                            label: 'Video',
                            icon: 'pi pi-fw pi-video'
                        }
                    ]
                },
                {
                    label: 'Delete',
                    icon: 'pi pi-fw pi-trash'
                },
                {
                    label: 'Export',
                    icon: 'pi pi-fw pi-external-link'
                }
            ]
        },
        {
            label: 'Edit',
            icon: 'pi pi-fw pi-pencil',
            items: [
                {
                    label: 'Left',
                    icon: 'pi pi-fw pi-align-left'
                },
                {
                    label: 'Right',
                    icon: 'pi pi-fw pi-align-right'
                },
                {
                    label: 'Center',
                    icon: 'pi pi-fw pi-align-center'
                },
                {
                    label: 'Justify',
                    icon: 'pi pi-fw pi-align-justify'
                }
            ]
        },
        {
            label: 'Users',
            icon: 'pi pi-fw pi-user',
            items: [
                {
                    label: 'New',
                    icon: 'pi pi-fw pi-user-plus'
                },
                {
                    label: 'Delete',
                    icon: 'pi pi-fw pi-user-minus'
                },
                {
                    label: 'Search',
                    icon: 'pi pi-fw pi-users',
                    items: [
                        {
                            label: 'Filter',
                            icon: 'pi pi-fw pi-filter',
                            items: [
                                {
                                    label: 'Print',
                                    icon: 'pi pi-fw pi-print'
                                }
                            ]
                        },
                        {
                            icon: 'pi pi-fw pi-bars',
                            label: 'List'
                        }
                    ]
                }
            ]
        },
        {
            label: 'Events',
            icon: 'pi pi-fw pi-calendar',
            items: [
                {
                    label: 'Edit',
                    icon: 'pi pi-fw pi-pencil',
                    items: [
                        {
                            label: 'Save',
                            icon: 'pi pi-fw pi-calendar-plus'
                        },
                        {
                            label: 'Delete',
                            icon: 'pi pi-fw pi-calendar-minus'
                        }
                    ]
                },
                {
                    
                    label: 'Archive',
                    icon: 'pi pi-fw pi-calendar-times',
                    items: [
                        isLoggedIn?(
                            {
                                label: ' Logout',
                                icon: 'pi pi-sign-out',
                                command: handleLogout
                            }
                        ):(
                            {}
                        )
                    ]
                }
            ]
        }
    ];
    const [visible, setVisible] = useState(false);

    const showDialog = () => {
        setVisible(true);
    };

    const hideDialog = () => {
        setVisible(false);
    };
    const profileImage = localStorage.getItem("profileImage")
    return (
        <div className="card text-center card-profile">
            <Card>
                <div>
                    {
                        profileImage ?(
                            <img src={profileImage} onClick={showDialog} style={{width:"100px", borderRadius:"50%" }} alt="profile"/>
                        ):(
                            <Avatar icon="pi pi-user-edit" size="xlarge" onClick={showDialog}/>
                        )
                    }
                </div>
                <Dialog className='text-center' visible={visible} onHide={hideDialog}>
                    <EditProfile/>
                </Dialog>
                <h4>Username</h4>
                <div className="card flex justify-content-center mt-2">
                    <PanelMenu model={items} className="w-full md:w-25rem" />
                </div>
            </Card>
            <Card className='mt-2'>
                <Footer />
            </Card>
        </div>
    )
}

export default CardProfile;
