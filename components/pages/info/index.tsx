import { motion } from "framer-motion";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import { AiOutlineFileText } from 'react-icons/ai'
import { BsFileEarmarkCode } from 'react-icons/bs'
import { BsQuestionDiamond } from 'react-icons/bs'
import { GoFile } from 'react-icons/go'
import { HiOutlineDatabase } from 'react-icons/hi'

import Rules from './rules'
import Spec from "./spec";
import Devs from "./devs";
import Logs from "./logs";
import FAQ from "./faq";

function Info() {
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
                    <Tab><AiOutlineFileText /> ルール</Tab>
                    <Tab><BsFileEarmarkCode /> 開発陣一覧</Tab>
                    <Tab><BsQuestionDiamond /> よくある質問</Tab>
                    <Tab><GoFile /> サーバースペック</Tab>
                    <Tab><HiOutlineDatabase /> 記録</Tab>
                </TabList>
                <TabPanel><Rules /></TabPanel>
                <TabPanel><Devs /></TabPanel>
                <TabPanel><FAQ /></TabPanel>
                <TabPanel><Spec /></TabPanel>
                <TabPanel><Logs /></TabPanel>
            </Tabs>
        </motion.div>
    )
}

export default Info;