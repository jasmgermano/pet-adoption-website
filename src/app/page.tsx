import { Header } from '@/components/Header'
import { Menu } from '@/components/Menu'
import { WhoWeAre } from '@/components/WhoWeAre'
import { Goals } from '@/components/Goals'
import { Info } from '@/components/Info'

export default function Home() {
  return (
    <div>
      <Menu />
      <Header />
      <WhoWeAre />
      <Goals />
      <Info />
    </div>
  )
}
