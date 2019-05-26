export const getResume = state => state.resume;
export const getBasicInformation = state => getResume(state).basicInformation;

export const getFullName = state => getBasicInformation(state).fullName;
export const getPhone = state => getBasicInformation(state).phone;
export const getEmail = state => getBasicInformation(state).email;
