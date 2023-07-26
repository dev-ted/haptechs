/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

const CountDownTimer = (targetDate: string | number | Date) => {
  const countDownDate = new Date(targetDate).getTime();

  const [countDown, setCountDown] = useState(
    countDownDate - new Date().getTime()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(countDownDate - new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return getReturnValues(countDown);
};

const getReturnValues = (countDown: number) => {
  // calculate time left
  const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

  return [
    padWithZeros(days, 2),
    padWithZeros(hours, 2),
    padWithZeros(minutes, 2),
    padWithZeros(seconds, 2),
  ];
};

function padWithZeros(number: number, minLength: number) {
  const numberString = number.toString();
  if (numberString.length >= minLength) return numberString;
  return "0".repeat(minLength - numberString.length) + numberString;
}

export { CountDownTimer };
