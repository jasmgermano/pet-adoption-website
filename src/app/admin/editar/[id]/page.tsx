import { Footer } from "@/components/Footer";
import { AdmMenu } from "@/components/AdmMenu";
import { AdmHeader } from "@/components/AdmHeader";
import AdmFormEdit from "@/components/AdmFormEdit";

export default function Action() {
  return (
    <div>
      <AdmMenu />
      <AdmHeader />
      <AdmFormEdit />
      <Footer />
    </div>
  );
}
