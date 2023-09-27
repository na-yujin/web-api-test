import "@/styles/reset.css";
import type { AppProps } from "next/app";
import wrapper from "@/store";
import { Provider } from "react-redux";
import localFont from "@next/font/local";

const pretendardFont = localFont({
  src: [
    {
      path: "../../public/fonts/Pretendard-Thin.woff2",
      weight: "100",
    },
    {
      path: "../../public/fonts/Pretendard-ExtraLight.woff2",
      weight: "200",
    },
    {
      path: "../../public/fonts/Pretendard-Light.woff2",
      weight: "300",
    },
    {
      path: "../../public/fonts/Pretendard-Regular.woff2",
      weight: "400",
    },
    {
      path: "../../public/fonts/Pretendard-Medium.woff2",
      weight: "500",
    },
    {
      path: "../../public/fonts/Pretendard-SemiBold.woff2",
      weight: "600",
    },
    {
      path: "../../public/fonts/Pretendard-Bold.woff2",
      weight: "700",
    },
    {
      path: "../../public/fonts/Pretendard-ExtraBold.woff2",
      weight: "800",
    },
    {
      path: "../../public/fonts/Pretendard-Black.woff2",
      weight: "900",
    },
  ],
  variable: "--font-pretendard",
});

export default function App({ Component, pageProps }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(pageProps);

  return (
    <Provider store={store}>
      <div className={pretendardFont.className}>
        <Component {...props} />
      </div>
    </Provider>
  );
}
