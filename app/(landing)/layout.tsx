import { Footer } from "./_components/footer";
import { NavBar } from "./_components/navbar";

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full bg-stale-100">
      <NavBar />
      <main className="pt-40  pb-40 bg-slate-100">{children}</main>
      <Footer />
    </div>
  );
};

export default LandingLayout;
