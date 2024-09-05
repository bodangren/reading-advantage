import { Icons } from "@/components/icons";
import { siteConfig } from "@/configs/site-config";
import { ThemeSwitcher } from "./switchers/theme-switcher-toggle";
import { LocaleSwitcher } from "./switchers/locale-switcher";
import Link from "next/link";

interface FooterProps {
  className?: string;
}

const info = [
  {
    title: "About",
    links: [
      { title: "About Us", href: "/about" },
      { title: "Features", href: "/features" },
      { title: "Pricing", href: "/pricing" },
      { title: "Support", href: "/support" },
    ],
  },
  {
    title: "Legal",
    links: [
      { title: "Privacy Policy", href: "/privacy" },
      { title: "Terms & Conditions", href: "/terms" },
    ],
  },
  {
    title: "Contact",
    links: [
      {
        title: "Email: info@readingadvantage.com",
        href: "mailto:info@readingadvantage.com",
      },
      { title: "Phone: +1 (123) 456-7890", href: "tel:+11234567890" },
    ],
  },
];

export function Footer({ className }: FooterProps) {
  return (
    <footer className="text-white">
      <svg viewBox="0 0 800 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          fill="#172554"
          d="M800 22.5005C533.36 22.5005 266.641 22.5005 0 22.5005C0 9.50149 0 18.6995 0 5.7005C1.979 5.9515 3.19 7.2105 5.5 6.7005C7.573 6.2425 9.898 3.3645 13.5 4.7005C14.863 5.2065 14.445 6.2425 16.5 6.7005C21.389 0.2795 34.287 1.2575 43 3.2005C48.321 4.3875 50.796 0.5055 55 1.7005C57.144 2.3095 57.77 5.0345 60 4.2005C62.848 3.4645 62.954 1.8465 67 1.7005C67.38 2.1695 71.143 5.5695 71.5 5.7005C74.084 6.6485 78.062 4.7125 80 6.2005C80.765 6.7875 81.982 9.3795 82.5 10.2005C85.838 8.2045 95.365 5.4915 101.5 7.2005C103.779 7.8355 105.027 11.2165 108.5 10.2005C109 9.7005 109.5 9.2005 110 8.7005C113.666 8.7005 117.334 8.7005 121 8.7005C123.354 8.0115 127.891 6.2885 130 5.7005C132.5 6.0335 135 6.3675 137.5 6.7005C141.539 5.3605 141.285 1.8195 148.5 1.7005C150.697 4.7095 152.573 3.1265 157 4.2005C157.238 4.2585 157.982 5.2845 158.5 5.2005C159.77 4.9945 160.533 3.0965 163 3.7005C165.456 4.3015 167.021 7.1345 169 7.7005C171.458 8.4035 174.953 6.5305 177.5 8.2005C178.783 9.0425 180.05 11.5485 181.5 12.2005C183.166 12.3675 184.834 12.5335 186.5 12.7005C187.166 13.3675 187.834 14.0335 188.5 14.7005C190.608 15.2745 190.924 13.5525 192 13.2005C194.5 13.2005 197 13.2005 199.5 13.2005C200.713 12.8285 201.824 11.2625 204 11.7005C206.477 12.1985 207.352 14.5105 209 15.2005C211.5 15.0335 214 14.8675 216.5 14.7005C217.153 14.8615 219.045 16.0965 219.5 16.2005C221.996 16.7705 225.971 14.7465 227.5 14.2005C229.833 14.2005 232.167 14.2005 234.5 14.2005C237.884 13.1995 242.581 13.1145 246 12.2005C249 12.0335 252 11.8675 255 11.7005C257.076 10.8905 260.334 8.7725 262.5 8.2005C267.087 6.9895 276.558 12.7235 280 12.2005C288.551 10.9005 295.195 6.5085 303 5.2005C307.572 4.4345 311.705 7.9095 317 6.2005C319.795 5.2985 320.689 3.7835 325 3.7005C325.082 3.8105 339.328 12.6495 339.5 12.7005C342.076 13.4675 349.15 11.5675 353 12.2005C354.744 12.4875 354.166 14.2315 356.5 13.7005C357 13.2005 357.5 12.7005 358 12.2005C362 12.2005 366 12.2005 370 12.2005C370.5 11.5335 371 10.8675 371.5 10.2005C374.143 8.5785 378.373 9.4465 381 10.2005C383.666 10.2005 386.334 10.2005 389 10.2005C391.848 11.1025 402.672 14.9125 405 11.2005C406.175 9.6735 405.919 7.7825 406.5 6.7005C407.09 6.2995 407.341 6.3135 408.5 6.2005C410.7 8.3225 416.399 4.4125 418.5 5.2005C419.971 5.7525 420.047 7.0915 423 7.2005C423 6.8675 423 6.5335 423 6.2005C422.624 5.6645 422.699 5.7275 422.5 4.7005C423.524 4.3445 424.837 4.2035 426.5 4.2005C427.073 4.9285 427.501 5.3005 428 6.2005C431.663 3.3095 444.4 -1.1775 452 1.2005C453.621 1.7075 453.684 3.8545 456.5 3.2005C456.833 2.8675 457.167 2.5335 457.5 2.2005C461.666 2.3675 465.834 2.5335 470 2.7005C471.505 2.0915 475.567 -0.7745 479 0.2005C479.5 0.7005 480 1.2005 480.5 1.7005C483 1.8675 485.5 2.0335 488 2.2005C488.5 2.7005 489 3.2005 489.5 3.7005C492.186 4.7465 494.682 3.7165 497 4.7005C498.642 5.3975 499.621 7.1795 501.5 7.7005C505.666 7.8675 509.834 8.0335 514 8.2005C514.951 8.4835 515.863 9.9355 516.5 10.2005C519.333 10.2005 522.167 10.2005 525 10.2005C526.544 8.2375 531.576 4.9715 534 4.2005C539 4.3675 544 4.5335 549 4.7005C549.333 4.2005 549.667 3.7005 550 3.2005C555.854 0.5505 564.461 6.4945 568 8.2005C570.541 9.4255 571.66 6.6545 574 7.2005C577.339 7.9785 581.41 10.8685 585.5 11.2005C589.141 6.1225 594.067 10.9535 599 11.7005C603.897 12.4425 607.296 6.9305 613 9.2005C615.632 10.2485 619.404 13.6105 624.5 12.2005C627.654 11.3275 630.772 8.0845 634 7.2005C636.915 6.4025 639.877 8.2145 642 8.7005C647.647 9.9935 650.433 6.0535 655 7.2005C657.042 7.7135 658.28 9.5185 660 10.2005C662.586 11.2255 664.607 10.9235 667 12.2005C667.667 12.8675 668.333 13.5335 669 14.2005C673 14.2005 677 14.2005 681 14.2005C681.788 14.4665 682.711 15.9355 683.5 16.2005C685.788 16.9695 699.292 16.9185 701 16.2005C702.283 15.6615 704.721 13.6815 706.5 13.2005C709.106 12.4955 710.013 14.0405 712.5 14.2005C713.485 12.6145 714.777 11.5165 716 10.2005C721.542 10.1475 726.706 10.8185 731 11.2005C732.055 9.4825 732.689 8.7945 735.5 8.7005C736.513 9.7605 736.971 10.0255 739 10.2005C739.986 8.7765 740.506 8.6935 743 8.7005C744.993 10.6675 746.643 9.2105 750 10.2005C751.853 10.7465 757.212 15.1965 760 14.2005C760.654 13.9675 762.018 12.3395 763 12.2005C765.529 11.8425 766.821 15.7675 770 14.2005C773.888 12.2845 776.714 8.5475 782 8.2005C788.722 14.1805 794.787 7.1585 800 6.2005C800 19.0325 800 9.66849 800 22.5005Z"
        />
      </svg>
      <div className="bg-[#172554]">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8 mt-[-2px]">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <a className="flex items-center">
                <Icons.logo className="h-8 me-3" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                  {siteConfig.name}
                </span>
              </a>
              <p className="mt-2 text-gray-400">
                Provinding the best English learning experience.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-2">
              {info.map((item) => (
                <div key={item.title}>
                  <div>
                    <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                      {item.title}
                    </h2>
                    <ul className="text-gray-400 font-medium">
                      {item.links.map((link) => (
                        <li key={link.title} className="mb-4">
                          <Link href={link.href}>{link.title}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <hr className="my-6 sm:mx-auto border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-400 sm:text-center">
              © 2024{" "}
              <a href="https://flowbite.com/" className="hover:underline">
                Reading Advantage™
              </a>
              . All Rights Reserved.
            </span>
            <div className="flex mt-4 justify-center sm:mt-0 items-center">
              <Link href={siteConfig.link.github} className="mr-2">
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="sr-only">GitHub</span>
              </Link>
              <ThemeSwitcher />
              <LocaleSwitcher />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
