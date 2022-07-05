function capitalizeFirstLetter(string) {
  // Если string не строка тогда у тебя упадет приложение. Лучше добавить проверку
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export { capitalizeFirstLetter };
