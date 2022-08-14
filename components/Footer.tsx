import { HeartIcon } from "@heroicons/react/solid";

function Footer() {
  return (
    <div className="text-center p-2 mt-4 xl:p-0 xl:mt-0 text-sm text-white">
      <div className="text-center ">
        Made with
        <HeartIcon className="mx-auto fill-bright-light-red h-2 w-2" /> by Matt
        Garrett
      </div>
    </div>
  );
}

export default Footer;
