import React from 'react';
import Header from './components/Header';
import ProgramCards from './components/ProgramCards';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

export default function App() {
	return (
		<div className="min-h-screen bg-gray-50 flex items-start justify-center py-10 px-4">
			<main className="w-full max-w-4xl bg-white border-2 border-green-800 rounded-2xl p-6 shadow-lg">
				<Header />
				<ProgramCards />
				<ContactForm />
				<Footer />
			</main>
		</div>
	);
}
