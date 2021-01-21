import React from 'react'; 
import {SidebarContainer, CloseIcon, Icon, SideBarWrapper, SideBtnWrap, SidebarLink, SidebarMenu, SideBarRoute} from './SidebarElements';

export const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>   
            <SideBarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={toggle}>
                        About
                    </SidebarLink>
                    <SidebarLink to="projects" onClick={toggle}>
                        Projects
                    </SidebarLink>
                    <SidebarLink to="services" onClick={toggle}>
                        Services
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SideBarRoute to ="/contactus"> Contact Us </SideBarRoute>
                </SideBtnWrap>
            </SideBarWrapper>   
        </SidebarContainer>
    );
}
