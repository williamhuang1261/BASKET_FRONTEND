import walmart from "../assets/Walmart_Logo.png";
import iga from "../assets/IGA_logo.png";
import costco from "../assets/Costco_logo.webp";
import loblaws from "../assets/Loblaws_logo.png";
import metro from "../assets/Metro_logo.png";
import sobeys from "../assets/Sobeys_logo.png";
import TnT from "../assets/T&T_logo.png";
import panierExtra from "../assets/Panier_extra_logo.png";
import provigo from '../assets/Provigo_logo.png'

/**
 * Store logo configuration and URLs
 * @type {Array<{
 *   src: string,
 *   name: string,
 *   ref: {
 *     cadFR: string,
 *     cadEN: string,
 *     usEN: string
 *   }
 * }>}
 */
const logos = [
  {
    src: walmart,
    name: "walmart",
    ref: {
      cadFR: "https://www.walmart.ca/fr",
      cadEN: "https://www.walmart.ca/en",
      usEN: "https://www.walmart.com/",
    },
  },
  {
    src: iga,
    name: "iga",
    ref: {
      cadFR: "https://www.iga.net/fr",
      cadEN: "https://www.iga.net/en",
      usEN: "https://www.iga.com/",
    },
  },
  {
    src: costco,
    name: "costco",
    ref: {
      cadFR: "https://www.costco.ca/?langId=-25",
      cadEN: "https://www.costco.ca/",
      usEN: "https://www.costco.com/",
    },
  },
  {
    src: loblaws,
    name: "loblaws",
    ref: {
      cadFR: "https://www.loblaws.ca/",
      cadEN: "https://www.loblaws.ca/",
      usEN: "",
    },
  },
  {
    src: metro,
    name: "metro",
    ref: {
      cadFR: "https://www.metro.ca/fr",
      cadEN: "https://www.metro.ca/en",
      usEN: "",
    },
  },
  {
    src: sobeys,
    name: "sobeys",
    ref: {
      cadFR: "",
      cadEN: "https://www.sobeys.com/en/",
      usEN: "",
    },
  },
  {
    src: TnT,
    name: "T&T",
    ref: {
      cadFR: "https://www.tntsupermarket.com/fr/",
      cadEN: "https://www.tntsupermarket.com/eng/",
      usEN: "",
    },
  },
  {
    src: panierExtra,
    name: "panier extra",
    ref: {
      cadFR: "https://panierextra.com/",
      cadEN: "",
      usEN: "",
    },
  },
  {
    src:provigo,
    name: 'provigo',
    ref: {
      cadFR: 'https://www.provigo.ca/',
      cadEN: 'https://www.provigo.ca/',
      usEN: '',
    }
  }
];

export default logos;
