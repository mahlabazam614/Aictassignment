import Image from 'next/image';

export default function navbar() {
    return (
        <nav className=" bg-linear-to-b from-gray-500 to-neutral-950 p-4">
            <div className="container mx-auto flex justify-between items-center">
                {/* logo */}
                <div className="text-white font-bold text-xl">
                    Assignment
                </div>
                <div>
                    <a href="/home" className="text-gray-300 hover:text-white mx-2">Home</a>
                    <a href="/signin" className="text-gray-300 hover:text-white mx-2">Sign in</a>
                    <a href="/data" className="text-gray-300 hover:text-white mx-2">Data</a>
                    <a href="https://github.com/mahlabazam614/AICT_assignment" className="text-gray-300 hover:text-white mx-2">Code</a>
                </div>
                <div>
                    <button className="bg-white text-gray-800 px-4 py-2 rounded-md hover:bg-gray-200">
                        <a href="https://myportfolio-gold-nine.vercel.app/">
                            Developer's Info
                        </a>


                    </button>


                </div>
            </div>
        </nav>
    );
}
