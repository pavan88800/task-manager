import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import homeImage from "../../assets/Images/4380.jpg";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../../config";
import GoogleIcon from "@mui/icons-material/Google";
import { Navigate } from "react-router-dom";
import { setLocalStorage } from "../../utils";
import { Button } from "../../components/UI";

const Login = () => {
  const [user, setUser] = useState(false);

  //LoginWithGoogle
  const LoginWithGoogle = () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        const user = result.user;
        const token = user.stsTokenManager.accessToken;
        setLocalStorage("token", token);
        setLocalStorage("user", user);
        setUser(true);
      })
      .catch((error) => {
        console.log(error);
        setUser(false);
      });
  };

  console.log(user, "user");

  if (user) {
    return <Navigate to="/home" />;
  }
  return (
    <Container style={{ marginTop: "8%" }}>
      {/* {console.log(provider)} */}
      <Grid container spacing={12}>
        <Grid item lg={8} md={6} sm={6}>
          <img
            src={homeImage}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            alt="homeImage"
          />
        </Grid>
        <Grid item lg={4} md={6} sm={6} style={{ marginTop: "10%" }}>
          <h2>Login In to Your Account</h2>
          <Button onClick={() => LoginWithGoogle()} bgColor={"#dc4a34"}>
            <GoogleIcon className="icon" /> Continue with Google
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
