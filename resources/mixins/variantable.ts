import { PropType } from "vue";

const variantable = {

    props: {
        variant: {
            type: String as PropType<
                "default" | "primary" | "danger" | "success" | "warning">,
            default: "primary",
        },
    },
    data() {
        return {
            bgColors: {
                default: "bg-gray-400 dark:bg-gray-700",
                primary: "bg-primary-700 dark:bg-primary-500",
                info: "bg-blue-300",

                danger: "bg-red-500",
                success: "bg-green-500",
                warning: "bg-yellow-500",
            },
            borderColors: {
                default: "border-gray-400",
                primary: "border-primary-700 dark:border-primary-500",
                info: "border-blue-700",
                danger: "border-red-500",
                success: "border-green-500",
                warning: "border-yellow-500",
            },
            bgColorsHover: {
                default: "hover:bg-gray-500 dark:hover:bg-gray-800",
                primary: "hover:bg-primary-800",
                info: "hover:bg-blue-800",
                danger: "hover:bg-red-600",
                success: "hover:bg-green-600",
                warning: "hover:bg-yellow-600",
            },
            colorsHover: {
                default: "hover:text-gray-500",
                primary: "hover:text-primary-800",
                info: "hover:text-blue-800",
                danger: "hover:text-red-600",
                success: "hover:text-green-600",
                warning: "hover:text-yellow-600",
            },
            borderColorsHover: {
                default: "hover:border-gray-500",
                primary: "hover:border-primary-800",
                info: "hover:border-blue-800",
                danger: "hover:border-red-600",
                success: "hover:border-green-600",
                warning: "hover:border-yellow-600",
            },
            bgSmoothColors: {
                default: "bg-gray-200 dark:bg-gray-600",
                primary: "bg-primary-200 dark:bg-primary-400",
                danger: "bg-red-200 dark:bg-red-300",
                success: "bg-green-200 dark:bg-green-300",
                warning: "bg-yellow-200 dark:bg-yellow-300",
            },
            bgSmoothColorsHover: {
                default: "hover:bg-gray-300 dark:hover:bg-gray-500",
                primary: "hover:bg-primary-300",
                info: "hover:bg-blue-300",
                danger: "hover:bg-red-300",
                success: "hover:bg-green-300",
                warning: "hover:bg-yellow-300",
            },
            smoothColors: {
                default: "text-gray-600",
                primary: "text-primary-700 dark:text-primary-400",
                info: "text-blue-800",
                danger: "text-red-600",
                success: "text-green-600",
                warning: "text-yellow-600",
            },
            colors: {
                default: "text-gray-600",
                primary: "text-primary-700 dark:text-primary-400",
                info: "text-blue-800",
                danger: "text-red-600",
                success: "text-green-600",
                warning: "text-yellow-600",
            },
            padding: {
                "xs": "px-1 py-0",
                "sm": "px-4 py-1",
                "md": "px-6 py-2",
                "lg": "px-8 py-4",

            }
        }
    },
}


export default variantable;
