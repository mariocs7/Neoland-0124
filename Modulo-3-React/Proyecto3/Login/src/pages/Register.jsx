import "./Register.css";
import { useEffect, useState } from "react";
import { Uploadfile } from "../components";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { registerUser } from "../services/user.service";
import { useRegisterError } from "../hooks";
import { useForm } from "react-hook-form";

export const Register = () => {
    // Estados y funciones
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();
    const { allUser, setAllUser, bridgeData } = useAuth();
    const [res, setRes] = useState({});
    const [send, setSend] = useState(false);
    const [okRegister, setOkRegister] = useState(false);

    useEffect(() => {
        const changeColorButton = document.getElementById('changeColor');
        if (changeColorButton) {
            changeColorButton.addEventListener('click', function() {
                // Define tus nuevos colores aquí
                var newButtonColor = '#6b5b95';
                var newTextColor = '#a63a50';

                // Cambia el color de fondo de los botones
                var buttons = document.querySelectorAll('.label-radio');
                for (var i = 0; i < buttons.length; i++) {
                    buttons[i].style.backgroundColor = newButtonColor;
                }

                // Cambia el color del texto de los enlaces
                var links = document.querySelectorAll('.anchorCustom');
                for (var i = 0; i < links.length; i++) {
                    links[i].style.color = newTextColor;
                }
            });
        }

        // Limpiar el evento al desmontar el componente
        return () => {
            if (changeColorButton) {
                changeColorButton.removeEventListener('click');
            }
        }
    }, []);

    //! ---------------------------------------------------------------------------
    //? 1) Funcion que se encarga del formulario - de la data del formulario
    //! ---------------------------------------------------------------------------

    const formSubmit = async(formData) => {
        const inputFile = document.getElementById('file-upload').files;

        if (inputFile.length != 0) {
            // si es diferente a 0 quiere decir que tenemos una imagen
            const custonFormData = {
                ...formData,
                image: inputFile[0],
            };

            setSend(true);
            setRes(await registerUser(custonFormData));
            setSend(false);
        } else {
            const custonFormData = {
                ...formData,
            };

            setSend(true);
            setRes(await registerUser(custonFormData));
            setSend(false);
        }
    };

    //! ---------------------------------------------------------------------------
    //? 2) useEffect que van gestionar las respuestas y errores -- useRegisterError.jsx
    //! ---------------------------------------------------------------------------

    useEffect(() => {
        console.log('soy res 🥶', res);
        useRegisterError(res, setOkRegister, setRes);
        if (res?.status == 200) bridgeData("ALLUSER"); 
    }, [res]);

    useEffect(() => {
        console.log("soy allUser 😀", allUser);
    }, [allUser])
    

    //! ---------------------------------------------------------------------------
    //? 3) Estados de navegación
    //! ---------------------------------------------------------------------------

    if(okRegister){
        return <Navigate to='/verifyCode'/>
    }

    return (
    <>
        <div className="form-wrap">
            <h1>Sign Up</h1>
            <p>It’s free and only takes a minute.</p>
            <form onSubmit={handleSubmit(formSubmit)}>
            <div className="user_container form-group">
                <input
                className="input_user"
                type="text"
                id="name"
                name="name"
                autoComplete="false"
                {...register("name", { required: true })}
                />
                <label htmlFor="custom-input" className="custom-placeholder">
                username
                </label>
            </div>
            <div className="password_container form-group">
                <input
                className="input_user"
                type="password"
                id="password"
                name="password"
                autoComplete="false"
                {...register("password", { required: true })}
                />
                <label htmlFor="custom-input" className="custom-placeholder">
                password
                </label>
            </div>

            <div className="email_container form-group">
                <input
                className="input_user"
                type="email"
                id="email"
                name="email"
                autoComplete="false"
                {...register("email", { required: true })}
                />
                <label htmlFor="custom-input" className="custom-placeholder">
                email
                </label>

                <div className="sexo">
                <input
                    type="radio"
                    name="sexo"
                    id="hombre"
                    value="hombre"
                    {...register("gender")}
                />
                <label htmlFor="hombre" className="label-radio hombre">
                    Hombre
                </label>
                <input
                    type="radio"
                    name="sexo"
                    id="mujer"
                    value="mujer"
                    {...register("gender")}
                />
                <label htmlFor="mujer" className="label-radio mujer">
                    Mujer
                </label>
                </div>
                <Uploadfile />
            </div>

            <div className="btn_container">
                <button
                className="btn"
                type="submit"
                disabled={send}
                style={{ background: send ? "#49c1a388" : "#2f7a67" }}
                >
                { send ? "Cargando..." : "Register" }
                </button>
            </div>
            <p className="bottom-text">
                <small>
                By clicking the Sign Up button, you agree to our{" "}
                <Link className="anchorCustom">Terms & Conditions</Link> and{" "}
                <Link className="anchorCustom">Privacy Policy</Link>.
                </small>
            </p>
            </form>
        </div>
        <div className="footerForm">
            <p className="parrafoLogin">
            Already have an account? <Link to="/login">Login Here</Link>
            </p>
        </div>
    </>
    )
}
