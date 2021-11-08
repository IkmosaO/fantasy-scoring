const calculateScore = (player) => {
    switch (player.position) {
        case 'QB':
            return calculateQb(player)
        case 'RB':
            return calculateRB(player)
        case 'WR':
            return calculateWR(player)
        case 'TE':
            return calculateTE(player)
        default:
            return 0
    }
}
const calculateQb = (player) => {
    const passing = player.stats.passing
    const rushing = player.stats.rushing

    const score = (player.stats.passing.yards / 25) +
        (passing.touchdowns * 6) +
        (passing.interceptions * -3) +
        (rushing.yards / 10) +
        (rushing.touchdowns * 6) +
        (rushing.fumbles * -3)


    return score
}

const calculateRB = (player) => {
    const rushing = player.stats.rushing
    const receiving = player.stats.receiving
    const kickreturn = player.stats.return.kickreturn
    const puntreturn = player.stats.return.puntreturn

    const score = (player.stats.rushing.yards / 10) +
        (rushing.touchdowns * 6) +
        (rushing.fumbles * -3) +
        (receiving.receptions) +
        (receiving.yards / 10) +
        (receiving.touchdowns * 6) +
        (receiving.fumbles * -3) +
        (kickreturn.yards / 15) +
        (kickreturn.touchdowns * 6) +
        (kickreturn.fumbles * -3) +
        (puntreturn.yards / 15) +
        (puntreturn.returns / 6) +
        (puntreturn.fumbles * -3)


    return score
}

const calculateWR = (player) => {
    const rushing = player.stats.rushing
    const receiving = player.stats.receiving
    const kickreturn = player.stats.return.kickreturn
    const puntreturn = player.stats.return.puntreturn

    const score = (player.stats.rushing.yards / 10) +
        (rushing.touchdowns * 6) +
        (rushing.fumbles * -3) +
        (receiving.receptions) +
        (receiving.yards / 10) +
        (receiving.touchdowns * 6) +
        (receiving.fumbles * -3) +
        (kickreturn.yards / 15) +
        (kickreturn.touchdowns * 6) +
        (kickreturn.fumbles * -3) +
        (puntreturn.yards / 15) +
        (puntreturn.touchdowns * 6) +
        (puntreturn.fumbles * -3)

    return score
}

const calculateTE = (player) => {
    const receiving = player.stats.receiving

    const score = (player.stats.receiving.receptions) +
        (receiving.yards / 10) +
        (receiving.touchdowns * 6) +
        (receiving.fumbles * -3)

    return score
}

module.exports = calculateScore
