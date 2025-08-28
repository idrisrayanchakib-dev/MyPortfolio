import React from "react";
import "./ProfileCard.css"; // we'll extract the CSS separately
import { User } from "lucide-react";

const ProfileCard: React.FC = () => {
  return (
    <div className="lanyard-container">
      <div className="lanyard-string"></div>
      <div className="profile-card">
        <div className="card-header">
          <div className="avatar"><User size={50} strokeWidth={2} /></div>
          <h2 className="card-name">Idris Rayan Chakib</h2>
          <p className="card-title">Full-Stack Developer</p>
        </div>

        <div className="card-info">
          <div className="info-row">
            <span className="info-icon">
                        <svg className="info-icon" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                        </svg>
            </span>
            <span className="info-text">irayanchakib@gmail.com</span>
          </div>
          <div className="info-row">
            <span className="info-icon">
                        <svg className="info-icon" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"/>
                        </svg>
            </span>
            <span className="info-text">Algeria, Algiers</span>
          </div>
          <div className="info-row">
            <span className="info-icon">
                        <svg className="info-icon" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h2zm4-3a1 1 0 00-1 1v1h2V4a1 1 0 00-1-1z"/>
                        </svg>
            </span>
            <span className="info-text">Engineering Team </span>
          </div>
        </div>

        <div className="card-stats">
          <div className="stat-item">
            <span className="stat-value">2+</span>
            <span className="stat-label">Years Exp</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">5+</span>
            <span className="stat-label">Projects</span>
          </div>
        </div>

        <div className="card-id">
          <p className="id-text">ID NUMBER</p>
          <p className="id-number">#RC2025</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
