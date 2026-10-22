import Footer from "@/components/public/layout/Footer";
import Header from "@/components/public/layout/Header";

export default function layout({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
