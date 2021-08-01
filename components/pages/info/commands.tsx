import { Table } from "antd";
import { motion } from "framer-motion";
import React from "react";

const columns = [
    {
        title: 'コマンド',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: '説明',
        dataIndex: 'description',
        key: 'description',
    },
];

const dataNormal = [
    {
        key: '1',
        name: '/spawn',
        description: 'ワールドのスポーン地点にスポーンします。',
    },{
        key: '2',
        name: '/money',
        description: '自分の所持金を表示します。',
    },{
        key: '3',
        name: '/gs',
        description: '現在取得しているスキルツリーを開放します。',
    },{
        key: '4',
        name: '/tpshop',
        description: 'Lobbyで入力すると商業区にテレポートします。',
    }
];

const dataEnderPay = [
    {
        key: '1',
        name: '/enpay <金額>',
        description: '設定用Banknoteを入手します。還元不可。',
    },{
        key: '2',
        name: '/money',
        description: '回収用Banknoteを入手します。期限は三日間。',
    },{
        key: '3',
        name: '/gs',
        description: '支払用Banknoteが入手できるGUIを開きます。手数料は10%',
    }
];

function Commands() {
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
            <h1>コマンド一覧</h1>
            <div style={{
                overflowY: 'auto',
            }}>
                <div>
                    <h2>通常コマンド</h2>
                    <Table columns={columns} dataSource={dataNormal} pagination={false}/>
                </div>
                <div>
                    <h2>EnderPay</h2>
                    <Table columns={columns} dataSource={dataEnderPay} pagination={false}/>
                </div>
                <div>
                    <h2>Towny</h2>
                    <a href="https://github.com/TownyAdvanced/Towny/wiki/Towny-Commands">ここをクリックで解説ページへ</a>
                </div>
            </div>
        </motion.div>
    );
}

export default Commands;