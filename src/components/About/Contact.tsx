const Contact = () => {
  return (
    <div className="grid xl:grid-cols-2 py-5 ">
      <div className="flex-auto md:px-20 pb-5 xl:p-0">
        <h2 className="text-xl font-semibold lg:text-3xl 3xl:text-4xl">
          Contact us
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
          repellendus laboriosam explicabo, officia consectetur illum nemo porro
          animi molestias maiores ex consequuntur aliquam dolorem eaque?
        </p>
      </div>
      <form className="md:px-20">
        <h3 className="text-lg">Your Name</h3>
        <input
          type="text"
          className="mb-2 md:w-80 w-60 rounded border bg-white p-1 outline-none"
          aria-label="Name field"
        />
        <h3 className="text-lg">Your Email</h3>
        <input
          type="email"
          className="mb-2 md:w-80 w-60 rounded border bg-white p-1 outline-none"
          aria-label="Email field"
        />
        <h3 className="text-lg">Subject</h3>
        <select
          aria-label="Subject of inquiry"
          className="mb-2 rounded border bg-white p-1 outline-none"
        >
          <option value="" selected></option>
          <option value="Account">
            <p>Account</p>
          </option>
          <option value="Bug / Issue">
            <p>Bug / Issue</p>
          </option>
          <option value="Career">
            <p>Career</p>
          </option>
          <option value="Partnership">
            <p>Partnership</p>
          </option>
          <option value="Review">
            <p>Review</p>
          </option>
          <option value="Other">
            <p>Other</p>
          </option>
        </select>
        <h3 className="text-lg">
          What are you reaching out about today?
        </h3>
        <textarea className="mb-2 h-32 w-full rounded border bg-white p-2 outline-none"></textarea>
        <button
          type="button"
          aria-label="Submit contact form"
          className="rounded border-0.5 border-dark_gray bg-green/80 px-3 font-semibold ring-green transition-all duration-75 ease-in-out hover:scale-105 hover:ring-2"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
