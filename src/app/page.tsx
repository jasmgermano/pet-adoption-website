import { Header } from '@/components/Header'
import { Menu } from '@/components/Menu'
import { WhoWeAre } from '@/components/WhoWeAre'
import { Goals } from '@/components/Goals'
import { Info } from '@/components/Info'
import { Visit } from '@/components/Visit'
import { SocialMedia } from '@/components/SocialMedia'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'
import { ScrollToTop } from '@/components/ScrollToTop'

export default function Home() {
  return (
    <div>
      <ScrollToTop />
      <Menu />
      <Header />
      <WhoWeAre />
      <Goals />
      <Info />
      <Visit />
      <SocialMedia />
      <Contact />
      <Footer />
    </div>
  )
}
