import { Table } from "antd";
import React from "react";

const columns2 = [
    {
        title: '日付',
        dataIndex: 'date',
        key: 'date',
    },
    {
        title: '寄付者様',
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
        date: '2017/12/27',
        name: 'Kabiemon様',
        value: '2000円(Amazonギフト券)',
    }, {
        key: '2',
        date: '2019/01/11',
        name: 'yuu_111様',
        value: '3000円(Amazonギフト券)',
    }, {
        key: '3',
        date: '2019/01/13',
        name: 'Kabiemon様',
        value: '4000円(Amazonギフト券)',
    }, {
        key: '4',
        date: '2019/01/19',
        name: 'Kamesuta様',
        value: '2000円(Amazonギフト券)+Planetary Annihilation: Titans(Steam)',
    }, {
        key: '5',
        date: '2019/01/21',
        name: 'GetNullpo様',
        value: '10000円(Amazonギフト券)',
    }, {
        key: '6',
        date: '2019/01/22',
        name: 'Kabiemon様',
        value: '10000円(Amazonギフト券)',
    }, {
        key: '7',
        date: '2019/01/23',
        name: 'diesu様',
        value: '10000円(Amazonギフト券)',
    }, {
        key: '8',
        date: '2019/02/09',
        name: 'Kabiemon様',
        value: '10000円(Amazonギフト券)',
    }, {
        key: '9',
        date: '2019/07/01',
        name: 'ayumuttu様',
        value: '2000円(Amazonギフト券)',
    }, {
        key: '10',
        date: '2019/11/09',
        name: 'kawarasin様',
        value: '1000円(Amazonギフト券)',
    }, {
        key: '11',
        date: '2019/12/18',
        name: 'ARTLab様',
        value: 'Intel Core i7-7700K + JOUJYE Nano Diamond Thermal Grease OC 7',
    }, {
        key: '12',
        date: '2020/10/13',
        name: 'Kass2533様',
        value: 'MX500 500GB + WB Blue 4TB 5400RPM',
    },
];

class Donates extends React.Component {
    render() {
        return (
            <div>
                <Table
                    columns={columns2}
                    dataSource={data}
                    size="small"
                    bordered={true}
                    pagination={false}
                />
            </div>
        );
    }
}

export default Donates;