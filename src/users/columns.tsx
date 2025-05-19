import type { ColumnDef } from "@tanstack/react-table";
import type { IUser } from "../interfaces/User";

export const columns: ColumnDef<IUser>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "name",
    header: "Nome",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "createdAt",
    header: "Data de Criação",
    cell: ({ row }) => {
      const date = new Date(row.original.createdAt);
      return date.toLocaleString('pt-br');
    }
  },
  {
    id: "actions",
    header: "Ações"
  },
];