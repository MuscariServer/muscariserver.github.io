import { motion } from 'framer-motion';
import moment from 'moment';
import React from 'react';
import Calendar from 'react-calendar'
import { Log_data } from '../../data/logs';

function getTileContent({ date, view }) {
    if (view === 'month') {
        const targetDate = moment(date).format('YYYYMMDD')

        return Log_data[targetDate] && Log_data[targetDate].text ?
            Log_data[targetDate].text.split('\n').map((str, index) => (
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
        >
            <Calendar locale="ja-JP" value={new Date()} tileContent={getTileContent} />
        </motion.div>
    )
}

export default Logs;