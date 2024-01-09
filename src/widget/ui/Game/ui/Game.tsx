import { Board } from "@/widget/ui/Board";
import cls from "./Board.module.css";

export function Game() {
	return (
		<div className={cls.game}>
			<div className={cls.gameBoard}>
				<Board />
			</div>
			<div className={cls.gameInfo}>
				<ol>{/*TODO*/}</ol>
			</div>
		</div>
	);
}
