import "./Main.css";

function Main() {
  return (
    <main className="main-content">
      <h2>Ласкаво просимо!</h2>
      <p>Я успішно створила свої перші компоненти в React. Це було непросто, але я впоралася!</p>
      <button className="main-button" onClick={() => alert('Кнопка працює! Вітаю!')}>
        Натисни на мене
      </button>
    </main>
  );
}

export default Main;