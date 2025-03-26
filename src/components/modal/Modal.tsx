import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store"; // Путь к файлу с типом RootState
import styled from "styled-components";
import { Icon } from "../icon/Icon";
import { theme } from "../../styles/Theme";

export const Modal = () => {
  const selectorIsOpen = useSelector(
    (state: RootState) => state.app.modal.isOpen
  );

  const dispatch = useDispatch();

  if (!selectorIsOpen) {
    return null;
  }

  const onConfirm = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };
  const onCancel = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };

  return (
    <StyledModal>
      <div className="overlay">
        <div className="box">
          <div className="inputs">
            <input placeholder="name..." />
            <input placeholder="mail..." />
            <input />
          </div>

          <div className="buttons">
            <button onClick={onConfirm} className="btn">
              Отправить
            </button>
          </div>
          <div className="x">
            <button onClick={onCancel}>
              <Icon iconId="x" viewBox="0 0 220 220" transform="scale(0.1)" />
            </button>
          </div>
        </div>
      </div>
    </StyledModal>
  );
};

const StyledModal = styled.div`
  position: fixed;
  z-index: 100000;
  right: 0;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;

  & .overlay {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.7);
    width: 100%;
    height: 100%;
    z-index: 999999999;
  }

  & .box {
    max-width: 400px;
    max-height: 270px;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    z-index: 30;
    position: relative;
    top: 50%;
    transform: translate(0, -50%);
    background-color: #2c2c2c;
    border: 1px solid black;
    padding: 0 20px 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    box-shadow: inset 0 0 10px rgb(171 162 162 / 22%);
  }

  .buttons {
    display: flex;
    gap: 20px;
    margin-top: 20px;
    transform: translate(0, 50%);
  }

  .btn {
    width: 115px;
    height: 35px;

    display: flex;
    justify-content: center;
    align-items: center;
    background: #00c4f0;
    color: white;
    font-size: 15px;
    font-weight: bold;
    padding: 10px 20px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background 0.3s ease;
  }

  .x {
    position: absolute;
    transform: translate(230px, -43px);
    svg {
      cursor: pointer;
    }

    @media ${theme.media.mobile} {
      transform: translate(49px, -63px);
    }
  }

  .inputs {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    transform: translate(0, 20%);

    input {
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 5px;
      transition: border-color 0.3s;
      font-size: 16px;

      &:focus {
        border-color: #007bff;
        outline: none;
      }
    }
  }
`;
