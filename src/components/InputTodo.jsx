import React from "react";

/**
 * 新規追加component
 * @param {*} props
 */
export const InputTodo = (props) => {
  //propsの分割代入
  const { todoText, onChange, onClick } = props;

  //仮想DOM
  return (
    <>
      {/* 新規追加 */}
      <div className="input-area">
        <h4 className="heading">新規追加</h4>
        <input
          id="add-text"
          placeholder="todoの内容を入力"
          value={todoText}
          onChange={onChange}
        />
        <button id="add-button" onClick={onClick}>
          add
        </button>
      </div>
    </>
  );
};
