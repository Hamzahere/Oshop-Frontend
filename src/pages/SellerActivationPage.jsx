/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { server } from "../server";

// const SellerActivationPage = () => {
//   const { activation_token } = useParams();
//   const [error, setError] = useState(false);

//   useEffect(() => {
//     if (activation_token) {
//       const sendRequest = async () => {
//         await axios
//           .post(`${server}/shop/activation`, {
//             activation_token,
//           })
//           .then((res) => {
//             console.log(res);
//           })
//           .catch((err) => {
//             setError(true);
//           });
//       };
//       sendRequest();
//     }
//   }, []);

//   return (
//     <div
//       style={{
//         width: "100%",
//         height: "100vh",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       {error ? (
//         <p>Your token is expired!</p>
//       ) : (
//         <p>Your account has been created suceessfully!</p>
//       )}
//     </div>
//   );
// };
// const SellerActivationPage = () => {
//   const { activation_token } = useParams();
//   const [error, setError] = useState(false);
//   const [errorMessage, setErrorMessage] = useState("");

//   useEffect(() => {
//     if (activation_token) {
//       const sendRequest = async () => {
//         try {
//           const res = await axios.post(`${server}/shop/activation`, {
//             activation_token,
//           });
//           console.log(res);
//         } catch (err) {
//           if (err.response && err.response.status === 401) {
//             setErrorMessage("Your token is expired!");
//           } else {
//             setErrorMessage("An error occurred while activating your account.");
//           }
//           setError(true);
//         }
//       };
//       sendRequest();
//     }
//   }, []);

//   return (
//     <div
//       style={{
//         width: "100%",
//         height: "100vh",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       {error ? <p>{errorMessage}</p> : <p>Your account has been created successfully!</p>}
//     </div>
//   );
// };

const SellerActivationPage = () => {
  const { activation_token } = useParams();
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (activation_token) {
      const sendRequest = async () => {
        try {
          const res = await axios.post(`${server}/shop/activation`, {
            activation_token,
          });
          console.log("Response:", res); // Log the response data
        } catch (err) {
          console.error("Error:", err); // Log the error for debugging

          if (err.response && err.response.status === 401) {
            setErrorMessage("Your token is expired!");
          } else {
            setErrorMessage("An error occurred while activating your account.");
          }
          setError(true);
        }
      };
      sendRequest();
    }
  }, [activation_token]); // Include activation_token as a dependency

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {error ? <p>{errorMessage}</p> : <p>Your account has been created successfully!</p>}
    </div>
  );
};

export default SellerActivationPage;



