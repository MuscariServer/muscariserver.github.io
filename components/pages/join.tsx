import React from "react";
import {
    useParams,
    useHistory
} from "react-router-dom";

import { AnimatePresence, motion } from "framer-motion";
import styled from "styled-components";
import { GDLauncher } from "../data/join";

const DIV = styled.div`
    display: inline-block;
    position: fixed;
    cursor: pointer;
    font-size: 3rem;
    top: 50%;
    width: 80px;
    text-align: center;
    border-radius: 100%;
    background: rgba(0, 0, 0, 0.5);
    transition: all 0.1s ease-in-out;

    &:hover {
        background: rgba(255, 255, 255, 0.5);
        color: #000;
    }

    &:active {
        background: #fff;
    }
`

function Join() {
    const history = useHistory();
    const { page } = useParams();
    const pageID = parseInt(page);

    let image = GDLauncher[pageID].image;
    let message = GDLauncher[pageID].message;
    let href = GDLauncher[pageID].href;
    let imageTag;

    if (href !== "") {
        imageTag = (
            <a href={href} style={{}}>
                <motion.img
                    key={pageID}
                    src={image}
                    initial="enter"
                    animate="center"
                    width="750px"
                />
            </a>
        );
    } else {
        imageTag = (
            <motion.img
                key={pageID}
                src={image}
                initial="enter"
                animate="center"
                width="750px"
            />
        );
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
            }}>
            <h1 style={{
                fontSize: `3rem`,
                display: 'block',
                color: '#fff',
                textAlign: 'center',
            }}>
                参加方法
            </h1>
            <AnimatePresence>
                <div style={{
                    display: 'block',
                    color: '#fff',
                }}>
                    <DIV style={{
                        transform: 'scale(-1, 1)',
                        left: '25%',
                    }} onClick={() => {
                        if (pageID !== 1) {
                            history.push("/join/" + (pageID - 1));
                        }
                    }} className="shadow">‣</DIV>
                    <div style={{
                        display: 'inline-block',
                        margin: '10px'
                    }}>
                        {
                            imageTag
                        }
                        <div id="description" style={{
                            background: 'rgba(0, 0, 0, 0.5)',
                            width: '750px',
                            textAlign: 'center',
                            borderRadius: '20px',
                        }}>
                            {
                                message.split('\n').map((str, index) => (
                                    <React.Fragment key={index}>{str}<br /></React.Fragment>
                                ))
                            }
                        </div>
                    </div>
                    <DIV style={{
                        right: '25%',
                    }} onClick={() => {
                        if (pageID !== 14) {
                            history.push("/join/" + (pageID + 1));
                        }
                    }} className="shadow">‣</DIV>
                </div>
            </AnimatePresence>
        </motion.div>
    )
}

export default Join;