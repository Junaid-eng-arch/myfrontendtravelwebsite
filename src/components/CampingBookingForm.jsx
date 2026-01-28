import React, { useState } from 'react';
import { Calendar, User, ChevronDown, Send } from 'lucide-react';
import 'bootstrap/dist/css/bootstrap.min.css';

const CampingBookingForm = () => {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('');
  const [accommodation, setAccommodation] = useState('');
  const [comments, setComments] = useState('');

  const handleSubmit = () => {
    console.log({ checkIn, checkOut, guests, accommodation, comments });
    alert('Booking request submitted!');
  };

  return (
    <div style={{marginTop:"100px"}} className="container-fluid p-0">
      <div className="row g-0">
        {/* Left Side - Form */}
        <div className="col-lg-6 d-flex align-items-center" style={{ 
        //   backgroundColor: '#f8f9fa',
          minHeight: '100vh'
        }}>
          <div className="w-100 p-5">
            <div style={{ maxWidth: '600px', margin: '0 auto' }}>
              <h1 style={{
                fontSize: '2.5rem',
                fontWeight: '600',
                color: '#000',
                marginBottom: '3rem',
                lineHeight: '1.5'
              }}>
                Booking Your Best Tour<br />
                Camping Availability
              </h1>

              <div>
                <div className="row g-3 mb-3">
                  {/* Check In Date */}
                  <div className="col-md-6">
                    <div className="position-relative">
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="mm/dd/yyyy"
                        value={checkIn}
                        onChange={(e) => setCheckIn(e.target.value)}
                        onFocus={(e) => e.target.type = 'date'}
                        onBlur={(e) => !e.target.value && (e.target.type = 'text')}
                        style={{
                          backgroundColor: 'white',
                          border: '2px solid #e0e0e0',
                          borderRadius: '15px',
                          padding: '20px 50px 20px 20px',
                          fontSize: '1.1rem'
                        }}
                      />
                      <Calendar 
                        size={24} 
                        style={{
                          position: 'absolute',
                          right: '20px',
                          top: '50%',
                          transform: 'translateY(-50%)',
                          color: '#7CB342',
                          pointerEvents: 'none'
                        }}
                      />
                    </div>
                  </div>

                  {/* Check Out Date */}
                  <div className="col-md-6">
                    <div className="position-relative">
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="mm/dd/yyyy"
                        value={checkOut}
                        onChange={(e) => setCheckOut(e.target.value)}
                        onFocus={(e) => e.target.type = 'date'}
                        onBlur={(e) => !e.target.value && (e.target.type = 'text')}
                        style={{
                          backgroundColor: 'white',
                          border: '2px solid #e0e0e0',
                          borderRadius: '15px',
                          padding: '20px 50px 20px 20px',
                          fontSize: '1.1rem'
                        }}
                      />
                      <Calendar 
                        size={24} 
                        style={{
                          position: 'absolute',
                          right: '20px',
                          top: '50%',
                          transform: 'translateY(-50%)',
                          color: '#7CB342',
                          pointerEvents: 'none'
                        }}
                      />
                    </div>
                  </div>
                </div>

                <div className="row g-3 mb-3">
                  {/* Guest Input */}
                  <div className="col-md-6">
                    <div className="position-relative">
                      <input
                        type="number"
                        className="form-control form-control-lg"
                        placeholder="Guest"
                        value={guests}
                        onChange={(e) => setGuests(e.target.value)}
                        min="1"
                        style={{
                          backgroundColor: 'white',
                          border: '2px solid #e0e0e0',
                          borderRadius: '15px',
                          padding: '20px 50px 20px 20px',
                          fontSize: '1.1rem'
                        }}
                      />
                      <User 
                        size={24} 
                        style={{
                          position: 'absolute',
                          right: '20px',
                          top: '50%',
                          transform: 'translateY(-50%)',
                          color: '#7CB342',
                          pointerEvents: 'none'
                        }}
                      />
                    </div>
                  </div>

                  {/* Accommodations Dropdown */}
                  <div className="col-md-6">
                    <div className="position-relative">
                      <select
                        className="form-select form-select-lg"
                        value={accommodation}
                        onChange={(e) => setAccommodation(e.target.value)}
                        style={{
                          backgroundColor: 'white',
                          border: '2px solid #e0e0e0',
                          borderRadius: '15px',
                          padding: '20px 50px 20px 20px',
                          fontSize: '1.1rem',
                          appearance: 'none',
                          cursor: 'pointer'
                        }}
                      >
                        <option value="">Accommodations</option>
                        <option value="tent">Tent Camping</option>
                        <option value="cabin">Cabin</option>
                        <option value="rv">RV Spot</option>
                        <option value="trailer">Trailer</option>
                      </select>
                      <ChevronDown 
                        size={24} 
                        style={{
                          position: 'absolute',
                          right: '20px',
                          top: '50%',
                          transform: 'translateY(-50%)',
                          color: '#7CB342',
                          pointerEvents: 'none'
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* Comments Textarea */}
                <div className="mb-4">
                  <textarea
                    className="form-control form-control-lg"
                    placeholder="Comments"
                    value={comments}
                    onChange={(e) => setComments(e.target.value)}
                    rows="5"
                    style={{
                      backgroundColor: 'white',
                      border: '2px solid #e0e0e0',
                      borderRadius: '15px',
                      padding: '20px',
                      fontSize: '1.1rem',
                      resize: 'none'
                    }}
                  />
                </div>

                {/* Submit Button */}
                <button
                  onClick={handleSubmit}
                  className="btn btn-lg"
                  style={{
                    backgroundColor: '#7CB342',
                    color: 'white',
                    border: 'none',
                    borderRadius: '50px',
                    padding: '18px 50px',
                    fontSize: '1.2rem',
                    fontWeight: '600',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '15px',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#689F38';
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 5px 15px rgba(124, 179, 66, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = '#7CB342';
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = 'none';
                  }}
                >
                  Check Availability
                  <Send size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="col-lg-6 d-none d-lg-block">
          <div style={{
            height: '100vh',
            backgroundImage: 'url(https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=1200&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            position: 'relative',
            borderTopLeftRadius: '30px',
            borderBottomLeftRadius: '30px',
            marginTop: '40px',
            marginLeft: '40px'

          }}>
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(to right, rgba(248, 249, 250, 0.3), transparent)'
            }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampingBookingForm;