import { ChangeEvent, FC, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { ADD_CLIENT } from "../../../mutations/clientMutations";
import { GET_CLIENTS } from "../../../queries/clientQueries";
import { ClientsAPIType } from "../../../types/APITypes";

import { AvatarWrapper, FormWrapper } from "./ClientAddForm.styles";
import { AppRoutes } from "../../../routes";

import { Button, Grid, IconButton, TextField } from "@mui/material";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";

const formFields = {
  name: "",
  email: "",
  phone: "",
};

const ClientAddForm: FC = () => {
  const [file, setFile] = useState<File>();
  const [fields, setFields] = useState(formFields);
  const { name, email, phone } = fields;

  const navigate = useNavigate();

  const [addClient, { data }] = useMutation(ADD_CLIENT, {
    variables: { name, email, phone },
    update(cache, { data: { addClient } }) {
      const { clients } = cache.readQuery({ query: GET_CLIENTS }) as ClientsAPIType;

      cache.writeQuery({
        query: GET_CLIENTS,
        data: { clients: [...clients, addClient] },
      });
    },
  });

  if (data) {
    navigate(`/${AppRoutes.CLIENTS}`);
  }

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFields({ ...fields, [name]: value });
  };

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    addClient();
  };

  return (
    <form>
      <Grid container p={2}>
        <AvatarWrapper>
          <img
            src={
              file
                ? URL.createObjectURL(file)
                : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
            }
            alt=""
          />
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="label"
          >
            <input
              hidden
              accept="image/*"
              onChange={(e) => {
                if (e.target?.files) {
                  setFile(e.target.files[0]);
                }
              }}
              type="file"
            />
            <DriveFolderUploadOutlinedIcon />
          </IconButton>
        </AvatarWrapper>
        <FormWrapper>
          <TextField
            type="text"
            value={name}
            name="name"
            label="Name"
            onChange={changeHandler}
            variant="standard"
          />
          <TextField
            type="text"
            value={email}
            name="email"
            label="Email"
            onChange={changeHandler}
            variant="standard"
          />
          <TextField
            type="text"
            value={phone}
            name="phone"
            label="Phone"
            onChange={changeHandler}
            variant="standard"
          />
        </FormWrapper>
      </Grid>
      <Button variant="contained" onClick={submitHandler}>
        Send
      </Button>
    </form>
  );
};

export default ClientAddForm;
