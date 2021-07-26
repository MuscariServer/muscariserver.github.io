import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
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
    width: ${({ sidebar }) => (sidebar ? '300px' : '80px')};
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
                </SidebarWrap>
            </SidebarNav>
        </IconContext.Provider>
    );
};

export default Sidebar;