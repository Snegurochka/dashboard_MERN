import { FC } from "react";
import { useQuery } from "@apollo/client";
import { GridColDef } from "@mui/x-data-grid";
import { GET_CLIENTS } from "../../queries/clientQueries";
import { ClientsAPIType } from "../../types/APITypes";

// Components
import ListComponent from "../../components/Layout/ListComponent/ListComponent";


const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 170 },
  { field: "name", headerName: "Name", width: 170 },
  { field: "email", headerName: "Email", width: 170 },
  { field: "phone", headerName: "Phone", width: 170 },
];

const ClientsList: FC = () => {
  const { loading, error, data } = useQuery<ClientsAPIType>(GET_CLIENTS);

  return (
    <ListComponent
      title="Clients list"
      loading={loading}
      error={error}
      data={data?.clients}
      columns={columns}
    />
  );
};

export default ClientsList;
