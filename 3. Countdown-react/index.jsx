import { useState, useEffect } from 'react';

const Timer = () => {
  // yang boleh di ubah //
  const targetYear = 2024;
  const targetMonth = 9; // bulan dalam JavaScript (dimulai dari 0)
  const targetDay = 30;
  const targetHour = 21;
  const targetMinute = 44;
  const targetSecond = 0;
  // yang boleh di ubah //

  const targetDate = new Date(targetYear, targetMonth, targetDay, targetHour, targetMinute, targetSecond).getTime();
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const timeRemaining = targetDate - now;

      if (timeRemaining > 0) {
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [targetDate]);

  return (
    <>
      {timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0 ? (
        <span>Waktu sudah habis!</span>
      ) : (
        <div>
          <div>
            {timeLeft.days}
            <span>Hari</span>
          </div>
          <div>
            {timeLeft.hours}
            <span>Jam</span>
          </div>
          <div>
            {timeLeft.minutes}
            <span>Menit</span>
          </div>
          <div>
            {timeLeft.seconds}
            <span>Detik</span>
          </div>
        </div>
      )}
    </>
  );
};

export default Timer;
