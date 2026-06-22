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
import { translations } from './utils/translations';

function App() {
  const [language, setLanguage] = useState('vi'); // Defaults to Vietnamese
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState('Phòng Suite Gia đình Sang trọng');
  const [bookingSubmitted, setBookingSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: '2 Guests'
  });

  const t = translations[language];

  // Map default English room title to localized room title when selecting/triggering
  const handleBookClick = () => {
    setSelectedRoom(t.roomLuxeFamily);
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

  // Format success messages with user inputs
  const getSuccessDesc1 = () => {
    return t.successDesc1
      .replace('{name}', formData.fullName)
      .replace('{room}', selectedRoom)
      .replace('{email}', formData.email);
  };

  const getSuccessDesc2 = () => {
    return t.successDesc2
      .replace('{phone}', formData.phone);
  };

  return (
    <>
      <Header onBookClick={handleBookClick} language={language} setLanguage={setLanguage} t={t} />
      <Hero onBookClick={handleBookClick} t={t} />
      <About t={t} />
      <Rooms onBookSelect={handleRoomSelect} t={t} />
      <Dining t={t} />
      <Wellness t={t} />
      <Blog t={t} />
      <Instagram t={t} />
      <Footer t={t} />

      {/* Booking Modal */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="modal-close-btn" onClick={closeModal}>
              <X size={24} />
            </button>

            {!bookingSubmitted ? (
              <>
                <h3 className="modal-title">{t.modalTitle}</h3>
                <p className="modal-desc">
                  {t.modalDesc} <strong>{selectedRoom}</strong>.
                </p>
                <form className="booking-form" onSubmit={handleFormSubmit}>
                  <div className="form-group">
                    <label className="form-label" htmlFor="fullName">{t.labelFullName}</label>
                    <input 
                      type="text" 
                      id="fullName" 
                      name="fullName" 
                      className="form-input" 
                      required 
                      placeholder="Nguyễn Văn A"
                      value={formData.fullName}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label" htmlFor="email">{t.labelEmail}</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        className="form-input" 
                        required 
                        placeholder="email@example.com"
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="phone">{t.labelPhone}</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        className="form-input" 
                        required 
                        placeholder="+84 987 654 321"
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label" htmlFor="checkIn">{t.labelCheckIn}</label>
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
                      <label className="form-label" htmlFor="checkOut">{t.labelCheckOut}</label>
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
                      <label className="form-label" htmlFor="roomType">{t.labelSuite}</label>
                      <select 
                        id="roomType" 
                        name="roomType" 
                        className="form-select"
                        value={selectedRoom}
                        onChange={(e) => setSelectedRoom(e.target.value)}
                      >
                        <option value={t.roomLuxeFamily}>{t.roomLuxeFamily}</option>
                        <option value={t.roomTwinCozy}>{t.roomTwinCozy}</option>
                        <option value={t.roomDeluxeDouble}>{t.roomDeluxeDouble}</option>
                        <option value={t.roomLightSingle}>{t.roomLightSingle}</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="guests">{t.labelGuests}</label>
                      <select 
                        id="guests" 
                        name="guests" 
                        className="form-select"
                        value={formData.guests}
                        onChange={handleInputChange}
                      >
                        <option value={`1 ${t.guestsCount}`}>1 {t.guestsCount}</option>
                        <option value={`2 ${t.guestsCount}`}>2 {t.guestsCount}</option>
                        <option value={`3 ${t.guestsCount}`}>3 {t.guestsCount}</option>
                        <option value={`4 ${t.guestsCount}`}>4 {t.guestsCount}</option>
                      </select>
                    </div>
                  </div>

                  <button 
                    type="submit" 
                    className="btn btn-primary" 
                    style={{ marginTop: '10px', width: '100%' }}
                  >
                    {t.modalSubmit}
                  </button>
                </form>
              </>
            ) : (
              <div className="success-message">
                <div className="success-icon-wrapper">
                  <Check size={40} />
                </div>
                <h3 className="modal-title">{t.successTitle}</h3>
                <p className="modal-desc" style={{ marginTop: '10px' }}>
                  {getSuccessDesc1()}
                </p>
                <p className="modal-desc">
                  {getSuccessDesc2()}
                </p>
                <button 
                  className="btn btn-primary" 
                  style={{ marginTop: '20px', width: '100%' }}
                  onClick={closeModal}
                >
                  {t.successBack}
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
