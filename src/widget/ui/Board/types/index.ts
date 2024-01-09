export type TypeOfArray  = string[]

export interface BoardProps {
	xIsNext: boolean;
	squares: string;
	onPlay: (el: string, el2: boolean) => void;
}
