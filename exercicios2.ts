export function isPangram(phrase: string): boolean {
    const letters = new Set(phrase.toLowerCase().replace(/[^a-z]/g, ''));
    return letters.size === 26;
}