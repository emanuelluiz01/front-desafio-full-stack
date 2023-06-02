import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

export const Dashboard = () => {
  const { user } = useContext(AuthContext);

  // useEffect(() => {
  //   userRequest();
  // }, []);

  return user.map((info) => {
    <div>{info.name}</div>;
  });
};
