import React from "react";

/**
 * 未完了リストcomponent
 * @param {*} props
 */
export const IncompleteTodos = (props) => {
  //propsの分割代入
  const { incompleteTodos, onClickDone, onClickDelete } = props;

  //未完了リストのstyle
  const style = {
    backgroundColor: "#b0e0e6",
    width: "500px",
    minHeight: "200px",
    padding: "8px",
    margin: "8px",
    borderRadius: "10px"
  };

  //仮想DOM
  return (
    <>
      {/* 未完了リスト */}
      <div style={style}>
        <h4>未完了</h4>
        <ul id="incomplete-list">
          {incompleteTodos.map((incompleteTodo, index) => {
            return (
              // mapレンダリングの時はkeyを設定する
              <li key={incompleteTodo} className="list-content">
                <span>{incompleteTodo}</span>
                {/* アロー関数で新しく関数を生成し、indexを引き渡す */}
                <button onClick={() => onClickDone(index)}>done</button>
                <button onClick={() => onClickDelete(index)}>delete</button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
