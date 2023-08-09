import './thumbnail.scss'

const Thumbnail = (props) => {
    return <div  className="thumbnail" 
    style={{background: `url(${props.image}) center`}}
    alt="Appartement">
        <div className="background">
            <p>{props.title}</p>
        </div>
    </div>
}

export default Thumbnail;