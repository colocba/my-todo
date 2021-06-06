import React, { Suspense, useEffect, useState } from "react"
import { SIDEBAR_ITEMS } from "../../../common/constants"
import { Sidebar } from "../../../sidebar/components/SideBar/Sidebar"
import { MainLayoutWrapper } from "./MainLayout.styles"

export const MainLayout = () => {
    const [itemSelected, setItemSelected] = useState(SIDEBAR_ITEMS.MY_TODOS);
    console.log("MainLayoutMainLayout")

    const getLazyComponent = (itemSelected) => {
        switch (itemSelected) {
            case SIDEBAR_ITEMS.MY_TODOS:
                return React.lazy(() => import("../../../todos/components/TodosPanel/TodosPanel"));
            case SIDEBAR_ITEMS.MY_STATS:
                return React.lazy(() => import("../../../stats/components/MyStats/MyStats"))
            default:
                return React.lazy(() => import("../../../todos/components/TodosPanel/TodosPanel"));
        }
    }

    const [ComponentSelected, setComponentSelected] = useState(getLazyComponent(SIDEBAR_ITEMS.MY_TODOS));
    useEffect(() => {
        setComponentSelected(getLazyComponent(itemSelected))
    }, [itemSelected])

    return <MainLayoutWrapper>
            <Sidebar setItemSelected={setItemSelected}/>
            <Suspense fallback={<div>Loading...</div>}>
                <ComponentSelected/>
            </Suspense>;
        </MainLayoutWrapper>
}