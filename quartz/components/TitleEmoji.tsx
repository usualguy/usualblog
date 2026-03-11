import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import script from "./scripts/title-emoji.inline"

const TitleEmoji: QuartzComponent = () => {
  return null
}

TitleEmoji.afterDOMLoaded = script

export default (() => TitleEmoji) satisfies QuartzComponentConstructor
