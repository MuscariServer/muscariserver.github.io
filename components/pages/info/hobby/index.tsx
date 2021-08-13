import { motion } from "framer-motion";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Athle from "./athle";
import BlackJack from "./blackjack";
import Gacha from "./gacha";
import Slot from "./slot";

function Hobby() {
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
            exit={{
                opacity: 0
            }}
            style={{
                textAlign: 'center',
                display: 'inline-block',
                color: `#fff`,
                fontSize: `2rem`,
                overflow: 'auto',
                verticalAlign: 'top',
            }}
        >
            <h1>娯楽要素</h1>
            <Tabs>
                <TabList>
                    <Tab>アスレチック</Tab>
                    <Tab>ブラックジャック</Tab>
                    <Tab>スロットマシン</Tab>
                    <Tab>ガチャ</Tab>
                </TabList>
                <TabPanel><Athle /></TabPanel>
                <TabPanel><BlackJack /></TabPanel>
                <TabPanel><Slot /></TabPanel>
                <TabPanel><Gacha /></TabPanel>
            </Tabs>
        </motion.div>
    )
}

export default Hobby;