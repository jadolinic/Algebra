import { useEffect, useState } from "react";

const App = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch("./data/data.json")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [imena]);

  return (
    <>
      <div>
        {user.map((val, index) => {
          return (
            <p key={index}>
              {index} {val.ime} {val.prezime}
            </p>
          );
        })}
      </div>
    </>
  );
};

export default App;
