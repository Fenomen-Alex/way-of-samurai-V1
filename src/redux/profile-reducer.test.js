import profileReducer, {addPostActionCreator} from "./profile-reducer";

let state = {
    posts: [
        {id:1, message:"Hi, my name's Alex", likes: "10"},
        {id:2, message:"It's my first post", likes: "15"},
        {id:3, message:"IT-Kamasutra is the best", likes: "100500"}
    ]
};

test('New post should be added', () => {
    // 1. Test data

    let action = addPostActionCreator('test')
    // 2. Action
    let newState = profileReducer(state, action)
    // 3. Expected result
    expect(newState.posts.length).toBe(4)
})
test('New post message should be "test"', () => {
    // 1. Test data
    let action = addPostActionCreator('test')
    // 2. Action
    let newState = profileReducer(state, action)
    // 3. Expected result
    expect(newState.posts[3].message).toBe('test')
})
