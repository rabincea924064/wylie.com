export default function ContactBar() {
  return (
    <div className="relative z-50 bg-secondary text-white text-sm hidden md:block" id="contact-bar">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-10">
        <div className="flex items-center gap-6">
          <a
            href="https://www.google.com/maps/place/Wylie+Mechanical/@45.1562529,-75.2387092,10z/data=!3m1!4b1!4m5!3m4!1s0x2bb177891092dcf9:0x68ab989b52e25c15!8m2!3d45.1561128!4d-74.9578474"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
            id="topbar-address"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            Cornwall, ON
          </a>
          <span className="text-white/30">|</span>
          <a
            href="tel:613-577-2726"
            className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
            id="topbar-phone"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            (613) 577-2726
          </a>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="https://www.facebook.com/WylieMechanical/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/50 hover:text-white transition-colors"
            aria-label="Facebook"
            id="topbar-facebook"
          >
            <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
            </svg>
          </a>
          <a
            href="https://g.page/r/CRVc4lKbmKtoEAE/review"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/50 hover:text-white transition-colors"
            aria-label="Google Reviews"
            id="topbar-google"
          >
            <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
