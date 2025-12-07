import { registerUser } from '@/app/actions/register';

export default function Signin() {


    return (
        <main className="flex justify-center items-center min-h-screen bg-gradient-to-b from-neutral-950 to-white p-4">
            <div className="w-full max-w-2xl bg-white rounded-md shadow-lg p-10">
                <h1 className="text-3xl font-bold text-center mb-10 text-gray-800 tracking-tight">
                    Sign In
                </h1>

                <form action={registerUser} className="space-y-6">
                    {/* Name */}
                    <div className="flex flex-col">
                        <label className="font-semibold text-gray-700 mb-1">Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 text-black"
                            required
                        />
                    </div>

                    {/* DOB */}
                    <div className="flex flex-col">
                        <label className="font-semibold text-gray-700 mb-1">Date of Birth</label>
                        <input
                            type="date"
                            name="date_of_birth"
                            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 text-black"
                            required
                        />
                    </div>

                    {/* Phone */}
                    <div className="flex flex-col">
                        <label className="font-semibold text-gray-700 mb-1">Phone</label>
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Enter your phone number"
                            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 text-black"
                            required
                        />
                    </div>

                    {/* Gender */}
                    <div className="flex flex-col">
                        <label className="font-semibold text-gray-700 mb-1">Gender</label>
                        <select
                            name="gender"
                            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 text-black"
                            required
                        >
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>

                    {/* Email */}
                    <div className="flex flex-col">
                        <label className="font-semibold text-gray-700 mb-1">Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 text-black"
                            required
                        />
                    </div>

                    {/* Password */}
                    <div className="flex flex-col">
                        <label className="font-semibold text-gray-700 mb-1">Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 text-black"
                            required
                        />
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-4 pt-4">
                        <button
                            type="submit"
                            className="w-full bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 rounded-md transition-all"
                        >
                            Sign In
                        </button>
                        <button
                            type="reset"
                            className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 rounded-md transition-all"
                        >
                            Reset
                        </button>
                    </div>
                </form>
            </div>
        </main>
    );
}
