import { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";
import { IncompleteTodos } from "./components/IncompleteTodos";
import { CompleteTodos } from "./components/CompleteTodos";

/**
 * App
 */
export const App = () => {
  /** 入力した新規Todoを保持する */
  const [todoText, setTodotext] = useState("");
  /** 未完了リストの値を保持する　*/
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  /** 完了リストの値を保持する　*/
  const [completeTodos, setCompleteTodos] = useState([]);

  /**
   * onChangeTodoText function
   * 新規追加に入力がされたときに動く関数　event は変化があったときに入ってくる
   * @param {*} event
   */
  const onChangeTodoText = (event) => setTodotext(event.target.value);

  /**
   * onClickAdd function
   * 新規追加ボタンが押されたときに項目を未完了リストへ配置する関数
   */
  const onClickAdd = () => {
    //空欄の時は処理をしない
    if (todoText === "") return;
    //元の未完了リストの配列に新しい項目を追加
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodotext("");
  };

  /**
   * onClickDelete function
   * deleteボタンが押されたときに項目を削除する関数
   * @param {*} index 配列内の位置
   */
  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    // splice関数　index番目の要素から1個消す
    newTodos.splice(index, 1); //指定したindex番目を削除する
    setIncompleteTodos(newTodos);
  };

  /**
   * onClickDone function
   * doneボタンが押されたときに項目を完了リストへ送る関数
   * @param {*} index 配列内の位置
   */
  const onClickDone = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    // splice関数　index番目の要素から1個消す
    newIncompleteTodos.splice(index, 1); //指定したindex番目を削除する
    //完了リストの配列に項目を追加
    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    //useStateを更新
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };

  /**
   * onClickUndo function
   * undoボタンが押されたときに項目を未完了リストに戻す関数
   * @param {*} index 配列内の位置
   */
  const onClickUndo = (index) => {
    //完了リストの配列定義
    const newCompleteTodos = [...completeTodos];
    //完了リストの配列からindexの項目削除
    newCompleteTodos.splice(index, 1);
    //未完了リストの配列からindexの項目追加
    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    //未完了・完了のuseStateを更新
    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newIncompleteTodos);
  };

  /** 仮想DOM */
  return (
    <>
      {/* タイトル */}
      <h2>***　タスク管理システム　***</h2>
      {/* 新規追加 */}
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
      />
      {/* 未完了リスト */}
      <IncompleteTodos
        incompleteTodos={incompleteTodos}
        onClickDone={onClickDone}
        onClickDelete={onClickDelete}
      />
      {/* 完了リスト */}
      <CompleteTodos completeTodos={completeTodos} onClickUndo={onClickUndo} />
    </>
  );
};
