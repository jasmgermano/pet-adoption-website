import { Footer } from "@/components/Footer";
import { AdmMenu } from "@/components/AdmMenu";
import { AdmHeader } from "@/components/AdmHeader";
import AdmForm from "@/components/AdmForm";

export default function Action() {
  return (
    <div>
      <AdmMenu />
      <AdmHeader />
      <AdmForm />
      <Footer />
    </div>
  );
}
