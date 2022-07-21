import { FC } from "react";

import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { useQuery } from "@apollo/client";
import { ProjectsAPIType } from "../../types/APITypes";
import { GET_PROJECTS } from "../../queries/projectQueries";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "namee", headerName: "Name", width: 130 },
  { field: "description", headerName: "Description", width: 130 },
  {
    field: "status",
    headerName: "Status",
    width: 90,
  },
];

const ProjectsList: FC = () => {
  const { loading, error, data } = useQuery<ProjectsAPIType>(GET_PROJECTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Eror</p>;
  if (!data) return <p>No projects</p>;

  return (
    <p>ok</p>
    // <DataGrid
    //   rows={data.projects}
    //   columns={columns}
    //   pageSize={5}
    //   rowsPerPageOptions={[5]}
    //   checkboxSelection
    // />
  );
};

export default ProjectsList;
