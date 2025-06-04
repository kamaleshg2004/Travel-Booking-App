import React from 'react';
import '../Styles/BookingForm.css';

const BookingForm = () => {
  return (
    <section className="booking-form-section">
      <div className="booking-form-container">
        <h2>Book Your Trip</h2>
        <form>
          <label>Name</label>
          <input type="text" placeholder="Enter your name" required />

          <label>Email</label>
          <input type="email" placeholder="Enter your email" required />

          <label>Destination</label>
          <input type="text" placeholder="Destination you want to visit" required />

          <label>Travel Dates</label>
          <input type="text" placeholder="e.g., 15 June - 20 June" required />

          <label>Number of Travelers</label>
          <input type="number" placeholder="e.g., 2" min="1" required />

          <button type="submit" className="submit-btn">Submit Booking</button>
        </form>
      </div>
    </section>
  );
};

export default BookingForm;
