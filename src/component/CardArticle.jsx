import { Card } from 'primereact/card';
import { Avatar } from 'primereact/avatar';
import { Button } from 'primereact/button';
import Image from '../assets/marlyn.jpg';
import { useState } from 'react';

const CardArticle = () => {
    const [like, setLike]=useState(0);
    const [isLiked, setIsLiked]=useState(false);
    const [isLoggedIn]=useState(
        localStorage.getItem('refreshToken') !== null
    );

    const handleLike = ()=>{
        if(isLiked){
            setLike(like - 1);
            setIsLiked(false);
        }else{
            setLike(like + 1);
            setIsLiked(true);
        }
    }
    return (
        <div className="card">
            <Card>
                <div className='flex flex-wrap'>
                    <div className='col-8 article-content'>
                        <div className='flex align-items-center'>
                            <Avatar icon="pi pi-user" size="medium" shape="circle" />
                            <p className='m-3'>Username</p>
                        </div>
                        <h2>Judul Artikel</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae
                            numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
                        </p>
                    </div>
                    <div className='col-2 card-item'>
                        <img src={Image} alt="image" style={{width:"210%"}}/>
                    </div>
                </div>
                <div className='flex justify-content-around mt-3'>
                    <span>0</span>
                    <span>0</span>
                    <span>{like}</span>
                </div>
                <div className='flex justify-content-around mt-3'>
                    <div className='flex align-items-center justify-content-center'>
                        {
                            isLoggedIn ? (
                                <Button icon="pi pi-reply" label='Share' severity='secondary' text/>
                            ):(
                                <Button icon="pi pi-reply" disabled="disable" label='Share' severity='secondary' text/>
                            )
                        }
                        {/* <Button icon="pi pi-reply" label='Share' severity='secondary' text/> */}
                    </div>
                    <div className='flex align-items-center justify-content-center'>
                        {
                            isLoggedIn ? (
                                <Button icon="pi pi-comment" label='Comment' severity='secondary' text/>
                            ):(
                                <Button icon="pi pi-comment" disabled="disable" label='Comment' severity='secondary' text/>
                            )
                        }
                    </div>
                    <div className='flex align-items-center justify-content-center'>
                        {
                            isLoggedIn ? (
                                
                                <Button onClick={handleLike} icon={isLiked?"pi pi-thumbs-up-fill":"pi pi-thumbs-up"} label='Like' severity='secondary' text/>
                                ):(
                                <Button icon="pi pi-thumbs-up" disabled="disable" label='Like' severity='secondary' text/>
                            )
                        }
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default CardArticle;
