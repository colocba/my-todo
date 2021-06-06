import { connect } from "react-redux"
import { getTheme } from "../data/selectors"

const ThemeContainer = ({children, theme}) => {
    return <>{children({theme})}</>
}

const mapStateToProps = (state) => ({
    theme: getTheme(state)
})

export default connect(mapStateToProps)(ThemeContainer)