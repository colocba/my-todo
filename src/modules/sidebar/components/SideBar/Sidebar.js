import { Item } from "../Item/Item"
import {SidebarLogo, SidebarWrapper} from "./Sidebar.styles"
import { faListAlt } from '@fortawesome/free-solid-svg-icons';
import { faChartPie } from '@fortawesome/free-solid-svg-icons';
import { SIDEBAR_ITEMS } from "../../../common/constants";
import Logo from '../../../../assets/todo-icon.png';

const items = [
    {title: "My todosPanel", icon: faListAlt, id: SIDEBAR_ITEMS.MY_TODOS},
    {title: "My stats", icon: faChartPie, id: SIDEBAR_ITEMS.MY_STATS}
];

export const Sidebar = ({setItemSelected}) => {
    return <SidebarWrapper>
                <SidebarLogo src={Logo}/>
                {items.map((item, index) => {
                    return <Item key={index}
                                icon={item.icon}
                                title={item.title}
                                id={item.id}
                                setItemSelected={setItemSelected}/>
                })}
            </SidebarWrapper>
}
