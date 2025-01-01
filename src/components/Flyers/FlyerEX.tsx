/**
 * @description Component that embeds a Flipp flyer viewer
 * @summary Displays an iframe containing a specific store's Flipp flyer
 * @returns {JSX.Element} Iframe component containing the embedded Flipp flyer
 */
const Flyer = () => {
  return (
    <iframe
      src={
        "https://flipp.com/en-ca/quebec-qc/flyer/6463111-bureau-en-gros-weekly-ad?postal_code=G1W3R4"
      }
      className="h-full w-full"
    ></iframe>
  );
};

export default Flyer;
