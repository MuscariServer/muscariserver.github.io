import { Table } from "antd";
import { motion } from "framer-motion";
import React from "react";
import {SpecData} from "../../data/spec";

const columns = [
    {
        title: '項目',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: '内容',
        dataIndex: 'value',
        key: 'value',
    },
];

function Spec() {
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
        >
            <Table
                columns={columns}
                dataSource={SpecData}
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

export default Spec;