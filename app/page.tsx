import './nqx-landing.css'
import { NqxFoot } from '@/components/nqx-foot'
import { NqxMast } from '@/components/nqx-mast'
import { NqxStory } from '@/components/nqx-story'

export default function Page() {
  return (
    <div className="nqx-root font-sans" id="nqx-top">
      <a className="nqx-skip" href="#nqx-story">
        К тексту
      </a>
      <NqxMast />
      <NqxStory />
      <NqxFoot />
    </div>
  )
}
