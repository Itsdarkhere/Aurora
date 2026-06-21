import { Link } from "@remix-run/react";

const Footer = () => {
  return (
    <footer className="bg-theme px-4 py-8 flex justify-center items-center flex-col">
      <div className="w-full max-w-7xl flex flex-row justify-between items-center pb-6 border-b border-white border-opacity-20">
        <p className="text-white text-xl font-indie-flower">
          Psykologiaurora.fi
        </p>
        <Link
          to="/varaus"
          className="bg-white text-center text-sm font-medium text-gray-900 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
        >
          Varaus
        </Link>
      </div>
      <div className="w-full max-w-7xl flex flex-col md:flex-row gap-8 justify-between pt-6">
        <div className="flex flex-col">
          <p className="font-light text-sm text-white text-opacity-60">
            aurora.amanda.huovinen@gmail.com
          </p>
        </div>
        <div className="flex flex-row gap-4">
          <a
            href="https://www.linkedin.com/in/aurora-huovinen"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 text-white flex justify-center items-center rounded-lg bg-white bg-opacity-10"
          >
            <img alt="linkedin logo" src="/linkedin.svg" height={24} width={24} />
          </a>
          <a
            href="https://www.tiktok.com/@psykologiaurora"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 text-white flex justify-center items-center rounded-lg bg-white bg-opacity-10"
          >
            <img alt="tiktok logo" src="/tiktok.svg" height={24} width={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
