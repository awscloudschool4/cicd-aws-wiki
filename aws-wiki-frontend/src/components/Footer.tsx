import React from "react";
import { format } from "date-fns";
const Footer = () => {
  const currentYear = format(new Date(), "yyyy");
  return (
    <footer className="fixed bottom-0 w-full bg-gray-800 text-white text-center p-8">
      <div className="container mx-auto px-4">
        <p className="text-sm sm:text-base">
          ©{currentYear} AWS Cloud Schol 4기 CI/CD팀 3조. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
