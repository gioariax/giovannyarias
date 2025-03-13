import {
    animate,
    motion,
    useMotionValue,
    useTransform,
} from "motion/react"
import { useEffect, useState } from "react"
import LensStyled from "./LensStyled"
import { useaAppStore } from "../../store/appStore"
import { PROFILES } from "../../constants/constants"

export default function Lens() {
    const [leftColorIndex, setLeftColorIndex] = useState(0)
    const progressLeftLens = useMotionValue(leftColorIndex)
    const fillLeftLens = useTransform(progressLeftLens, [0, 1], lensLeftColors)

    const [rightColorIndex, setRightColorIndex] = useState(0)
    const progressRightLens = useMotionValue(rightColorIndex)
    const fillRightLens = useTransform(progressRightLens, [0, 1], rightLensColors)

    const { profile } = useaAppStore()

    useEffect(() => {
      if(profile) {
        const leftColor = profile === "developer" ? 1 : 0
        setLeftColorIndex(leftColor)

        const rightColor = profile === "photographer" ? 1 : 0
        setRightColorIndex(rightColor)
  
        animate(progressLeftLens, leftColor, {
          duration: 0.5,
          ease: "easeInOut",
        })
  
        animate(progressRightLens, rightColor, {
          duration: 0.5,
          ease: "easeInOut",
        })
      }

    }, [profile, progressLeftLens, progressRightLens])

    return (
      <LensStyled>
        <div className="line line-align-left">
          <motion.div 
            className="line-left" 
            animate={{
              opacity: profile === PROFILES.DEVELOPER ? 1 : 0,
              backgroundColor: profile === PROFILES.DEVELOPER ? '#1DB533': '#242424',
              width: profile === PROFILES.DEVELOPER ? '60px' : '0px'
            }}
            transition={{ duration: 0.5, ease: "easeInOut"}}
            initial={{ opacity: 0, width: '0px' }}>
          </motion.div >
        </div>
        <div className="lens">
          <svg width="68" height="72">
            <motion.path fill={fillLeftLens} d={lensLeft} />
          </svg>
          <svg width="68" height="72">
            <motion.path fill={fillRightLens} d={rightLens} />
          </svg>
        </div>
        <div className="line">
          <motion.div 
            className="line-right"
            animate={{
              opacity: profile === PROFILES.PHOTOGRAPHER ? 1 : 0,
              backgroundColor: profile === PROFILES.PHOTOGRAPHER ? '#FF003B': '#242424',
              width: profile === PROFILES.PHOTOGRAPHER ? '60px' : '0px'
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            initial={{ opacity: 0, width: '0px'  }}>
          </motion.div >
        </div>
      </LensStyled>
    )
}

const lensLeft = "M68 48.094v-.013a16.646 16.646 0 0 0-16.652-16.616H18.55c.947-8.855 4.505-16.907 9.859-23.43a4.92 4.92 0 0 0-.681-6.92 4.92 4.92 0 0 0-6.92.682C14.059 10.021 9.649 20.237 8.67 31.465H4.917A4.92 4.92 0 0 0 0 36.382a4.92 4.92 0 0 0 4.917 4.916h3.892C11.218 58.689 25.987 71.95 44.084 72 57.108 72.036 68.038 61.218 68 48.094m-49.223-6.796h32.575a6.81 6.81 0 0 1 6.815 6.804v.013c.027 7.715-6.4 14.073-14.056 14.052-12.632-.036-23.025-8.951-25.334-20.869"
const rightLens = "M0 48.094v-.013a16.646 16.646 0 0 1 16.652-16.616H49.45c-.947-8.855-4.505-16.907-9.859-23.43a4.92 4.92 0 0 1 .681-6.92 4.92 4.92 0 0 1 6.92.682c6.749 8.224 11.159 18.44 12.138 29.668h3.753A4.92 4.92 0 0 1 68 36.382a4.92 4.92 0 0 1-4.917 4.916h-3.892C56.782 58.689 42.013 71.95 23.916 72 10.892 72.036-.038 61.218 0 48.094m49.223-6.796H16.648a6.81 6.81 0 0 0-6.815 6.804v.013c-.027 7.715 6.4 14.073 14.056 14.052 12.632-.036 23.025-8.951 25.334-20.869"

const lensLeftColors = [
  "#fff",
  "#1DB533",
]
const rightLensColors = [
  "#fff",
  "#FF003B",
]