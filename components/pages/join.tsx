import { motion } from "framer-motion";
import styled from "styled-components";
import {
    useParams,
    useHistory
} from "react-router-dom";
import Join from "./join/join";
import {CurseForge, GDLauncher} from "../data/join";

const Button = styled.button`
    background-color: transparent;
    border: 2px solid #fff;
    font-size: 1.5rem;
    font-weight: bold;
    color: #fff;
    font-family: 'Open Sans', sans-serif;   
    height: 4rem;
    width: 20rem;
    text-shadow:  2px  2px 10px #777 ,
               -2px  2px 10px #777 ,
                2px -2px 10px #777 ,
               -2px -2px 10px #777;
    transition: all .3s;
    &:hover {
        background-color: #fff;
        color: #000;
    }
`

function JoinSelect() {
    const history = useHistory();
    const { page } = useParams();
    let text = page as string;
    if (text === undefined) {
        text = "=";
    } else if (!(text.startsWith("gdl") || text.startsWith("cf"))) {
        history.push("/join");
    }
    const arrayImages = [];

    for (let i = 1; GDLauncher[i] !== undefined; i++) {
        // @ts-ignore
        // eslint-disable-next-line @next/next/no-img-element
        arrayImages.push(<img src={GDLauncher[i].image}  alt="Cache" style={{ display: 'none' }}/>);
    }

    for (let i = 1; CurseForge[i] !== undefined; i++) {
        // @ts-ignore
        // eslint-disable-next-line @next/next/no-img-element
        arrayImages.push(<img src={CurseForge[i].image}  alt="Cache" style={{ display: 'none' }}/>);
    }
    return (
        <motion.div
            animate={{
                opacity: 1
            }}
            initial={{
                opacity: 0
            }}
            transition={{
                duration: 0.2
            }}
        >
            <h1 style={{
                fontSize: `3rem`,
                display: 'block',
                color: '#fff',
                textAlign: 'center',
                transition: 'all 0.5s ease-in-out',
            }}>
                参加方法
            </h1>
            <div style={{
                textAlign: 'center',
            }}>
                <Button onClick={() => history.push("/join/gdl=1")}>GDLauncher</Button>
                <Button onClick={() => history.push("/join/cf=1")}>CurseForge</Button>
            </div>

            {Join(text.split("=")[0], parseInt(text.split("=")[1]))}

            {(() => {
                return <div>{ arrayImages }</div>
            })}
        </motion.div>
    );
}

export default JoinSelect;