const follow = 'FOLLOW';
const unfollow = 'UNFOLLOW';
const setUsers = 'SET-USERS';
const setCurrentPage = 'SET-CURRENT-PAGE';
const setTotalUsersCount = 'SET-TOTAL-USERS-COUNT'

let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case follow:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            };

        case unfollow:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            };
        case setUsers:
            return { ...state, users: action.users};
        case setCurrentPage:
            return { ...state, currentPage: action.currentPage};
        case setTotalUsersCount:
            return { ...state, totalUsersCount: action.totalCount};
        default:
            return state;
    }
};

export default usersReducer;

export const followAC = (userId) => ({type: follow, userId});

export const unfollowAC = (userId) => ({type: unfollow, userId});

export const setUsersAC = (users) => ({type: setUsers, users});

export const setCurrentPageAC = (currentPage) => ({type: setCurrentPage, currentPage });

export const setTotalUsersCountAC = (totalCount) => ({type: setTotalUsersCount, totalCount });

