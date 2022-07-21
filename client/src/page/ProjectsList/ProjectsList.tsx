import { FC } from "react";

import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useQuery } from "@apollo/client";
import { ProjectsAPIType } from "../../types/APITypes";
import { GET_PROJECTS } from "../../queries/projectQueries";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 170 },
  { field: "namee", headerName: "Name", width: 170 },
  { field: "description", headerName: "Description", width: 230 },
  { field: "status", headerName: "Status", width: 170 },
];

const ProjectsList: FC = () => {
  const { loading, error, data } = useQuery<ProjectsAPIType>(GET_PROJECTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Eror</p>;
  if (!data) return <p>No projects</p>;

  return (
    <DataGrid
      rows={data.projects}
      columns={columns}
      pageSize={5}
      rowsPerPageOptions={[5]}
      checkboxSelection
    />
  );
};

export default ProjectsList;
