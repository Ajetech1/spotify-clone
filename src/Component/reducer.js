export const initialState = {
  user: null,
  playlist: [],
  playing: false,
  item: null,
  //   Should be remove after finished developing
  // token:
  //   "BQC8y6m9VXxaON3D5gXTYwvaosc3MBQ7KIZ_UllfflCgqw_5Ym2capwgFB839q63UFjxMYdX5Iv6WnNXNvqPHl9Y5FM2sa2EFULc7HuoqOYJPgWmHsyK_nMIGveJB5HopC5nJespktDz546PipGdl8E5CIeQ3uSlvpGrCoDmD0Ma46FpgTII6SAeB109Jc-A7eBnM36IBs2kZzadVaCS",
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };

    default:
      return state;
  }
};

export default reducer;
