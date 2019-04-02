const actions = {
    SET_THEME: 'SET_THEME'
}

const actionCreators = {
    setTheme: function(theme){
        return {
            type: actions.SET_THEME,
            value: theme
        }
    }
}

export { actions, actionCreators }