const {
    Worker, isMainThread, parentPort, workerData
} = require('worker_threads')

if (isMainThread) { // Main Thread -> Main Thread가 여러 개의 작업을 Worker Thread에게 분배한다.
    const threads = new Set()
    threads.add(new Worker(__filename, {
        workerData: { start : 1 }
    }))
    threads.add(new Worker(__filename, {
        workerData: { start : 2 }
    }))

    for (let worker of threads) {
        worker.on('message', (value) => console.log('워커로부터', value))
        worker.on('exit', () => {
            threads.delete(worker)
            if (threads.size === 0) {
                console.log('워커 끝 ~ ')
            }
        })
    }



} else { // Worker Thread
    const data = workerData
    parentPort.postMessage(data.start + 100)
}