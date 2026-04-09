import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookingForm from "@/components/BookingForm";

export default function BookPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-8 sm:py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-vintage-darkBrown mb-4">
              Book Appointment
            </h1>
            <div className="ornament-divider">
              <span>⚙</span>
            </div>
            <p className="text-sm sm:text-base text-vintage-brown mt-6 max-w-xl mx-auto">
              Schedule your motorcycle service in just a few steps. We'll take care of the rest!
            </p>
          </div>
          
          <BookingForm />
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
