import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="w-full bg-gray-200 text-black p-2">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-[100vw] m-auto text-center">
        <div className="p-10">
          <p className="font-bold text-xl">Unimatch</p>
          <p>unimatch123@gmail.com</p>
          <div className="flex justify-center gap-4 mt-5">
            <FaFacebook size={30} className="cursor-pointer" />
            <FaInstagram size={30} className="cursor-pointer" />
            <FaLinkedin size={30} className="cursor-pointer" />
          </div>
        </div>

        <div className="p-10">
          <p className="font-bold text-lg mb-2">Resources</p>
          <p>FAQs</p>
          <p>Testimonial</p>
          <p>Blogs</p>
        </div>

        <div className="p-10">
          <p className="font-bold text-lg mb-2">Company</p>
          <p>Login</p>
          <p>About Us</p>
          <p>Contact Us</p>
        </div>
      </div>

      <div className="text-center py-4 text-sm">
        <p>© Unimatch 2025. All rights reserved.</p>
      </div>
    </div>
  );
}
