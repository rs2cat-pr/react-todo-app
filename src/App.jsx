import { useState } from "react";
import "./styles.css";

/**
 * App
 */
export const App = () => {
  /** 入力した新規Todoを保持する */
  const [todoText, setTodotext] = useState("");

  /** 未完了リストの値を保持する　*/
  const [imcompleteTodos, setImcompleteTodos] = useState([]);
  /** 完了リストの値を保持する　*/
  const [completeTodos, setCompleteTodos] = useState([]);

  /** 新規追加に入力がされたときに動く関数　event は変化があったときに入ってくる */
  const onChangeTodoText = (event) => setTodotext(event.target.value);

  /**新規追加ボタンが押されたときに項目を未完了リストへ配置する関数 */
  const onClickAdd = () => {
    //空欄の時は処理をしない
    if (todoText === "") return;
    //元の未完了リストの配列に新しい項目を追加
    const newTodos = [...imcompleteTodos, todoText];
    setImcompleteTodos(newTodos);
    setTodotext("");
  };

  /**deleteボタンが押されたときに項目を削除する関数 */
  const onClickDelete = (index) => {
    const newTodos = [...imcompleteTodos];
    // splice関数　index番目の要素から1個消す
    newTodos.splice(index, 1); //指定したindex番目を削除する
    setImcompleteTodos(newTodos);
  };

  /**doneボタンが押されたときに項目を完了リストへ送る関数 */
  const onClickDone = (index) => {
    const newImcompleteTodos = [...imcompleteTodos];
    // splice関数　index番目の要素から1個消す
    newImcompleteTodos.splice(index, 1); //指定したindex番目を削除する
    //完了リストの配列に項目を追加
    const newCompleteTodos = [...completeTodos, imcompleteTodos[index]];
    //useStateを更新
    setImcompleteTodos(newImcompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };

  /**undoボタンが押されたときに項目を未完了リストに戻す関数 */
  const onClickUndo = (index) => {
    //完了リストの配列定義
    const newCompleteTodos = [...completeTodos];
    //完了リストの配列からindexの項目削除
    newCompleteTodos.splice(index, 1);
    //未完了リストの配列からindexの項目追加
    const newImcompleteTodos = [...imcompleteTodos, completeTodos[index]];
    //未完了・完了のuseStateを更新
    setCompleteTodos(newCompleteTodos);
    setImcompleteTodos(newImcompleteTodos);
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
          {imcompleteTodos.map((imcompleteTodo, index) => {
            return (
              // mapレンダリングの時はkeyを設定する
              <li key={imcompleteTodo} className="list-content">
                <span>{imcompleteTodo}</span>
                {/* アロー関数で新しく関数を生成し、indexを引き渡す */}
                <button onClick={() => onClickDone(index)}>done</button>
                <button onClick={() => onClickDelete(index)}>delete</button>
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
