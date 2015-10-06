require('./db')


module.exports = {
    getBoards: function(req, res) {


        return {
            boards: [{
                id: 122,
                name: 'board1',
                description: 'asasas',
                count: 12
            }, {
                id: 12121,
                name: 'board  sbbsd sadgshdgs sdasdadd',
                description: '',
                count: 1
            }]
        }



    },
    getBoard: function(req, res) {


        return {
            id: 122,
            name: 'board1',
            tickets: [{
                id: 12,
                name: 'nasfdfnsma',
                status: 'requested',
                description: 'asdadadasd '
            }, {
                id: 2,
                name: 'dsfsd',
                status: 'requested',
                description: 'sdf dsdsf sdf sd'
            }, {
                id: 3,
                name: 'as',
                status: 'inprogress',
                description: 'sdfsdf dsfsdf requested'
            }, {
                id: 4,
                name: 'sad',
                status: 'requested',
                description: ''
            }, {
                id: 5,
                name: 'asd',
                status: 'testing',
                description: 'asdasdd'
            }, {
                id: 6,
                name: 'asd',
                status: 'done'
            }, {
                id: 7,
                name: 'sdfdfsdf',
                status: 'testing'
            }]
        }



    },
    createBoard: function(req, res) {

        return {
            id: 1223
        }

    }
}
