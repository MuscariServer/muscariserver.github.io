import { motion } from "framer-motion";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Architecture from "./architecture";
import Capture from "./capture";
import Casino from "./casino";
import End from "./end";
import Erebus from "./erebus";
import Lobby from "./lobby";
import Nether from "./nether";
import Resources from "./resource";
import Forest from "./twilightforest";
import Unknown from "./unknown";

function Dimensions() {
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
                top: '10px',
                color: `#fff`,
                fontSize: `1rem`,
                overflow: 'auto',
                verticalAlign: 'top',
            }}
        >
            <Tabs>
                <TabList>
                    <Tab>メインロビー</Tab>
                    <Tab>カジノ</Tab>
                    <Tab>ネザー</Tab>
                    <Tab>エンド</Tab>
                    <Tab>黄昏の森</Tab>
                    <Tab>Erebus</Tab>
                    <Tab>??????</Tab>
                    <Tab>資源</Tab>
                    <Tab>攻略</Tab>
                    <Tab>建築</Tab>
                </TabList>
                <TabPanel><Lobby /></TabPanel>
                <TabPanel><Casino /></TabPanel>
                <TabPanel><Nether /></TabPanel>
                <TabPanel><End /></TabPanel>
                <TabPanel><Forest /></TabPanel>
                <TabPanel><Erebus /></TabPanel>
                <TabPanel><Unknown /></TabPanel>
                <TabPanel><Resources /></TabPanel>
                <TabPanel><Capture /></TabPanel>
                <TabPanel><Architecture /></TabPanel>
            </Tabs>
        </motion.div>
    )
}

export default Dimensions;