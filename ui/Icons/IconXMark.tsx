import IIcon from "@/types/IIcon";

export const IconXMark = ({size = 16, ...restProps}: IIcon) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        height={size}
        width={size}
        {...restProps}
    >
        <rect x="1.41418" width="20" height="2" rx="1" transform="rotate(45 1.41418 0)"
              fill="currentColor"/>
        <rect y="14.1422" width="20" height="2" rx="1" transform="rotate(-45 0 14.1422)"
              fill="currentColor"/>
    </svg>
)