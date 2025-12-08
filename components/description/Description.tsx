export default function Description() {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-neutral-950 to-white p-4 py-20">
            <div className="w-full max-w-3xl bg-white rounded-md shadow-lg p-10">
                <h1 className="text-3xl font-bold text-center mb-8 text-gray-800 tracking-tight">
                    Project Overview
                </h1>

                <div className="space-y-6 text-gray-700">
                    {/* Introduction */}
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                            What This Website Does
                        </h2>
                        <p className="leading-relaxed">
                            This is a full-stack Next.js application that demonstrates modern web development practices
                            with user registration, authentication, and data management capabilities. The application
                            features a clean, professional design with a focus on user experience.
                        </p>
                    </section>

                    {/* Key Features */}
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                            Key Features
                        </h2>
                        <ul className="space-y-3">
                            <li className="flex items-start">
                                <span className="inline-block w-2 h-2 bg-gray-700 rounded-full mt-2 mr-3"></span>
                                <div>
                                    <strong className="font-semibold">User Registration System:</strong> A comprehensive
                                    sign-in form that collects user information including name, date of birth, phone number,
                                    gender, email, and password with proper validation.
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="inline-block w-2 h-2 bg-gray-700 rounded-full mt-2 mr-3"></span>
                                <div>
                                    <strong className="font-semibold">Database Integration:</strong> Connected to Neon
                                    PostgreSQL database for secure data storage and retrieval of user information.
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="inline-block w-2 h-2 bg-gray-700 rounded-full mt-2 mr-3"></span>
                                <div>
                                    <strong className="font-semibold">Data Display Table:</strong> A beautifully designed
                                    table that displays all registered users with sortable columns, hover effects, and
                                    color-coded gender badges.
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="inline-block w-2 h-2 bg-gray-700 rounded-full mt-2 mr-3"></span>
                                <div>
                                    <strong className="font-semibold">Responsive Design:</strong> Fully responsive layout
                                    that works seamlessly across desktop, tablet, and mobile devices.
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="inline-block w-2 h-2 bg-gray-700 rounded-full mt-2 mr-3"></span>
                                <div>
                                    <strong className="font-semibold">Modern UI/UX:</strong> Clean gradient backgrounds,
                                    smooth transitions, and a professional gray-scale color scheme for an elegant user experience.
                                </div>
                            </li>
                        </ul>
                    </section>

                    {/* Technology Stack */}
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                            Technology Stack
                        </h2>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
                                <h3 className="font-semibold text-gray-800 mb-2">Frontend</h3>
                                <ul className="text-sm space-y-1">
                                    <li>• Next.js 15</li>
                                    <li>• React 19</li>
                                    <li>• TypeScript</li>
                                    <li>• Tailwind CSS</li>
                                </ul>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
                                <h3 className="font-semibold text-gray-800 mb-2">Backend</h3>
                                <ul className="text-sm space-y-1">
                                    <li>• Next.js Server Actions</li>
                                    <li>• Neon PostgreSQL</li>
                                    <li>• Vercel Postgres SDK</li>

                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Implementation Highlights */}
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                            Implementation Highlights
                        </h2>
                        <p className="leading-relaxed mb-3">
                            This project showcases several modern web development practices:
                        </p>
                        <ul className="space-y-2 text-sm">
                            <li className="pl-4">✓ Server-side rendering with Next.js App Router</li>
                            <li className="pl-4">✓ Type-safe development with TypeScript</li>

                            <li className="pl-4">✓ Form handling with Server Actions</li>
                            <li className="pl-4">✓ Database queries with Vercel Postgres</li>
                            <li className="pl-4">✓ Component-based architecture</li>
                            <li className="pl-4">✓ Deployed on Vercel for production</li>
                        </ul>
                    </section>

                    {/* Footer Note */}
                    <section className="pt-4 border-t border-gray-200">
                        <p className="text-sm text-gray-600 text-center italic">
                            This application demonstrates a complete full-stack workflow from user input to database
                            storage and data visualization, all built with modern web technologies and best practices.
                        </p>
                    </section>

                    {/* Made By */}
                    <section className="pt-6">
                        <p className="text-center text-gray-800 font-semibold">
                            Made by Mahlab Azam
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}
