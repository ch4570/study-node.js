const a = true

// if (a) { import는 다이나믹 임포트를 구문으로 할 수 없다.
//     import './func.mjs'
// }



if (a) {
    // Promise를 반환하므로 await를 붙여줘야 정상적으로 처리한다.
    const func1 = await import('./func.mjs')
    console.log(func1)

    const func2 = await import('./func.mjs')
    console.log(func2)
}

console.log('성공')