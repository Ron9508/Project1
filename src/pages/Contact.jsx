import React from 'react'
import { useState } from 'react'

const Contact = () => {
    const [Form, setForm] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        setForm({ ...Form, [e.target.name]: e.target.value })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    

    // For now, just show an alert - backend will come later
    alert("Message submitted successfully");
    setForm({ name:"", email: "", message:"" });

    };

    return (
        <div className='min-h-screen bg-zinc-900 text-white py-16 px-6'>
            <div className='max-w-3xl mx-auto'>
                {/* Title */}
                <h1 className='text-4xl font-semibold mb-6 text-yellow-100'>
                    Contact Us
                </h1>

                {/* Subtitle */}
                <p className='text-zinc-300 mb-10'>
                    Have a question, feedback, or business inquiry?
                    Fill out the form below and we'll get back to you soon
                </p>

                {/* Form */}
                <form 
                onSubmit={handleSubmit}
                className='bg-zinc-800 p-6 rounded-xl space-y-6 shadow-lg'
                >

                {/* Name */}
                <div>
                    <label className="block mb-2 text-zinc-300">Name</label>
                    <input 
                    type="text" 
                    name="name" 
                    value={Form.name} 
                    onChange={handleChange}
                    required
                    className='w-full px-4 py-2 rounded-lg bg-zinc-700 text-white focus:outline-none'
                    placeholder='Your name'
                    />
                </div>

                {/* Email */}
                <div>
                    <label className='block mb-2 text-zinc-300'>Email</label>
                    <input 
                    type="email" 
                    name="email" 
                    value={Form.email} 
                    onChange={handleChange}
                    required
                    className='w-full px-4 py-2 rounded-lg bg-zinc-700 text-white focus:outline-none'
                    placeholder='your@email.com'
                    />
                </div>

                {/* Message */}
                <div>
                    <label className='block mb-2 text-zinc-300'>Message</label>
                    <textarea 
                    name="message" 
                    value={Form.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className='w-full px-4 py-2 rounded-lg bg-zinc-700 text-white focus:outline-none'
                    placeholder='Write your message here'
                    ></textarea>
                </div>

                {/* Button */}
                <button
                    type='submit'
                    className='w-full py-3 bg-yellow-100 text-zinc-900 font-semibold rounded-lg hover:bg-yellow-200 transition'
                >
                    Send Message
                </button>
            </form>
        </div>
    </div>
  );
};

export default Contact;
