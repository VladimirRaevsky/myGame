import { ReactNode } from "react";

export type TypeButton = "button" | "submit";

export interface ButtonProps {
	className?: string;
	children: ReactNode;
	type: TypeButton;
	handlerOnClick?: () => void;
}
