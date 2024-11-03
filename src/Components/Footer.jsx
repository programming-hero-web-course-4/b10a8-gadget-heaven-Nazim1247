

const Footer = () => {
    return (
        <div className="bg-slate-50">
            <div className="text-center py-8 border-b-2 w-8/12 mx-auto">
                <h3 className="text-xl font-bold">Gadget Heaven</h3>
                <p className="text-gray-500">Leading the way in cutting-edge technology and innovation.</p>
            </div>
            <footer className="footer p-10 w-8/12 mx-auto">
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="w-32 mx-auto">Product Support
                        Order Tracking
                        Shipping & Delivery
                        Returns</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Careers</a>
                    <a className="link link-hover">Contact</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of Service</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;