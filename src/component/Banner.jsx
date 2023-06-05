import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';

const Banner =()=> {
    const navigate = useNavigate();
    return (
        <div className="card text-center">
            <Card title="banner">
                <p className="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae 
                    numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
                    JIKA ANDA INGIN MENGGUNAKAN FITUR YANG ADA DISINI, HARAP LOGIN GoBlog
                </p>
                <br/>
                <Button icon="pi pi-sign-in" label='Login' onClick={(e)=>(navigate("/login"))}/>
            </Card>
        </div>
    )
}

export default Banner;
        