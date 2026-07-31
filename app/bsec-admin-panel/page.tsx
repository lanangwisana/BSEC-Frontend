'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Building2, Mail, Lock, Eye, EyeOff, ArrowRight, ShieldCheck, AlertCircle } from 'lucide-react';

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('admin@bsec.id');
  const [password, setPassword] = useState('admin123');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!email || !password) {
      setErrorMsg('Please fill in both email and password.');
      return;
    }

    setIsLoading(true);

    // Simulate authentication delay for smooth UX
    setTimeout(() => {
      setIsLoading(false);
      // Redirect to Admin Dashboard
      router.push('/bsec-admin-panel/dashboard');
    }, 800);
  };

  const handleQuickFill = () => {
    setEmail('admin@bsec.id');
    setPassword('admin123');
    setErrorMsg('');
  };

  return (
    <div className="min-h-screen bg-[#0f172a] flex items-center justify-center p-4 relative overflow-hidden font-sans antialiased text-gray-100">
      {/* Background Glowing Ambient Orbs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />

      {/* Main Login Card */}
      <div className="w-full max-w-md bg-[#1e2538]/90 backdrop-blur-xl border border-gray-800/80 rounded-3xl p-8 shadow-2xl relative z-10 space-y-6">
        {/* Branding Header */}
        <div className="text-center space-y-3">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white mx-auto shadow-lg shadow-blue-600/30">
            <Building2 className="w-7 h-7" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white tracking-tight">
              BSEC Admin Portal
            </h1>
            <p className="text-xs text-gray-400 font-medium mt-1">
              Enter your credentials to access the operational dashboard
            </p>
          </div>
        </div>

        {/* Error Notification Banner */}
        {errorMsg && (
          <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-3 flex items-center gap-2.5 text-red-400 text-xs font-semibold animate-shake">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{errorMsg}</span>
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          {/* Email Input */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider">
              Email / Username
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@bsec.id"
                className="w-full bg-[#161c2d] hover:bg-[#192033] focus:bg-[#161c2d] text-xs font-medium text-white pl-10 pr-4 py-3 rounded-xl border border-gray-700/60 focus:border-blue-500 focus:outline-hidden transition-all placeholder:text-gray-500"
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider">
              Password
            </label>
            <div className="relative">
              <Lock className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-[#161c2d] hover:bg-[#192033] focus:bg-[#161c2d] text-xs font-medium text-white pl-10 pr-10 py-3 rounded-xl border border-gray-700/60 focus:border-blue-500 focus:outline-hidden transition-all placeholder:text-gray-500"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-200 transition-colors"
              >
                {showPassword ? (
                  <EyeOff className="w-4 h-4" />
                ) : (
                  <Eye className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between text-xs pt-1">
            <label className="flex items-center gap-2 cursor-pointer text-gray-300 font-medium">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="rounded-md border-gray-700 bg-[#161c2d] text-blue-600 focus:ring-blue-500 w-4 h-4 cursor-pointer"
              />
              <span>Remember me</span>
            </label>

            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                alert('Contact Lead Administrator to reset your password.');
              }}
              className="text-blue-400 hover:text-blue-300 font-semibold transition-colors"
            >
              Forgot password?
            </a>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-bold py-3 px-4 rounded-xl text-xs flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30 transition-all duration-200 hover:scale-[1.01] disabled:opacity-70 disabled:pointer-events-none mt-2"
          >
            {isLoading ? (
              <>
                <span className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                <span>Signing in...</span>
              </>
            ) : (
              <>
                <span>Sign In to Dashboard</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>

        {/* Demo Account Quick Fill Helper */}
        <div className="pt-2 border-t border-gray-800/80 text-center">
          <button
            onClick={handleQuickFill}
            type="button"
            className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-gray-400 hover:text-blue-400 transition-colors bg-[#161c2d] border border-gray-700/60 px-3 py-1.5 rounded-lg"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
            <span>Click for Demo Credentials (admin@bsec.id / admin123)</span>
          </button>
        </div>

        {/* Copyright Footer */}
        <p className="text-[10px] text-center text-gray-500 font-medium">
          © {new Date().getFullYear()} BSEC MANAGEMENT SYSTEM. ALL RIGHTS RESERVED.
        </p>
      </div>
    </div>
  );
}