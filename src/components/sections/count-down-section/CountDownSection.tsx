
import CountDown from '@/components/ui/CountDown';
import { CountDownTimer } from '@/components/ui/CountDownTimer';

function CountDownSection() {
  const THREE_DAYS_IN_MS = 14 * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();
  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

  const [days, hours, minutes, seconds] = CountDownTimer(dateTimeAfterThreeDays);

  return (
    <>
      <div className="min-h-screen flex flex-col items-center  md:py-[12.4rem] py-[10rem]  space-y-20">
        <h5 className="text-white max-w-screen-lg text-sm md:text-6xl text-center font-bold capitalize  pt-1">
          Embrace the Unseen. <br /> Our Spectacular Arrival!
        </h5>

        <div className="flex space-x-2 md:space-x-7">
          <CountDown value={days} name="Days" />
          <CountDown value={hours} name="Hours" />
          <CountDown value={minutes} name="Minutes" />
          <CountDown value={seconds} name="Seconds" />
        </div>
      </div>
    </>
  );
}

export default CountDownSection;