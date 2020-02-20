export function delay(delay, callback, context, ...args) {
    setTimeout(() => {
        callback.bind(context)(...args);
    }, delay);
};