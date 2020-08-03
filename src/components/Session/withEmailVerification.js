// import React, { useState, useContext } from "react";

// import AuthUserContext from "./context";
// import { FirebaseContext } from "../Firebase";

// const needsEmailVerification = (authUser) =>
//   authUser &&
//   !authUser.emailVerified

// const withEmailVerification = (Component) => {
//   return function EmailVerificationComponent(props) {
//     const { handleSendEmailVerification } = useContext(FirebaseContext);
//     const [isSent, setIsSent] = useState(false);

//     const onSendEmailVerification = async () => {
//       await handleSendEmailVerification();
//       setIsSent(true);
//       return;
//     };
//     return (
//       <AuthUserContext.Consumer>
//         {(authUser) =>
//           needsEmailVerification(authUser) ? (
//             <div>
//               {isSent ? (
//                 <p>
//                   E-Mail confirmation sent: Check your E-Mails (Spam folder
//                   included) for a confirmation E-Mail. Refresh this page once
//                   you confirmed your E-Mail.
//                 </p>
//               ) : (
//                 <p>
//                   Verify your E-Mail: Check your E-Mails (Spam folder included)
//                   for a confirmation E-Mail or send another confirmation E-Mail.
//                 </p>
//               )}

//               <button
//                 type="button"
//                 onClick={onSendEmailVerification}
//                 disabled={isSent}
//               >
//                 Send confirmation E-Mail
//               </button>
//             </div>
//           ) : (
//             <Component {...props} />
//           )
//         }
//       </AuthUserContext.Consumer>
//     );
//   };
// };

// export default withEmailVerification;
