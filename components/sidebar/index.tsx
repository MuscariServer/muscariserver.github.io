import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import styles from './index.module.css';
import { IconContext } from 'react-icons';

// import Icons from 'react-icons'
import { HiOutlineMenu } from 'react-icons/hi';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { AiOutlineHome } from 'react-icons/ai';

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

    lhover {
        icon {
            color: black;
        }
        font-color: #000;
        color: #000;
        background: #FFF;
    }
`;

const MenuItem = styled(Link)`
    font-size: 2rem;
    position: absolute;
    display: inline-block;
    overflow-x: auto;
    white-space: nowrap;
`

const Name = styled.span<{ sidebar: boolean }>`
    display: ${({ sidebar }) => (sidebar ? 'inline-block' : 'none')};
    position: relative;
    margin-left: 12.5px;
    top: -4px;
    font-size: 1.75rem;
    color: gray;
    color: #fff;
    white-space: nowrap;
    opacity: ${({ sidebar }) => (sidebar ? '1' : '0')};
    pointer-events: none;
    transition: all 0.4s;
`

const Sidebar: FC = () => {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

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
                        <MenuItem to="/">
                            <AiOutlineHome />
                            <Name sidebar={sidebar}>トップ</Name>
                        </MenuItem>
                    </SidebarMenuWrap>
                </SidebarWrap>
            </SidebarNav>
        </IconContext.Provider>
    );
};

export default Sidebar;