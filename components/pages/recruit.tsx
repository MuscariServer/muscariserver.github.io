import { motion } from "framer-motion";
import styled from 'styled-components';

const DIV = styled.div`
    width: 100vh;
    overflow-y: auto;
    height: 100vh;
    background-color: rgba(255,255,255,0.5);
    position: center;
    text-align: center;
`

const Item = styled.div`
    display: inline-block;
    margin: 1rem;
    vertical-align: top;
    position: center;
    border: 2px solid #ccc;
    border-radius: 10px;
    width: 400px;
    height: 250px;
`

const Button = styled.button`
    cursor: pointer;
    background-color: transparent;
    border: 2px solid #fff;
    border-radius: 10px;
    font-size: 2rem;
    font-weight: bold;
    color: #fff;
    font-family: 'Open Sans', sans-serif;   
    height: 5rem;
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

function Recruit() {
    return (
        <motion.div
            animate={{
                x: 0,
                opacity: 1
            }}
            initial={{
                opacity: 0
            }}
            exit={{
                opacity: 0
            }}
            transition={{
                duration: 0.2
            }}

            style={{
                textAlign: 'center',
                color: `#fff`,
                fontSize: `2rem`,
            }}
        >
            <DIV>
                <h1>開発陣募集</h1>
                <div>
                    <Item>
                        <img src={'./images/recruit/mod.png'} width="150" height="150"/>
                        <ul style={{
                            fontSize: `15px`,
                            color: `#000`
                        }}>
                            <li>多くのModに精通しているプレイヤーは僅かな為、<br/>幅広いModに強い方をお待ちしております。</li>
                        </ul>
                    </Item>
                    <Item>
                        <img src={'./images/recruit/program.png'} width="150" height="150"/>
                        <ul style={{
                            fontSize: `15px`,
                            color: `#000`
                        }}>
                            <li>
                                既存のModやプラグインのみでは<br/>カバーできない問題が発生した場合、<br/>
                                独自のModやプラグインを作成してくれる<br/>方をお待ちしております。
                            </li>
                        </ul>
                    </Item>
                </div>
                <div>
                    <Item>
                        <img src={'./images/recruit/hassou.png'} width="150" height="150"/>
                        <ul style={{
                            fontSize: `15px`,
                            color: `#000`
                        }}>
                            <li>イベントや新しいシステムの発案など、<br/>柔軟な発想ができる方をお待ちしております。</li>
                        </ul>
                    </Item>
                    <Item>
                        <img src={'./images/recruit/design.png'} width="150" height="150"/>
                        <ul style={{
                            fontSize: `15px`,
                            color: `#000`
                        }}>
                            <li>
                                追加アイテムのテクスチャやイラストが描ける方、<br/>
                                建築が得意な方をお待ちしております。
                            </li>
                        </ul>
                    </Item>
                </div>
                <div>
                    <Item>
                        <img src={'./images/recruit/en.png'} width="150" height="150"/>
                        <ul style={{
                            fontSize: `15px`,
                            color: `#000`
                        }}>
                            <li>サーバーに熱意を持って参加したい方、<br/>開発陣への参加をお待ちしております。</li>
                        </ul>
                    </Item>
                    <Item>
                        <img src={'./images/recruit/alpha.png'} width="150" height="150"/>
                        <ul style={{
                            fontSize: `15px`,
                            color: `#000`
                        }}>
                            <li>
                                当サーバーは求める人材への<br/>多様性を尊重します。<br/>他にも素晴らしいアピールポイントが<br/>ある方をお待ちしております。
                            </li>
                        </ul>
                    </Item>
                </div>
                <a href="https://forms.gle/YHTgZcKtEUjchM2F9">
                    <Button>応募する</Button>
                </a>
            </DIV>
        </motion.div>
    )
}

export default Recruit;