import { ArrowUp } from 'lucide-react'
import { portfolio } from '../data/portfolio'

export default function Footer() {
  return <footer><a className="wordmark" href="#top"><span>JM</span>{portfolio.brandName}</a><p>Full Stack Developer · Built with care.</p><p>© {new Date().getFullYear()} {portfolio.name}</p><a className="icon-button" href="#top" aria-label="Back to top"><ArrowUp size={18} /></a></footer>
}
