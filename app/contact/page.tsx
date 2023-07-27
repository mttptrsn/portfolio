import ContactForm from "../components/ContactForm";
import Image from "next/image";

export default function Contact() {
  return (
    <section>
      <div className="lg:grid lg:grid-cols-12 lg:min-h-screen">
        <div className="relative flex h-32 items-end lg:col-span-6 lg:h-full xl:col-span-6">
          <Image src="/profile.jpg" width={3000} height={3000} alt="profile" className="absolute inset-0 h-full w-full object-cover opacity-80"/>     
        </div>
    
        <div className="flex flexCenter items-center px-8 sm:px-12 lg:col-span-6 lg:px-16 lg:py-12 xl:col-span-6 pb-80">
          <ContactForm />
        </div>  
      </div>
    </section>
  )
}