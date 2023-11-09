import { createPagesBrowserClient } from "@supabase/auth-helpers-nextjs";
import { RecoilRoot } from "recoil";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { appWithTranslation } from "next-i18next";
import { useState } from "react";
// import Layout from "components/Layout";

import "@/styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [supabaseClient] = useState(() => createPagesBrowserClient());

  return (
    <RecoilRoot>
      <SessionContextProvider
        supabaseClient={supabaseClient}
        initialSession={pageProps.initialSession}
      >
        {/* <Layout> */}
        <Component {...pageProps} />
        {/* </Layout> */}
      </SessionContextProvider>
    </RecoilRoot>
  );
}

export default appWithTranslation(MyApp);
