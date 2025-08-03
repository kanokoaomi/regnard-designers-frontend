import Forms from "../../components/Forms/Forms";
import Container from "../../components/Container/Container";
import { loginUser } from "../../redux/auth/authOperations";
import { LoginSchema } from "../../utils/schemas";
import styles from "./Login.module.css";

const Login = () => {
  const INITIAL_VALUES_LOGIN = {
    email: "",
    password: "",
  };

  // to know if we need the input "name" or not
  const isLogin = true;

  return (
    <div className={styles.form}>
      <Container>
        <Forms
          initValues={INITIAL_VALUES_LOGIN}
          textToLink={"Register"}
          link={"/register"}
          text={"Don't have an account yet? "}
          title={"Log in"}
          isLogin={isLogin}
          button={"Login"}
          func={loginUser}
          goodMessage={"Successfully logged in!"}
          schema={LoginSchema}
        />
      </Container>
      <div className={styles.pictureContainer}></div>
    </div>
  );
};

export default Login;
