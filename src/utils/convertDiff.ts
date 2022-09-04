const convertDiff = (diff: number | null): string => {
  // 시작 datetime, 종료 datetime의 차이인 diff를 인자로 받아
  // 1000으로 나누어 초 단위로 환산한 후,
  // day, hour, minute, second에 삼항연산자로 문자열 부여 후 반환
  // 61000 밀리세컨드는 61초로 환산되고
  // minute 변수는 "1분", second 변수는 "1초"가 된다
  if (diff === null) {
    return ""
  }

  const timePassed = Math.floor(diff / 1000);

  const day = Math.floor(timePassed / (24 * 60 * 60)) > 0 ? `${Math.floor(timePassed / (24 * 60 * 60))}일 ` : "";
  const hour = Math.floor(timePassed / (60 * 60)) % 24 > 0 ? `${Math.floor(timePassed / (60 * 60)) % 24}시간 ` : "";
  const minute = Math.floor(timePassed / 60) % 60 > 0 ? `${Math.floor(timePassed / 60) % 60}분 ` : "";
  const second = timePassed % 60 > 0 ? `${timePassed % 60}초 ` : "";

  const result = `${day}${hour}${minute}${second}소요되었습니다.`;

  return result;
};

export default convertDiff;
