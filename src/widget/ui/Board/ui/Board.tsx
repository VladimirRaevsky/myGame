import { calculateWinner } from "@/shared/lib";
import { Square } from "@/widget/ui/Square";
import { useState } from "react";
import { TypeOfArray } from "../types";

import cls from "./Board.module.css";

let status: string = "";

export const Board = () => {
	const [xIsNext, setXIsNext] = useState(true);

	const arr: string[] = [];

	for (let i = 1; i <= 9; i++) {
		arr.push(i + "");
	}

	const [stateValue, setStateValue] = useState<TypeOfArray>(
		Array(9).fill("?")
	);

	const handlerOnClick = (i: number) => {
		const newValue = stateValue.slice();

		const winner = calculateWinner(newValue);

		if (newValue[i] != "?" || winner) return;

		if (xIsNext) {
			newValue[i] = "X";
			setXIsNext(!xIsNext);
		} else {
			newValue[i] = "O";
			setXIsNext(!xIsNext);
		}

		setStateValue(newValue);

		if (winner) {
			status = "Победитель " + winner;
			return;
		}
	};

	return (
		<>
			<div className="status">
				{status
					? status
					: xIsNext
					? `следующий ход X`
					: `следующий ход O`}
			</div>
			<div className={cls.boardRow}>
				{stateValue.map((el, i) => {
					return (
						<Square
							key={i}
							value={el}
							index={i}
							handlerOnClick={() => handlerOnClick(i)}
						/>
					);
				})}
			</div>
		</>
	);
};
