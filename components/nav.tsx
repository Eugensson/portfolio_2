// "use client";

// import { useEffect, useState } from "react";
// import { Link as ScrollLink } from "react-scroll";

// import { NAV_LINKS } from "@/constants";

// interface NavProps {
//   containerStyles?: string;
//   listStyles?: string;
//   linkStyles?: string;
//   spy?: boolean;
// }

// export const Nav = ({
//   containerStyles,
//   listStyles,
//   linkStyles,
//   spy,
// }: NavProps) => {
//   const [isMounted, setIsMounted] = useState(false);

//   useEffect(() => {
//     setIsMounted(true);
//   }, []);

//   if (!isMounted)
//     return (
//       <ul className={listStyles}>
//         {NAV_LINKS.map(({ name }) => (
//           <li key={name}>
//             <ScrollLink
//               to={name}
//               smooth
//               className={linkStyles}
//               activeClass="active"
//             >
//               {name}
//             </ScrollLink>
//           </li>
//         ))}
//       </ul>
//     );

//   return (
//     <nav className={containerStyles}>
//       <ul className={listStyles}>
//         {NAV_LINKS.map(({ name }) => (
//           <li key={name}>
//             <ScrollLink
//               spy={spy}
//               to={name}
//               smooth
//               className={linkStyles}
//               activeClass="active"
//             >
//               {name}
//             </ScrollLink>
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// };

"use client";

import { useEffect, useState } from "react";
import { Link as ScrollLink, Events } from "react-scroll";

import { NAV_LINKS } from "@/constants";

interface NavProps {
  containerStyles?: string;
  listStyles?: string;
  linkStyles?: string;
  spy?: boolean;
}

export const Nav = ({
  containerStyles,
  listStyles,
  linkStyles,
  spy,
}: NavProps) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  if (!isMounted)
    return (
      <ul className={listStyles}>
        {NAV_LINKS.map(({ name }) => (
          <li key={name}>
            <ScrollLink
              to={name}
              smooth
              className={linkStyles}
              activeClass="active"
            >
              {name}
            </ScrollLink>
          </li>
        ))}
      </ul>
    );

  return (
    <nav className={containerStyles}>
      <ul className={listStyles}>
        {NAV_LINKS.map(({ name }) => (
          <li key={name}>
            <ScrollLink
              spy={spy}
              to={name}
              smooth
              className={linkStyles}
              activeClass="active"
            >
              {name}
            </ScrollLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
