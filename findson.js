function longestCommonSubstring(str1, str2) {
  const dp = Array.from({ length: str1.length + 1 }, () =>
    Array.from({ length: str2.length + 1 }, () => 0)
  );
  let maxLength = 0;
  let maxI = 0;
  let maxJ = 0;

  for (let i = 1; i <= str1.length; i++) {
    for (let j = 1; j <= str2.length; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
        if (dp[i][j] > maxLength) {
          maxLength = dp[i][j];
          maxI = i;
          maxJ = j;
        }
      }
    }
  }

  return str1.slice(maxI - maxLength, maxI);
}

console.log(longestCommonSubstring("abcdefghijgdcd", "defghijkuyrfcou")); // 'def'
