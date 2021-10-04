import { AnimatePresence, motion } from "framer-motion";
import styled from "styled-components";
import {
    useParams,
    useHistory
} from "react-router-dom";
import Join from "./join/join";

function JoinSelect() {
    const history = useHistory();
    const { page } = useParams();
    let text = page as string;
    let bool = false;
    if (text === undefined) {
        text = "=";
    } else if (text.startsWith("gdl")) {
        bool = true;
    } else if (text.startsWith("cf")) {
        bool = true;
    } else {
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
            { Join(text.split("=")[0], parseInt(text.split("=")[1])) }
        </motion.div>
    );
}

export default JoinSelect;