"use client";

import React from "react";

export function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 py-12 mt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    <div>
                        <h3 className="text-white font-semibold mb-4">Nepal ID</h3>
                        <p className="text-sm">Zero-knowledge proof verification for Nepali citizens</p>
                    </div>
                    <div>
                        <h4 className="text-white font-semibold mb-4">Product</h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a href="#" className="hover:text-white transition">
                                    Verify
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition">
                                    NFT Mint
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition">
                                    Dashboard
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-semibold mb-4">Resources</h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a href="#" className="hover:text-white transition">
                                    Docs
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition">
                                    FAQ
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition">
                                    Support
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-semibold mb-4">Legal</h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a href="#" className="hover:text-white transition">
                                    Privacy
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition">
                                    Terms
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-gray-800 pt-8 text-center text-sm">
                    <p>&copy; 2025 Nepal ID. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
