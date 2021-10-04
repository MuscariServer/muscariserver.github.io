import React from "react";
import {
    useParams,
    useHistory
} from "react-router-dom";

import { AnimatePresence, motion } from "framer-motion";
import styled from "styled-components";
import { CurseForge, GDLauncher } from "../../data/join";

const DIV = styled.div<{ visible: boolean }>`
    display: inline-block;
    position: fixed;
    cursor: ${props => (props.visible ? "pointer" : "default")};
    font-size: 3rem;
    top: 50%;
    width: 80px;
    text-align: center;
    border-radius: 100%;
    background: rgba(0, 0, 0, 0.5);
    transition: all 0.1s ease-in-out;
    opacity: ${props => (props.visible ? 1 : 0)};

    &:hover {
        background: rgba(255, 255, 255, 0.5);
        color: #000;
    }

    &:active {
        background: #fff;
    }
`

function Join(text: string, pageID: number) {
    const history = useHistory();
    
    let image = "";
    let message = "";
    let href = "";

    let boolG = false;
    let boolB = false;

    let visible = true;

    if(text === "gdl") {
        image = GDLauncher[pageID].image;
        message = GDLauncher[pageID].message;
        href = GDLauncher[pageID].href;
        if (GDLauncher[(pageID + 1)] !== undefined) {
            boolG = true;
        }
        if (GDLauncher[(pageID - 1)] !== undefined) {
            boolB = true;
        }
    } else if (text === "cf") {
        image = CurseForge[pageID].image;
        message = CurseForge[pageID].message;
        href = CurseForge[pageID].href;
        if (CurseForge[(pageID + 1)] !== undefined) {
            boolG = true;
        }
        if (CurseForge[(pageID - 1)] !== undefined) {
            boolB = true;
        }
    } else {
        visible = false;
        message = "当サーバーでは、Modの導入にGDLauncherもしくはCurseForgeを使用しています。\n使用したいランチャーを選んで、参加方法へ進んでください。";
    }

    
    let imageTag = (<></>);

    if (href !== "" && visible) {
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
            <AnimatePresence>
                <div style={{
                    display: 'block',
                    color: '#fff',
                }}>
                    <DIV style={{
                        transform: 'scale(-1, 1)',
                        left: '25%',
                    }} onClick={() => {
                        if (boolB && visible) {
                            history.push("/join/" + text + "=" + (pageID - 1));
                        }
                    }} className="shadow" visible={boolB && visible}>‣</DIV>
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
                            padding: '20px',
                            textAlign: 'center',
                            display: 'block',
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
                        if (boolG && visible) {
                            history.push("/join/" + text + "=" + (pageID + 1));
                        }
                    }} className="shadow" visible={boolG && visible}>‣</DIV>
                </div>
            </AnimatePresence>
        </motion.div>
    )
}

export default Join;