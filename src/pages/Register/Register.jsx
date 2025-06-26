import Container from "../../components/Container/Container"
import Forms from "../../components/Forms/Forms"

const Register = () => {
  return (
    <div>
      <Container>
        <Forms
          textToLink={"Log in"}
          link={"/login"}
          text={"Already have an account? "}
          title={"Register"}
          button={"Make an account"}
        />
      </Container>
    </div>
  )
}

export default Register