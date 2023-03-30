import className  from "classname";




function Button({ 
    children, 
    secondary,
    primary,
    success,
    warning,
    danger,
    outline,
    rounded,
    ...rest
}) {
    
    const classes = className(rest.className, 'flex item-center px-3 py-1.5 border', {
        'border-blue-500 bg-blue-500 text-white': primary,
        'border-red-500 bg-red-500 text-red': danger,
        'border-green-500 bg-green-500 text-green': success,
        'border-orange-500 bg-orange-500 text-orange': warning,
        'border-yellow-500 bg-white-500 text-black': secondary,
        'rounded-full': rounded,
        'bg-white': outline,
        'text-blue-500': outline && primary,
        'text-red-500': outline && danger,
        'text-green-500': outline && success,
        'text-yellow-500': outline && primary,
        'text-gray-500': outline && secondary,
        'text-orange-500': outline && warning
    });
    return <div>
        <div>
        <button {...rest} className={classes}>{ children }</button>
        </div>    
    </div>
}

Button.propTypes = {
    checkVariationValue: ({ secondary, primary, success, warning, danger, outline, rounded} ) => {
        const count = 
        Number(!! primary) + 
        Number(!! secondary) + 
        Number(!! success) + 
        Number(!! warning) + 
        Number(!! danger) + 
        Number(!! outline) + 
        Number(!! rounded);

        if(count > 1) {
            return new Error('Only one of the primary, secondary, success, warning, danger can be true');
        };
    }
}

export default Button;
