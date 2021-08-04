import Image from 'next/image'

function ImageD(href: string, image: string) {
    if (image === null) {
        return <></>
    }
    if (href !== "") {
        return <a href={href}><Image src={image} width={1000} height={600}/></a>;
    } else {
        return <Image src={image} width={1000} height={600}/>;
    }
}

export default ImageD;