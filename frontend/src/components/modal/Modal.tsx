import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { Icon } from "../icon/Icon";
import { S } from "./Modal_Styled"; // Импорт стилей
import { useState } from "react";

export const Modal = () => {
  const selectorIsOpen = useSelector(
    (state: RootState) => state.app.modal.isOpen
  );

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  // const [status, setStatus] = useState("");

  const dispatch = useDispatch();

  if (!selectorIsOpen) {
    return null;
  }

  const onConfirm = async () => {
    try {
      // setStatus("Отправка...");

      const res = await fetch("/api/form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      console.log(data, "data");

      if (res.ok) {
        // setStatus("Успешно отправлено");
        setForm({ name: "", email: "", message: "" });
        // закрываем модалку
        dispatch({ type: "CLOSE_MODAL" });
      } else {
        // setStatus(data.error || "Ошибка отправки");
      }
    } catch (err) {
      console.error(err);
      // setStatus("Сетевая ошибка");
    }
    dispatch({ type: "CLOSE_MODAL" });
  };
  console.log(form);

  const onCancel = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(form)
    // console.log(e.target.value,"alal")

    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <S.Modal>
      <S.Overlay>
        <S.ModalBox>
          <S.Inputs>
            <S.Input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Ваше имя..."
            />
            <S.Input
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Ваш email..."
            />
            <S.Input
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Сообщение для меня..."
            />
          </S.Inputs>

          <S.Buttons>
            <S.Button onClick={onConfirm}>Отправить</S.Button>
          </S.Buttons>
          {/* {status && <div>{status}</div>} */}

          <S.CloseButton onClick={onCancel}>
            <Icon iconId="x" viewBox="0 0 220 220" transform="scale(0.1)" />
          </S.CloseButton>
        </S.ModalBox>
      </S.Overlay>
    </S.Modal>
  );
};
