import { motion } from "framer-motion";
import styled from 'styled-components';

const DIV = styled.div`
    width: 1500px;
    overflow-y: auto;
    height: 90vh;
    background-color: rgba(0, 0, 0, 0.5);
    position: center;
    text-align: center;
`

const Item = styled.div`
    padding: 15px;
    display: inline-block;
    margin: 1rem;
    vertical-align: top;
    position: relative;
    width: 275px;
    height: 275px;
    border-radius: 100%;
    border: black;
`

const OverRay = styled.div`
    position: absolute;
    top: 12px;
    bottom: 0;
    left: 12px;
    right: 0;
    height: 250px;
    width: 250px;
    opacity: 0;
    transition: .5s ease;
    border-radius: 200%;
    background-color: rgba(0, 0, 0, 0.9);

    &:hover {
        opacity: 1;
    }
`

const Image = styled.img`
    display: block;
    width: 100%;
    height: auto;
`

const Text = styled.div`
    color: white;
    font-size: 15px;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    text-align: center;
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
                fontSize: `2rem`,
            }}
        >
            <DIV>
                <h1>開発陣募集</h1>
                <div>
                    <Item>
                        <Image src={'images/recruit/mod.png'} width={150} height={150} />
                        <OverRay>
                            <Text>多くのModに精通しているプレイヤーは僅かな為、幅広いModに強い方をお待ちしております。</Text>
                        </OverRay>
                    </Item>
                    <Item>
                        <Image src={'images/recruit/program.png'} width={150} height={150} />
                        <OverRay>
                            <Text>
                                既存のModやプラグインのみではカバーできない問題が発生した場合、
                                独自のModやプラグインを作成してくれる方をお待ちしております。
                            </Text>
                        </OverRay>
                    </Item>
                    <Item>
                        <Image src={'images/recruit/hassou.png'} width={150} height={150} />
                        <OverRay>
                            <Text>イベントや新しいシステムの発案など、柔軟な発想ができる方をお待ちしております。</Text>
                        </OverRay>
                    </Item>
                </div>
                <div>
                    <Item>
                        <Image src={'images/recruit/design.png'} width={150} height={150} />
                        <OverRay>
                            <Text>
                                追加アイテムのテクスチャやイラストが描ける方、
                                建築が得意な方をお待ちしております。
                            </Text>
                        </OverRay>
                    </Item>
                    <Item>
                        <Image src={'images/recruit/en.png'} width={150} height={150} />
                        <OverRay>
                            <Text>サーバーに熱意を持って参加したい方、開発陣への参加をお待ちしております。</Text>
                        </OverRay>
                    </Item>
                    <Item>
                        <Image src={'images/recruit/alpha.png'} width={150} height={150} />
                        <OverRay>
                            <Text>
                                当サーバーは求める人材への多様性を尊重します。他にも素晴らしいアピールポイントがある方をお待ちしております。
                            </Text>
                        </OverRay>
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