import React from "react";

const LeftSlider = () => {
  return (
    <div className="fixed left-0 bottom-0 px-10 sm:static sm:mt-5">
      <div className="flex flex-col items-center">
        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href="https://www.facebook.com/profile.php?id=100010401285017"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="ri-facebook-circle-line text-gray-600 "></i>
          </a>

          <a
            href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJvlHNRvcVJMZHGNfZsJzkLdkTmrQzcgqBBzdbnKmptJjfFNnJwrrMfXDGXmvwFxhnhFfwL"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="ri-mail-line text-gray-600 "></i>
          </a>
          <a
            href="https://www.instagram.com/_bijoy.chowdhury_/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="ri-instagram-line text-gray-600 "></i>
          </a>

          <a
            href="www.linkedin.com/in/md-payer-hamid-bijoy-chowdhury-48249528b"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="ri-linkedin-box-line text-gray-600 "></i>
          </a>

          <a
            href="https://github.com/bijoy172?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="ri-github-line text-gray-600 "></i>
          </a>
        </div>
        <div className="w-[1px] h-32 bg-[#125f63] sm:hidden"></div>
      </div>
    </div>
  );
};

export default LeftSlider;
