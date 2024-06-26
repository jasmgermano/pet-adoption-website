import { Footer } from "@/components/Footer";
import { AdmMenu } from "@/components/AdmMenu";
import { AdmHeader } from "@/components/AdmHeader";
import AdmList from "@/components/AdmList";

export default async function Admin() {
  return (
    <div>
      <AdmMenu />
      <AdmHeader />
      <AdmList />
      <Footer />
    </div>
  );
}
