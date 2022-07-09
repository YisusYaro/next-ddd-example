import "reflect-metadata";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { App } from "../modules/shared/infrastructure/dependency-injection/app";

App.getInstance().setDependencyInjectionApp();

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
