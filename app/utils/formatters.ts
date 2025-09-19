export function capitalizeText(text: string) {
  const capitalizedText = text.charAt(0).toUpperCase() + text.slice(1);
  return capitalizedText;
}

export function formatLocationName(text: string) {
  if (text.includes('_')) {
    return text
      .replace('_', ' ')
      .toLowerCase()
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  } else {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }
}
