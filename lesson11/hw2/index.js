const countOccurrences = (text, substr) => {
    if (substr === '') return null;
    return text.split(substr).length -1;
}