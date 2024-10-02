import Link from "next/link";
import Logo from "../logo";
import InstagramIcon from "@/icons/instagram";
import FacebookIcon from "@/icons/facebook";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <footer className="py-6 text-center bg-gray-100">
      <div className="container">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full sm:w-auto">
            <Logo />
          </div>
          <div className="w-full sm:flex-1 mb-3 sm:mb-0">
            <Link href="/services" className="font-medium p-2 text-gray-800">
              Υπηρεσίες
            </Link>
            <Link href="/projects" className="font-medium p-2 text-gray-800">
              Έργα
            </Link>
            <Link href="/blog" className="font-medium p-2 text-gray-800">
              blog
            </Link>
          </div>
          <div className="flex gap-2 w-full sm:w-auto justify-center">
            <a
              href="https://www.facebook.com/people/%CE%9A%CE%B1%CF%84%CE%B1%CF%83%CE%BA%CE%B5%CF%85%CE%AD%CF%82-%CE%95%CF%80%CE%B9%CF%83%CE%BA%CE%B5%CF%85%CE%B5%CF%85%CE%B5%CF%82-pjetri/100063702662482/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FacebookIcon width={24} height={24} />
            </a>
            <a
              href="https://www.instagram.com/saimir_pjetri/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="instagram"
            >
              <InstagramIcon width={24} height={24} />
            </a>
          </div>
        </div>
        <hr className="mt-4 mb-6 border-gray-300" />
        <div className="flex flex-wrap gap-3 justify-center items-center text-gray-600 text-sm">
          <Link href="/privacy-policy">Πολιτική Απορρήτου</Link>
          <Link href="/terms-and-conditions">Όροι Χρήσης</Link>
          <p className="ml-0 sm:ml-auto w-full sm:w-auto">
            Copyright © {date} pjerti
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
