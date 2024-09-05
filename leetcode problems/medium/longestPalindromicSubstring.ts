function longestPalindrome(s: string): string {
    let start = 0, maxLength = 0;

    // Function to expand around the center and return the length of the palindrome
    function expandAroundCenter(left: number, right: number): number {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        return right - left - 1;
    }

    for (let i = 0; i < s.length; i++) {
        // Get the max length palindrome for both odd and even length palindromes
        const len1 = expandAroundCenter(i, i);
        const len2 = expandAroundCenter(i, i + 1);
        const maxLen = Math.max(len1, len2);

        // Update start and maxLength if a longer palindrome is found
        if (maxLen > maxLength) {
            maxLength = maxLen;
            start = i - Math.floor((maxLen - 1) / 2);
        }
    }

    // Return the longest palindromic substring
    return s.substring(start, start + maxLength);
}
