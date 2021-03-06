import { motion } from "framer-motion";
import styled from "styled-components";
import {
    useParams,
    useHistory
} from "react-router-dom";
import Join from "./join/join";

const Button = styled.button`
    background-color: transparent;
    border: 2px solid #fff;
    font-size: 1.5rem;
    font-weight: lighter;
    color: #fff;
    font-family: 'Open Sans', sans-serif;   
    height: 4rem;
    width: 20rem;
    transition: all .3s;
    &:hover {
        background-color: #fff;
        color: #000;
    }
`

function JoinPage() {
    const history = useHistory();
    // @ts-ignore
    const { page } = useParams();
    let text = page as string;
    if (text === undefined) {
        text = "=";
    } else if (!(text.startsWith("gdl") || text.startsWith("cf"))) {
        history.push("/join");
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
        </motion.div>
    );
}

export default JoinPage;