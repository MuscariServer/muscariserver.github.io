import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useHistory
} from "react-router-dom";

import { AnimatePresence, motion } from "framer-motion";
import styled from "styled-components";

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

    let image = "";
    let message = "";
    let href = "";

    switch (pageID) {
        case 1:
            image = "images/discord/discord.png";
            message = "当サーバーでは遊ぶためにDiscord連携が必要となっております。\n通話の強要は一切ありませんのでご安心下さい。\nまた、これ以降でわからないことがあったらDiscordまたはお問い合わせフォームで質問して下さい。\n上の画像をクリックでDiscordに参加できます。"
            href = "https://discord.gg/mTbgeP8";
            break;
        case 2:
            image = "images/GDL/GD0.png";
            message = "当サーバーではGDLauncherをModの導入に採用しております。\nMod構成ごとにMinecraftのインスタンスを作成しているため、\n他のMod環境で遊ぶ際に再導入の必要がありません。\n上の画像をクリックでダウンロードページに飛べます。"
            href = "https://gdevs.io/#downloadContainer";
            break;
        case 3:
            image = "images/GDL/GD1.png";
            message = "GDLauncherのセットアップファイルを開くと次のように出るので、\n\"Automatic Setup\"を選択。(後からでも設定可能)"
            break;
        case 4:
            image = "images/GDL/GD2.png";
            message = "Minecraftのログイン情報を入力し、GDLauncherにログインします。";
            break;
        case 5:
            image = "images/download.jpg";
            message = "(※これは適当に拾ってきたダウンロードボタンの画像です)\nここからModPackのzipファイルをダウンロードします。"
            href = "https://github.com/Naini0712/Modserver_GDLauncher/raw/1.1/Muscari_S10_r-1.1.zip"
            break;
        case 6:
            image = "images/GDL/GD3.png";
            message = "左下の「+」ボタンをクリックします。"
            break;
        case 7:
            image = "images/GDL/GD4.png";
            message = "\"Import Zip\" を選択し、ダウンロードしたzipファイルを開きます。\nそうしたら右下の「→」ボタンをクリックします。\n次のページは適当に名前を決めて「→」ボタンをクリックしましょう。"
            break;
        case 8:
            image = "images/setup/0.png";
            message = "出来上がったインスタンスを起動します。";
            break;
        case 9:
            image = "images/setup/1.png";
            message = "起動したら、サーバーアドレス: \"muscari.fun\"にアクセスします。";
            break;
        case 10:
            image = "images/setup/2.png";
            message = "そうするとこういう画面になるので、Discordを開きます。"
            break;
        case 11:
            image = "images/setup/3.png";
            message = "Muscariサーバーの右上にDiscordSRVというBotがいるので右クリックします。"
            break;
        case 12:
            image = "images/setup/4.png";
            message = "そうしたら、「メッセージ」をクリックしDMを開きます。"
            break;
        case 13:
            image = "images/setup/5.png";
            message = "そして、先程のMinecraftの画面に出ている数字を送信します。"
            break;
        case 14:
            image = "images/setup/6.png";
            message = "この返信が帰ってきたら、Minecraftのサーバーに入り直してみてください。\nこれで終了です。お疲れさまでした。"

    }
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