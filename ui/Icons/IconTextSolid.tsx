import IIcon from "@/types/IIcon";

export const IconTextSolid = ({size = 16, ...restProps}: IIcon) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 16"
        height={size}
        width={size * 0.875}
        {...restProps}
    >
        <path
            d="M13 13H1C0.447688 13 0 13.4477 0 14C0 14.5523 0.447688 15 1 15H13C13.5523 15 14 14.5523 14 14C14 13.4477 13.5523 13 13 13ZM1 7H13C13.5523 7 14 6.55231 14 6C14 5.44769 13.5523 5 13 5H1C0.447688 5 0 5.44769 0 6C0 6.55231 0.447688 7 1 7ZM1 3H8C8.55231 3 9 2.55231 9 2C9 1.44769 8.55231 1 8 1H1C0.447688 1 0 1.44769 0 2C0 2.55231 0.447688 3 1 3ZM1 11H8C8.55231 11 9 10.5523 9 10C9 9.44769 8.55231 9 8 9H1C0.447688 9 0 9.44769 0 10C0 10.5523 0.447688 11 1 11Z"
            fill="currentColor"/>
    </svg>
)