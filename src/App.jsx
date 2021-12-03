import { useState } from "react";
import "./styles.css";

/**
 * App
 */
export const App = () => {
  /** 入力した新規Todoを保持する */
  const [todoText, setTodotext] = useState("");

  /** 未完了リストの値を保持する　*/
  const [imcompleteTodos, setImcompleteTodos] = useState([
    "未完了Todo1",
    "未完了Todo2"
  ]);
  /** 完了リストの値を保持する　*/
  const [completeTodos, setCompleteTodos] = useState([
    "完了Todo1",
    "完了Todo2"
  ]);

  /** 新規追加に入力がされたときに動く関数　event は変化があったときに入ってくる */
  const onChangeTodoText = (event) => setTodotext(event.target.value);

  /**新規追加ボタンが押されたときに動く関数 */
  const onClickAdd = () => {
    //空欄の時は処理をしない
    if (todoText === "") return;
    //元の未完了リストの配列に新しい項目を追加
    const newTodos = [...imcompleteTodos, todoText];
    setImcompleteTodos(newTodos);
    setTodotext("");
  };

  /** 仮想DOM */
  return (
    <>
      {/* タイトル */}
      <h2>***　タスク管理システム　***</h2>
      {/* 新規追加 */}
      <div className="input-area">
        <h4 className="heading">新規追加</h4>
        <input
          id="add-text"
          placeholder="todoの内容を入力"
          value={todoText}
          onChange={onChangeTodoText}
        />
        <button id="add-button" onClick={onClickAdd}>
          add
        </button>
      </div>
      {/* 未完了リスト */}
      <div className="incomplete-area">
        <h4>未完了</h4>
        <ul id="incomplete-list">
          {imcompleteTodos.map((todo) => {
            return (
              // mapレンダリングの時はkeyを設定する
              <li key={todo} className="list-content">
                <span>{todo}</span>
                <button>done</button>
                <button>delete</button>
              </li>
            );
          })}
        </ul>
      </div>
      {/* 完了リスト */}
      <div className="complete-area">
        <h4>完了</h4>
        <div>
          <ul>
            {completeTodos.map((todo) => {
              return (
                <li key={todo} className="list-content">
                  <span>{todo}</span>
                  <button>undo</button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};
