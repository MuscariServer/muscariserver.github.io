import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useHistory
} from "react-router-dom";

import { motion } from "framer-motion";
import styled from 'styled-components';
import ImageD from "../Image";


function Join() {
    const history = useHistory();
    const { page } = useParams();
    const pageID = parseInt(page);
    const width = window.innerWidth - 500;

    let image = "";
    let message = "";
    let href = "";

    if (page === "0") {
        history.push("/join/1");
    }

    if (page === "15") {
        history.push("/join/14");
    }

    switch (pageID) {
        case 1:
            image = "images/discord/discord.png";
            message = "当サーバーでは遊ぶためにDiscord連携が必要となっております。\n通話の強要は一切ありませんのでご安心下さい。\nまた、これ以降でわからないことがあったらDiscordまたはお問い合わせフォームで質問して下さい。"
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

            style={{
                textAlign: 'center',
                color: `#fff`,
                fontSize: `1rem`,
            }}
        >
            <h1 style={{
                fontSize: `3rem`
            }}>
                参加方法
            </h1>

            <div style={{
                display: 'inline-block',
                position: 'fixed',
                top: '500px',
                cursor: 'pointer',
                fontSize: `3rem`,
            }} onClick={() => {
                history.push("/join/" + (pageID - 1));
            }} className="shadow">＜</div>
            <div id="canvas" style={{
                display: 'inline-block',
                position: 'relative',
                width: width + 'px',
                margin: '50px',
                height: '750px',
                transition: 'all 0.2s ease-in-out',
                opacity: 1,
            }}>
                <div id="thumbnail">
                    {ImageD(href, image)}
                </div>
                <div id="description" style={{
                    background: 'rgba(0, 0, 0, 0.5)',
                    padding: '10px',
                    width: '500px',
                    textAlign: 'center',
                    display: 'inline-block',
                    borderRadius: '20px',
                }}>
                    {
                        message.split('\n').map((str, index) => (
                            <React.Fragment key={index}>{str}<br /></React.Fragment>
                        ))
                    }
                </div>
            </div>
            <div style={{
                display: 'inline-block',
                position: 'fixed',
                top: '500px',
                cursor: 'pointer',
                fontSize: `3rem`,
            }} onClick={() => {
                history.push("/join/" + (pageID + 1));
            }} className="shadow">＞</div>
        </motion.div>
    )
}

export default Join;