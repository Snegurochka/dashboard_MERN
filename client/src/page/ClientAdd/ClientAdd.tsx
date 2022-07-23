import { FC } from "react";
import { Box } from "@mui/material";
import ClientAddForm from "../../components/Forms/ClientAddForm/ClientAddForm";

const ClientAdd: FC = () => {
  return (
    <Box p={2}>
      <h2>ClientAdd</h2>
      <ClientAddForm />
    </Box>
  );
};

export default ClientAdd;
