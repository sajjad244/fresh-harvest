const Footer = () => {
  return (
    <div className="mt-16">
      <footer className="footer bg-base-200  p-10 flex justify-evenly">
        <nav>
          <h1 className="text-2xl font-bold text-black  text-center">
            Fresh Harvest
          </h1>
          <div className="mt-6 flex justify-center lg:justify-start gap-4">
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="App Store"
              className="h-10"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Google Play"
              className="h-10"
            />
          </div>
        </nav>
        <nav>
          <h6 className="footer-title text-black">Services</h6>
          <a className="text-slate-500">Product Support</a>
          <a className="text-slate-500">Order Tracking</a>
          <a className="text-slate-500">Shipping & Delivery</a>
          <a className="text-slate-500">Returns</a>
        </nav>
        <nav>
          <h6 className="footer-title text-black">Company</h6>
          <a className="text-slate-500">About us</a>
          <a className="text-slate-500">Contact</a>
          <a className="text-slate-500">Careers</a>
        </nav>
        <nav>
          <h6 className="footer-title text-black">Legal</h6>
          <a className="text-slate-500">Terms of use</a>
          <a className="text-slate-500">Privacy policy</a>
          <a className="text-slate-500">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
