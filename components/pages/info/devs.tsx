import { motion } from 'framer-motion';
import styled from 'styled-components';

const ICON = styled.img`
    margin-bottom: 10px;
    margin-top: 10px;
    width: 60%;
    transform: rotateZ(-360deg);
    transition: 2s;
  
    &:hover {
        border-radius: 200px;
        transition: 1s;
        transform: rotateZ(360deg);
        transition: 2s;
    }
`

function Devs() {
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
            <h1>開発陣一覧</h1>
            <table style={{
                color: '#000',
                fontSize: '1.5em',
            }}>
                <tr style={{ backgroundColor: '#ffebcf' }}>
                    <td><ICON src="https://cravatar.eu/helmavatar/rkcyk706/150.png"></ICON></td>
                    <td>Server Owner</td>
                    <td style={{ fontSize: '2em' }}>rkcyk706</td>
                </tr>
                <tr style={{ backgroundColor: '#cfd6ff' }}>
                    <td><ICON src="https://cravatar.eu/helmavatar/amagami222/150.png"></ICON></td>
                    <td>Game Designer</td>
                    <td style={{ fontSize: '2em' }}>amagami222</td>
                </tr>
                <tr style={{ backgroundColor: '#edd4ff' }}>
                    <td><ICON src="https://cravatar.eu/helmavatar/artlab/150.png"></ICON></td>
                    <td>Builder</td>
                    <td style={{ fontSize: '2em' }}>ARTLab</td>
                </tr>
                <tr style={{ backgroundColor: '#cfd6ff' }}>
                    <td><ICON src="https://cravatar.eu/helmavatar/c1a62067877f4abe8f4564e8cd5103e6/150.png"></ICON></td>
                    <td>Game Designer</td>
                    <td style={{ fontSize: '2em' }}>Dori_And_Anahita</td>
                </tr>
                <tr style={{ backgroundColor: '#cfd6ff' }}>
                    <td><ICON src="https://cravatar.eu/helmavatar/enoshun/150.png"></ICON></td>
                    <td>Game Designer</td>
                    <td style={{ fontSize: '2em' }}>enoshun</td>
                </tr>
                <tr style={{ backgroundColor: '#d3ffcf' }}>
                    <td><ICON src="https://cravatar.eu/helmavatar/Honon/150.png"></ICON></td>
                    <td>Developer</td>
                    <td style={{ fontSize: '2em' }}>Honon</td>
                </tr>
                <tr style={{ backgroundColor: '#d3ffcf' }}>
                    <td><ICON src="https://cravatar.eu/helmavatar/Kamesuta/150.png"></ICON></td>
                    <td>Developer</td>
                    <td style={{ fontSize: '2em' }}>Kamesuta</td>
                </tr>
                <tr style={{ backgroundColor: '#cfd6ff' }}>
                    <td><ICON src="https://cravatar.eu/helmavatar/koishinium/150.png"></ICON></td>
                    <td>Game Designer</td>
                    <td style={{ fontSize: '2em' }}>koishinium</td>
                </tr>
                <tr style={{ backgroundColor: '#cfd6ff' }}>
                    <td><ICON src="https://cravatar.eu/helmavatar/kya_pita/150.png"></ICON></td>
                    <td>Game Designer</td>
                    <td style={{ fontSize: '2em' }}>kya_pita</td>
                </tr>
                <tr style={{ backgroundColor: '#cfd6ff' }}>
                    <td><ICON src="https://cravatar.eu/helmavatar/Tomotomo_/150.png"></ICON></td>
                    <td>Game Designer</td>
                    <td style={{ fontSize: '2em' }}>Tomotomo_</td>
                </tr>
                <tr style={{ backgroundColor: '#edd4ff' }}>
                    <td><ICON src="https://cravatar.eu/helmavatar/Xx_Koara_xX/150.png"></ICON></td>
                    <td>Builder</td>
                    <td style={{ fontSize: '2em' }}>Xx_Koara_xX</td>
                </tr>
            </table>
        </motion.div>
    );
}

export default Devs;