import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { fetchAuth, selectIsAuth } from "../redux/slices/authSlice";
import { Navigate } from "react-router-dom";

const AuthForm = () => {
	const dispatch = useDispatch();
	const isAuth = useSelector(selectIsAuth);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			email: "",
			password: "",
		},
		mode: "onChange",
	});

	const onSubmitAuth = async (values) => {
		const data = await dispatch(fetchAuth(values));
		if (!data.payload) {
			return alert("Не удалось авторизоваться!");
		}
		if ("token" in data.payload) {
			window.localStorage.setItem("token", data.payload.token);
		} else {
			alert("Не удалось авторизоваться!");
		}
	};

	if (isAuth) {
		return <Navigate to="/" />;
	}

	return (
		<form className="auth-form" onSubmit={handleSubmit(onSubmitAuth)}>
			<h2 className="auth-form__title">Авторизация</h2>
			<div className="auth-form__wrapper">
				<div className="auth-form__field">
					<label className="auth-form__label label">
						Адрес электронной почты
					</label>
					<input
						className="auth-form__input input"
						type="email"
						placeholder="Введите адрес электронной почты"
						{...register("email", {
							required: "Укажите адрес электронной почты",
						})}
					/>
					{errors.email && <p className="error">{errors.email.message}</p>}
				</div>
				<div className="auth-form__field">
					<label className="auth-form__label label">Пароль</label>
					<input
						className="auth-form__input input"
						type="password"
						placeholder="Введите пароль"
						{...register("password", {
							required: "Укажите пароль",
						})}
					/>
					{errors.password && (
						<p className="error">{errors.password.message}</p>
					)}
				</div>
				<div className="auth-form__field">
					<button className="auth-form__button button-reset" type="submit">
						Войти
					</button>
				</div>
			</div>
		</form>
	);
};

export default AuthForm;
