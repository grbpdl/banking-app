import Sidebar from "@/components/Sidebar";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    const loggedIn={$id: "stroms",
      email: "stroms",
      userId: "stroms",
      dwollaCustomerUrl: "stroms",
      dwollaCustomerId: "stroms",
      firstName: "stroms",
      lastName: "stroms",
      address1: "stroms",
      city: "stroms",
      state: "stroms",
      postalCode: "stroms",
      dateOfBirth: "stroms",
      ssn: "stroms",};
    return (
      <main className="flex h-screen w-full font-inter">
        <Sidebar user={loggedIn}/>
        {children}
      </main>
    );
  }
  