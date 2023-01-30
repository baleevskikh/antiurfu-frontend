import IIcon from "@/types/IIcon";

export const IconHomeSolid = ({size = 16, ...restProps}: IIcon) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 18 16"
        height={size}
        width={size * 1.125}
        {...restProps}
    >
        <g clipPath="url(#clip0_734_226)">
            <path
                d="M18 8C18 8.55006 17.5543 9 17 9H15.9998V15C15.9998 15.5523 15.5521 16 14.9998 16H12.0001C11.4478 16 11.0001 15.5523 11.0001 15V11.4998C11.0001 11.2237 10.7763 10.9998 10.5002 10.9998H7.50037C7.22425 10.9998 7.00037 11.2237 7.00037 11.4998V15C7.00037 15.5523 6.55269 16 6.00037 16H3.00072C2.44844 16 2.00072 15.5523 2.00072 15V9H1C0.444438 9 3.125e-05 8.54866 0 8C0 7.71712 0.120063 7.44075 0.341312 7.24706L8.34131 0.247562C8.55891 0.057 8.80803 0 9 0C9.23509 0 9.47022 0.0825312 9.65869 0.247562L17.6587 7.24706C17.8799 7.44075 18 7.71712 18 8Z"
                fill="currentColor"/>
        </g>

    </svg>
)