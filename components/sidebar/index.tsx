import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { IconContext } from 'react-icons';

// import Icons from 'react-icons'
import { HiOutlineMenu } from 'react-icons/hi';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { AiOutlineHome } from 'react-icons/ai';
import { GiAnvilImpact } from 'react-icons/gi';
import { AiOutlineImport } from 'react-icons/ai';
import { BiCalendarEvent } from 'react-icons/bi';
import { FaDonate } from 'react-icons/fa';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { MdDeveloperMode } from 'react-icons/md';
import { BiLinkExternal } from 'react-icons/bi';

const SidebarNav = styled.div<{ sidebar: boolean }>`
    width: 250px;
    height: 100vh;
    padding: 6px 14px;
    z-index: 99;
    position: fixed;
    top: 0;
    background: #11101D;
    width: ${({ sidebar }) => (sidebar ? '400px' : '80px')};
    transition: 0.5s;
`

const NavIcon = styled.div<{ sidebar: boolean }>`
    position: absolute;
    font-size: 2rem;
    right: 25px;
    margin-top: 0.5rem;
    visibility: ${({ sidebar }) => (sidebar ? 'hidden' : 'visible')};
    transition: transform 0.5s ease;
`

const NavIconClose = styled.div<{ sidebar: boolean }>`
    position: absolute;
    font-size: 2rem;
    right: 1.75rem;
    margin-top: 0.5rem;
    visibility: ${({ sidebar }) => (sidebar ? 'visible' : 'hidden')};
    transition: transform 0.5s ease;
`

const SidebarWrap = styled.div``;
const SidebarMenuWrap = styled.li`
    position: absolute;
    top: 75px;
    left: 23px;
    list-style: none;
    display: inline-block;
    border-radius: 5px;
    transition: all 0.5s ease;
`;

const MenuItem = styled(Link)`
    font-size: 2rem;
    position: relative;
    display: block;
    overflow-x: auto;
    white-space: nowrap;
    height: 50px;
`

const Name = styled.span<{ sidebar: boolean, visible: boolean }>`
    display: ${({ visible }) => (visible ? 'inline flow-root' : 'none')};
    position: relative;
    margin-left: 12.5px;
    top: -5px;
    font-size: 1.5rem;
    color: gray;
    color: #fff;
    white-space: nowrap;
    opacity: ${({ sidebar }) => (sidebar ? '1' : '0')};
    transition: all 0.4s;
`

const Discord = styled.iframe<{ sidebar: boolean, visible: boolean }>`
    display: ${({ visible }) => (visible ? 'block' : 'none')};
    width: ${({ sidebar }) => (sidebar ? '350px' : '40px')};
    position: relative;
    opacity: ${({ sidebar }) => (sidebar ? '1' : '0')};
    transition: all 0.45s;
    border: none;
`;

const Sidebar: FC = () => {
    const [sidebar, setSidebar] = useState(false);
    const [sidebarV, setSidebarV] = useState(false);
    const showSidebar = () => {
        setTimeout(() => {
            setSidebar(!sidebar)
        }, 10)
        if(sidebarV) {
            setTimeout(() => {
                setSidebarV(!sidebarV)
            }, 400)
        } else {
            setSidebarV(!sidebarV)
        }
    };

    return (
        <IconContext.Provider value={{ color: 'white' }}>
            <SidebarNav sidebar={sidebar}>
                <SidebarWrap>
                    <NavIcon onClick={showSidebar} sidebar={sidebar}>
                        <HiOutlineMenu/>
                    </NavIcon>
                    <NavIconClose onClick={showSidebar} sidebar={sidebar}>
                        <HiOutlineMenuAlt3 />
                    </NavIconClose>
                    <SidebarMenuWrap>
                        <MenuItem to="/">
                            <AiOutlineHome />
                            <Name sidebar={sidebar} visible={sidebarV}>トップ</Name>
                        </MenuItem>
                        <MenuItem to="/mods">
                            <GiAnvilImpact />
                            <Name sidebar={sidebar} visible={sidebarV}>導入Mod</Name>
                        </MenuItem>
                        <MenuItem to="/join/1">
                            <AiOutlineImport />
                            <Name sidebar={sidebar} visible={sidebarV}>参加方法</Name>
                        </MenuItem>
                        <MenuItem to="/events">
                            <BiCalendarEvent />
                            <Name sidebar={sidebar} visible={sidebarV}>イベント</Name>
                        </MenuItem>
                        <MenuItem to="/donate">
                            <FaDonate />
                            <Name sidebar={sidebar} visible={sidebarV}>寄付</Name>
                        </MenuItem>
                        <MenuItem to="/info">
                            <AiOutlineInfoCircle />
                            <Name sidebar={sidebar} visible={sidebarV}>情報</Name>
                        </MenuItem>
                        <MenuItem to="/recruit">
                            <MdDeveloperMode />
                            <Name sidebar={sidebar} visible={sidebarV}>開発者募集</Name>
                        </MenuItem>
                        <MenuItem to="/links">
                            <BiLinkExternal />
                            <Name sidebar={sidebar} visible={sidebarV}>リンク集</Name>
                        </MenuItem>
                        <Discord sidebar={sidebar} visible={sidebarV} className="discord" src="https://discord.com/widget?id=419146900441137173&theme=dark" width="350" height="420" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></Discord>
                    </SidebarMenuWrap>
                </SidebarWrap>
            </SidebarNav>
        </IconContext.Provider>
    );
};

export default Sidebar;