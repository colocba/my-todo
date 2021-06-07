import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {IconWrapper} from "./Icon.styles";

export const Icon = ({icon, color, size}) => {
    return <IconWrapper color={color} size={size}>
                <FontAwesomeIcon icon={icon}/>
            </IconWrapper>
};
