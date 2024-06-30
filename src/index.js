import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { PrivyProvider } from "@privy-io/react-auth";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <PrivyProvider
      appId="clx81apdh00278k762qh7e52m"
      onSuccess={(user) => console.log(`User ${user.id} logged in!`)}
      config={{
        // Display email and wallet as login methods
        loginMethods: ["email", "wallet", "google"],
        // Customize Privy's appearance in your app
        appearance: {
          theme: "light",
          accentColor: "#676FFF",
          logo: "./PayshOT.png",
        },
        // Create embedded wallets for users who don't have a wallet
        embeddedWallets: {
          createOnLogin: "users-without-wallets",
        },
        externalWallets: {
          coinbaseWallet: {
            // Valid connection options include 'eoaOnly' (default), 'smartWalletOnly', or 'all'
            connectionOptions: "eoaOnly",
          },
        },
      }}
    >
      <App />
    </PrivyProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
