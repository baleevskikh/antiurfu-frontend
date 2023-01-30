import IIcon from "@/types/IIcon";

export const IconText = ({size = 16, ...restProps}: IIcon) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 16"
        height={size}
        width={size * 0.875}
        {...restProps}
    >
        <path
            d="M0.652344 2.75H8.34766C8.70794 2.75 9 2.45794 9 2.09766V1.90234C9 1.54206 8.70794 1.25 8.34766 1.25H0.652344C0.292062 1.25 0 1.54206 0 1.90234V2.09766C0 2.45794 0.292062 2.75 0.652344 2.75ZM0.652344 10.75H8.34766C8.70794 10.75 9 10.4579 9 10.0977V9.90234C9 9.54206 8.70794 9.25 8.34766 9.25H0.652344C0.292062 9.25 0 9.54206 0 9.90234V10.0977C0 10.4579 0.292062 10.75 0.652344 10.75ZM13.25 5.25H0.75C0.335781 5.25 0 5.58578 0 6C0 6.41422 0.335781 6.75 0.75 6.75H13.25C13.6642 6.75 14 6.41422 14 6C14 5.58578 13.6642 5.25 13.25 5.25ZM13.25 13.25H0.75C0.335781 13.25 0 13.5858 0 14C0 14.4142 0.335781 14.75 0.75 14.75H13.25C13.6642 14.75 14 14.4142 14 14C14 13.5858 13.6642 13.25 13.25 13.25Z"
            fill="currentColor"/>
    </svg>
)