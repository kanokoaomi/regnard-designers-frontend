import { Formik, Form, Field, ErrorMessage } from "formik"
import { useId } from 'react';
import { RegisterSchema } from "../../utils/schemas";
import { registerUser } from "../../redux/auth/authOperations";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import styles from "./Forms.module.css"


const INITIAL_VALUES = {
    name: "",
    email: "",
    password: ""
}

const Forms = ({ textToLink, link, text, title, isLogin, button }) => {

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
            validationSchema={RegisterSchema}
        >
            <div className={styles.container}>
                <h2 className={styles.title}>{title}</h2>
                <Form className={styles.form}>
                    {!isLogin &&
                        <div className={styles.inputContainer}>
                            <label className={styles.label} htmlFor={nameId}>Name:</label>
                            <Field autoComplete={false.toString()} placeholder={"Stephan Armand"} className={styles.input} type="text" name="name" id={nameId} />
                            <ErrorMessage className={styles.error} name="name" component="span" />
                        </div>}

                    <div className={styles.inputContainer}>
                        <label className={styles.label} htmlFor={emailId}>Email:</label>
                        <Field autoComplete={false.toString()} placeholder={"example@gmail.com"} className={styles.input} type="email" name="email" id={emailId} />
                        <ErrorMessage className={styles.error} name="email" component="span" />
                    </div>

                    <div className={styles.inputContainer}>
                        <label className={styles.label} htmlFor={pwdId}>Password:</label>
                        <Field autoComplete={false.toString()} placeholder={"**********"} className={styles.input} type="password" name="password" id={pwdId} />
                        <ErrorMessage className={styles.error} name="password" component="span" />
                    </div>

                    <button className="button" type="submit">{button}</button>
                </Form>

                <p className={styles.text}>{text}<NavLink className={styles.link} to={link}>{textToLink}</NavLink></p>
                <p className={styles.textTwo}>Or continue <NavLink className={styles.link} to={"/"}>without an account</NavLink></p>
            </div>
        </Formik>
    )
}

export default Forms