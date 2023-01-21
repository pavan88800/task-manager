import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { Button } from "./button.stylecompoents";
const Login = () => {
  return (
    <Container style={{ marginTop: "15%" }}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <p>xs=8</p>
        </Grid>
        <Grid item xs={4}>
          <h2>Login In to Your Account</h2>
          <Button bgColor={"#dc4a34"}> Continue with Google</Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
