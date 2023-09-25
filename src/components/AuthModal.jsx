import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { fetchAuth } from "../redux/slices/authSlice";
import { RxCross1 } from "react-icons/rx";

const AuthModal = ({ modal, openModal }) => {
	const dispatch = useDispatch();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			email: "",
			password: "",
		},
		mode: "all",
	});

	const onSubmitAuth = async (values) => {
		const data = await dispatch(fetchAuth(values));
		if (!data.payload) {
		}
	};

	return (
		<div className="modal modal--visible">
			<form className="auth-form" onSubmit={handleSubmit(() => {})}>
				<button
					className="auth-form__button"
					type="button"
					onClick={openModal}
				>
					<RxCross1 className="icon" />
				</button>
			</form>
		</div>
	);
};

export default AuthModal;
