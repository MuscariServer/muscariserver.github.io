import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { IconContext } from 'react-icons';

import "../index.css"

// import Icons from 'react-icons'
import { HiOutlineMenu } from 'react-icons/hi';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineImport } from 'react-icons/ai';
import { BsCalendar } from 'react-icons/bs'
import { FaDonate } from 'react-icons/fa';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { HiOutlineCode } from 'react-icons/hi';
import { BiLinkExternal } from 'react-icons/bi';

const SidebarNav = styled.div<{ sidebar: boolean }>`
    height: 100vh;
    padding: 6px 14px;
    z-index: 99;
    position: fixed;
    top: 0;
    background: rgba(37, 37, 38, 0.75);
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
    cursor: pointer;
`

const NavIconClose = styled.div<{ sidebar: boolean }>`
    position: absolute;
    font-size: 2rem;
    right: 1.75rem;
    margin-top: 0.5rem;
    visibility: ${({ sidebar }) => (sidebar ? 'visible' : 'hidden')};
    transition: transform 0.5s ease;
    cursor: pointer;
`

const SidebarWrap = styled.div`
    text-align: left;
`;

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
    display: inline-block;
    white-space: nowrap;
    top: -10px;
    left: -10px;
    margin: 5px;
    height: 50px;
    padding: 5px;
    transition: all 0.3s ease;
    &:hover {
        background: rgba(200, 200, 200, 0.25);
        transition: all 0.3s ease;
        border-radius: 5px;
    }
`

const ToolTip = styled.div`
    font-size: 1rem;
    visibility: hidden;
    position: relative;
    opacity: 0;
    background: rgba(37, 37, 38, 0.5);
    color: #fff;
    border-radius: 5px;
    padding: 10px;
    left: 20px;
    top: -17px;
    width: 100px;
    display: inline-block;
    transition: all 0.3s ease;
    text-align: center;
`

const W = styled.div<{ sidebar: boolean }>`
    display: block;
    white-space: nowrap;
    & ${MenuItem}:hover + ${ToolTip} {
        visibility: ${({ sidebar }) => (sidebar ? 'hidden' : 'visible')};
        opacity: 1;
        transition: all 0.3s ease;
    }
`;

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
        if (sidebarV) {
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
                        <HiOutlineMenu />
                    </NavIcon>
                    <NavIconClose onClick={showSidebar} sidebar={sidebar}>
                        <HiOutlineMenuAlt3 />
                    </NavIconClose>
                    <SidebarMenuWrap>
                        <W sidebar={sidebar}>
                            <MenuItem to="/">
                                <AiOutlineHome />
                                <Name sidebar={sidebar} visible={sidebarV}>トップ</Name>
                            </MenuItem>
                            <ToolTip>トップ</ToolTip>
                        </W>
                        <W sidebar={sidebar}>
                            <MenuItem to="/join">
                                <AiOutlineImport />
                                <Name sidebar={sidebar} visible={sidebarV}>参加方法</Name>
                            </MenuItem>
                            <ToolTip>参加方法</ToolTip>
                        </W>
                        <W sidebar={sidebar}>
                            <MenuItem to="/events">
                                <BsCalendar />
                                <Name sidebar={sidebar} visible={sidebarV}>イベント</Name>
                            </MenuItem>
                            <ToolTip>イベント</ToolTip>
                        </W>
                        <W sidebar={sidebar}>
                            <MenuItem to="/donate">
                                <FaDonate />
                                <Name sidebar={sidebar} visible={sidebarV}>寄付</Name>
                            </MenuItem>
                            <ToolTip>寄付</ToolTip>
                        </W>
                        <W sidebar={sidebar}>
                            <MenuItem to="/info">
                                <AiOutlineInfoCircle />
                                <Name sidebar={sidebar} visible={sidebarV}>情報</Name>
                            </MenuItem>
                            <ToolTip>情報</ToolTip>
                        </W>
                        <W sidebar={sidebar}>
                            <MenuItem to="/recruit">
                                <HiOutlineCode />
                                <Name sidebar={sidebar} visible={sidebarV}>開発者募集</Name>
                            </MenuItem>
                            <ToolTip>開発者募集</ToolTip>
                        </W>
                        <W sidebar={sidebar}>
                            <MenuItem to="/links">
                                <BiLinkExternal />
                                <Name sidebar={sidebar} visible={sidebarV}>リンク集</Name>
                            </MenuItem>
                            <ToolTip>リンク集</ToolTip>
                        </W>
                        <Discord sidebar={sidebar} visible={sidebarV} className="discord" src="https://discord.com/widget?id=419146900441137173&theme=dark" width="350" height="420" />
                    </SidebarMenuWrap>
                </SidebarWrap>
            </SidebarNav>
        </IconContext.Provider>
    );
};

export default Sidebar;