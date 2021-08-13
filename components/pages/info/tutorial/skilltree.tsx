import { motion } from "framer-motion";
import styled from 'styled-components';

const SkillTier = styled.div`
    display: inline-block;
    vertical-align: middle;
`;

const Skill = styled.div`
    height: 150px;
    width: 180px;
    margin: 25px;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 20px;
`;
const SPACE = styled.div`
    height: 150px;
    width: 225px;
`;

function SkillTree() {
    return (
        <motion.div style={{
            padding: '1em',
            width: '100%',
            height: '100%',
            textAlign: 'center',
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
            <SkillTier id="3">
                <Skill>
                    <h2>exorcist</h2>
                    Psi<br />
                    Better Records
                </Skill>
                <Skill>
                    <h2>sacrificer</h2>
                    ProjectRed<br />
                    Sakura Foods<br />
                    Chinjufu Foods<br />
                    Awakened AC
                </Skill>
                <Skill>
                    <h2>energumen</h2>
                    Crimson Revelations<br />
                    Thaumic Augmentation
                </Skill>
                <Skill>
                    <h2>ninja</h2>
                    Slashblade<br />
                    WayStones
                </Skill>
            </SkillTier>
            <SkillTier id="2">
                <Skill>
                    <h2>sorcerer</h2>
                    BloodMagic<br />
                    HaC Foods
                </Skill>
                <SPACE />
                <Skill>
                    <h2>wizard2</h2>
                    ThaumCraft
                </Skill>
            </SkillTier>
            <SkillTier id="1">
                <Skill>
                    <h2>wizard1</h2>
                    Botania<br />
                    Pam's Harvestcraft
                </Skill>
            </SkillTier>
            <SkillTier id="0">
                <Skill>
                    <h2>visitor</h2>
                    開放Mod: なし
                </Skill>
            </SkillTier>
            <SkillTier id="1">
                <Skill>
                    <h2>engeneer1</h2>
                    Immersive Engeneering<br />
                    Thermal Expansion<br />
                    TiC Smeltery
                </Skill>
            </SkillTier>
            <SkillTier id="2">
                <Skill>
                    <h2>engeneer2</h2>
                    IndustrialCraft2<br />
                    MrCrayfish's Vehicle
                </Skill>
                <SPACE />
                <Skill>
                    <h2>forecaster</h2>
                    Heat and Climate
                </Skill>
            </SkillTier>
            <SkillTier id="3">
                <Skill>
                    <h2>powerplant</h2>
                    Advanced Solar Panels<br />
                    Reactor Turbines
                </Skill>
                <Skill>
                    <h2>scientist</h2>
                    UU-Matter<br />
                    Gravitation Suite
                </Skill>
                <Skill>
                    <h2>handyman</h2>
                    Simply Jetpacks<br />
                    Chest Transporter<br />
                    Simple Storage Network
                </Skill>
                <Skill>
                    <h2>gunsmith</h2>
                    /dank/null<br />
                    GVCGuns<br />
                    Diesel Generator<br />
                    Thermoelectric Generator
                </Skill>
            </SkillTier>
        </motion.div>
    );
}

export default SkillTree;