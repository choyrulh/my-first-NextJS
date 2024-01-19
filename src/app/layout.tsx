"use client";

import React from "react";
import "./globals.css";
import Navbar from "./../components/Navbar";
import { Provider } from "react-redux";
import { store } from "./../lib/store/store";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Provider store={store}>
      <html lang="en">
        <body className="px-16">
          <Navbar />
          {children}
        </body>
      </html>
    </Provider>
  );
}
