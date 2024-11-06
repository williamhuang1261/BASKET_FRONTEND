import { PublicClientApplication } from "@azure/msal-browser";
import { msalConfig } from "./msalConfig";

const checkMicrosoftLoginStatus = async () => {
  const msalInstance = new PublicClientApplication(msalConfig);

  if (
    !msalInstance.getActiveAccount() &&
    msalInstance.getAllAccounts().length > 0
  ) {
    // Account selection logic is app dependent. Adjust as needed for different use cases.
    msalInstance.setActiveAccount(msalInstance.getAllAccounts()[0]);
    return msalInstance.getActiveAccount();
  }
  return null
};

export default checkMicrosoftLoginStatus;
