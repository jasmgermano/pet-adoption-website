import { Header } from '@/components/Header'
import { Menu } from '@/components/Menu'
import { WhoWeAre } from '@/components/WhoWeAre'
import { Goals } from '@/components/Goals'

export default function Home() {
  return (
    <div>
      <Menu />
      <Header />
      <WhoWeAre />
      <Goals />
    </div>
  )
}
