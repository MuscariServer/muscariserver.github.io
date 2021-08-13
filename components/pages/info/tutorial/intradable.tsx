import { Table } from "antd";
import { motion } from "framer-motion";

const columns = [
    {
        title: 'アイテム名(en)',
        dataIndex: 'namee',
        key: 'namee',
    },
    {
        title: 'アイテム名(jp)',
        dataIndex: 'namej',
        key: 'namej',
    },
    {
        title: '理由',
        dataIndex: 'reason',
        key: 'reason',
    },
];

const data = [
    {
        key: '1',
        namee: 'Orb of Skills',
        namej: 'スキルのオーブ',
        reason: 'スキルツリーに影響を与えてしまうため',
    }, {
        key: '2',
        namee: 'Kamesteel Ingot',
        namej: 'かめスチールインゴット',
        reason: '生産量抑制アイテムとしての役割が損なわれるため',
    }, {
        key: '3',
        namee: 'Kamesteel Nugget',
        namej: 'かめスチールナゲット',
        reason: '生産量抑制アイテムとしての役割が損なわれるため',
    }
];

function Intradable() {
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
            <div style={{
                textAlign: 'center',
                verticalAlign: 'bottom',
                bottom: '30px',
                margin: '10px',
                fontSize: '1em',
            }} className="shadow">
                <h1>以下のアイテムを取引した場合、処罰が行われる可能性があります。</h1>
                <Table columns={columns} dataSource={data} pagination={false} />
            </div>
        </motion.div>
    );
}

export default Intradable;