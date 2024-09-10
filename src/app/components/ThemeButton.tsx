import { useTheme } from "next-themes"
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid"

const ThemeButton = () => {
    const {resolvedTheme, setTheme} = useTheme()
  return (
    <button 
    aria-label="Toggle"
    type="button"
    className="flex items-center justify-center rounded-lg p-2"
    onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
    >
        {resolvedTheme === 'dark' ? (
            <SunIcon className="h-10 w-10 text-white"/>
        ) : (
            <MoonIcon className="h-10 w-10 text-dark-purple"/>
        )

        }
    </button>
  )
}

export default ThemeButton
