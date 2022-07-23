import { FC } from "react";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { GET_PROJECT } from "../../queries/projectQueries";
import { ProjectAPIType } from "../../types/APITypes";

const ProjectDetails: FC = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery<ProjectAPIType>(GET_PROJECT, {
    variables: { id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Eror</p>;
  if (!data) return <p>Eror loading</p>;

  return <div>ProjectDetails</div>;
};

export default ProjectDetails;
