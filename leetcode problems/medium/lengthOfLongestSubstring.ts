function lengthOfLongestSubstring(s: string): number {
    let start = 0;
    let end = 0;
    let max = 0;
    const hSet = new Set<string>();

    while (end < s.length) {
        if (hSet.has(s[end])) {
            hSet.delete(s[start]);
            start++;
        } else {
            hSet.add(s[end]);
            end++;
            max = Math.max(hSet.size, max);
        }
    }

    return max;
}
