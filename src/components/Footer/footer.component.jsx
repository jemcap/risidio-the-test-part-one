import React from "react";
import { FOOTER_LINKS } from "../../constants/links";

const Footer = () => {
  return (
    <footer className="bg-[#E6E9F2] h-full lg:h-[98px]">
      <div className="flex flex-col gap-10 lg:flex-row justify-between items-center py-[33px] h-full align-elements border-2">
        <h1 className="text-2xl font-bold uppercase">Marketplace.</h1>
        <ul className="flex gap-[42px]">
          {FOOTER_LINKS.map((link) => {
            const { id, icon: Icon } = link;
            return (
              <li key={id}>
                <Icon className="text-2xl" />
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
