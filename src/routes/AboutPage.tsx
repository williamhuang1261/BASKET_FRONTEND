import AboutHeader from "../components/About/AboutHeader";
import Contact from "../components/About/Contact";
import Faq from "../components/About/Faq";
import Information from "../components/About/Information";
import FooterDiv from "../components/General/Footer/FooterDiv";
import GenNavBar from "../components/NavBar/GenNavBar";

/**
 * @description About page component displaying company information
 * @summary Main sections:
 * - Navigation bar
 * - About header section
 * - Information section
 * - Faq section
 * - Contact form
 * - Footer
 *
 * @returns {JSX.Element} About page with header, information sections, and footer
 */
const AboutPage = () => {
  return (
    <div className="flex min-h-screen min-w-80 flex-col overflow-hidden">
      <div className="border-b-0.5 border-dark_gray bg-white">
        <GenNavBar page="General" size="Container" />
      </div>
      <div className="px-3 pt-5 md:container md:mx-auto lg:px-20 2xl:px-44 3xl:px-64">
        <AboutHeader />
      </div>
      <main className="flex flex-col gap-5 px-3 py-5 md:container md:mx-auto lg:px-20 2xl:px-44 3xl:px-64">
        <Information />
        <div className="flex items-center justify-center w-full">
          <Faq />
        </div>
        <Contact />
      </main>
      <div className="grow"></div>
      <div className="">
        <FooterDiv />
      </div>
    </div>
  );
};

export default AboutPage;
