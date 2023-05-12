import { persistor, store } from "@/stores/redux";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import DrawerContextProvider from "@/stores/context/drawer";

import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <DrawerContextProvider>
          <Component {...pageProps} />
        </DrawerContextProvider>
      </PersistGate>
    </Provider>
  );
}
