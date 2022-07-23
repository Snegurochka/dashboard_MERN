import { FC } from "react";
import { Link } from "react-router-dom";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { StyledBox, StyledListHeader } from "./ListComponent.styles";
import { ApolloError } from "@apollo/client";

type PropsType = {
    title: string, 
    loading:boolean, 
    error: ApolloError | undefined, 
    data: any[] | undefined, 
    columns: GridColDef[]  
}

const ListComponent:FC<PropsType> = ({title, loading, error, data, columns}) => {
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Eror</p>;
    if (!data) return <p>No clients</p>;
  
    return (
      <StyledBox>
        <StyledListHeader>
          <h2>{title}</h2>
          <Link to="add">Add New</Link>
        </StyledListHeader>
  
        <DataGrid
          rows={data}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </StyledBox>
    );
}

export default ListComponent