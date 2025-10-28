import React from 'react';

export default function Header() {
	return (
		<header className="flex items-center gap-4 pb-4 border-b border-gray-100">
			<div
				className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-green-800 shadow-md flex-shrink-0"
				aria-hidden="true"
			/>
			<div>
				<nav className="text-sm font-semibold text-gray-700">INICIO · PROGRAMAS · CONTACTO</nav>
				<p className="text-xs text-gray-500 mt-1">Servicio Nacional de Aprendizaje — SENA · Bogotá</p>
			</div>
		</header>
	);
}
