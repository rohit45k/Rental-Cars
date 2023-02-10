import Link from "next/link";
import Image from "next/image";

import { footerLinks } from "@/constants";

const Footer = () => {
  return (
    <footer className="max-w-[1440px] mx-auto flex flex-col text-black-100 border-t border-gray-100 mt-5">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <div className="flex flex-col justify-start items-start gap-6">
          <Link href="/" className="flex justify-center items-center">
            <Image
              src="/logo.svg"
              alt="Car Rental Logo"
              width={118}
              height={18}
              className="object-contain"
            />
          </Link>
          <p className="text-base text-gray-700">
            Rental Cars 2023 <br />
            All Rights Reserved &copy;
          </p>
        </div>

        <div className="footer__links">
          {footerLinks.map((link) => (
            <div key={link.title} className="footer_link">
              <h3 className="font-bold mb-3">{link.title}</h3>
              <div className="flex flex-col gap-2">
                {link.links.map((link) => (
                  <Link
                    href={link.url}
                    key={link.title}
                    className="text-gray-500"
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center border-t border-gray-100 flex-wrap mt-10 px-6 sm:px-16 py-10">
        <p>@2023 Rental Cars. All Rights Reserved.</p>
        <div className="footer__copyrights-link">
          <Link href="/" className="text-gray-500">
            Privacy Policy
          </Link>
          <Link href="/" className="text-gray-500">
            Terms of Use
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
