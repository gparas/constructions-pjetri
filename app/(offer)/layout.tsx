import React from "react";
import StoreProvider from "./StoreProvider";
import Logo from "@/components/logo";

const OfferLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <StoreProvider>
      <header className="container flex items-center justify-center py-1">
        <Logo />
      </header>
      <main className="container flex flex-col p-6 flex-grow max-w-lg gap-6">
        {children}
      </main>
    </StoreProvider>
  );
};

export default OfferLayout;
