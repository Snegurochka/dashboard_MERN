import { FC } from "react";

import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { useQuery } from "@apollo/client";
import { ProjectsAPIType } from "../../types/APITypes";
import { GET_PROJECTS } from "../../queries/projectQueries";
import { Link } from "react-router-dom";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 170 },
  { field: "namee", headerName: "Name", width: 170 },
  { field: "description", headerName: "Description", width: 230 },
  {
    field: "status",
    headerName: "Status",
    width: 170,
    renderCell: (params) => (
      <span
        className={`list_status ${
          params.row.status == "Completed" ? "completed" : ""
        }`}
      >
        {params.row.status}
      </span>
    ),
  },
];

const ProjectsList: FC = () => {
  const { loading, error, data } = useQuery<ProjectsAPIType>(GET_PROJECTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Eror</p>;
  if (!data) return <p>No projects</p>;

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params: GridRenderCellParams) => (
        <div className="cell_action">
          <Link to="/projects/test">
            <div className="viewButton">View</div>
          </Link>
          <div className="deleteButton" onClick={() => {}}>
            Delete
          </div>
        </div>
      ),
    },
  ];

  return (
    <DataGrid
      rows={data.projects}
      columns={columns.concat(actionColumn)}
      pageSize={5}
      rowsPerPageOptions={[5]}
      checkboxSelection
    />
  );
};

export default ProjectsList;
