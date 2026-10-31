import React from 'react'

export default function Fotter() {
    return (
        <footer className="bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-700 text-white py-10 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4">ShopKart</h3>
                        <p className="text-indigo-100">Building the future of web development</p>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">Quick Links</h4>
                        <div className="flex flex-col space-y-2">
                            <a href="#" className="text-indigo-100 hover:text-white transition">Home</a>
                            <a href="#" className="text-indigo-100 hover:text-white transition">Features</a>
                            <a href="#" className="text-indigo-100 hover:text-white transition">Pricing</a>
                        </div>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">Connect</h4>
                        <div className="flex flex-col space-y-2">
                            <a href="#" className="text-indigo-100 hover:text-white transition">Twitter</a>
                            <a href="#" className="text-indigo-100 hover:text-white transition">GitHub</a>
                            <a href="#" className="text-indigo-100 hover:text-white transition">Discord</a>
                        </div>
                    </div>
                </div>
                <div className="border-t border-indigo-500 pt-6">
                    <p className="text-center text-indigo-100">© 2023 ShopKart. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}