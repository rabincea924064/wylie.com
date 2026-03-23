import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accessibility | Wylie Mechanical",
  description: "Wylie Mechanical is committed to providing an accessible web experience for all users, including those with disabilities.",
};

export default function AccessibilityPage() {
  return (
    <div className="section-padding pt-0 prose prose-lg max-w-none">
      <p className="mb-8">
        At Wylie Mechanical, we believe everyone should have access to quality HVAC services, and our website is no exception. We are committed to providing an inclusive and accessible web experience for all visitors, regardless of ability.
      </p>

      <h2 className="text-h3 text-secondary mt-12 mb-4">Our Commitment</h2>
      <p>
        We are actively working to improve the accessibility and usability of our website, adhering to the Web Content Accessibility Guidelines (WCAG) 2.1, Level AA standards. 
      </p>

      <h2 className="text-h3 text-secondary mt-12 mb-4">Accessibility Features</h2>
      <ul className="list-disc pl-6 mb-8 space-y-2">
        <li><strong>Alternative Text:</strong> We aim to provide descriptive alternative text for all meaningful images.</li>
        <li><strong>Keyboard Navigation:</strong> Our site is designed to be navigable via keyboard for users who cannot use a mouse.</li>
        <li><strong>Screen Reader Friendly:</strong> We use semantic HTML structure (headings, labels, and roles) to improve performance with screen readers.</li>
        <li><strong>Colors & Contrast:</strong> We use high-contrast color palettes and readable typography for better visibility.</li>
      </ul>

      <h2 className="text-h3 text-secondary mt-12 mb-4">Ongoing Efforts</h2>
      <p>
        Accessibility is an ongoing journey. We regularly review our site to ensure it remains compliant and user-friendly. Your feedback is vital to this process.
      </p>

      <h2 className="text-h3 text-secondary mt-12 mb-4">Feedback & Assistance</h2>
      <p>
        If you experience any difficulty accessing our content or have suggestions on how we can improve our site’s accessibility, please let us know. We are here to help.
      </p>
      <ul className="list-none space-y-2">
        <li><strong>Phone:</strong> <a href="tel:613-577-2726" className="text-primary hover:text-accent">(613) 577-2726</a></li>
        <li><strong>Email:</strong> <a href="mailto:info@wyliemechanical.com" className="text-primary hover:text-accent">info@wyliemechanical.com</a></li>
      </ul>
    </div>
  );
}
