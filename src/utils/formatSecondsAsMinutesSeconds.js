export const formatSecondsAsMinutesSeconds = (seconds) => {
  return `${Math.floor(seconds / 60)}:${("00" + (seconds % 60)).slice(-2)}`;
};
