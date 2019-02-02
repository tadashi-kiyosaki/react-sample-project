export const SwitchTypes = (theme) => ({
  _base: {
    container: {
      width: 52,
      height: 32,
      // height: 28,
      overflow: 'hidden',
      justifyContent: 'center',
      borderRadius: 16,
      borderWidth: 1,
      // borderColor: theme.colors.border.secondary,
      borderColor: "rgb(0,168,243)",
      // onColor: theme.colors.primary,
      onColor: "rgb(0,168,243)",
      offColor: {
        // android: theme.colors.screen.base,
        android: "white",
        ios: theme.colors.border.base,
      },
    },
    thumb: {
      position: 'absolute',
      height: 32,
      width: 32,
      borderWidth: 1,
      // borderColor: theme.colors.border.secondary,
      borderColor: "rgb(0,168,243)",
      // backgroundColor: theme.colors.screen.base,
      backgroundColor: "white",
      borderRadius: 16,
    },
  },
  selected: {
    thumb: {
      borderColor: "rgb(0,168,243)"
      // borderColor: theme.colors.primary,
    },
    container: {
      borderColor: "rgb(0,168,243)"
      // borderColor: theme.colors.primary,
    },
  },
});
