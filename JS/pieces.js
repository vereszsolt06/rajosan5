let pieces = [
    // ========== WHITE PIECES ==========
    //Pawn
    {
        name: 'wp',
        position: ['12', '22', '32', '42', '52', '62', '72', '82'],
        points: 1,
        moves: [0, 1],
        steps: 3,
        remaining: 10
    },
    //Rook
    {
        name: 'wr',
        position: ['11', '81'],
        points: 3,
        moves: [0, 1, 0, -1, 0],
        steps: 12,
        remaining: 2
    },
    //Knight
    {
        name: 'wn',
        position: ['21', '71'],
        points: 2,
        moves: [2, 1, 2, -1, -2, 1, -2, -1, 2],
        steps: 1,
        remaining: 2
    },
    //Bishop
    {
        name: 'wb',
        position: ['31', '61'],
        points: 2,
        moves: [1, 1, -1, -1, 1],
        steps: 8,
        remaining: 2
    },
    //Queen
    {
        name: 'wq',
        position: ['51'],
        points: 5,
        moves: [1, 1, -1, 0, -1, -1, 1, 0, 1],
        steps: 12,
        remaining: 1
    },
    //King
    {
        name: 'wk',
        position: ['41'],
        points: 2,
        moves: [1, 1, -1, 0, -1, -1, 1, 0, 1],
        steps: 2,
        remaining: 1
    },
    // ========== BLACK PIECES ==========
    //Pawn
    {
        name: 'bp',
        position: ['111', '211', '311', '411', '511', '611', '711', '811'],
        points: 1,
        moves: [0, 1],
        steps: 3,
        remaining: 10
    },
    //Knight
    {
        name: 'br',
        position: ['112', '812'],
        points: 3,
        moves: [0, 1, 0, -1, 0],
        steps: 12,
        remaining: 2
    },
    {
        name: 'bn',
        position: ['212', '712'],
        points: 2,
        moves: [2, 1, 2, -1, -2, 1, -2, -1, 2],
        steps: 1,
        remaining: 2
    },
    //Bishop
    {
        name: 'bb',
        position: ['312', '612'],
        points: 2,
        moves: [1, 1, -1, -1, 1],
        steps: 8,
        remaining: 2
    },
    //Queen
    {
        name: 'bq',
        position: ['512'],
        points: 5,
        moves: [1, 1, -1, 0, -1, -1, 1, 0, 1],
        steps: 12,
        remaining: 1
    },
    //King
    {
        name: 'bk',
        position: ['412'],
        points: 2,
        moves: [1, 1, -1, 0, -1, -1, 1, 0, 1],
        steps: 2,
        remaining: 1
    }
];

let remainingPiece=[
    {
        team: 'w',
        knight: 2,
        bishop: 2,
        rook: 2,
        queen: 1,
        king: 1
    },
    {
        team: 'b',
        pawn: 10,
        knight: 2,
        bishop: 2,
        rook: 2,
        queen: 1,
        king: 1
    }
]