import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ItemTitle, ItemWrapper } from "./Item.styles"

export const Item = (props) => {
    const {title, icon, id, setItemSelected} = props;
    const handleOnClick = () => {
        setItemSelected(id)
    }
    return <ItemWrapper onClick={handleOnClick}>
            <FontAwesomeIcon icon={icon} size={"lg"}/>
            <ItemTitle>{title}</ItemTitle>
        </ItemWrapper>
}