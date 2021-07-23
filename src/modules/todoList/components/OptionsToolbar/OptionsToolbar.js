import {ToolbarOption, ToolbarWrapper} from "./OptionToolbar.styles";
import {faTimesCircle, faTh, faThList, faPlusCircle} from "@fortawesome/free-solid-svg-icons";
import {Icon} from "../../../common/components/Icon/Icon";
import ReactTooltip from "react-tooltip";
import Swal from 'sweetalert2';

const getOptions = (isColumnView, removeTodoList, toggleColumnView, addItem) => [
    {id: 'removeIcon', icon: faTimesCircle, color: 'black', size: '25px', tooltip: 'Remove list', action: removeTodoList},
    {id: 'viewType', icon: isColumnView ? faTh : faThList, color: 'black', size: '25px', tooltip: 'Toggle between grid and list types', action: toggleColumnView},
    {id: 'addIcon', icon: faPlusCircle, color: 'black', size: '25px', tooltip: 'Add item', action: () => handleAddItem(addItem)}
];

const handleAddItem = async (addItem) => {
    const { value: text } = await Swal.fire({
        title: 'Enter the text for your new todo item',
        input: 'text',
        inputValue: null,
        showCancelButton: true,
        inputValidator: (value) => {
            if (!value) {
                return 'You need to write something!'
            }
        }
    });
    addItem(text);
};

export const OptionsToolbar = ({toggleColumnView, isColumnView, removeTodoList, addItem}) => {
    const options = getOptions(isColumnView, removeTodoList, toggleColumnView, addItem);
    return (
        <div style={{position: 'absolute', bottom: '100px', right: '60px'}}>
            <ToolbarWrapper>
                {options.map(option => {
                    return <>
                        <ToolbarOption data-tip data-for={option.id} onClick={() => option.action()}>
                            <Icon size={option.size} icon={option.icon} color={option.color}/>
                        </ToolbarOption>
                        <ReactTooltip id={option.id} place="left" type="dark" effect="solid">
                            <span>{option.tooltip}</span>
                        </ReactTooltip>
                    </>
                })}
            </ToolbarWrapper>
        </div>
    )
};
