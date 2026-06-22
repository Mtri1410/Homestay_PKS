import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Rooms from './components/Rooms';
import Dining from './components/Dining';
import Wellness from './components/Wellness';
import Blog from './components/Blog';
import Instagram from './components/Instagram';
import Footer from './components/Footer';
import { X, Check } from 'lucide-react';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState('Luxe Family Suite');
  const [bookingSubmitted, setBookingSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: '2 Guests'
  });

  const handleBookClick = () => {
    setSelectedRoom('Luxe Family Suite');
    setBookingSubmitted(false);
    setIsModalOpen(true);
  };

  const handleRoomSelect = (roomTitle) => {
    setSelectedRoom(roomTitle);
    setBookingSubmitted(false);
    setIsModalOpen(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Simulate booking process
    setBookingSubmitted(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setBookingSubmitted(false);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      checkIn: '',
      checkOut: '',
      guests: '2 Guests'
    });
  };

  return (
    <>
      <Header onBookClick={handleBookClick} />
      <Hero onBookClick={handleBookClick} />
      <About />
      <Rooms onBookSelect={handleRoomSelect} />
      <Dining />
      <Wellness />
      <Blog />
      <Instagram />
      <Footer />

      {/* Booking Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={closeModal}>
              <X size={24} />
            </button>

            {!bookingSubmitted ? (
              <>
                <h3 className="modal-title">Book Your Retreat</h3>
                <p className="modal-desc">
                  Fill in your details below to request a booking for the <strong>{selectedRoom}</strong>.
                </p>
                <form className="booking-form" onSubmit={handleFormSubmit}>
                  <div className="form-group">
                    <label className="form-label" htmlFor="fullName">Full Name</label>
                    <input 
                      type="text" 
                      id="fullName" 
                      name="fullName" 
                      className="form-input" 
                      required 
                      placeholder="John Doe"
                      value={formData.fullName}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label" htmlFor="email">Email Address</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        className="form-input" 
                        required 
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="phone">Phone Number</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        className="form-input" 
                        required 
                        placeholder="+84..."
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label" htmlFor="checkIn">Check-In Date</label>
                      <input 
                        type="date" 
                        id="checkIn" 
                        name="checkIn" 
                        className="form-input" 
                        required
                        value={formData.checkIn}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="checkOut">Check-Out Date</label>
                      <input 
                        type="date" 
                        id="checkOut" 
                        name="checkOut" 
                        className="form-input" 
                        required
                        value={formData.checkOut}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label" htmlFor="roomType">Selected Suite</label>
                      <select 
                        id="roomType" 
                        name="roomType" 
                        className="form-select"
                        value={selectedRoom}
                        onChange={(e) => setSelectedRoom(e.target.value)}
                      >
                        <option value="Luxe Family Suite">Luxe Family Suite</option>
                        <option value="Twin Cozy Suite">Twin Cozy Suite</option>
                        <option value="Deluxe Double Room">Deluxe Double Room</option>
                        <option value="Light Single Room">Light Single Room</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="guests">Guests Count</label>
                      <select 
                        id="guests" 
                        name="guests" 
                        className="form-select"
                        value={formData.guests}
                        onChange={handleInputChange}
                      >
                        <option value="1 Guest">1 Guest</option>
                        <option value="2 Guests">2 Guests</option>
                        <option value="3 Guests">3 Guests</option>
                        <option value="4 Guests">4 Guests</option>
                      </select>
                    </div>
                  </div>

                  <button 
                    type="submit" 
                    className="btn btn-primary" 
                    style={{ marginTop: '10px', width: '100%' }}
                  >
                    Confirm Booking Request
                  </button>
                </form>
              </>
            ) : (
              <div className="success-message">
                <div className="success-icon-wrapper">
                  <Check size={40} />
                </div>
                <h3 className="modal-title">Booking Requested!</h3>
                <p className="modal-desc" style={{ marginTop: '10px' }}>
                  Thank you, <strong>{formData.fullName}</strong>. Your request to book the <strong>{selectedRoom}</strong> has been received. We have sent a confirmation email to <strong>{formData.email}</strong>.
                </p>
                <p className="modal-desc">
                  Our staff will contact you shortly via <strong>{formData.phone}</strong> to confirm payment and check-in details.
                </p>
                <button 
                  className="btn btn-primary" 
                  style={{ marginTop: '20px', width: '100%' }}
                  onClick={closeModal}
                >
                  Back to Homepage
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default App;
