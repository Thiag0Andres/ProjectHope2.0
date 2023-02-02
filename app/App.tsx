import React from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

import Routes from "./src/Routes";
import store from "./src/store";
import Theme from "./src/theme/theme";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ThemeProvider theme={Theme}>
        <Provider store={store}>
          <Routes />
        </Provider>
      </ThemeProvider>
    </SafeAreaView>
  );
}
