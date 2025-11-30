import React from "react";
import "./Signup.css";

export default function SignupUI() {
  return (
    <div className="signup-page">
      <div className="container">
        {/* Left - Welcome / Marketing */}
        <div className="left-panel">
          <div className="auth-header">
            <h2>Signup</h2>
            <p>Welcome Onboard - Enter your details below.</p>
          </div>

          <div style={{ marginTop: "1rem" }}>
            <div className="input-group">
              <label htmlFor="signup-username">Username</label>
              <input
                id="signup-username"
                className="input"
                type="text"
                placeholder="Your display name"
                aria-label="username"
              />
            </div>

            <div className="input-group">
              <label htmlFor="signup-email">Email</label>
              <input
                id="signup-email"
                className="input"
                type="email"
                placeholder="you@example.com"
                aria-label="signup-email"
              />
            </div>

            <div className="input-group">
              <label htmlFor="signup-password">Password</label>
              <input
                id="signup-password"
                className="input"
                type="password"
                placeholder="Create a password"
                aria-label="signup-password"
              />
            </div>

            <div style={{ marginTop: "0.5rem" }}>
              <a
                href="http://localhost:3000/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button type="button" className="btn-outline">
                  Create account
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* Right - Auth Card (presentational) */}
        <div className="auth-card">
          <div className="auth-header">
            <h2>Login</h2>
            <p>Welcome back - Enter your details below.</p>
          </div>

          <div className="form-body">
            <div className="input-group" id="login-email-container">
              <label htmlFor="login-email">Email</label>
              <input
                id="login-email"
                className="input"
                type="email"
                placeholder="you@example.com"
                aria-label="email"
              />
            </div>

            <div className="input-group">
              <label htmlFor="login-password">Password</label>
              <input
                id="login-password"
                className="input"
                type="password"
                placeholder="Enter your password"
                aria-label="password"
              />
            </div>

            <div className="row-between">
              <label className="remember">
                <input type="checkbox" />
                <span className="remeber-me">Remember me</span>
              </label>
              <button
                className="link"
                type="button"
                aria-label="forgot-password"
              >
                Forgot?
              </button>
            </div>

            <div style={{ marginTop: "0.75rem" }}>
              <a
                href="http://localhost:3000/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button type="button" className="btn-primary">
                  Login
                </button>
              </a>
            </div>

            <p className="small-text">
              By continuing you agree to the Terms of Service.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
