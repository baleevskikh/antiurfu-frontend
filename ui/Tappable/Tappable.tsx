import React, {CSSProperties, FC, MutableRefObject, PropsWithChildren, useRef} from 'react';
import Link, {LinkProps} from "next/link";
import styles from "./Tappable.module.scss"
import clsx from "clsx"

interface TappableProps extends Omit<LinkProps, 'href'> {
    className?: string
    Component?: React.ElementType | typeof Link
    href?: LinkProps['href']
    rippleDuration?: number
    rippleColor?: CSSProperties['color']
}

const Tappable: FC<PropsWithChildren<TappableProps>> =
    ({
         className,
         Component = "div",
         rippleDuration = 700,
         rippleColor = "rgba(0, 0, 0, .1)",
         children,
         ...restProps
     }) => {

        const component = useRef() as MutableRefObject<HTMLDivElement>;

        const onMouseDown = (event: MouseEvent) => {
            const target = component.current
            const rippleContainer = target.getElementsByClassName(styles.ripple__container)[0]
            const circle = document.createElement('div')
            const diameter = Math.sqrt(target.clientWidth * target.clientWidth + target.clientHeight * target.clientHeight)
            const radius = diameter / 2
            const coordinates = target.getBoundingClientRect()
            circle.style.width = circle.style.height = diameter + 'px'
            circle.style.left = event.clientX - radius - coordinates.left + 'px'
            circle.style.top = event.clientY - radius - coordinates.top + 'px'
            circle.style.transition = `opacity ${rippleDuration / 2}ms`
            circle.style.webkitAnimationDuration = `${rippleDuration}ms`
            circle.style.animationDuration = `${rippleDuration}ms`
            circle.style.transitionDelay = `${rippleDuration / 4}ms`
            circle.style.backgroundColor = rippleColor
            circle.classList.add(styles.ripple__circle)
            rippleContainer.appendChild(circle)
            window.addEventListener('mouseup', () => {
                circle.classList.add(styles.fade)
                setTimeout(() => {
                    circle.remove()
                }, rippleDuration)
            }, {once: true, passive: true})
        }

        return (
            <Component
                onMouseDown={onMouseDown}
                className={clsx(styles.tappable, className)}
                ref={component}
                {...restProps}
            >
                <div className={styles.content}>{children}</div>
                <div className={styles.ripple__container}></div>
            </Component>
        )
    }

export {type TappableProps}
export default Tappable