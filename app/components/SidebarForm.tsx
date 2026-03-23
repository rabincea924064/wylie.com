import Button from "./Button";

export default function SidebarForm() {
  return (
    <div className="bg-surface-alt rounded-2xl p-6 lg:p-8 border border-border shadow-sm">
      <h3 className="text-h3 text-secondary mb-2">Request Service</h3>
      <p className="text-body text-muted text-sm mb-6">
        Fill out the form below and we will get back to you as soon as possible.
      </p>
      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-secondary mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Your Name"
            className="w-full px-4 py-2 rounded-lg border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-secondary mb-1">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            placeholder="Your Phone Number"
            className="w-full px-4 py-2 rounded-lg border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-secondary mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Your Email Address"
            className="w-full px-4 py-2 rounded-lg border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
          />
        </div>
        <div>
          <label htmlFor="service" className="block text-sm font-medium text-secondary mb-1">
            Service Required
          </label>
          <select
            id="service"
            className="w-full px-4 py-2 rounded-lg border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
          >
            <option>Air Conditioning</option>
            <option>Heating</option>
            <option>Indoor Air Quality</option>
            <option>Heat Pumps</option>
            <option>Water Heaters</option>
            <option>Other / Maintenance</option>
          </select>
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-secondary mb-1">
            Message
          </label>
          <textarea
            id="message"
            rows={4}
            placeholder="How can we help?"
            className="w-full px-4 py-2 rounded-lg border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow resize-none"
          ></textarea>
        </div>
        <Button variant="primary" className="w-full" size="md">
          Submit Request
        </Button>
      </form>
    </div>
  );
}
