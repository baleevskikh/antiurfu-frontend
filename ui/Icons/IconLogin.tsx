import IIcon from "@/types/IIcon";

export const IconLogin = ({size = 16, ...restProps}: IIcon) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            height={size}
            width={size}
            {...restProps}
        >
            <path
                d="M16 4V12C16 13.6569 14.6569 15 13 15H10.75C10.3358 15 10 14.6642 10 14.25C10 13.8357 10.3358 13.5 10.75 13.5H13C13.825 13.5 14.5 12.8249 14.5 12V4C14.5 3.17506 13.825 2.5 13 2.5H10.75C10.3358 2.5 10 2.16419 10 1.75C10 1.33569 10.3358 1 10.75 1H13C14.6569 1 16 2.34312 16 4ZM11.4981 8.56056L6.73438 12.7363C6.54003 12.9092 6.291 13 6.03906 13C5.89256 13 5.74513 12.9697 5.60644 12.9072C5.23828 12.7412 5 12.3769 5 11.9785V10.25H1.25C0.560562 10.25 0 9.68944 0 9V7C0 6.31056 0.560562 5.75 1.25 5.75H5V4.0215C5 3.62306 5.23828 3.25878 5.60644 3.09278C5.98438 2.92381 6.42675 2.99025 6.73438 3.26369L11.4981 7.43944C11.6582 7.58106 11.75 7.78516 11.75 8C11.75 8.21484 11.6582 8.41894 11.4981 8.56056ZM9.87012 8L6.5 5.06153V7.25H1.5V8.75H6.5V10.9385L9.87012 8Z"
                fill="currentColor"
            />
        </svg>
    );
};