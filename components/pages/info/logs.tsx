import { motion } from 'framer-motion';
import moment from 'moment';
import React from 'react';
import Calendar from 'react-calendar'

const month_item = {
    20180203: { text: 'シーズン4開始\nFruitServer御一行参加' },
    20180204: { text: 'Microsoft Windowsの\nライセンス上限人数を記録' },
    20180210: { text: 'JMS投票数 100 突破' },
    20180216: { text: 'JMS投票数 200 突破' },
    20180220: { text: 'JMS "要クライアントMod" タグ\nスコア1位達成' },
    20180226: { text: 'JMS投票数 300 突破' },

    20180318: { text: 'シーズン4終了' },


    20190104: { text: 'シーズン5開始' },

    20190211: { text: 'シーズン5終了' },

    20190706: { text: 'シーズン6開始\n「かびえもん、神になる」\nバニラツール耐久無限' },
    20190707: { text: '【祝】同接20人\nワールドボーダー作成\nハードなのにピースフル\nやり直し?いや続行' },
    20190710: { text: 'KamesutaのModで投票可能に。' },
    20190714: { text: 'エンドラ討伐\nシルバーフィッシュ増殖\nロールバック' },
    20190715: { text: 'teacoffee経験値大量発生事件' },

    20190803: { text: 'シーズン6終了' },

    20191025: { text: 'シーズン7開始' },
    20191026: { text: 'ケルタスクオーツツール:ded:' },
    20191027: { text: 'ミスってワールド消去\nシーズン7終了' },

    20191109: { text: 'シーズン8開始' },
    20191125: { text: '第一回オークション開催' },

    20191229: { text: 'シーズン8終了' },


    20200502: { text: 'シーズン8.5開始' },

    20200726: { text: 'シーズン8.5終了' },

    20201016: { text: 'シーズン9開始' },

    20201222: { text: 'シーズン9終了' },
}

function getTileContent({ date, view }) {
    if (view === 'month') {
        const targetDate = moment(date).format('YYYYMMDD')

        return month_item[targetDate] && month_item[targetDate].text ?
            month_item[targetDate].text.split('\n').map((str, index) => (
                <React.Fragment key={index}><br />{str}</React.Fragment>
            ))
            : null
    }
}

function Logs() {
    return (
        <motion.div style={{
            textAlign: 'center',
            display: 'inline-block',
            top: '100px',
            color: `#fff`,
            fontSize: `1rem`,
            overflow: 'auto',
        }}
            animate={{
                opacity: 1
            }}
            initial={{
                opacity: 0
            }}
            transition={{
                duration: 0.2
            }}
            exit={{
                opacity: 0
            }}>
            <Calendar locale="ja-JP" value={new Date()} tileContent={getTileContent} />
        </motion.div>
    )
}

export default Logs;