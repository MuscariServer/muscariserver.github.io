function ImageD(href:string, image:string) {
    if(href !== "") {
        return <a href={href}><img src={image} width="600px" height="auto"/></a>;
    } else {
        return <img src={image} width="600px" height="auto"/>;
    }
}

export default ImageD;