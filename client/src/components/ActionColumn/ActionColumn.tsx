import { FC } from "react";
import { Link } from "react-router-dom";
import { ApolloCache, DocumentNode, useMutation } from "@apollo/client";

type PropsTypes = {
  id: string;
  mutation: DocumentNode;
  updateCache: (cache: ApolloCache<any>, id: string) => void;
};

const ActionColumn: FC<PropsTypes> = ({ id, mutation, updateCache }) => {
  const [deleteClient] = useMutation(mutation, {
    variables: { id: id },
    update(cache, { data: { deleteClient } }) {
      updateCache(cache,  deleteClient.id);
    },
  });

  return (
    <div className="cell_action">
      <Link to={id}>
        <div className="viewButton">View</div>
      </Link>
      <div className="deleteButton" onClick={() => deleteClient()}>
        Delete
      </div>
    </div>
  );
};

export default ActionColumn;
