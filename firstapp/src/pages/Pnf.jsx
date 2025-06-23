import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function Pnf() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      background: 'linear-gradient(135deg, #FDEFF9 0%, #ECF2FF 100%)',
      padding: '50px 20px',
      textAlign: 'center',
      animation: 'fadeIn 1.5s ease-in-out'
    }}>
      
      {/* Creative Bouncing Image */}
      <img
        src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?uid=R204137181&ga=GA1.1.953968187.1750652647&semt=ais_hybrid&w=740"
        alt="404 Not Found"
        style={{
          maxWidth: '500px',
          width: '100%',
          marginBottom: '30px',
          borderRadius: '15px',
          animation: 'bounce 2s infinite'
        }}
      />
      
      {/* Error Text */}
      <h1 style={{
        fontSize: '3.5rem',
        fontWeight: 'bold',
        color: '#FF6F61',
        marginBottom: '20px',
        animation: 'fadeInUp 1s ease-in-out'
      }}>
        Oops! 404
      </h1>
      
      <p style={{
        fontSize: '1.3rem',
        color: '#555555',
        marginBottom: '30px',
        animation: 'fadeInUp 1.2s ease-in-out'
      }}>
        The page you are looking for has wandered off!
      </p>
      
      {/* Home Button with Hover Effect */}
      <Link to="/">
        <Button
          variant="primary"
          size="lg"
          style={{
            borderRadius: '30px',
            padding: '12px 35px',
            fontWeight: '600',
            backgroundColor: '#FF6F61',
            border: 'none',
            transition: 'all 0.3s ease'
          }}
          onMouseOver={e => e.target.style.backgroundColor = '#FF4C4C'}
          onMouseOut={e => e.target.style.backgroundColor = '#FF6F61'}
        >
          Take Me Home
        </Button>
      </Link>

      {/* Inline Animations */}
      <style>{`
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-20px); }
          60% { transform: translateY(-10px); }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

    </div>
  );
}

export default Pnf;
