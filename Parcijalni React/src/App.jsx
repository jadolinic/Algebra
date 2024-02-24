import { useState } from "react";
import UserInfo from "./components/UserInfo";
import ListaRepo from "./components/ListaRepo";

const App = () => {
  const [text, setText] = useState("");
  const [user, setUser] = useState({});
  const [repo, setRepo] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text.trim() === "") {
      alert("Molim Vas upišite GitHub username");
      return;
    }
    fetch(`https://api.github.com/users/${text}`)
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((error) => console.log("krivi dohvat podataka", error));
    setText("");
    setLoaded(true);

    fetch(`https://api.github.com/users/${text}/repos`)
      .then((res) => res.json())
      .then((data) => setRepo(data));
  };

  const handleReset = () => {
    setLoaded(false);
  };

  return (
    <div className="App">
      {!loaded && (
        <form onSubmit={handleSubmit}>
          <label>GitHub username:</label>
          <input
            type="text"
            value={text}
            onChange={handleChange}
            placeholder="e.g. facebook"
          />
          <button className="btn-search">go!</button>
        </form>
      )}

      {loaded && (
        <div className="ispis">
          <UserInfo user={user} />
          <ListaRepo repo={repo} />
          <button className="btn-reset" onClick={handleReset}>
            reset
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
