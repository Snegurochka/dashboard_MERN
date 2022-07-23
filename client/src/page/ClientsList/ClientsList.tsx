import { FC } from "react";
import { ApolloCache, useMutation, useQuery } from "@apollo/client";
import { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { GET_CLIENTS } from "../../queries/clientQueries";
import { ClientsAPIType } from "../../types/APITypes";

// Components
import ListComponent from "../../components/Layout/ListComponent/ListComponent";
import { Link } from "react-router-dom";
import { DELETE_CLIENT } from "../../mutations/clientMutations";
import ActionColumn from "../../components/ActionColumn/ActionColumn";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 170 },
  { field: "name", headerName: "Name", width: 170 },
  { field: "email", headerName: "Email", width: 170 },
  { field: "phone", headerName: "Phone", width: 170 },
];

const ClientsList: FC = () => {
  const { loading, error, data } = useQuery<ClientsAPIType>(GET_CLIENTS);

  function updateCache(cache: ApolloCache<ClientsAPIType>, id: string) {
    const { clients } = cache.readQuery({
      query: GET_CLIENTS,
    }) as ClientsAPIType;
    cache.writeQuery({
      query: GET_CLIENTS,
      data: {
        clients: clients.filter((client) => client.id !== id),
      },
    });
  }

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params: GridRenderCellParams) => (
        <ActionColumn
          id={params.row.id}
          mutation={DELETE_CLIENT}
          updateCache={updateCache}
        />
      ),
    },
  ];

  return (
    <ListComponent
      title="Clients list"
      loading={loading}
      error={error}
      data={data?.clients}
      columns={columns.concat(actionColumn)}
    />
  );
};

export default ClientsList;
