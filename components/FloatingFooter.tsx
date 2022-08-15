import { SpeakerphoneIcon, XIcon } from "@heroicons/react/outline";
import { useState } from "react";

function FloatingFooter() {
  const [show, setShow] = useState(true);

  const handleClose = () => {
    setShow(!show);
  };

  return (
    <div hidden={!show} className="fixed bottom-0 inset-x-0 pb-2 sm:pb-5">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="p-2 rounded-lg bg-gray-800 shadow-lg sm:p-3">
          <div className="flex items-center justify-between flex-wrap">
            <div className="w-0 flex-1 flex items-center">
              <span className="flex p-2 rounded-lg bg-project-silver">
                <SpeakerphoneIcon
                  className="h-6 w-6 text-muted-dark-red"
                  aria-hidden="true"
                />
              </span>
              <p className="ml-3 text-sm text-center w-full justify-center font-medium text-project-silver ">
                <span className="inline">
                  Made possible with the unofficial apex legends api.{" "}
                </span>
                <span className="hidden md:inline">
                  Developed and maintained by the awesome people at Apex Legends
                  Status
                </span>
              </p>
            </div>
            <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
              <a
                target="_blank"
                href="https://apexlegendsstatus.com/"
                rel="noreferrer"
                className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-muted-dark-red bg-white hover:bg-indigo-50"
              >
                Learn more
              </a>
            </div>
            <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-2">
              <button
                type="button"
                className="-mr-1 flex p-2 rounded-md hover:bg-muted-light-red focus:outline-none focus:ring-2 focus:ring-white"
                onClick={handleClose}
              >
                <span className="sr-only">Dismiss</span>
                <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FloatingFooter;
