/**
 * @description The contact form for the about page
 * @summary This is a simple contact form that is used to allow users to contact the website. It contains:
 * - A name field
 * - An email field
 * - A subject field
 * - A message field
 * - A submit button
 * @returns {JSX.Element} The contact form for the about page
 */

const Contact = () => {
  return (
    <div className="grid py-5 xl:grid-cols-2 ">
      <div className="flex-auto pb-5 md:px-20 xl:p-0">
        <h2 className="text-lg font-semibold lg:text-2xl 3xl:text-3xl">
          Contact us
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
          repellendus laboriosam explicabo, officia consectetur illum nemo porro
          animi molestias maiores ex consequuntur aliquam dolorem eaque?
        </p>
      </div>
      <form className="md:px-20">
        <h3 className="font-semibold">Your Name</h3>
        <input
          type="text"
          className="mb-2 w-60 rounded border bg-white p-1 md:w-80"
          aria-label="Name field"
        />
        <h3 className="font-semibold">Your Email</h3>
        <input
          type="email"
          className="mb-2 w-60 rounded border bg-white p-1 md:w-80"
          aria-label="Email field"
        />
        <h3 className="font-semibold">Subject</h3>
        <select
          aria-label="Subject of inquiry"
          className="mb-2 rounded border bg-white p-1"
          defaultValue={""}
        >
          <option value=""></option>
          <option value="Account">Account</option>
          <option value="Bug / Issue">Bug / Issue</option>
          <option value="Career">Career</option>
          <option value="Partnership">Partnership</option>
          <option value="Review">Review</option>
          <option value="Other">Other</option>
        </select>
        <h3 className="font-semibold">What are you reaching out about today?</h3>
        <textarea className="mb-2 h-32 w-full rounded border bg-white p-2"></textarea>
        <button
          type="button"
          aria-label="Submit contact form"
          className="rounded bg-green/50 px-3 py-1 font-semibold transition-all hover:bg-green/80 hover:shadow-md"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
