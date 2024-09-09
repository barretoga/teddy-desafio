import { useEffect, useState } from "react";
import axios from "axios";
import type { FC } from "react";
import { baseUrl } from "../../config/env";
import { useNavigate, useLocation } from "react-router-dom";

interface Partner {
  id: string;
  name: string;
  description: string;
  createdAt: string;
  repositoryGit: string;
  urlDoc: string;
  clients: (string | number)[];
  projects: (string | number)[];
}

const Partners: FC = () => {
  const [partners, setPartners] = useState<Partner[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage] = useState<number>(10);

  const navigate = useNavigate();
  const location = useLocation();

  const TriggerList = async () => {
    try {
      const response = await axios.get(`${baseUrl}/partners`);
      setPartners(response.data);
    } catch (error) {
      setError("Failed to fetch partners");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    TriggerList();
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const page = params.get("page");
    if (page) {
      setCurrentPage(parseInt(page));
    }
  }, [location.search]);

  const updatePageInUrl = (page: number) => {
    const params = new URLSearchParams(location.search);
    params.set("page", page.toString());
    navigate(`?${params.toString()}`, { replace: true });
  };

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    updatePageInUrl(newPage);
  };

  const handleEdit = (id: string) => {
    navigate(`/partners/edit/${id}`);
  };

  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`${baseUrl}/partners/${id}`);
      setPartners(partners.filter((partner) => partner.id !== id));
    } catch (error) {
      setError("Failed to delete partner");
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  const indexOfLastPartner = currentPage * itemsPerPage;
  const indexOfFirstPartner = indexOfLastPartner - itemsPerPage;
  const currentPartners = partners.slice(
    indexOfFirstPartner,
    indexOfLastPartner
  );

  const totalPages = Math.ceil(partners.length / itemsPerPage);

  return (
    <div className="p-4">
      <div className="flex w-full justify-between">
        <h1 className="text-2xl font-bold mb-4">Listagem de parceiros</h1>
        <a
          href="/partners/register"
          className="px-5 h-10 rounded text-2xl border bg-orange-500 text-white hover:bg-slate-800 transition-all duration-200"
        >
          +
        </a>
      </div>
      {partners.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 table-auto">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Nome
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Descrição
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Criado em
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Repositório GIT
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  URL Doc
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Qtd. Clientes
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Qtd. Projetos
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Ações
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {currentPartners.map((partner) => (
                <tr key={partner.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {partner.name}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500 whitespace-normal break-words">
                    {partner.description}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {new Date(partner.createdAt).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500 break-words">
                    {partner.repositoryGit}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    <a
                      href={partner.urlDoc}
                      className="text-indigo-600 hover:text-indigo-900"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Documentation Link
                    </a>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {partner.clients.length}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {partner.projects.length}
                  </td>
                  <td className="px-6 py-4 text-sm font-medium">
                    <button
                      onClick={() => handleEdit(partner.id)}
                      className="text-indigo-600 hover:text-indigo-900 mr-4"
                    >
                      Editar
                    </button>
                    <button
                      onClick={() => handleDelete(partner.id)}
                      className="text-red-600 hover:text-red-900"
                    >
                      Deletar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="mt-4 w-[250px] mx-auto flex justify-between items-center">
            <button
              onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 disabled:bg-gray-300 disabled:text-gray-700 rounded hover:bg-orange-500 bg-slate-800 text-white transition-all duration-200"
            >
              Ant.
            </button>
            <span className="text-gray-700">
              Página {currentPage} de {totalPages}
            </span>
            <button
              onClick={() =>
                handlePageChange(Math.min(currentPage + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className="px-4 py-2 disabled:bg-gray-300 disabled:text-gray-700 rounded hover:bg-orange-500 bg-slate-800 text-white transition-all duration-200"
            >
              Próx.
            </button>
          </div>
        </div>
      ) : (
        <p>No partners found.</p>
      )}
    </div>
  );
};

export default Partners;
