import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { Button } from "./button.stylecompoents";
import homeImage from "../../assets/Images/4380.jpg";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../../config";

//LoginWithGoogle
const LoginWithGoogle = () => {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      console.log(user.displayName, "user");
    })
    .catch((error) => {
      console.log(error);
    });
};
const Login = () => {
  return (
    <Container style={{ marginTop: "8%" }}>
      {/* {console.log(provider)} */}
      <Grid container spacing={12}>
        <Grid item lg={8} sm={6}>
          <img
            src={homeImage}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            alt="homeImage"
          />
        </Grid>
        <Grid item lg={4} sm={6} style={{ marginTop: "10%" }}>
          <h2>Login In to Your Account</h2>
          <Button onClick={() => LoginWithGoogle()} bgColor={"#dc4a34"}>
            🚀 Continue with Google
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
