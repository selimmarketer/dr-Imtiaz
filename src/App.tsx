import { useState, useEffect } from 'react';
import Preloader from './components/Preloader';
import AnnouncementBar from './components/AnnouncementBar';
import Navbar from './components/Navbar';
import HeroSlider from './components/HeroSlider';
import QuickAppointment from './components/QuickAppointment';
import StatsStrip from './components/StatsStrip';
import DoctorProfile from './components/DoctorProfile';
import BeforeAfter from './components/BeforeAfter';
import SymptomFinder from './components/SymptomFinder';
import OnlineProcess from './components/OnlineProcess';
import Services from './components/Services';
import WhyChoose from './components/WhyChoose';
import AppointmentForm from './components/AppointmentForm';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';

import ChamberModal from './components/ChamberModal';

export default function App() {
  const [loading, setLoading] = useState(true);

  // Clean URL parsing and dynamic metadata synchronization (SEO Point 2, 3, 4, 8)
  useEffect(() => {
    if (loading) return;

    // Timeout allows the DOM to render and stabilize completely
    const timer = setTimeout(() => {
      try {
        let path = window.location.pathname.toLowerCase();
        
        // Remove trailing slashes for standard canonical checks
        if (path.length > 1 && path.endsWith('/')) {
          path = path.slice(0, -1);
        }

        let targetId = '';
        let pageTitle = 'ডাঃ ইমতিয়াজ হোসেন অর্ক | মধুখালীতে মেডিসিন ও হৃদরোগে অভিজ্ঞ ডাক্তার';
        let pageDesc = 'মধুখালী ও ফরিদপুরে অভিজ্ঞ মেডিসিন, হৃদরোগ ও ডায়াবেটিস রোগে অভিজ্ঞ ডাঃ ইমতিয়াজ হোসেন অর্ক। চেম্বার: একতা ডায়াগনস্টিক ও ইমেজিং সেন্টার।';

        switch (path) {
          case '/about':
            targetId = 'about';
            pageTitle = 'যোগ্যতা ও চেম্বার - ডাঃ ইমতিয়াজ হোসেন অর্ক | মেডিসিন বিশেষজ্ঞ';
            pageDesc = 'এমবিবিএস এবং বিসিএস ক্যাডার ডাঃ ইমতিয়াজ হোসেন অর্ক-এর প্রফেশনাল যোগ্যতা ও চেম্বার সময়সূচী জানুন।';
            break;
          case '/services':
            targetId = 'services';
            pageTitle = 'চিকিৎসা সেবাসমূহ - ডাঃ ইমতিয়াজ হোসেন অর্ক | মেডিসিন ও হৃদরোগ';
            pageDesc = 'মেডিসিন, হৃদরোগ, অ্যাজমা, উচ্চ রক্তচাপ, এবং ডায়াবেটিস রোগের উন্নত চিকিৎসাসেবা ও বিশেষজ্ঞ পরামর্শ গ্রহণ করুন।';
            break;
          case '/appointment':
            targetId = 'appointment';
            pageTitle = 'সিরিয়াল বুকিং ও অ্যাপয়েন্টমেন্ট - ডাঃ ইমতিয়াজ হোসেন অর্ক';
            pageDesc = 'সহজে ও নিরাপদে অনলাইন বা চেম্বার সিরিয়াল বুকিং করার জন্য অফিশিয়াল ফরম পূরণ করুন।';
            break;
          case '/contact':
            targetId = 'contact';
            pageTitle = 'যোগাযোগ ও সিরিয়াল নাম্বার - ডাঃ ইমতিয়াজ হোসেন অর্ক';
            pageDesc = 'মধুখালীর একতা ডায়াগনস্টিক সেন্টারে সিরিয়াল ও সরাসরি যোগাযোগের হটলাইন ও গুগল ম্যাপ লোকেশন।';
            break;
          default:
            // Home page or unspecified paths
            break;
        }

        // Dynamically update document title & description dynamically on runtime
        document.title = pageTitle;
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
          metaDesc.setAttribute('content', pageDesc);
        }

        // Smoothly scroll down to target visual element if route matches
        if (targetId) {
          const element = document.getElementById(targetId);
          if (element) {
            const headerHeight = 110; // offset fixed headers safely
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - headerHeight;
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }
      } catch (err) {
        console.error("Defensive route sync failed:", err);
      }
    }, 450);

    return () => clearTimeout(timer);
  }, [loading]);

  if (loading) {
    return <Preloader onComplete={() => setLoading(false)} />;
  }

  return (
    <div className="relative min-h-screen bg-bg-light overflow-x-hidden font-bengali antialiased pt-[94px] md:pt-[106px]">
      {/* Fixed top header to ensure persistency on scroll */}
      <div className="fixed top-0 left-0 right-0 z-50 shadow-md">
        <AnnouncementBar />
        <Navbar />
      </div>

      {/* 3. Emotional Cross-Fading Multi-Hero Slideshow Banner */}
      <HeroSlider />

      {/* Quick Appointment strip (Gold background, directly after Hero Slider as requested in FIX 6) */}
      <QuickAppointment />

      {/* 4. Gold and Teal Clinical Achievement Counters Ticker */}
      <StatsStrip />

      {/* 5. Doctor Professional Qualification About Profile Column */}
      <DoctorProfile />

      {/* 6. Diagnostic Interactive Symptom Select Grid */}
      <SymptomFinder />

      {/* 5.5 Clinical success case studies (Before & After) */}
      <BeforeAfter />

      {/* 7. Easy Steps Direct Online Consulting Walkthrough */}
      <OnlineProcess />

      {/* 8. Hospital Specialties Services Grid (Visible & Lock options) */}
      <Services />

      {/* 9. Ethos/Advantage Bento Grid Cards */}
      <WhyChoose />

      {/* 10. Interactive Lead Registration and Booking Form */}
      <AppointmentForm />

      {/* 11. Custom Opposite-Scrolling Patients Reviews Rows */}
      <Testimonials />

      {/* 12. Accordions common FAQs list (collapsible & Lock options) */}
      <FAQ />

      {/* 13. High-Quality Actual Chamber Image Library */}
      <Gallery />

      {/* 14. Responsive Google Map embeds and hotlines contact Card */}
      <Contact />

      {/* 15. Standard Clean Corporate Footer with agency credits and pb-24 margin */}
      <Footer />

      {/* 16. Persistent Floating Green WhatsApp and Gold Phone Actions */}
      <FloatingButtons />



      {/* 19. Chamber Serial Booking Modal System */}
      <ChamberModal />
    </div>
  );
}
