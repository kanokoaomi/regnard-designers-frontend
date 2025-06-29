import Container from "../../components/Container/Container"
import Forms from "../../components/Forms/Forms"
import { registerUser } from "../../redux/auth/authOperations"
import { RegisterSchema } from "../../utils/schemas"

const Register = () => {

  const INITIAL_VALUES_REGISTER = {
    name: "",
    email: "",
    password: ""
  }

  return (
    <div>
      <Container>
        <Forms
          initValues={INITIAL_VALUES_REGISTER}
          textToLink={"Log in"}
          link={"/login"}
          text={"Already have an account? "}
          title={"Register"}
          button={"Make an account"}
          func={registerUser}
          goodMessage={"Successfully registered!"}
          schema={RegisterSchema}
        // badMassage={""}
        />
      </Container>
    </div>
  )
}

export default Register