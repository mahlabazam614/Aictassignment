
import Navbar from '@/components/navbar/Navbar';
import { sql } from '@/lib/db';

interface User {
    id: number;
    name: string;
    date_of_birth: string;
    phone: string;
    gender: string;
    email: string;
}

export default async function DataPage() {
    // Fetch real data from database
    let users: User[] = [];

    try {
        const result = await sql`SELECT id, name, date_of_birth, phone, gender, email FROM users ORDER BY id DESC`;
        users = result.rows as User[];
    } catch (error) {
        console.error('Database error:', error);
        // users remains empty array
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-neutral-950 to-white text-gray-800">
            <Navbar />
            <div className="container mx-auto p-8 flex justify-center">
                <div className="w-full max-w-5xl bg-white rounded-md shadow-lg p-10">
                    <h1 className="text-3xl font-bold mb-8 text-center text-gray-800 tracking-tight">
                        Registered Users
                    </h1>

                    <div className="overflow-hidden rounded-md border border-gray-200">
                        <table className="min-w-full text-left">
                            <thead className="bg-gray-100 text-gray-700 uppercase font-bold text-sm tracking-wider border-b border-gray-200">
                                <tr>
                                    <th className="px-6 py-4">ID</th>
                                    <th className="px-6 py-4">Name</th>
                                    <th className="px-6 py-4">Date of Birth</th>
                                    <th className="px-6 py-4">Phone</th>
                                    <th className="px-6 py-4">Gender</th>
                                    <th className="px-6 py-4">Email</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {users.map((user) => (
                                    <tr key={user.id} className="hover:bg-gray-50 transition-colors duration-200">
                                        <td className="px-6 py-4 text-gray-600 font-mono text-sm">{user.id}</td>
                                        <td className="px-6 py-4 font-semibold text-gray-900">{user.name}</td>
                                        <td className="px-6 py-4 text-gray-600">{new Date(user.date_of_birth).toLocaleDateString()}</td>
                                        <td className="px-6 py-4 text-gray-600">{user.phone}</td>
                                        <td className="px-6 py-4">
                                            <span className={`px-2 py-1 rounded text-xs font-semibold ${user.gender.toLowerCase() === 'male' ? 'bg-blue-100 text-blue-800' :
                                                user.gender.toLowerCase() === 'female' ? 'bg-pink-100 text-pink-800' :
                                                    'bg-gray-200 text-gray-800'
                                                }`}>
                                                {user.gender}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-gray-600">{user.email}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        {users.length === 0 && (
                            <div className="p-8 text-center text-gray-500">No users found in the database.</div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
