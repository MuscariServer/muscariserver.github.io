import { motion } from "framer-motion";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Dimensions from "./dimensions";
import TurnGacha from "./gacha";
import Intradable from "./intradable";
import JVM from "./jvm";
import Money from "./makemoney";
import Quests from "./quests";
import Shops from "./shops";
import SkillTrees from "./skilltree";
import Support from "./support";
import Towny from "./towny";
import Vote from "./vote";

function Tutorial() {
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
                top: '10px',
                color: `#fff`,
                fontSize: `1rem`,
                overflow: 'auto',
            }}
        >
            <Tabs>
                <TabList>
                    <Tab>JVM最適化</Tab>
                    <Tab>お金の集め方</Tab>
                    <Tab>取引禁止アイテム</Tab>
                    <Tab>店区画の利用方法</Tab>
                    <Tab>Townyの使い方</Tab>
                    <Tab>投票</Tab>
                    <Tab>スキルツリー</Tab>
                    <Tab>ウィークリークエスト</Tab>
                    <Tab>ガチャの回し方</Tab>
                    <Tab>クリエイターサポート</Tab>
                    <Tab>ディメンション</Tab>
                </TabList>
                <TabPanel><JVM /></TabPanel>
                <TabPanel><Money /></TabPanel>
                <TabPanel><Intradable /></TabPanel>
                <TabPanel><Shops /></TabPanel>
                <TabPanel><Towny /></TabPanel>
                <TabPanel><Vote /></TabPanel>
                <TabPanel><SkillTrees/></TabPanel>
                <TabPanel><Quests/></TabPanel>
                <TabPanel><TurnGacha/></TabPanel>
                <TabPanel><Support/></TabPanel>
                <TabPanel><Dimensions/></TabPanel>
            </Tabs>
        </motion.div>
    )
}

export default Tutorial;