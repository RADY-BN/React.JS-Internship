import styled from "styled-components";
import { Link } from "react-scroll";
import { MdKeyboardArrowUp, MdArrowUpward } from "react-icons/md";

export const Wrapper = styled(Link)`
  position: fixed;
  z-index: 10;
  background-color: #00ba54;
  bottom: 10px;
  right: 10px;
  height: 50px;
  width: 50px;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: #01fb71;
  }
`;
export const ArrowUpward = styled(MdArrowUpward)`
  font-size: 30px;
`;

export const ArrowUp = styled(MdKeyboardArrowUp)`
  font-size: 30px;
`;
