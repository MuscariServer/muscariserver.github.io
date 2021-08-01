import { motion } from "framer-motion";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import { AiOutlineFileText } from 'react-icons/ai'
import { HiOutlineDocumentAdd } from 'react-icons/hi'
import { GiDiceFire } from 'react-icons/gi'
import { BsFileEarmarkCode } from 'react-icons/bs'
import { ImStatsDots } from 'react-icons/im'
import { GoTerminal } from 'react-icons/go'
import { BsQuestionDiamond } from 'react-icons/bs'
import { BiCommentError } from 'react-icons/bi'
import { GoFile } from 'react-icons/go'
import { HiOutlineDatabase } from 'react-icons/hi'

import Rules from './rules'
import Spec from "./spec";
import Bugs from "./bugs";
import Devs from "./devs";
import Logs from "./logs";
import FAQ from "./faq";
import Stats from "./stats";
import Commands from "./commands";

function Info() {
    return (
        <motion.div
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
            }}

            style={{
                textAlign: 'center',
                display: 'inline-block',
                position: 'absolute',
                top: '10px',
                color: `#fff`,
                fontSize: `1rem`,
                overflow: 'auto',
                verticalAlign: 'top',
            }}
        >
            <Tabs>
                <TabList>
                    <Tab><AiOutlineFileText/> ルール</Tab>
                    <Tab><HiOutlineDocumentAdd/> チュートリアル</Tab>
                    <Tab><GiDiceFire/> 娯楽施設</Tab>
                    <Tab><BsFileEarmarkCode/> 開発陣一覧</Tab>
                    <Tab><ImStatsDots/> ムスカリ統計局</Tab>
                    <Tab><GoTerminal/> コマンド一覧</Tab>
                    <Tab><BsQuestionDiamond/> よくある質問</Tab>
                    <Tab><BiCommentError/> 既知のバグ</Tab>
                    <Tab><GoFile/> サーバースペック</Tab>
                    <Tab><HiOutlineDatabase/> 記録</Tab>
                </TabList>
                <TabPanel><Rules/></TabPanel>
                <TabPanel></TabPanel>
                <TabPanel></TabPanel>
                <TabPanel><Devs/></TabPanel>
                <TabPanel><Stats/></TabPanel>
                <TabPanel><Commands/></TabPanel>
                <TabPanel><FAQ/></TabPanel>
                <TabPanel><Bugs/></TabPanel>
                <TabPanel><Spec/></TabPanel>
                <TabPanel><Logs/></TabPanel>
            </Tabs>
        </motion.div>
    )
}

export default Info;