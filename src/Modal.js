import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { modalActions, submitForm } from "./Features/modalSlice";

export default function Modal() {
  const [form, setForm] = useState({ name: "", secondName: "" });
  const dispatch = useDispatch();
  const modalActive = useSelector((state) => state.modal.open);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(submitForm(form));
    setForm({ name: "", secondName: "" });
    dispatch(modalActions.toggle());
  };
  return (
    <div className="modal-button">
      <button onClick={() => dispatch(modalActions.toggle())}>Modal</button>
      <div
        onClick={() => dispatch(modalActions.toggle())}
        className={modalActive ? "open modal" : "modal"}
      >
        <div onClick={(e) => e.stopPropagation()} className="modal-content">
          <span
            className="close"
            onClick={() => dispatch(modalActions.toggle())}
          >
            &times;
          </span>
          <div className="form-container">
            <form onSubmit={(e) => handleSubmit(e)}>
              <input
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                type="text"
                value={form.name}
                placeholder="Name"
                required
              />
              <input
                onChange={(e) =>
                  setForm({ ...form, secondName: e.target.value })
                }
                type="text"
                value={form.secondName}
                placeholder="Second Name"
                required
              />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
