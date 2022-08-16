function Contact() {
  const handleClick = () => {
    alert("Functionality next in line, thank you for your interest");
  };

  return (
    <div className="xl:max-w-7xl lg:max-w-6xl lg:mx-auto mt-5 mb-1.5 p-2">
      <div className="text-center">
        <h2 className="text-3xl lg:text-4xl text-black text-center my-1 py-1 font-bold">
          Contact Me
        </h2>
      </div>
      <div className="mt-12">
        <form className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
          <div className="sm:col-span-2">
            <label
              htmlFor="first-name"
              className="block text-sm lg:text-base font-medium text-black"
            >
              First name
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm lg:text-base font-medium text-black"
            >
              Email
            </label>
            <div className="mt-1">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm lg:text-base font-medium text-black"
            >
              Message
            </label>
            <div className="mt-1">
              <textarea
                id="message"
                name="message"
                rows={4}
                className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md"
                defaultValue={""}
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <button
              onClick={handleClick}
              type="button"
              className="w-full inline-flex items-center justify-center px-6 py-3 rounded-md shadow-sm text-base font-medium text-white bg-muted-dark-red hover:bg-dark-red focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-muted-dark-red"
            >
              Let&apos;s talk
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
