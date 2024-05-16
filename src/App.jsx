import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";

const App = () => {
	return (
		<>
			<Navbar />
			<main className=''>
				<Hero />
				<section id='features' className='padding bg-gray-500'>
					Popular Products
				</section>
				<section id='services' className='padding bg-blue-300'>
					Services
				</section>
				<section id='pricing' className='padding bg-p-6'>
					Special Offer
				</section>
				<section id='offer' className='padding bg-s-3'>
					customer Review
				</section>
				<section id='how-to-use' className='padding'>
					Newsletter
				</section>
				<section id='roadmap' className='padding bg-black text-white'>
					footer
				</section>
				<Footer />
			</main>
		</>
	);
};

export default App;
