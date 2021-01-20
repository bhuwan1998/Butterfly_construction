import React from 'react'; 
import {SidebarContainer, CloseIcon, Icon, SideBarWrapper, SideBtnWrap, SidebarLink, SidebarMenu, SideBarRoute} from './SidebarElements';

export const Sidebar = () => {
    return (
        <SidebarContainer>
            <Icon>
                <CloseIcon />
            </Icon>   
            <SideBarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about">
                        About
                    </SidebarLink>
                    <SidebarLink to="projects">
                        Projects
                    </SidebarLink>
                    <SidebarLink to="services">
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
