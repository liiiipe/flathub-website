import { motion } from "framer-motion"
import {
  forwardRef,
  FunctionComponent,
  DetailedHTMLProps,
  ButtonHTMLAttributes,
} from "react"
import { classNames } from "src/styling"

type Props = {
  children: React.ReactNode
  variant?: "primary" | "secondary" | "destructive"
} & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

const Button: FunctionComponent<Props> = forwardRef<HTMLButtonElement, Props>(
  ({ children, variant = "primary", className, ...buttonProps }, ref) => {
    const variantClass = {
      destructive:
        "bg-flathub-white dark:bg-flathub-arsenic text-flathub-electric-red border border-flathub-electric-red disabled:borden-none disabled:text-gray-100 enabled:hover:bg-flathub-electric-red enabled:hover:text-gray-100",
      secondary:
        "bg-flathub-gainsborow dark:bg-flathub-granite-gray text-flathub-dark-gunmetal  dark:text-flathub-gainsborow disabled:border-none disabled:text-gray-100 disabled:bg-gray-500 enabled:hover:opacity-60",
      primary:
        "bg-flathub-celestial-blue dark:bg-flathub-celestial-blue text-gray-100 disabled:bg-gray-400 enabled:hover:opacity-75",
    }[variant]

    return (
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={classNames(
          className ?? "",
          variantClass,
          "no-wrap h-11 overflow-hidden text-ellipsis whitespace-nowrap rounded-lg px-5 py-2 text-center font-bold duration-500 enabled:hover:cursor-pointer disabled:cursor-default",
        )}
        type={buttonProps.type}
        // @ts-ignore
        ref={ref}
        {...buttonProps}
      >
        {children}
      </motion.button>
    )
  },
)

Button.displayName = "Button"

export default Button
