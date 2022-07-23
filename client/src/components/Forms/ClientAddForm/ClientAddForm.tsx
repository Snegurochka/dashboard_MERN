import { ChangeEvent, FC, useState } from "react";
import { Button, Grid, TextField } from "@mui/material";
import { AvatarWrapper, FormWrapper } from "./ClientAddForm.styles";
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

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFields({ ...fields, [name]: value });
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
          <div>
            <label htmlFor="file">
              Image: <DriveFolderUploadOutlinedIcon />
            </label>
            <input
              type="file"
              id="file"
              onChange={(e) => {
                if (e.target?.files) {
                  setFile(e.target.files[0]);
                }
              }}
              style={{ display: "none" }}
            />
          </div>
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
      <Button variant="contained">Send</Button>
    </form>
  );
};

export default ClientAddForm;
