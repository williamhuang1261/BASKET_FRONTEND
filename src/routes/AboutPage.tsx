import AboutHeader from "../components/About/AboutHeader";
import Contact from "../components/About/Contact";
import FAQ from "../components/About/FAQ";
import Information from "../components/About/Information";
import FooterDiv from "../components/General/Footer/FooterDiv";
import GenNavBar from "../components/NavBar/GenNavBar";

/**
 * @description About page component displaying company information
 * @summary Main sections:
 * - Navigation bar
 * - About header section
 * - Information section
 * - FAQ section
 * - Contact form
 * - Footer
 * 
 * @returns {JSX.Element} About page with header, information sections, and footer
 */
const AboutPage = () => {
  return (
    <div className="flex min-h-screen flex-col overflow-hidden">
      <div className="border-b-0.5 border-dark_gray">
        <GenNavBar page="General" size="Container" />
      </div>
      <div className="px-3 md:container md:mx-auto md:px-20 pt-5">
        <AboutHeader />
      </div>
      <main className="px-3 md:container md:mx-auto md:px-20 flex flex-col gap-5 py-5">
        <Information />
        <FAQ />
        <Contact />
      </main>
      <div className="flex-grow"></div>
      <div className="">
        <FooterDiv />
      </div>
    </div>
  );
};

export default AboutPage;
