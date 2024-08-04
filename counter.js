export function setupCounter(element) {
  let counter = 0;
  const setCounter = (count) => {
    counter = count;
    element.innerHTML = `Yo!  count is ${counter}`;
  };
  // Hi Bill
  element.addEventListener('click', () => setCounter(counter + 1));
  setCounter(0);
}
