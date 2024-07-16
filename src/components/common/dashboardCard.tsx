interface dashboardCardType {
    text: String,
    children: React.ReactNode,
    img: any,
    buttonText?: String,
    buttonIcon?: any,
    buttonClick?: () => void

}
export const DashboardCard: React.FC<dashboardCardType> = ({ text, children, img, buttonText, buttonIcon, buttonClick }) => {
    return (
        <div className="border border-borderColor rounded-xl p-6 w-full h-100">
            <div className="flex justify-between items-center">
            <h3 className="flex items-center gap-3 mb-4 text-textColor text-base font-semibold">
                <img src={img} className="inline-block" alt="speed icon" />{" "}
                {text}
            </h3>
            {buttonIcon && (
                <button onClick={buttonClick} className="bg-primary rounded-[10px] text-white font-light text-xs text-left p-3 flex items-center">
                    {buttonText}
                    <img
                        src={buttonIcon}
                        className="inline-block ml-2 w-4"
                        alt="arrow icon"
                    />
                </button>
            )}
            </div>
            <hr className="border-[#D9E1E1CC] mb-6" />
            {children}
        </div>
    )
}