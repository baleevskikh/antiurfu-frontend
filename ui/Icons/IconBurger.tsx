import IIcon from "@/types/IIcon";

export const IconBurger = ({size = 16, ...restProps}: IIcon) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 14"
        height={size}
        {...restProps}
    >
        <rect width="20" height="2" rx="1" fill="currentColor"/>
        <rect y="6" width="20" height="2" rx="1" fill="currentColor"/>
        <rect y="12" width="20" height="2" rx="1" fill="currentColor"/>
    </svg>
)