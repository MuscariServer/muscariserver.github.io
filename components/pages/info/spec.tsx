import { Table } from "antd";
import { motion } from "framer-motion";
import React from "react";

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
const data = [
    {
        key: '1',
        name: 'CPU',
        value: 'Intel Core i7-7700K',
    }, {
        key: '2',
        name: 'RAM',
        value: 'Team DDR4 3000MHz 32GB',
    }, {
        key: '3',
        name: 'SSD',
        value: 'SDSSDA-240G-J26',
    }, {
        key: '4',
        name: 'PU',
        value: 'KRPW-GK750W',
    }, {
        key: '5',
        name: 'CF',
        value: '虎徹 Mark II',
    }, {
        key: '6',
        name: 'MB',
        value: 'PRIME H270-PRO',
    }, {
        key: '7',
        name: 'CC',
        value: 'Thermaltake Versa H26 Black',
    }, {
        key: '8',
        name: 'OS',
        value: 'Linux',
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

export default Spec;