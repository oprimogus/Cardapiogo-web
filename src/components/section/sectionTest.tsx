"use client";
import { useAuthContext } from "../../context";

export default function SectionTest() {
	const { isAuthenticated } = useAuthContext();

	return (
		<div className="pt-32">
			<p>{isAuthenticated ? "Autenticado" : "Nao autenticado"}</p>
		</div>
	);
}
