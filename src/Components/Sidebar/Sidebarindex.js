import React from 'react'
import {SidebarContainer,CloseIcon,Icon,SidebarMenu,SidebarLink,SideBtnWrap,SidebarRoute} from './Sidebar';

const Sidebar = ({isOpen,toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
          <Icon onClick={toggle}>
              <CloseIcon />
            </Icon>  
            <SidebarMenu>
                <SidebarLink to ="/">Pizzas</SidebarLink>
                <SidebarLink to ="/">Deserts</SidebarLink>
                {/* <SidebarLink to ="/">Combo Pack</SidebarLink> */}
                <SidebarLink to ="/">Full Menu</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to="/">Order Now</SidebarRoute>
            </SideBtnWrap>
        </SidebarContainer>
    )
}

export default Sidebar;
