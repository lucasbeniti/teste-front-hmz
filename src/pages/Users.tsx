/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { Button } from "../components/ui/button";
import type { IUser } from "../interfaces/User";
import api from "../services/api";
import { columns } from "../users/columns";
import { DataTable } from "../users/components/data-table";

const UsersPage = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await api.get("/users");

        setUsers(response.data);
      } catch (error: any) {
        setError("Erro ao buscar usuários");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="container mx-auto py-10">
      <div className="flex items-center justify-between mb-4">
        <p className="text-gray-400 text-sm uppercase">Usuários</p>

        <Button className="uppercase bg-gray-200 text-gray-400 px-5 hover:text-gray-500 hover:bg-gray-200" size={"sm"}>
          Novo
        </Button>
      </div>

      {loading ? (
        <p className="text-gray-400">Carregando...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <div className="bg-gray-100">
          <DataTable columns={columns} data={users} />
        </div>
      )}
    </div>
  );
};

export default UsersPage;