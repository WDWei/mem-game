export function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
}

export function timedPromise(time) {
    return new Promise((resolve, reject) => setTimeout(resolve, time))}