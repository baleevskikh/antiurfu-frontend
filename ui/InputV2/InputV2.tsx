import React, { FC, InputHTMLAttributes } from 'react'
import styles from './Input.module.scss'
import clsx from 'clsx'

interface InputV2Props extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  className?: string
  mode?: 'default' | 'primary' | 'border'
  size?: 'sm' | 'md' | 'lg'
  stretched?: boolean
  hasBorder?: boolean
  label?: boolean
}

const InputV2: FC<InputV2Props> = (
  {
    className,
    mode = 'default',
    size = 'md',
    stretched,
    hasBorder = false,
    placeholder,
    label = true,
    ...restProps
  }
) => {

  const onChange = () => {
      {}
  }
  return (
    <div className={clsx(
      styles.Input,
      styles[`Input--${mode}`],
      styles[size]
    )}>
      <input
        onChange={onChange}
        className={styles.Input__input}
        placeholder={label ? '' : placeholder}
        {...restProps}
      />
      {label && <label htmlFor={restProps.name} className={styles.Input__label}>
        {placeholder}
      </label>}
    </div>
  )
}

export { type InputV2Props }
export default InputV2
