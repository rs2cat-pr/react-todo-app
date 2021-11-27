import "./styles.css";

export const App = () => {
  return (
    <>
      <h2>***　タスク管理システム　***</h2>

      <div class="input-area">
        <h4 class="heading">　新規追加</h4>
        <input id="add-text" placeholder="todoの内容を入力" />
        <button id="add-button">add</button>
      </div>

      <div class="incomplete-area">
        <h4>未完了</h4>
        <ul id="incomplete-list">
          <div>
            <li class="list-content">
              <span>TODO内容を記載してください</span>
              <button>done</button>
              <button>delete</button>
            </li>
            <li class="list-content">
              <span>TODO内容を記載してください</span>
              <button>done</button>
              <button>delete</button>
            </li>
          </div>
        </ul>
      </div>

      <div class="complete-area">
        <h4>完了</h4>
        <div>
          <ul>
            <li class="list-content">
              <span>完了したTODOが移動します</span>
              <button>undo</button>
            </li>

            <li class="list-content">
              <span>完了したTODOが移動します</span>
              <button>undo</button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
