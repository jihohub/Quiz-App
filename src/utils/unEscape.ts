// &amp;, &lt; 등 HTML 특수문자를 일반문자로 변환해주는 유틸함수
const unEscape = (escapedString: string): string => {
  const unEscapedString = escapedString.replace(/&amp;/g, '&')
                                      .replace(/&lt;/g, '<')
                                      .replace(/&gt;/g, '>')
                                      .replace(/&quot;/g, '"')
                                      .replace(/&#039;/g, "'")
                                      .replace(/&#39;/g, "'");
  return unEscapedString;
};

export default unEscape;
