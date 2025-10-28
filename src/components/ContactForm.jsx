import React from 'react';

export default function ContactForm() {
	return (
		<section className="py-6 text-center">
			<h2 className="text-lg font-semibold text-gray-800 mb-3">CONTACTO</h2>
			<form className="flex flex-col items-center gap-3" onSubmit={(e) => e.preventDefault()}>
				<input
					type="text"
					name="nombres"
					placeholder="NOMBRES"
					className="w-11/12 max-w-xl rounded-lg border border-green-100 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-300"
				/>
				<input
					type="text"
					name="apellidos"
					placeholder="APELLIDOS"
					className="w-11/12 max-w-xl rounded-lg border border-green-100 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-300"
				/>
				<textarea
					name="mensaje"
					placeholder="MENSAJE"
					rows="4"
					className="w-11/12 max-w-xl rounded-lg border border-green-100 px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-green-300"
				/>
				<button
					type="submit"
					className="mt-1 w-44 rounded-md px-4 py-2 font-bold text-white bg-gradient-to-r from-green-600 to-green-800 hover:from-green-700 hover:to-green-900 transition-shadow shadow-md"
				>
					ENVIAR
				</button>
			</form>
		</section>
	);
}
