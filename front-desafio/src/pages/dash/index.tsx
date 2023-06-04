import { useContext, useEffect } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { DivContainer } from "./style";

export const Dashboard = () => {
  const { user, userRequest } = useContext(AuthContext);

  useEffect(() => {
    userRequest();
  }, []);

  return (
    <DivContainer>
      <ul>
        <h2>Usuários cadastrados</h2>
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
