import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="  py-6">
      <div className="container mx-auto px-4 text-center">
        <div className="text-sm">
          &copy; {new Date().getFullYear()} <Link to="https://glintxworthintl.com">Glintx Worth International</Link>, All
          rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
