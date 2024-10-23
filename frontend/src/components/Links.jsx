import { CiLocationOn } from "react-icons/ci";

import { CiMail, CiTwitter } from "react-icons/ci";
import { FaInstagram, FaFacebook, FaPinterest } from "react-icons/fa";

const Links = () => {
  return (
    <div>
      <div className="flex  h-[40px] justify-center items-center flex-shrink-0 bg-[#4BAF47]">
        <div className="flex w-[] h-[40px]  items-start flex-shrink-0">
          <div className="flex h-[40px] items-center">
            <span className="py-3">
              <CiLocationOn className="text-white" />
            </span>
            <div className="flex w-[227.256px] h-[40px] flex-col justify-center">
              <span className="text-white font-medium text-[12px] leading-[40px]">
                IET Lucknow,UttarPradesh
              </span>
            </div>
          </div>
          <div className="flex h-[40px]  items-center">
            <span className="py-3">
              <CiMail className="text-white" />
            </span>
            <div className="flex w-[227px] h-[40px] flex-col justify-center">
              <span className="text-white font-medium text-[12px] leading-[40px]">
                gopalkatiyar2311@gmail.com
              </span>
            </div>
          </div>
        </div>
        <div className="flex w-[360px] h-[40px] px-[15px] pl-[220.5px] pt-3 justify-end items-start gap-[24px] flex-shrink-0">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer">
            <CiTwitter />
          </a>

          {/* Facebook */}
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer">
            <FaFacebook />
          </a>

          {/* Pinterest */}
          <a
            href="https://pinterest.com"
            target="_blank"
            rel="noopener noreferrer">
            <FaPinterest />
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Links;
