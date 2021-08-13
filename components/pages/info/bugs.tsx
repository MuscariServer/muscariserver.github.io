import { Table } from "antd";
import { motion } from "framer-motion";
import React from "react";

const columns = [
    {
        title: '発見日',
        dataIndex: 'date',
        key: 'date',
    },
    {
        title: '発見者',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: '内容',
        dataIndex: 'value',
        key: 'value',
    },
];

const data = [
    {
        key: '1',
        date: '2021/07/10',
        name: 'Tomotomo_',
        value: 'Spice of Life, Spice of Life Carrot Editionが各バックサーバー間で連携しない',
    },
];

function Bugs() {
    return (
        <motion.div style={{
            padding: '1em',
            width: '100%',
            height: '100%',
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
            <Table
                columns={columns}
                dataSource={data}
                size="small"
                bordered={true}
                pagination={false}
                style={{
                    width: '100%',
                }}
            />
        </motion.div>
    );
}

export default Bugs;