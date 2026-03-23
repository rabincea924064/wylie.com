import ContactBar from "@/app/components/ContactBar";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import SidebarForm from "@/app/components/SidebarForm";
import Section from "@/app/components/Section";
import InnerHero from "@/app/components/InnerHero";

export default function InnerPagesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ContactBar />
      <Navbar />
      <main id="main-content">
        <InnerHero />

        <Section variant="standard">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            {/* Main content area */}
            <div className="lg:w-2/3 w-full">
              {children}
            </div>
            
            {/* Sidebar with form */}
            <aside className="lg:w-1/3 w-full shrink-0">
              <div className="sticky top-28">
                <SidebarForm />
              </div>
            </aside>
          </div>
        </Section>
      </main>
      
      <Footer />
    </>
  );
}
