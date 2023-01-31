import React from 'react'
import styles from './Avatar.module.scss'
import clsx from 'clsx'

interface AvatarProps {
  username: string
  src?: string
  size?: 'xs' | 'sm' | 'md' | 'lg'
  active?: boolean
  className?: string
}

const Avatar = ({ username, src = undefined, size = 'md', active = false, className }: AvatarProps) => {
  return (
    <div className={clsx(styles.avatar__wrapper, active && styles.active, className)}>
      {src && <img src={src} alt={username} className={clsx(styles.avatar__image, styles.avatar, styles[size])} />}
      {!src && <div className={clsx(styles.avatar__text, styles.avatar, styles[size])}>
        <span>{username[0].toUpperCase()}</span>
      </div>}
    </div>
  )
}

export { type AvatarProps }
export default Avatar