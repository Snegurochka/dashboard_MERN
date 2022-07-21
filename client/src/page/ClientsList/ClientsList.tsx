import { useQuery } from "@apollo/client";
import { FC } from "react"
import { GET_CLIENTS } from "../../queries/clientQueries";
import { ClientsAPIType } from "../../types/APITypes";

const ClientsList:FC = () => {
    const { loading, error, data } = useQuery<ClientsAPIType>(GET_CLIENTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Eror</p>;
  if (!data) return <p>No projects</p>;

  return (
    <div>ClientsList</div>
  )
}

export default ClientsList