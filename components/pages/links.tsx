import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Items = styled.div`
    margin: 20px;
    font-size: 1.5em;
    color: white;
    border: 2px solid #ccc;
    border-radius: 10px;
    height: 250px;
    width: 250px;
    display: inline-block;
    background-color: rgba(111, 111, 111, 0.5);
    padding: 5px;
`

const DIV = styled.div`
    display: block;
`

function Links() {
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
            <DIV>
                <Items>
                    <a href="https://minecraft.jp/servers/muscari.fun"><img src="images/links/Diamond.png" width={200} height={200} /><br />Minecraft.jp</a>
                </Items>
                <Items>
                    <a href="https://monocraft.net/servers/kypYX49aMGbHh1i47yH5"><img src="images/links/monocraft.png" width={200} height={200} /><br />Monocraft</a>
                </Items>
                <Items>
                    <a href="https://twitter.com/taisa_ism"><img src="images/links/twitter.png" width={200} height={200} /><br />Twitter</a>
                </Items>
            </DIV>
            <DIV>
                <Items>
                    <a href="https://discord.gg/mTbgeP8"><img src="images/links/discord.png" width={200} height={200} /><br />Discord</a>
                </Items>
                <Items>
                    <a href="https://forms.gle/2GVBaVZKpyjoHhGu8"><img src="images/links/google-forms.png" width={200} height={200} /><br />お問い合わせ</a>
                </Items>
                <Items>
                    <a href="https://github.com/MuscariServer"><img src="images/links/github.png" width={200} height={200} /><br />Github</a>
                </Items>
            </DIV>
        </motion.div>
    )
}

export default Links;