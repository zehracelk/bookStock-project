import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Formik } from "formik";
import LockIcon from "@mui/icons-material/Lock";
import image from "../assets/result.jpg";

import { Link } from "react-router-dom";
import LoginForm, { loginSchema } from "../components/LoginForm";

import useAuthCalls from "../hooks/useAuthCalls";
import { height } from "@mui/system";

const Login = () => {
  const { login } = useAuthCalls();

  return (
    <Container maxWidth="lg">
      <Grid
        container
        justifyContent="center"
        direction="row-reverse"
        sx={{
          height: "100vh",
          p: 2,
        }}
      >
        <Grid item xs={12} mb={0}>
          <Typography variant="h3" color="primary" align="center">
            STOCK APP
          </Typography>
        </Grid>

        <Grid item xs={12} sm={10} md={6}>
          <Avatar
            sx={{
              backgroundColor: "secondary.light",
              m: "auto",
              width: 50,
              height: 50,
            }}
          >
            <LockIcon size="30" />
          </Avatar>
          <Typography
            variant="h4"
            align="center"
            mb={10}
            color="secondary.light"
          >
            Login
          </Typography>

          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={loginSchema}
            onSubmit={(values, actions) => {
              login(values);
              actions.resetForm();
              actions.setSubmitting(false);
            }}
            component={(props) => <LoginForm {...props} />}
          ></Formik>
          <Box sx={{ textAlign: "center", mt: 2 }}>
            <Link to="/register">Do you have not an account?</Link>
          </Box>
        </Grid>

      </Grid>
    </Container>
  );
};

export default Login;