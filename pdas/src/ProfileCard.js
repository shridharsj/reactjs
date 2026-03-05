function ProfileCard({title, handle, image, description}){
    return (
        <div className="card">
            <div className="card-image">
                <figure className="image is-1by1">
                    <img src={image} alt="PDA Logo"/>
                </figure>
            </div>
            <div clasName="card-content">
                <div className="media-content" style={{padding:"10px"}}>
                    <p className="title is-4">{title}</p>
                    <p classname="subtitle is-6">{handle}</p>
                    <p classname="content">{description}</p>
                </div>
            </div>
        </div>
    );
}


export default ProfileCard;