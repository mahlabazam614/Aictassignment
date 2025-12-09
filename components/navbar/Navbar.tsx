"use client";

import Link from 'next/link';
import { useState } from 'react';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-linear-to-b from-gray-500 to-neutral-950 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white font-bold text-xl">
                    Assignment
                </div>
                {/* Desktop Links */}
                <div className="hidden md:flex items-center space-x-4">
                    <Link href="/" className="text-gray-300 hover:text-white">Home</Link>
                    <Link href="/signin" className="text-gray-300 hover:text-white">Sign in</Link>
                    <Link href="/data" className="text-gray-300 hover:text-white">Data</Link>
                    <a href="https://github.com/mahlabazam614/Aictassignment" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">Code</a>
                    <a href="https://myportfolio-gold-nine.vercel.app/" target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" className="bg-white text-gray-800 hover:bg-gray-200">
                            Developer's Info
                        </Button>
                    </a>
                </div>
                {/* Mobile Menu */}
                <div className="md:hidden">
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="text-white hover:bg-gray-700">
                                <Menu className="h-6 w-6" />
                                <span className="sr-only">Toggle menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                            <SheetHeader>
                                <SheetTitle>Navigation</SheetTitle>
                                <SheetDescription>
                                    Access all pages and links here.
                                </SheetDescription>
                            </SheetHeader>
                            <div className="flex flex-col space-y-4 mt-6 px-4">
                                <Link href="/" className="text-gray-700 hover:text-gray-900 py-2" onClick={() => setIsOpen(false)}>Home</Link>
                                <Link href="/signin" className="text-gray-700 hover:text-gray-900 py-2" onClick={() => setIsOpen(false)}>Sign in</Link>
                                <Link href="/data" className="text-gray-700 hover:text-gray-900 py-2" onClick={() => setIsOpen(false)}>Data</Link>
                                <a href="https://github.com/mahlabazam614/Aictassignment" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900 py-2" onClick={() => setIsOpen(false)}>Code</a>
                                <a href="https://myportfolio-gold-nine.vercel.app/" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)}>
                                    <Button variant="outline" className="w-full">
                                        Developer's Info
                                    </Button>
                                </a>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </nav>
    );
}
