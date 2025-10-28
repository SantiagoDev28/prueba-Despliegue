import React from 'react';

const programs = [
	'ADSO',
	'REDES DE DATOS',
	'ANIMACIÓN 3D',
	'LOGÍSTICA',
	'MERCADERISMO',
	'SISTEMAS',
];

export default function ProgramCards() {
	return (
		<section className="py-6 border-b border-gray-100">
			<div className="grid grid-cols-3 gap-5 sm:grid-cols-2 xs:grid-cols-1">
				{programs.map((p, i) => (
					<button
						key={p}
						className="relative rounded-xl p-6 bg-white border border-green-100 shadow-sm hover:shadow-lg transform transition-transform duration-200 hover:-translate-y-2 flex items-center justify-center font-semibold text-green-800"
						style={{ animationDelay: `${i * 80}ms` }}
						aria-label={`Programa ${p}`}
					>
						<span className="pointer-events-none">{p}</span>
						{/* pequeño acento naranja */}
						<span className="absolute top-3 right-3 w-2.5 h-2.5 bg-orange-400 rounded-full" />
					</button>
				))}
			</div>
		</section>
	);
}
