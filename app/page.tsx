'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import SelectedWork from '@/components/SelectedWork';
import Services from '@/components/Services';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Skills from '@/components/Skills';
import Achievements from '@/components/Achievements';
import ResumeSection from '@/components/ResumeSection';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import LightboxModal, { LightboxData } from '@/components/LightboxModal';
import Toast from '@/components/Toast';

export default function Home() {
  const [lightboxData, setLightboxData] = useState<LightboxData | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3200);
  };

  const handleOpenLightbox = (data: LightboxData) => {
    setLightboxData(data);
  };

  const handleCloseLightbox = () => {
    setLightboxData(null);
  };

  return (
    <>
      {/* 00 / Minimal Editorial Navigation */}
      <Navbar />

      <main id="main-content">
        {/* 01 / Striking Editorial Hero Section */}
        <Hero />

        {/* 02 / Selected Work - Project Showcase & Modal */}
        <SelectedWork />

        {/* 03 / Interactive Horizontal Services Accordion */}
        <Services />

        {/* 04 / About - Background & Core Philosophy */}
        <About />

        {/* 05 / Experience - Full-Width Dark Interactive Section */}
        <Experience onOpenLightbox={handleOpenLightbox} />

        {/* 06 / Academic Degree & Engineering Foundation */}
        <Education />

        {/* 07 / Technical Toolkit & Verified Stacks */}
        <Skills />

        {/* 08 / Credentials & Document Archive */}
        <Achievements onOpenLightbox={handleOpenLightbox} />

        {/* 09 / Official Curriculum Vitae / Resume */}
        <ResumeSection onOpenLightbox={handleOpenLightbox} />

        {/* 10 / Closing Contact & EmailJS Inquiry Form */}
        <Contact onShowToast={showToast} />
      </main>

      {/* 11 / Minimal Editorial Footer */}
      <Footer />

      {/* Global Interactive Lightbox (PDF & Image Zoom) */}
      <LightboxModal data={lightboxData} onClose={handleCloseLightbox} />

      {/* Toast Feedback Notification */}
      <Toast message={toastMessage} />
    </>
  );
}
