import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="bg-gradient-to-b from-gray-500 to-neutral-950 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white font-bold text-xl">
                    Assignment
                </div>
                <div>
                    <Link href="/" className="text-gray-300 hover:text-white mx-2">Home</Link>
                    <Link href="/signin" className="text-gray-300 hover:text-white mx-2">Sign in</Link>
                    <Link href="/data" className="text-gray-300 hover:text-white mx-2">Data</Link>
                    <a href="https://github.com/mahlabazam614/Aictassignment" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white mx-2">Code</a>
                </div>
                <div>
                    <a href="https://myportfolio-gold-nine.vercel.app/" target="_blank" rel="noopener noreferrer">
                        <button className="bg-white text-gray-800 px-4 py-2 rounded-md hover:bg-gray-200">
                            Developer's Info
                        </button>
                    </a>


                </div>
            </div>
        </nav>
    );
}
