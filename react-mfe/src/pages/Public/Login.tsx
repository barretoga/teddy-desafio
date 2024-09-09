import type { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";

type FormValues = {
  user: string;
  password: string;
  rememberMe: boolean;
};

const Login: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    localStorage.setItem("user", data.user);
    if (data.rememberMe) {
      localStorage.setItem("keepLogin", "true");
    }

    navigate("/");
  };

  return (
    <div className="grid mx-auto items-center justify-center h-[100vh] bg-gradient-to-r from-red-500 to-orange-500">
      <div className="flex flex-col items-center justify-center border p-20 shadow w-full sm:min-w-[600px] h-[500px] min-w-max bg-white">
        <h1 className="text-3xl font-bold mb-10">Login</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
          <div className="mb-6">
            <label htmlFor="user" className="block text-gray-700">
              Usuário
            </label>
            <input
              id="user"
              type="text"
              {...register("user", { required: "Usuário é obrigatório" })}
              className="w-full mt-1 p-2 border rounded"
            />
            {errors.user && (
              <p className="text-red-500">{errors.user.message}</p>
            )}
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700">
              Senha
            </label>
            <input
              id="password"
              type="password"
              {...register("password", { required: "Senha é obrigatória" })}
              className="w-full mt-1 p-2 border rounded"
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </div>

          <div className="mb-6 flex items-center">
            <input
              id="rememberMe"
              type="checkbox"
              {...register("rememberMe")}
              className="mr-2 h-[18px] w-[18px]"
            />
            <label htmlFor="rememberMe" className="text-gray-700">
              Manter-se logado
            </label>
          </div>

          <button
            type="submit"
            className="w-full font-bold bg-orange-500 text-white py-2 rounded hover:bg-slate-800 transition-all duration-200"
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
