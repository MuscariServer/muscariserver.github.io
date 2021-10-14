import React from 'react';
import { motion } from 'framer-motion';
import Donates from '../data/donates';

function Donate() {
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
            <div style={{
                textAlign: 'center',
                verticalAlign: 'middle',
                display: 'inline-block',
                backgroundColor: 'rgba(255, 255, 255, 0.5)',
                height: '75vh',
                width: '50vh',
            }}>
                    <h1>寄付</h1><br />
                    <li style={{
                        listStyle: 'none',
                    }}>
                        Muscari Serverは月額のレンタルサーバーではなく<br />初期費用が必要な自宅サーバーを利用しています。<br />
                        しかし電気代やパーツ交換など<br />多少の費用がかかるため寄付を募集しています。
                    </li>
                    <ul>
                        <h3>寄付によってできること</h3>
                        <li>サーバーの長期運営(モチベ維持・向上)</li>
                        <li>サーバーの強化(タイムアウト発生の防止、ラグ軽減)</li>
                    </ul>
                    <ul>
                        <h3>寄付の特典</h3>
                        <li>Discordの役職[VIP]の付与</li>
                        <li>Blogカテゴリに寄付者チャンネルの追加</li>
                        <li>ゲーム内で装着可能なバッジ</li>
                        <li>??????????</li>
                    </ul>
                    <ul>
                        <h2>寄付の方法</h2>
                        <li>オーナー(大佐(rkcyk706))にDiscordのDMで<br />Amazonギフト券のコードを伝える。<br />※個人宛かサーバー宛か伝えて下さい。</li>
                        <li>大佐のAmazon欲しい物リストを買う。</li>
                        <li>寄付内容については全内容をWikiにて公開します。</li>
                    </ul>
                    <br />
                    <a href="https://www.amazon.co.jp/registry/wishlist/2K8VZWQTFZSYU/ref=cm_sw_r_cp_ep_ws_rZzrCbT42HZXH" style={{
                        color: 'blue',
                        fontSize: '1.5em',
                    }}>大佐の欲しい物リスト</a>
            </div>
            <div style={{
                textAlign: 'center',
                verticalAlign: 'middle',
                display: 'inline-block',
                backgroundColor: 'rgba(255, 255, 255, 0.5)',
                height: '75vh',
                width: '75vh',
            }}>
                    <h2>寄付者のリスト</h2>
                    <Donates />
            </div>
        </motion.div>
    )
}

export default Donate;