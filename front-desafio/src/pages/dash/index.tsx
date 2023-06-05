import { useContext, useEffect } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { DivContainer } from "./style";
import { useNavigate } from "react-router-dom";

export const Dashboard = () => {
  const { user, userRequest } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    userRequest();
  }, []);

  return (
    <DivContainer>
      <ul>
        <div>
          <h2>Usuários cadastrados</h2>
          <button onClick={() => navigate("/")}>Sair</button>
        </div>
        {user.map((info) => {
          return (
            <li>
              <h3 key={info.id}>Usuário: {info.name}</h3>
              <h3>Contatos:</h3>
              <p>
                Nome do contato: {info.contacts.map((contact) => contact.name)}
              </p>
              <p>
                Fone do contato: {info.contacts.map((contact) => contact.phone)}
              </p>
              <p>
                Email do contato:{" "}
                {info.contacts.map((contact) => contact.email)}
              </p>
            </li>
          );
        })}
      </ul>
    </DivContainer>
  );
};
