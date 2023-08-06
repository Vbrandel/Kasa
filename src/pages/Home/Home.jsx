// import Tag from '../../components/tag/Tag';
import Banner from '../../components/banner/Banner';
import Gallery from '../../components/gallery/Gallery';
import image from '../../assets/fond.jpg'
import './Home.scss';
import {useEffect, useState} from "react";

function Home() {

    const [appartements, setAppartements] = useState([])

    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then((data) => {
                setAppartements(data)
            })
    }, [])


    return (

        <div className="App">
            <div className='container'>
                <Banner
                    image={image}
                    imageTitre="Chez vous, partout et ailleurs"
                    alt="Paysage montagne"
                />
                <Gallery
                    appartements={appartements}
                />
            </div>
        </div>
    );
}

export default Home;