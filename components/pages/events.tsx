import { motion } from 'framer-motion';
import moment from 'moment';
import React from 'react';
import Calendar from 'react-calendar'

const month_item = {
    20210718: { text: 'エンド開放\nドラゴンレイド' },
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

function Events() {
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
            exit={{
                opacity: 0
            }}
            style={{
                textAlign: 'center',
                color: `#fff`,
                fontSize: `2rem`,
            }}
        >
            <h2 style={{ margin: '0' }}>
                イベント: 予定表
            </h2>
            <div style={{
                textAlign: 'left',
            }}>
                <Calendar locale="ja-JP" value={new Date()} tileContent={getTileContent} />
            </div>
        </motion.div>
    )
}

export default Events;