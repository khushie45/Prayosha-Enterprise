import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#77AFD6] text-[#231d67] mt-4">
      <div className="container mx-auto py-8 px-4 lg:px-0">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="col-span-1">
            <h6 className="text-xl font-bold mb-2">
              <i className="fas fa-gem mr-2"></i>
              Shree Prayosha Enterprise
            </h6>
            <p>
              Connect with us today to explore our premium-quality amusement
              park rides and installation services tailored to your specific
              requirements.
            </p>
          </div>

          <div className="col-span-1">
            <h6 className="text-xl font-bold mb-2">Products</h6>
            <p>
              <Link href="../products/children">Children Rides</Link>
            </p>
            <p>
              <Link href="../products/family">Family Rides</Link>
            </p>
            <p>
              <Link href="../products/adult">Adult Rides</Link>
            </p>
          </div>

          <div className="col-span-1">
            <h6 className="text-xl font-bold mb-2">Links</h6>
            <p>
              <Link href="/">Home</Link>
            </p>
            <p>
              <Link href="../about-us">About Us</Link>
            </p>
            <p>
              <Link href="../services">Services</Link>
            </p>
          </div>

          <div className="col-span-1">
            <h6 className="text-xl font-bold mb-2">Contact</h6>
            <p>
              <i className="fas fa-home mr-3"></i>
              Anand, Gujarat - 388001
            </p>
            <p>
              <i className="fas fa-envelope mr-3"></i>
              shreeprayosha@gmail.com
            </p>
            <p>
              <i className="fas fa-phone mr-3"></i>
              +91 9824444189
            </p>
            <p>
              <i className="fas fa-phone mr-3"></i>
              +91 9054470072
            </p>
            <p>
              <i className="fab fa-facebook-f mr-3"></i>
              <Link
                href="https://www.facebook.com/shreeprayoshaenterprise/"
                target="_blank"
              >
                shreeprayoshaenterprise
              </Link>
            </p>
          </div>
        </div>
      </div>

      <div className="text-center py-4">
        <p className="text-lg">© 2024 Copyright: Shree Prayosha Enterprise</p>
        <p>
          <Link
            className="text-[#231d67] font-bold"
            href="https://shree-prayosha-enterprise.netlify.app/"
            target="_blank"
          >
            Shree Prayosha Enterprise
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

/* "use client";

import React from "react";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import Link from "next/link";

const Footer = () => {
  return (
    <MDBFooter className="bottom-0 text-center text-lg-start bg-[#77AFD6] text-[#231d67] mt-4">
      <section className="d-flex justify-content-center justify-content-lg-between p-0 border-bottom">
        <MDBContainer className="text-center text-md-start mt-8 mb-2">
          <MDBRow>
            <MDBCol md="3" lg="4" xl="4" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-2">
                <MDBIcon icon="gem" className="me-1" />
                Shree Prayosha Enterprise
              </h6>
              <p>
                Connect with us today to explore our premium-quality amusement
                park rides and installation services tailored to your specific
                requirements.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-2">Products</h6>
              <p>
                <Link href="../products/children">Children Rides</Link>
              </p>
              <p>
                <Link href="../products/family">Family Rides</Link>
              </p>
              <p>
                <Link href="../products/adult">Adult Rides</Link>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-2">Links</h6>
              <p>
                <Link href="/">Home</Link>
              </p>
              <p>
                <Link href="../about-us">About Us</Link>
              </p>
              <p>
                <Link href="../services">Services</Link>
              </p>
              <p>
                <Link href="../photo-gallery">Photo Gallery</Link>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-2">Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-3" />
                Anand, Gujarat - 388001
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                shreeprayosha@gmail.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" />
                +91 9824444189
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" />
                +91 9054470072
              </p>
              <p>
                <MDBIcon fab icon="facebook-f" className="me-3" />
                <Link
                  href="https://www.facebook.com/shreeprayoshaenterprise/"
                  target="_blank"
                >
                  shreeprayoshaenterprise
                </Link>
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className="text-center p-4">
        © 2024 Copyright:
        <Link
          className="text-reset fw-bold"
          href="https://shree-prayosha-enterprise.netlify.app/"
          target="_blank"
        >
          Shree Prayosha Enterprise
        </Link>
      </div>
    </MDBFooter>
  );
};

export default Footer;
 */
