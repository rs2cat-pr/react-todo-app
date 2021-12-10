import React from "react";

/**
 * 新規追加component
 * @param {*} props
 */
export const InputTodo = (props) => {
  //propsの分割代入
  const { todoText, onChange, onClick, disabled } = props;

  // input areaへのstyleの設定
  const style = {
    //cssとの違い
    //　-ではなく、キャメルケースで記載
    // : 後の文字列は''で囲う
    // ; ではなく、, でオブジェクト分割
    backgroundColor: "#afeeee",
    width: "500px",
    height: "90px",
    padding: "10px",
    margin: "8px",
    borderRadius: "10px"
  };

  //入力フォームのstyle
  const formStyle = {
    borderRadius: "10px",
    border: "none",
    padding: "6px 16px",
    margin: "15px 2px",
    outline: "none",
    textAlign: "center"
  };

  //仮想DOM
  return (
    <>
      {/* 新規追加 */}
      <div style={style}>
        <h4 className="heading">新規追加</h4>
        <input
          id="add-text"
          placeholder="todoの内容を入力"
          style={formStyle}
          value={todoText}
          onChange={onChange}
          disabled={disabled}
        />
        <button id="add-button" onClick={onClick} disabled={disabled}>
          add
        </button>
      </div>
    </>
  );
};
