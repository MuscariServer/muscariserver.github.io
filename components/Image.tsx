import Image from 'next/image'

function ImageD(href: string, image: string) {
    if (href !== "") {
        return <a href={href}><Image src={image} width="600px" height="auto" /></a>;
    } else {
        return <Image src={image} width="600px" height="auto" />;
    }
}

export default ImageD;