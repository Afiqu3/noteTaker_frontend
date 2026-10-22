import Header from "@/components/public/layout/Header";

export default function layout({ children }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}
