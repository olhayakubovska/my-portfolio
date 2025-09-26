import styled from "styled-components";
import { theme } from "../../styles/Theme";

const Modal = styled.div`
  position: fixed;
  z-index: 100000;
  right: 0;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
`;

const Overlay = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100%;
  z-index: 999999999;
`;

const ModalBox = styled.div`
  max-width: 400px;
  height: 270px;
  width: 100%;
  margin: 0 auto;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  background-color: #2c2c2c;
  border: 1px solid black;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  box-shadow: inset 0 0 10px rgb(171 162 162 / 22%);
`;

const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 150px;
  gap: 10px;
  width: 100%;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  transition: border-color 0.3s;
  font-size: 16px;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

const Buttons = styled.div`
  display: flex;
  gap: 20px;
`;

const Button = styled.button`
  width: 155px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background: #00c4f0; */
  background: linear-gradient(45deg, #25edff, #383d3d);

  color: white;
  font-size: 15px;
  font-weight: bold;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s ease;
  transform: translateY(20px);

  &:hover {
    background: linear-gradient(45deg, #307c88, #05191e);
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  transform: translate(143px, -26px);
  cursor: pointer;

  @media screen and (max-width: 450px) {
    transform: translate(-41px, -27px);
  }
  @media ${theme.media.smallMobile} {
    transform: translate(31px, -27px);
  }
`;
export const S = {
  Modal,
  Overlay,
  ModalBox,
  Inputs,
  Input,
  Buttons,
  Button,
  CloseButton,
};
