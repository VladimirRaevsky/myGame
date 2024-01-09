import { type FC } from "react";
import { ButtonProps } from "../types";
import cls from "./Button.module.css";

export const Button: FC<ButtonProps> = (props) => {
	const { children, type, handlerOnClick } = props;

	return (
		<button className={cls.button} type={type} onClick={handlerOnClick}>
			{children}
		</button>
	);
};
