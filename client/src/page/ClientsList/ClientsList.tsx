import { useQuery } from "@apollo/client";
import { Box } from "@mui/system";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { FC } from "react";
import { Link } from "react-router-dom";
import { GET_CLIENTS } from "../../queries/clientQueries";
import { ClientsAPIType } from "../../types/APITypes";
import { StyledBox, StyledListHeader } from "./Client.styles";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 170 },
  { field: "name", headerName: "Name", width: 170 },
  { field: "email", headerName: "Email", width: 170 },
  { field: "phone", headerName: "Phone", width: 170 },
];

const ClientsList: FC = () => {
  const { loading, error, data } = useQuery<ClientsAPIType>(GET_CLIENTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Eror</p>;
  if (!data) return <p>No clients</p>;

  return (
    <StyledBox>
      <StyledListHeader>
        <h2>Clients list</h2>
        <Link to="add">Add New</Link>
      </StyledListHeader>

      <DataGrid
        rows={data.clients}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </StyledBox>
  );
};

export default ClientsList;
