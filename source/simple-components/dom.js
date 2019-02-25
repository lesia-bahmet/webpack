export default (text = '111234 🎉🎉🎉') => {
    const element = document.createElement('div');

    element.innerHTML = text;

    element.addEventListener('click', async () => {
        element.textContent = 'preparing...';

        await (() => new Promise((resolve) => setTimeout(resolve, 2000)))();
        element.textContent = 'fetching...';

        const result = await import(/* webpackChunkName: "lazyLoadedText"*/
            './lazyLoadedText'
        );

        element.textContent = result.default;
    });

    return element;
};