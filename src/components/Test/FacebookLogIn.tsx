import FBLogo from '../../assets/Facebook_Logo_Primary.png'

const FacebookLogIn = () => {
  return (
    <button
      className="w-full p-2 h-10 flex items-center justify-center gap-3 border rounded"
      onClick={() => console.warn("Implement the Facebook JS SDK")}
    >
      <img src={FBLogo} className='object-contain h-full'/>
      <h2 className="">Login with Facebook</h2>
    </button>
  );
};

export default FacebookLogIn;
