import Forms from "../../components/Forms/Forms"
import Container from "../../components/Container/Container";

const Login = () => {

    // not redux but to know if we need the input "name" or not
    const isLogin = true;

    return (
        <div>
            <Container>
                <Forms
                    textToLink={"Register"}
                    link={"/register"}
                    text={"Don't have an account yet? "}
                    title={"Log in"} isLogin={isLogin}
                    button={"Login"}
                />
            </Container>
        </div>
    )
}

export default Login