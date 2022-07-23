import styled from "styled-components";

export const AvatarWrapper = styled.div`
  flex: 1;
  text-align: center;

  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
  }
`;

export const FormWrapper = styled.div`
  flex: 2;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: space-around;
`;
