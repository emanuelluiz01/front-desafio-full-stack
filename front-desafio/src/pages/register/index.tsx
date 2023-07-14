import { useForm } from "react-hook-form";
import { RegisterData, RegisterSchema } from "./validator";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { ContainerForm, LoginH2 } from "../login/style";
import { ContainerFormRegister } from "./style";

export const Register = () => {
  const { register, handleSubmit } = useForm<RegisterData>({
    resolver: zodResolver(RegisterSchema),
  });

  const { registerRequest } = useContext(AuthContext);

  return (
    <main>
      <LoginH2>Cadastrar</LoginH2>
      <ContainerFormRegister>
        <form onSubmit={handleSubmit(registerRequest)}>
          <label htmlFor="name">Name</label>
          <input
            type="name"
            id="name"
            {...register("name")}
            placeholder="Seu nome aqui ..."
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            {...register("email")}
            placeholder="Seu email aqui ..."
          />

          <label htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            {...register("password")}
            placeholder="Sua senha aqui ..."
          />
          <label htmlFor="phone">Telefone</label>
          <input
            type="phone"
            id="phone"
            {...register("phone")}
            placeholder="Seu telefone aqui ..."
          />

          <button type="submit">Login</button>
        </form>
      </ContainerFormRegister>
    </main>
  );
};
