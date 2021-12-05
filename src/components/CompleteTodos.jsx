import React from "react";

/**
 * 完了リストcomponent
 * @param {*} props
 */
export const CompleteTodos = (props) => {
  //propsの分割代入
  const { completeTodos, onClickUndo } = props;

  //仮想DOM
  return (
    <>
      {/* 完了リスト */}
      <div className="complete-area">
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
