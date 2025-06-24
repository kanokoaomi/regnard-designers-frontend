import { Formik, Form, Field, ErrorMessage } from "formik"
import { useId } from 'react';
import { RegisterSchema } from "../../utils/schemas";
import { registerUser } from "../../redux/auth/authOperations";
import { useDispatch } from "react-redux";

const INITIAL_VALUES = {
    username: "",
    email: "",
    password: ""
}

const Forms = ({ button }) => {

    const dispatch = useDispatch()

    const handleSubmit = (values, actions) => {
        console.log(values);
        dispatch(registerUser(values));
        actions.resetForm();
    };

    const nameId = useId();
    const emailId = useId();
    const pwdId = useId();

    return (
        <Formik initialValues={INITIAL_VALUES}
            onSubmit={handleSubmit}
            validationSchema={RegisterSchema}>
            <Form>
                <div>
                    <label htmlFor={nameId}>Name:</label>
                    <Field type="text" name="username" id={nameId} />
                    <ErrorMessage name="username" component="span" />
                </div>

                <div>
                    <label htmlFor={emailId}>Email:</label>
                    <Field type="email" name="email" id={emailId} />
                    <ErrorMessage name="email" component="span" />
                </div>

                <div>
                    <label htmlFor={pwdId}>Password:</label>
                    <Field type="password" name="password" id={pwdId} />
                    <ErrorMessage name="password" component="span" />
                </div>

                <button type="submit">{button}</button>
            </Form>
        </Formik>
    )
}

export default Forms