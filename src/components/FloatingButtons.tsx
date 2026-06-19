import { useState, useEffect } from 'react';
import { Phone, ArrowUp } from 'lucide-react';

export default function FloatingButtons() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleOpenChamberModal = () => {
    window.dispatchEvent(new CustomEvent('open-chamber-modal'));
  };

  return (
    <>
      {/* 1. Mobile-specific Sleek Horizontal Sticky Bottom Action Bar Layout */}
      <div 
        id="mobile-bottom-bar"
        className="fixed bottom-0 left-0 right-0 z-50 bg-[#071E12]/95 border-t border-gold/20 shadow-[0_-5px_20px_rgba(0,0,0,0.4)] md:hidden p-2 px-3 flex items-center justify-between gap-2.5 backdrop-blur-md select-none font-bengali"
        style={{ height: '56px' }}
      >
        {/* Sleek single trigger */}
        <button
          onClick={handleOpenChamberModal}
          className="flex-1 h-[38px] bg-gold hover:bg-gold-dark text-dark font-black text-xs sm:text-sm rounded-xl flex items-center justify-center gap-1.5 transition-all cursor-pointer border-none shadow-md active:scale-98"
        >
          <Phone className="w-3.5 h-3.5 text-dark shrink-0 animate-pulse" />
          <span>সিরিয়াল দিন</span>
        </button>

        {/* WhatsApp Floating Button on the right */}
        <a
          href={`https://api.whatsapp.com/send?phone=8801849891298&text=${encodeURIComponent("আসসালামুআলাইকুম ডা. ইমতিয়াজ হোসেন অর্ক স্যার। আমি আপনার সাথে যোগাযোগ করতে চাই। \n\nআমার নাম: [আপনার নাম লিখুন] \nসমস্যা: [আপনার সমস্যাটি এখানে লিখুন]")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-none w-[38px] h-[38px] bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-xl flex items-center justify-center transition-all shadow-md hover:scale-105 active:scale-95 shrink-0"
          title="সরাসরি WhatsApp"
        >
          <svg className="w-5.5 h-5.5 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.963C16.388 2.017 13.918 1.01 12.007 1.01c-5.44 0-9.866 4.372-9.87 9.802 0 1.63.45 3.224 1.302 4.633L2.4 21.571l6.13-1.597zM18.841 15.11c-.373-.186-2.209-1.09-2.55-1.214-.341-.124-.59-.186-.84.186-.25.372-.966 1.214-1.184 1.462-.217.248-.435.279-.809.093-.373-.186-1.577-.581-3.004-1.854-1.11-.99-1.858-2.213-2.076-2.585-.218-.372-.023-.573.163-.758.167-.166.373-.434.56-.651.186-.217.248-.372.372-.62.124-.248.062-.465-.031-.651-.093-.186-.84-2.025-1.15-2.77-.301-.725-.609-.627-.84-.639-.214-.012-.46-.014-.706-.014-.246 0-.649.092-.988.465-.339.372-1.294 1.268-1.294 3.097 0 1.83 1.33 3.593 1.517 3.841.186.248 2.616 3.995 6.336 5.6 1.111.48 1.84.773 2.502.983.89.283 1.698.243 2.337.147.712-.107 2.209-.902 2.52-1.77.31-1.77.31-1.462.217-1.63-.093-.186-.373-.279-.74-.465z" />
          </svg>
        </a>
      </div>

      {/* 2. Desktop-specific Floating Action Badge Group (with scroll-to-top support) */}
      <div
        id="desktop-floating-actions"
        className="fixed bottom-8 right-6 z-50 hidden md:flex flex-col gap-3.5 items-end select-none"
      >
        {/* Scroll up button */}
        <button
          onClick={handleScrollToTop}
          className={`bg-primary hover:bg-[#124d28] text-white p-3 rounded-full shadow-xl border border-white/5 transition-all duration-300 transform cursor-pointer hover:scale-110 active:scale-95 ${
            showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
          }`}
          aria-label="পৃষ্ঠার উপরে যান"
        >
          <ArrowUp className="w-5 h-5" />
        </button>

        {/* WhatsApp companion trigger */}
        <a
          href={`https://api.whatsapp.com/send?phone=8801849891298&text=${encodeURIComponent("আসসালামুআলাইকুম ডা. ইমতিয়াজ হোসেন অর্ক স্যার। আমি আপনার সাথে যোগাযোগ করতে চাই। \n\nআমার নাম: [আপনার নাম লিখুন] \nসমস্যা: [আপনার সমস্যাটি এখানে লিখুন]")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="relative bg-[#25D366] hover:bg-[#20ba5a] text-white p-3.5 rounded-full shadow-2xl transition-all duration-200 transform hover:scale-115 active:scale-95 flex items-center justify-center cursor-pointer"
          title="সরাসরি WhatsApp"
        >
          <svg className="w-5.5 h-5.5 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.963C16.388 2.017 13.918 1.01 12.007 1.01c-5.44 0-9.866 4.372-9.87 9.802 0 1.63.45 3.224 1.302 4.633L2.4 21.571l6.13-1.597zM18.841 15.11c-.373-.186-2.209-1.09-2.55-1.214-.341-.124-.59-.186-.84.186-.25.372-.966 1.214-1.184 1.462-.217.248-.435.279-.809.093-.373-.186-1.577-.581-3.004-1.854-1.11-.99-1.858-2.213-2.076-2.585-.218-.372-.023-.573.163-.758.167-.166.373-.434.56-.651.186-.217.248-.372.372-.62.124-.248.062-.465-.031-.651-.093-.186-.84-2.025-1.15-2.77-.301-.725-.609-.627-.84-.639-.214-.012-.46-.014-.706-.014-.246 0-.649.092-.988.465-.339.372-1.294 1.268-1.294 3.097 0 1.83 1.33 3.593 1.517 3.841.186.248 2.616 3.995 6.336 5.6 1.111.48 1.84.773 2.502.983.89.283 1.698.243 2.337.147.712-.107 2.209-.902 2.52-1.77.31-1.77.31-1.462.217-1.63-.093-.186-.373-.279-.74-.465z" />
          </svg>
        </a>

        {/* Interactive Desk floating chamber dial bubble */}
        <button
          onClick={handleOpenChamberModal}
          className="relative bg-gold hover:bg-gold-dark text-dark p-3.5 rounded-full shadow-2xl transition-all duration-200 transform hover:scale-115 active:scale-95 flex items-center justify-center cursor-pointer border-none"
          title="সিরিয়াল ও চেম্বার বুকিং"
          aria-label="সিরিয়াল ও চেম্বার বুকিং"
        >
          <span className="absolute inset-0 rounded-full bg-gold/40 animate-ping -z-10 scale-125"></span>
          <Phone className="w-5.5 h-5.5 text-dark shrink-0" />
        </button>
      </div>
    </>
  );
}
