
const Button = ({ children, px, className, onClick, href }) => {
    const classes = `${className || ""} button relative inline-flex 
    items-center justify-center transition-colors
    hover:text-color-2 ${px || "px-7"} ${className || ""} 
    box-border py-5 mt-2 mb-3 mr-5 ml-10 
    text-center rounded-2xl cursor-pointer transition duration-500 ease transform hover:-translate-y-1`;

    const linkClasses = `button relative inline-flex 
    items-center justify-center transition-colors
    hover:text-color-3 ${px || "px-7"} ${className || ""} 
     py-4 pr-6 pl-7 mt-2.5 mr-5 mb-auto ml-7 
    text-center cursor-pointer 
    text-color-4`;

    const spanClasses = "relative z-10";
    const renderButton = () => (
        <button className={classes} onClick={onClick}>
            <span className={spanClasses}>{children}</span>
        </button>
    )
    const renderLink = () => (
        <a href={href} className={linkClasses}>
            <span className={spanClasses}>{children}</span>
        </a>
    )

    return href
    ? renderLink()
    : renderButton();
    

}

export default Button