import { useEffect, useState } from "react";
import { fetchCharacters } from "../api/FetchCharacters";

const Characters = () => {
  const [Characters, setCharacters] = useState([]);
  useEffect(() => {
    const getCharacters = async () => {
        const data = await fetchCharacters();
          
      setCharacters(data);
    };
    getCharacters();
  }, []);

  return (
    <div>
      {Characters ? (
        <ul>
                  {Characters.map((Characters) => (
                      <li key={Characters.id}>
                          <img src={Characters.image} alt="" height="100px" width="100px" />
                          <div>{Characters.firstName} {Characters.age}{""}</div>
                      </li>
          ))}
        </ul>
      ) : (
        <p>Loading Characters</p>
      )}
    </div>
  );
};

export default Characters;
