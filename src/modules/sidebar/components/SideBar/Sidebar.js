import { Item } from "../Item/Item"
import { SidebarWrapper } from "./Sidebar.styles"
import { faListAlt } from '@fortawesome/free-solid-svg-icons';
import { faChartPie } from '@fortawesome/free-solid-svg-icons';
import { SIDEBAR_ITEMS } from "../../../common/constants";

const items = [
    {title: "My todos", icon: faListAlt, id: SIDEBAR_ITEMS.MY_TODOS}, 
    {title: "My stats", icon: faChartPie, id: SIDEBAR_ITEMS.MY_STATS}
];

export const Sidebar = ({setItemSelected}) => {
    return <SidebarWrapper>
        {items.map((item, index) => {
            return <Item key={index} 
                        icon={item.icon} 
                        title={item.title} 
                        id={item.id}
                        setItemSelected={setItemSelected}/>
        })}
    </SidebarWrapper>
}