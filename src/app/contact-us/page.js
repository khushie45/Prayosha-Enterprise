import React from "react";
import Link from "next/link";
import { SiGooglemaps } from "react-icons/si";
import { SiFacebook } from "react-icons/si";
import { CiShop } from "react-icons/ci";

const Contact = () => {
  return (
    <div className="mx-2 my-2 text-base md:mx-8 md:my-4 md:text-xl">
      <h1 className="text-2xl md:text-5xl font-bold mb-1 md:mb-4">Contact Us</h1>
      <p>
        We value your feedback and inquiries. Feel free to connect with us for
        any enquiries. For any questions or assistance, you can reach out to us
        via email at <strong>shreeprayosha@gmail.com</strong> or give us a call
        at <strong>+91-9824444189</strong>.
      </p>
      <br />
      <p>
        <strong>Address:</strong> <br />
        C-503, Anand Villa, <br />
        Near HM Patel Statue, A.V. Road, <br />
        Anand-388001, <br />
        Gujarat, India
      </p>
      <br />

      <div className="flex">
        <Link
          title="Get Directions"
          href="https://www.google.com/maps/place/Anand+Villa/@22.5491199,72.9363411,17z/data=!3m1!4b1!4m6!3m5!1s0x395e4dd61763072b:0x6676c58e5de8fd89!8m2!3d22.549115!4d72.938916!16s%2Fg%2F11g9gjz3ly?entry=ttu"
          target="_blank"
          className="mr-5"
        >
          <SiGooglemaps size={40} />
        </Link>
        <Link
          title="Facebook"
          href="https://www.facebook.com/shreeprayoshaenterprise/"
          target="_blank"
          className="mr-5"
        >
          <SiFacebook size={40} />
        </Link>
        <Link
          title="India Mart"
          href="https://www.indiamart.com/shree-prayosha-enterprise/"
          target="_blank"
          className="mr-5"
        >
          <CiShop size={40} />
        </Link>
      </div>
      <br />

      <p>
        We look forward to hearing from you and serving your needs with
        dedication and excellence.
      </p>
    </div>
  );
};

export default Contact;
