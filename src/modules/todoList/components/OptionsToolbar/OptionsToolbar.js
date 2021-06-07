import {ToolbarOption, ToolbarWrapper} from "./OptionToolbar.styles";
import {faTimesCircle, faTh, faThList, faPlusCircle} from "@fortawesome/free-solid-svg-icons";
import {Icon} from "../../../common/components/Icon/Icon";
import ReactTooltip from "react-tooltip";

export const OptionsToolbar = ({toggleColumnView, isColumnView, removeTodoList}) => {
    return (
        <div style={{position: 'absolute', bottom: '130px', right: '80px'}}>
            <ToolbarWrapper>
                <ToolbarOption data-tip data-for={'removeIcon'} onClick={removeTodoList}>
                    <Icon size={'25px'} icon={faTimesCircle} color={'black'}/>
                </ToolbarOption>
                <ReactTooltip id={'removeIcon'} place="left" type="dark" effect="solid">
                    <span>Remove list</span>
                </ReactTooltip>
                <ToolbarOption onClick={() => toggleColumnView()} data-tip data-for={'viewType'}>
                    <Icon size={'25px'} icon={isColumnView ? faTh : faThList} color={'black'}/>
                </ToolbarOption>
                <ReactTooltip id={'viewType'} place="left" type="dark" effect="solid">
                    <span>Toggle between grid and list types</span>
                </ReactTooltip>
                <ToolbarOption data-tip data-for={'addIcon'}>
                    <Icon size={'25px'} icon={faPlusCircle} color={'black'}/>
                </ToolbarOption>
                <ReactTooltip id={'addIcon'} place="left" type="dark" effect="solid">
                    <span>Add item</span>
                </ReactTooltip>
            </ToolbarWrapper>
        </div>
    )
};
