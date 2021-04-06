import React from "react";
// import TransitionsModal from "../ModalComponents/Modal";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SideBtnWrap,
  SidebarRoute,
  SidebarLink,
  SidebarWrapper,
  SidebarMenu,
} from "./SideBarElement";

const SideBar = ({ isOpen, toggle }) => {
  return (
    <>
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink to="ndidi" onClick={toggle}>
              Ndidi
            </SidebarLink>
            <SidebarLink to="ola" onClick={toggle}>
              Ola
            </SidebarLink>
            <SidebarLink to="gideon" onClick={toggle}>
              Gideon
            </SidebarLink>
            <SidebarLink to="lekan" onClick={toggle}>
              Lekan
            </SidebarLink>
            <SidebarLink to="olorunda" onClick={toggle}>
              Olorunda
            </SidebarLink>
            <SidebarLink to="peter" onClick={toggle}>
              Peter
            </SidebarLink>
          </SidebarMenu>
          <SideBtnWrap></SideBtnWrap>
        </SidebarWrapper>
      </SidebarContainer>
    </>
  );
};
export default SideBar;
