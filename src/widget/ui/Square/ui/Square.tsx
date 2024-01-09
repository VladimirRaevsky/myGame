import { Button } from "@/shared/ui/Button";
import { SquareProps } from "../types";
import cls from "./Sauare.module.css";

export const Square = (props: SquareProps) => {
	const { value, index, handlerOnClick } = props;

	return (
		<Button
			className={cls.square}
			type="button"
			handlerOnClick={() => handlerOnClick(index)}
		>
			{value}
		</Button>
	);
};
