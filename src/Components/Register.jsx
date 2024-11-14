import React, { useContext, useState } from 'react';
import { AuthContext } from './Provider';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { updateProfile } from 'firebase/auth';
import auth from './firebase.init';

const Register = () => {
    const { createNewUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const [messages, setMessages] = useState([]);

    const handleRegister = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const checkbox = e.target.checkbox.checked;

        // Clear previous messages
        setMessages([]);

        // Regular expressions
        const nameRegex = /^[a-zA-Z\s]+$/;
        const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

        const newMessages = [];

        // Validations
        if (!name) {
            newMessages.push("Name is required!");
        } else if (!nameRegex.test(name)) {
            newMessages.push("Name should only contain letters and spaces!");
        }

        if (!photo) {
            newMessages.push("Photo URL is required!");
        }

        if (!email) {
            newMessages.push("Email is required!");
        } else if (!emailRegex.test(email)) {
            newMessages.push("Please enter a valid email address!");
        }

        if (!password) {
            newMessages.push("Password is required!");
        } else if (!passwordRegex.test(password)) {
            newMessages.push("Password must contain at least 6 characters, including an uppercase letter, a lowercase letter, a number, and a special character!");
        }

        if (!checkbox) {
            newMessages.push("Please accept the terms and conditions!");
        }

        // If there are validation errors, display them
        if (newMessages.length > 0) {
            setMessages(newMessages);
            newMessages.forEach((msg) => toast.error(msg));
            return;
        }

        // Registration
        createNewUser(email, password)
            .then((result) => {
                console.log(result.user);
                toast.success("Registration successful!");
                updateProfile(auth.currentUser, {
                    displayName: name, photoURL: photo
                  }).then(() => {
                    alert("updated Profile")
                  }).catch((error) => {
                     alert(error)
                  });
                
                // Delay navigation slightly to allow toast message to display
                setTimeout(() => navigate("/auth/login"), 1500);
            })
            .catch((error) => {
                toast.error(error.message);
                newMessages.push(error.message)
                setMessages(newMessages)
            });
    };

    return (
        <div>
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold text-center">Register your account</h2>
                    <form onSubmit={handleRegister} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Your Name</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Enter your name"
                                className="w-full px-4 py-2 mt-1 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Photo URL</label>
                            <input
                                type="text"
                                name="photo"
                                placeholder="Enter photo URL"
                                className="w-full px-4 py-2 mt-1 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter your email address"
                                className="w-full px-4 py-2 mt-1 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Password</label>
                            <input
                                type="password"
                                name="password"
                                placeholder="Enter your password"
                                className="w-full px-4 py-2 mt-1 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                        </div>
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                name="checkbox"
                                className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                            />
                            <label className="ml-2 text-sm text-gray-700">
                                Accept <span className="font-semibold text-black">Terms & Conditions</span>
                            </label>
                        </div>
                        <button className="w-full px-4 py-2 mt-4 text-white bg-black rounded-md">Register</button>
                    </form>
                    
                    {/* Display validation messages */}
                    {messages.length > 0 && (
                        <ul className="mt-4 text-sm text-red-500 list-disc list-inside">
                            {messages.map((msg, index) => (
                                <li key={index}>{msg}</li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
            <ToastContainer position="top-center" />
        </div>
    );
};

export default Register;
