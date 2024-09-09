import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../../config/env";

interface PartnerFormData {
  name: string;
  description: string;
  repositoryGit: string;
  urlDoc: string;
  clients: string[];
  projects: string[];
}

const RegisterPartner = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<PartnerFormData>();

  const navigate = useNavigate();

  const onSubmit = async (data: PartnerFormData) => {
    try {
      await axios.post(`${baseUrl}/partners`, data);
      alert("Parceiro criado com sucesso!");
      reset();
      navigate("/partners");
    } catch (error) {
      console.error("Erro ao criar parceiro", error);
      alert("Ocorreu um erro ao criar o parceiro.");
    }
  };

  return (
    <div className="p-8 max-w-[600px] mx-auto bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Criar Parceiro</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Nome
          </label>
          <input
            id="name"
            type="text"
            placeholder="Digite o nome"
            {...register("name", { required: "O nome é obrigatório" })}
            className={`mt-1 block min-h-10 p-2 w-full border ${
              errors.name ? "border-red-500" : "border-gray-300"
            } rounded-md shadow-sm focus:border-orange-500 focus:ring-orange-500`}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Descrição
          </label>
          <textarea
            id="description"
            placeholder="Digite a descrição"
            {...register("description", {
              required: "A descrição é obrigatória",
            })}
            className={`mt-1 block w-full min-h-10 p-2 border ${
              errors.description ? "border-red-500" : "border-gray-300"
            } rounded-md shadow-sm focus:border-orange-500 focus:ring-orange-500`}
          />
          {errors.description && (
            <p className="text-red-500 text-sm mt-1">
              {errors.description.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="repositoryGit"
            className="block text-sm font-medium text-gray-700"
          >
            Repositório GIT
          </label>
          <input
            id="repositoryGit"
            type="url"
            placeholder="https://github.com/seurepositorio"
            {...register("repositoryGit", {
              required: "O repositório GIT é obrigatório",
            })}
            className={`mt-1 block w-full min-h-10 p-2 border ${
              errors.repositoryGit ? "border-red-500" : "border-gray-300"
            } rounded-md shadow-sm focus:border-orange-500 focus:ring-orange-500`}
          />
          {errors.repositoryGit && (
            <p className="text-red-500 text-sm mt-1">
              {errors.repositoryGit.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="urlDoc"
            className="block text-sm font-medium text-gray-700"
          >
            URL Doc
          </label>
          <input
            id="urlDoc"
            type="url"
            placeholder="https://docurl.com"
            {...register("urlDoc", {
              required: "A URL da documentação é obrigatória",
            })}
            className={`mt-1 block min-h-10 p-2 w-full border ${
              errors.urlDoc ? "border-red-500" : "border-gray-300"
            } rounded-md shadow-sm focus:border-orange-500 focus:ring-orange-500`}
          />
          {errors.urlDoc && (
            <p className="text-red-500 text-sm mt-1">{errors.urlDoc.message}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="clients"
            className="block text-sm font-medium text-gray-700"
          >
            Clientes (IDs separados por vírgula)
          </label>
          <input
            id="clients"
            type="text"
            placeholder="123, 456, 789"
            {...register("clients", {
              required: "Clientes são obrigatórios",
              setValueAs: (v) =>
                v.split(",").map((item: string) => item.trim()),
            })}
            className={`mt-1 block min-h-10 p-2 w-full border ${
              errors.clients ? "border-red-500" : "border-gray-300"
            } rounded-md shadow-sm focus:border-orange-500 focus:ring-orange-500`}
          />
          {errors.clients && (
            <p className="text-red-500 text-sm mt-1">
              {errors.clients.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="projects"
            className="block text-sm font-medium text-gray-700"
          >
            Projetos (IDs separados por vírgula)
          </label>
          <input
            id="projects"
            type="text"
            placeholder="123, 456, 789"
            {...register("projects", {
              required: "Projetos são obrigatórios",
              setValueAs: (v) =>
                v.split(",").map((item: string) => item.trim()),
            })}
            className={`mt-1 block min-h-10 p-2 w-full border ${
              errors.projects ? "border-red-500" : "border-gray-300"
            } rounded-md shadow-sm focus:border-orange-500 focus:ring-orange-500`}
          />
          {errors.projects && (
            <p className="text-red-500 text-sm mt-1">
              {errors.projects.message}
            </p>
          )}
        </div>

        <div className="flex justify-between mt-6">
          <a
            href="/partners"
            className="px-6 py-2 bg-gray-300 text-gray-700 hover:text-white rounded hover:bg-gray-800 transition-all duration-200"
          >
            Voltar
          </a>
          <button
            type="submit"
            className="px-6 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 transition-all duration-200"
          >
            Criar
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterPartner;
