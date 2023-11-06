import React from "react";
import { Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { fetchAuth, selectIsAuth } from "../redux/slices/userSlice";
import {
	Box,
	Button,
	Container,
	FormControl,
	FormHelperText,
	FormLabel,
	Heading,
	Input,
} from "@chakra-ui/react";

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
		<FormControl
			as="form"
			onSubmit={handleSubmit(onSubmitAuth)}
			autoComplete="off"
		>
			<Heading as="h2" textAlign="center" fontWeight="600" marginBottom="20px">
				Авторизация
			</Heading>
			<Container
				display="flex"
				flexDirection="column"
				justifyContent="center"
				alignItems="center"
				gap="40px"
			>
				<Box
					as="div"
					position="relative"
					width="240px"
					display="flex"
					alignItems="center"
					flexDirection="column"
					justifyContent="center"
				>
					<FormLabel fontSize="1.6rem" textAlign="center" margin="0">
						Адрес электронной почты
					</FormLabel>
					<Input
						type="email"
						id="email"
						{...register("email", { required: "Укажите почту" })}
						autoComplete="off"
						tabIndex="1"
						padding="15px"
						fontSize="2xl"
						border="2px solid #e5e5e5"
					/>
					{errors.email && (
						<FormHelperText
							as="p"
							position="absolute"
							top="55px"
							alignSelf="flex-start"
							fontSize="1.3rem"
						>
							Введите адрес электронной почты
						</FormHelperText>
					)}
				</Box>
				<Box
					as="div"
					position="relative"
					width="240px"
					display="flex"
					alignItems="center"
					flexDirection="column"
					justifyContent="center"
				>
					<FormLabel fontSize="1.6rem" textAlign="center" margin="0">
						Пароль
					</FormLabel>
					<Input
						type="password"
						id="password"
						{...register("password", { required: "Введите пароль" })}
						autoComplete="off"
						tabIndex="2"
						padding="15px"
						fontSize="2xl"
						border="2px solid #e5e5e5"
					/>
					{errors.password && (
						<FormHelperText
							as="p"
							position="absolute"
							top="55px"
							alignSelf="flex-start"
							fontSize="1.3rem"
						>
							Введите пароль
						</FormHelperText>
					)}
				</Box>
				<Box as="div" textAlign="center">
					<Button
						type="submit"
						tabIndex="3"
						width="120px"
						height="30px"
						fontSize="1.6rem"
						fontWeight="400"
						backgroundColor="rgba(229,229,229,1)"
						_hover={{ backgroundColor: "rgba(229,229,229,0.6)" }}
					>
						Войти
					</Button>
				</Box>
			</Container>
		</FormControl>
	);
};

export default AuthForm;
