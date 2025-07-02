import { Formik, Form, Field, ErrorMessage } from "formik"
import { useEffect, useId } from 'react';
import { RegisterSchema } from "../../utils/schemas";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import { SuccessToast } from "../../utils/successToast.js";
import { ErrorToast } from "../../utils/errorToast.js";
import { isLoading, selectIsLoggedIn } from "../../redux/auth/authSelections.js";
import styles from "./Forms.module.css"
import Loader from "../Loader/Loader.jsx";


const Forms = ({ initValues, textToLink, link, text, title, isLogin, button, func, goodMessage, schema }) => {

    const isLoggedIn = useSelector(selectIsLoggedIn);
    const isloading = useSelector(isLoading);
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const handleSubmit = async (values, actions) => {
        try {
            await dispatch(func(values)).unwrap();
            actions.resetForm();
            SuccessToast(goodMessage);
        } catch (error) {
            ErrorToast(error.data.message)
        }
    };

    useEffect(() => {
        if (isLoggedIn) {
            navigate('/');
        }
    }, [isLoggedIn, navigate]);

    const nameId = useId();
    const emailId = useId();
    const pwdId = useId();

    return (
        <Formik initialValues={initValues}
            onSubmit={handleSubmit}
            validationSchema={schema}
        >
            <div className={styles.container}>
                {isloading && <Loader />}
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
                {/* <button className={styles.noButton} onClick={() => { setIsLoggedIn(false) }}> </button> */}
            </div>
        </Formik>
    )
}

export default Forms