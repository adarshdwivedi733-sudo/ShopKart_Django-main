import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <nav className="bg-white text-gray-900 px-6 py-4 shadow-md border-b border-indigo-100">
            <div className="flex items-center justify-between max-w-6xl mx-auto">
                <div className="text-xl font-bold text-indigo-600">
                    ShopKart
                </div>
                <div className="hidden md:flex space-x-8 items-center">
                    <Link to = "/" className="text-gray-600 hover:text-indigo-600 transition">Home</Link>
                    <Link to = "/products" className="text-gray-600 hover:text-indigo-600 transition">Products</Link>                   
                    <Link to = "/admin" className="text-gray-600 hover:text-indigo-600 transition">Admin</Link>                   
                </div>
            </div>
        </nav>
    )
}