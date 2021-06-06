import { useState, useEffect } from "react";
import { Provider } from "react-redux";
import { getStore } from "../../../store/store";
import { getInitialData } from "../../common/services/apiService";
import ThemeContainer from "./ThemeContainer";
import {ThemeProvider} from 'styled-components';

export const AppContainer = ({children}) => {
    const [isLoading, setIsLoading] = useState(true);
    const [store, setStore] = useState({});

    const fetchInitialData = async () => {
        const data = await getInitialData();
        const store = getStore(data);
        setStore(store);
        setIsLoading(false);
    }

    useEffect(() => {
        fetchInitialData();
    }, [])

    return (
        isLoading ? <>{children({isLoading})}</> 
        : 
        <Provider store={store}>
            <ThemeContainer>
                {({theme}) => {
                    return <ThemeProvider theme={theme}>
                        {children({isLoading, theme})}
                    </ThemeProvider>
                }}
            </ThemeContainer>
        </Provider>
    )
}