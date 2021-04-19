let state = {
    profilePage: {
        posts: [
            {id: '1', post: 'Hello', likesCount: '5'},
            {id: '2', post: 'How are you?', likesCount: '72'},
        ],
    },
    dialogsPage:{
        dialogs: [
            {id: '1', name: 'Sasha'},
            {id: '2', name: 'Misha'},
            {id: '3', name: 'Vasya'},
            {id: '4', name: 'Bodya'},
            {id: '5', name: 'Roma'},
            {id: '6', name: 'Vanya'}
        ],
        messages: [
            {id: '1', message: 'Hello'},
            {id: '2', message: 'How are you?'},
            {id: '3', message: 'Chao'},
        ],
    },
    navbar:{
        friends:[
            {id: '1', friend: 'Misha'},
            {id: '2', friend: 'Vasya'},
            {id: '3', friend: 'Bodya'},
        ]
    }

    // dialogs: [
    //     {id: '1', name: 'Sasha'},
    //     {id: '2', name: 'Misha'},
    //     {id: '3', name: 'Vasya'},
    //     {id: '4', name: 'Bodya'},
    //     {id: '5', name: 'Roma'},
    //     {id: '6', name: 'Vanya'}
    // ],
    // messages: [
    //     {id: '1', message: 'Hello'},
    //     {id: '2', message: 'How are you?'},
    //     {id: '3', message: 'Chao'},
    // ],
    // posts: [
    //     {id: '1', post: 'Hello', likesCount: '5'},
    //     {id: '2', post: 'How are you?', likesCount: '72'},
    // ]
}

export default state;
