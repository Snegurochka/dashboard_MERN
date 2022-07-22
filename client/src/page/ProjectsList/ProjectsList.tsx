import { FC } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { ProjectsAPIType } from "../../types/APITypes";
import { GET_PROJECTS } from "../../queries/projectQueries";

// Components
import ListComponent from "../../components/Layout/ListComponent/ListComponent";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 230 },
  { field: "name", headerName: "Name", width: 170 },
  { field: "description", headerName: "Description", width: 230 },
  {
    field: "client",
    headerName: "Client",
    width: 170,
    renderCell: (params) => (
      <Link to={`/clients/${params.row.client.id}`}>
        {params.row.client.name}
      </Link>
    ),
  },
  {
    field: "status",
    headerName: "Status",
    width: 170,
    renderCell: (params) => (
      <span
        className={`list_status ${
          params.row.status === "Completed" ? "completed" : ""
        }`}
      >
        {params.row.status}
      </span>
    ),
  },
];

const ProjectsList: FC = () => {
  const { loading, error, data } = useQuery<ProjectsAPIType>(GET_PROJECTS);

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params: GridRenderCellParams) => (
        <div className="cell_action">
          <Link to={params.row.id}>
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
    <ListComponent
      title="Projects list"
      loading={loading}
      error={error}
      data={data?.projects}
      columns={columns.concat(actionColumn)}
    />
  );
};

export default ProjectsList;
