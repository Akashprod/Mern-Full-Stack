
export function Button(props){
    const {buttonText,backGroundColor,textColor,click} = props;
    return (
        <button style = {{
            backgroundColor : backGroundColor,
            color : textColor
        }}
        onClick = {click}
        className="Button">{buttonText}</button>

    );
}