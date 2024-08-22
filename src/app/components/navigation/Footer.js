import Link from "next/link";

const Footer = () => {
    return (
        <footer className="min-h-min container mx-auto mt-10 px-4 py-10 flex flex-col md:place-items-center">
            <div className="flex flex-col md:flex-row md:space-around md:justify-center space-y-5 md:space-y-0 md:space-x-20">
                <div id="address" className="space-y-3 text-brown">
                    <div>
                        <p>123 12356 St.</p>
                        <p>City, State Zipcode </p>
                    </div>
                    <div>
                        <p>Sundays @ 10:30pm</p>
                    </div>
                    <div>
                        <p>(123) 456-7890</p>
                        <p>info@churchemail.com</p>
                    </div>
                    <div id="socmed-icons" className="flex space-x-2">
                        <a href="#">youtube</a><a href='#'>fb</a>
                    </div>
                </div>
                <div id="quick-links">
                    <h4 className="mb-6 font-bold">Quick Links</h4>
                    <div className="flex flex-col underline text-gray-other">
                        <Link href={`/sermons`}>Sermons</Link>
                        <Link href={`/give`}>Give</Link>
                        <Link href={`/ministries`}>Ministries</Link>
                    </div>
                </div>
                <div id="nav-items">
                    <h4 className="font-bold">International Bible</h4>
                    <h4 className="font-bold">Christian Fellowship</h4>
                    <div className="flex flex-col underline text-gray-other">
                        <Link href={`/new-here`}>New Here?</Link>
                        <Link href={`/about-us`}>About Us</Link>
                        <Link href={`/contact-us`}>Contact Us</Link>
                    </div>
                </div>
            </div>

            <hr className="h-px w-[29rem] md:w-[35rem] mx-auto my-8 bg-black border-0" />

            <p className="text-gray-other">&copy;2024 International Bible Christian Fellowship</p>


        </footer>
    )
}

export default Footer;