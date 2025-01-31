import "animate.css";
import "./globals.css";


import { UserProvider } from "@/context/UserContext"; // Import your context provider
import { ListingCreationProvider } from "@/context/ListingCreationContext";
import { Provider } from "@/components/chakra-snippets/provider";
import ClientProvider from "@/components/chakra-snippets/ClientProvider";

export const metadata = {
  title: "Crib",
  description: "Crib",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      data-theme="light"
      
      style={{ scrollBehavior: "smooth" }}
      suppressHydrationWarning
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&family=Raleway:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
        <link
          href="https://unpkg.com/aos@2.3.1/dist/aos.css"
          rel="stylesheet"
        />
      </head>
      <body
        className={`font-Montserrat antialiased`}
        style={{ background: "#fff" }}
      >
        {/* Wrap with UserProvider */}{" "}

        <UserProvider>
          <ListingCreationProvider>
   
              <ClientProvider>{children}</ClientProvider>

          </ListingCreationProvider>
        </UserProvider>

      </body>
    </html>
  );
}
