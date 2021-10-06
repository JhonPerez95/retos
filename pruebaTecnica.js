function solution(N) {
    let letter = 'L'
    for (let i = 1; i <= N; i++) {
        if (i == N) {
            for (let x = 1; x < N; x++) {
                letter += 'L'
            }
            console.log(letter)
        } else {
            console.log(letter)
        }
    }
}

solution(4)
