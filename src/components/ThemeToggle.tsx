import { Moon, Sun } from 'lucide-react'
export default function ThemeToggle({ theme, onToggle }: { theme: 'light' | 'dark'; onToggle: () => void }) {
  return <button className="icon-button theme-toggle" type="button" onClick={onToggle} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}><Sun className="sun-icon" size={19} /><Moon className="moon-icon" size={19} /></button>
}
