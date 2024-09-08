import React from 'react';

export const Contact = () => {
    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            message: formData.get('message'),
        };

        try {
            const response = await fetch('http://localhost:8000/submit/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            const result = await response.json();
            console.log(result);
            alert('Contact form submitted successfully!');
        } catch (error) {
            console.error('Error:', error);
            alert('Failed to submit contact form.');
        }
    };

    return (
        <div className="container py-5">
            <div className="row">
                {/* Contact Form */}
                <div className="col-md-6 mb-4 mb-md-0">
                    <div className="card bg-dark text-white">
                        <div className="card-body">
                            <h2 className="card-title mb-4">Contact Us</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <input type="text" name="name" className="form-control" id="name" placeholder="Enter your name" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="email" name="email" className="form-control" id="email" placeholder="Enter your email" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="phone" className="form-label">Phone Number</label>
                                    <input type="tel" name="phone" className="form-control" id="phone" placeholder="Enter your phone number" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="message" className="form-label">Message</label>
                                    <textarea name="message" className="form-control" id="message" rows="5" placeholder="Enter your message" required></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Social Media Links */}
                <div className="col-md-6">
                    <div className="card bg-dark text-white">
                        <div className="card-body">
                            <h2 className="card-title mb-4">Connect with Us</h2>
                            <ul className="list-unstyled">
                                <li>
                                    <a href="https://www.linkedin.com/in/malik-ibrar/" target="_blank" rel="noopener noreferrer" className="text-primary">LinkedIn</a>
                                </li>
                                <li>
                                    <a href="https://github.com/IbrarArif" target="_blank" rel="noopener noreferrer" className="text-primary">GitHub</a>
                                </li>
                                <li>
                                    <a href="https://x.com/MalikIbrar112" target="_blank" rel="noopener noreferrer" className="text-primary">Twitter</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
