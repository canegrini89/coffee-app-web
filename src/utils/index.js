export const textFormated = (text) => {
  const splitedText = text.split(" ");
  const words = [];
  splitedText.forEach((word) => {
    words.push(word.charAt(0).toUpperCase() + word.slice(1));
  });
  return words.join(" ").trim();
};
