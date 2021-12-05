import React from "react";

/**
 * 完了リストcomponent
 * @param {*} props
 */
export const CompleteTodos = (props) => {
  //propsの分割代入
  const { completeTodos, onClickUndo } = props;

  //
  const style = {
    backgroundColor: "#add8e6",
    width: "500px",
    minHeight: "200px",
    padding: "8px",
    margin: "8px",
    borderRadius: "10px"
  };

  //仮想DOM
  return (
    <>
      {/* 完了リスト */}
      <div style={style}>
        <h4>完了</h4>
        <div>
          <ul>
            {completeTodos.map((completeTodo, index) => {
              return (
                <li key={completeTodo} className="list-content">
                  <span>{completeTodo}</span>
                  <button onClick={() => onClickUndo(index)}>undo</button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};
