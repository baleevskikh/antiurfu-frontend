import IIcon from '@/types/IIcon'

export const IconBookmark = ({ size = 16, ...restProps }: IIcon) => (
    <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 12 16'
        height={size}
        width={size * 0.75}
        {...restProps}
    >
        <g clipPath='url(#clip0_734_228)'>
            <path
                d='M10.5 0H1.5C0.671562 0 0 0.671625 0 1.5V14.9973C0 15.769 0.837219 16.2499 1.50384 15.8611L6 13.2383L10.4962 15.8611C11.1628 16.2499 12 15.769 12 14.9973V1.5C12 0.671625 11.3284 0 10.5 0ZM10.5 14.125L6 11.5L1.5 14.125V1.6875C1.5 1.58203 1.58203 1.5 1.68747 1.5H10.3125C10.418 1.5 10.5 1.58203 10.5 1.6875V14.125Z'
                fill='currentColor' />
        </g>
    </svg>
)
