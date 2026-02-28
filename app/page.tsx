
import React from 'react';
import Link from 'next/link';

const HomePage = () => {
  return (
    <div className="bg-[#E8E6D5] min-h-screen">
      <header className="bg-[#0D2E1F] text-[#FFFFFF] p-4">
        <h1 className="text-2xl">Web Hosting Platform</h1>
      </header>
      <main className="p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Link href="/profile" legacyBehavior>
            <a className="bg-[#FFFFFF] p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h2 className="text-xl font-bold text-[#0F2E1F] mb-4">Profile</h2>
              <p className="text-[#2A3B32]">View and edit your profile.</p>
            </a>
          </Link>
          <Link href="/contact" legacyBehavior>
            <a className="bg-[#FFFFFF] p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h2 className="text-xl font-bold text-[#0F2E1F] mb-4">Contact Us</h2>
              <p className="text-[#2A3B32]">Get in touch with us.</p>
            </a>
          </Link>
          <Link href="/domain-list" legacyBehavior>
            <a className="bg-[#FFFFFF] p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h2 className="text-xl font-bold text-[#0F2E1F] mb-4">Domain List</h2>
              <p className="text-[#2A3B32]">View your domains.</p>
            </a>
          </Link>
          <Link href="/hosting-list" legacyBehavior>
            <a className="bg-[#FFFFFF] p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h2 className="text-xl font-bold text-[#0F2E1F] mb-4">Hosting List</h2>
              <p className="text-[#2A3B32]">View your hosting plans.</p>
            </a>
          </Link>
          <Link href="/settings" legacyBehavior>
            <a className="bg-[#FFFFFF] p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h2 className="text-xl font-bold text-[#0F2E1F] mb-4">Settings</h2>
              <p className="text-[#2A3B32]">Configure your settings.</p>
            </a>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
