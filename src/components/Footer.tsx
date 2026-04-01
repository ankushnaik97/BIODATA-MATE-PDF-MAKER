import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Heart className="w-6 h-6 text-red-500 fill-red-500" />
              <span className="text-xl font-bold text-white">
                Biodata<span className="text-red-500">Mate</span>
              </span>
            </div>
            <p className="text-sm">
              Create beautiful marriage biodata in minutes. Premium templates for every
              religion and community.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:text-white transition">Home</a></li>
              <li><a href="/create" className="hover:text-white transition">Create Biodata</a></li>
              <li><a href="/templates" className="hover:text-white transition">Templates</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition">Contact Us</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-gray-800 text-center text-sm">
          © {new Date().getFullYear()} BiodataMate. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
