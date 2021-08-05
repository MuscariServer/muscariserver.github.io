import Image from 'next/image'

function ImageD(href: string, image: string) {
    if (image === null) {
        return <></>
    }
    if (href !== "") {
        return <a href={href}><img src={image} width="800" height="auto" /></a>;
    } else {
        return <img src={image} width="800" height="auto" />;
    }
}

export default ImageD;