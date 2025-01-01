import MainPageAds from "../components/General/Ads/MainPageAds";
import FooterDiv from "../components/General/Footer/FooterDiv";
import MainHeaderDiv from "../components/MainPage/UpperHeader/MainHeaderDiv";
import LogoSlideDiv from "../components/MainPage/LogoSlider/LogoSlideDiv";
import Description from "../components/MainPage/Description/Description";
import PopItemsDiv from "../components/MainPage/PopItems/PopItemsDiv";

/**
 * @description Landing page of the application
 * @summary Main sections:
 * - Main header with navigation
 * - Advertisement banner
 * - Partner logos slider
 * - Feature descriptions
 * - Popular items section
 * - Footer
 * 
 * @returns {JSX.Element} The home page of the application
 */
const HomePage = () => {
  return (
    <>
      <div className="flex min-h-screen  flex-col overflow-hidden">
        {/* The MainHeadDiv encapsulates the caption + language header, and the GenNavBar */}
        <MainHeaderDiv />
        <main>
          {/* Advertisement in the main page */}
          <MainPageAds />
          {/* Infinite Slider of logos */}
          <LogoSlideDiv />
          {/* Description boxes of the use of the website */}
          <Description />
          {/* Item recommendations */}
          <PopItemsDiv />
        </main>
        {/* Used to stick footer to the bottom of the page or content */}
        <div className="flex-grow"></div>
        <FooterDiv />
      </div>
    </>
  );
};

export default HomePage;
