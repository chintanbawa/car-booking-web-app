import { MouseEventHandler } from "react";

import { Aside, Icon, CloseIcon, SidebarBtn, SidebarItem } from "./SidebarElements";



interface SidebarPorps {
  isOpen: boolean;
  toggleSidebar: MouseEventHandler;
}

const Sidebar = ({ isOpen, toggleSidebar }: SidebarPorps) => {

  return (
    <Aside isOpen={isOpen}>

      <Icon onClick={toggleSidebar}>
        <CloseIcon />
      </Icon>

      <SidebarItem to='/' onClick={toggleSidebar}>Home</SidebarItem>
      <SidebarItem to='/cars' onClick={toggleSidebar}>Cars</SidebarItem>
      <SidebarItem to='/about' onClick={toggleSidebar}>About</SidebarItem>
      <SidebarItem to='/contactus' onClick={toggleSidebar}>Contact Us</SidebarItem>
      <SidebarItem to='/signup' onClick={toggleSidebar}>Sign Up</SidebarItem>

      <SidebarBtn to='/signin' onClick={toggleSidebar}>Sign Up</SidebarBtn>
    </Aside>
  );
};

export default Sidebar;
