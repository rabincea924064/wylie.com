import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Wylie Mechanical",
  description: "Wylie Mechanical is committed to protecting your privacy. This policy outlines how we handle your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="section-padding pt-0 prose prose-lg max-w-none">
      <p className="mb-8">
        At Wylie Mechanical, we respect your privacy and are committed to protecting any personal information you share with us. This policy describes how we collect, use, and safeguard your data when you visit our website or use our services.
      </p>

      <h2 className="text-h3 text-secondary mt-12 mb-4">Information We Collect</h2>
      <p>
        We may collect personal information such as your name, email address, phone number, and physical address when you request an estimate, schedule a service, or contact us through our website.
      </p>

      <h2 className="text-h3 text-secondary mt-12 mb-4">How We Use Your Information</h2>
      <p>
        Your information is primarily used to provide and improve our HVAC services. This includes responding to your inquiries, processing service requests, and occasionally sending you updates or promotions related to our business.
      </p>

      <h2 className="text-h3 text-secondary mt-12 mb-4">Data Security</h2>
      <p>
        We implement industry-standard security measures to protect your data from unauthorized access, disclosure, or alteration. However, please note that no method of transmission over the internet is 100% secure.
      </p>

      <h2 className="text-h3 text-secondary mt-12 mb-4">Sharing Your Information</h2>
      <p>
        We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties. This does not include trusted third parties who assist us in operating our website or conducting our business, so long as those parties agree to keep this information confidential.
      </p>

      <h2 className="text-h3 text-secondary mt-12 mb-4">Contact Us</h2>
      <p>
        If you have any questions regarding this privacy policy, please contact us at <a href="tel:613-577-2726 " className="text-primary hover:text-accent">(613) 577-2726 </a>.
      </p>
    </div>
  );
}
