import styled from 'styled-components'
import { useHistory } from 'react-router-dom';
import React from 'react';
import { motion } from 'framer-motion';
import { Modpack_data } from '../data/current';
import { muscari_Settings } from '../data/settings';

const Button = styled.button`
    background-color: transparent;
    border: 2px solid #fff;
    font-size: 2rem;
    font-weight: bold;
    color: #fff;
    font-family: 'Open Sans', sans-serif;   
    height: 5rem;
    width: 20rem;
    text-shadow:  2px  2px 10px #777 ,
               -2px  2px 10px #777 ,
                2px -2px 10px #777 ,
               -2px -2px 10px #777;
    transition: all .3s;
    &:hover {
        background-color: #fff;
        color: #000;
    }
`



function TopPage() {
    const history = useHistory();
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
            }}
        >
            <div style={{
                color: `#fff`,
                fontSize: `2rem`,
            }}>
                <h1>{ muscari_Settings.name }</h1>
                <h3>Current ModPack: { Modpack_data.name }</h3>
            </div>
            <Button onClick={() => history.push('/join')}>
                今すぐ参加!!
            </Button>
        </motion.div>
    )
}

export default TopPage;