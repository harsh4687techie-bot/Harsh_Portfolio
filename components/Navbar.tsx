'use client';

import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import styles from './Navbar.module.css';

const NAV_LINKS = [
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Credentials', href: '#credentials' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'work', 'services', 'about', 'experience', 'education', 'credentials', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const handleLinkClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.navContainer}`}>
        {/* Left: Availability Pill */}
        <a
          href="#home"
          className={styles.statusPill}
          aria-label="Available for New Project — Return to top"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick('#home');
          }}
          title="Return to top"
        >
          <span className={styles.statusDot}></span>
          <span className={styles.statusText}>Available for New Project</span>
        </a>

        {/* Center: Minimal Editorial Nav Links */}
        <nav className={styles.desktopNav} aria-label="Main Navigation">
          <ul className={styles.navList}>
            {NAV_LINKS.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`${styles.navLink} ${isActive ? styles.activeLink : ''}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link.href);
                    }}
                  >
                    {link.label}
                    {isActive && <span className={styles.activeDot} />}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Right: Let's Talk CTA & Mobile Trigger */}
        <div className={styles.rightActions}>
          <a
            href="#contact"
            className={styles.talkBtn}
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('#contact');
            }}
            title="Let's Talk"
          >
            <span>Let&apos;s Talk</span>
            <ArrowUpRight size={14} className={styles.talkArrow} />
          </a>

          <button
            type="button"
            className={styles.mobileToggle}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`${styles.mobileDrawer} ${isMobileMenuOpen ? styles.mobileDrawerOpen : ''}`}
        aria-hidden={!isMobileMenuOpen}
      >
        <div className={styles.drawerBackdrop} onClick={() => setIsMobileMenuOpen(false)} />
        <div className={styles.drawerContent}>
          <div className={styles.drawerHeader}>
            <span className={styles.drawerLabel}>/NAVIGATION</span>
            <button
              type="button"
              className={styles.drawerCloseBtn}
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <X size={22} />
            </button>
          </div>

          <ul className={styles.mobileNavList}>
            {NAV_LINKS.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`${styles.mobileNavLink} ${isActive ? styles.mobileActiveLink : ''}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link.href);
                    }}
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight size={18} className={styles.mobileLinkArrow} />
                  </a>
                </li>
              );
            })}
          </ul>

          <div className={styles.drawerFooter}>
            <a
              href="#contact"
              className="btn-editorial-primary"
              style={{ width: '100%' }}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('#contact');
              }}
            >
              <span>Let&apos;s Talk</span>
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
