import { NextIntlClientProvider } from "next-intl";


export const metadata = {
  title: "Sigma Agency",
  description: "Digital Solutions for Business Growth",
};

export default function RootLayout({ children, params: { locale } }) {


  return (
    <html lang={locale}>
        <head>
          <link rel="icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="stylesheet" href="https://site-assets.fontawesome.com/releases/v6.5.2/css/all.css"/>
        </head>
      <body cz-shortcut-listen="false" className={`${locale == "en" ? "ltr" : "rtl"}`}>
          <NextIntlClientProvider locale={locale}>
            {children}
          </NextIntlClientProvider>
      </body>
    </html>
  );
}
