import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { motion } from "framer-motion";
import styled from 'styled-components';

import { BiBuildingHouse } from 'react-icons/bi';
import { GiBarrel, GiGears, GiWarPick, GiWheat } from "react-icons/gi"
import { FaMagic } from "react-icons/fa"

const A = styled.a`
    display: block;
    text-decoration: none;
    color: #000;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 0.5rem;
    margin-top: 0.5rem;
    transition: all .3s;

    &:hover {
        background-color: rgba(0, 0, 0, 0.4);
        color: #fff;
    }
`;

function Mods() {
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
                color: `#fff`,
                fontSize: `2rem`,
            }}
        >
            <h1>導入Mod</h1>
            <h6>Mod名クリックでWikiに飛びます<br />(一部攻略動画を含む)</h6>
            <Tabs>
                <TabList>
                    <Tab><GiGears /> 工業系</Tab>
                    <Tab><FaMagic /> 魔術系</Tab>
                    <Tab><GiWheat /> 農業系</Tab>
                    <Tab><GiWarPick /> 探検系</Tab>
                    <Tab><BiBuildingHouse /> 建築系</Tab>
                    <Tab><GiBarrel /> その他</Tab>
                </TabList>
                <TabPanel>
                    <A href="https://w.atwiki.jp/minecraft/pages/1140.html">Heat and Climate</A>
                    <A href="https://w.atwiki.jp/minecraft/pages/1616.html">Immersive Engeneering</A>
                    <A href="https://w.atwiki.jp/minecraft/pages/1201.html">Thermal Expansion / Foundation / Dynamics</A>
                    <A href="https://w.atwiki.jp/minecraft/pages/1507.html">IndustrialCraft²_experimental</A>
                </TabPanel>
                <TabPanel>
                    <A href="https://w.atwiki.jp/minecraft/pages/1410.html">Botania</A>
                    <A href="https://w.atwiki.jp/minecraft/pages/1733.html">Thaumcraft</A>
                    <A href="https://www.youtube.com/watch?v=6Z29UICD5Jc&list=PL_mkfOLu9GVfbZAn6blVhALq0Biwmca0e&index=10">Psi</A>
                    <A href="https://w.atwiki.jp/minecraft/pages/1522.html">Blood Magic</A>
                </TabPanel>
                <TabPanel>
                    <A href="https://w.atwiki.jp/minecraft/pages/1447.html">Pam's HarvestCraft</A>
                    <A href="https://w.atwiki.jp/minecraft/pages/1657.html">Cooking for Blockheads</A>
                </TabPanel>
                <TabPanel>
                    <A href="https://w.atwiki.jp/minecraft/pages/448.html">The Twilight Forest</A>
                    <A href="https://w.atwiki.jp/minecraft/pages/1461.html">The Erebus</A>
                </TabPanel>
                <TabPanel>
                    <A href="https://github.com/Direwolf20-MC/BuildingGadgets/wiki/Building-Gadget">Building Gadgets</A>
                    <A href="https://github.com/Chisel-Team/Chisel/wiki">Chisel</A>
                    <A href="https://chinjufumod.wicurio.com/">鎮守府Mod</A>
                    <A href="https://wikiwiki.jp/dechimine/ArchitectureCraft%E6%97%A5%E6%9C%AC%E8%AA%9E%E3%83%9E%E3%83%8B%E3%83%A5%E3%82%A2%E3%83%AB">ArchitectureCraft</A>
                    <A href="https://w.atwiki.jp/minecraft/pages/1210.html">MrCrayfish's Furniture Mod</A>
                    <A href="https://www.napoan.com/40690052-2/">Malisis Doors</A>
                    <A href="https://w.atwiki.jp/minecraft/pages/1082.html">Quark</A>
                </TabPanel>
                <TabPanel>
                    <A href="https://w.atwiki.jp/minecraft/pages/1596.html">Tinkers' construct</A>
                    <A href="https://w.atwiki.jp/minecraft/pages/1307.html">Slashblade</A>
                    <A href="https://w.atwiki.jp/minecraft/pages/1520.html">GvCReversion2</A>
                    <A href="https://w.atwiki.jp/minecraft/pages/1786.html">Sakura</A>
                    <A href="https://w.atwiki.jp/minecraft/pages/1671.html">Simply Jetpacks</A>
                    <A href="https://www.napoan.com/41287163-2/">Better Records</A>
                    <A href="http://minecraftmemo0.blog.fc2.com/blog-entry-6.html">OpenBlocks</A>
                    <A href="https://w.atwiki.jp/minecraft/pages/1225.html">Project Red Base / Integration</A>
                    <A href="https://minecraft-family.net/danknull-mod-introduction/">/dank/null</A>
                    <A href="http://yuhiarticles.blogspot.com/2018/03/mod-iron-backpacks-minecraft.html">Iron Backpacks</A>
                    <A href="http://yuhiarticles.blogspot.com/2018/03/mod-iron-chests-minecraft.html">Iron Chests</A>
                    <A href="http://blog.livedoor.jp/sakuyo0707/archives/379751.html">Storage Drawers</A>
                    <A href="https://skyfactory-4.fandom.com/wiki/Simple_Storage_Network">Simple Storage Network</A>
                </TabPanel>
            </Tabs>
        </motion.div>
    );
}

export default Mods;