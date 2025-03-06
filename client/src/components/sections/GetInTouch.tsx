import React from "react";

const GetInTouch = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-between p-8 ">
            {/* Left Section */}
            <div className="md:w-1/2 space-y-4">
                <h2 className="text-4xl font-bold text-white-800">Get in touch</h2>
                <p className="text-gray-600">
                    with our sales representative to discover the perfect solution for your needs.
                </p>
                <div className="space-y-2 text-gray-700">
                    <p className="flex items-center gap-2">
                        📍 Unit 204, 9900 King George Blvd, Surrey, BC V3T 0K7
                    </p>
                    <p className="flex items-center gap-2">📞 (604) 496-1799</p>
                    <p className="flex items-center gap-2">✉️ General Inquiry: info@mlhealth360.com</p>
                    <p className="flex items-center gap-2">🔑 Security Concern: support@mlhealth360.com</p>
                </div>
            </div>

            {/* Right Section */}
            <div className="md:w-1/2 mt-8 md:mt-0 bg-gray-100 p-6 rounded-lg shadow-lg">
                <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <input type="text" placeholder="First Name*" className="p-2 w-full border rounded" />
                        <input type="text" placeholder="Last Name*" className="p-2 w-full border rounded" />
                    </div>
                    <input type="text" placeholder="Company*" className="p-2 w-full border rounded" />
                    <div className="grid grid-cols-2 gap-4">
                        <input type="text" placeholder="Mobile Phone*" className="p-2 w-full border rounded" />
                        <select className="p-2 w-full border rounded">
                            <option>Afghanistan</option>
                            <option>India</option>
                            <option>USA</option>
                            <option>Canada</option>
                        </select>
                    </div>
                    <input type="email" placeholder="Work Email*" className="p-2 w-full border rounded" />
                    <textarea placeholder="Comments" className="p-2 w-full border rounded"></textarea>
                    <div className="flex items-center space-x-2">
                        <input type="checkbox" id="subscribe" />
                        <label htmlFor="subscribe" className="text-gray-600 text-sm">
                            I would like to subscribe to receive communications from mlHealth 360. Our company does not share or sell your personal information.
                        </label>
                    </div>
                    <button className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition">Send</button>
                </form>
            </div>
        </div>
    );
};

export default GetInTouch;