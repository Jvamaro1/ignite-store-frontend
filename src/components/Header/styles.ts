import { styled } from "../../styles";

export const HeaderContainer = styled("header", {
  padding: "2rem 0",
  width: "100%",
  maxWidth: 1100,
  margin: "0 auto",
  display: 'flex',
  alignContent: "center",
  justifyContent: "center",

  button: {
    marginLeft: "auto"
  }
})


export const HeaderActions = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "1rem",
});

