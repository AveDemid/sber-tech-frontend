interface GetDateFromThePastConfig {
  ms?: number;
  sec?: number;
  min?: number;
  hours?: number;
  days?: number;
}

export const getDateFromThePast = ({
  ms,
  sec,
  min,
  hours,
  days
}: GetDateFromThePastConfig) => {
  const msInSec = 1000;
  const msInMin = msInSec * 60;
  const msInHour = msInMin * 60;
  const msInDay = msInHour * 24;

  let msToSubstract = 0;

  ms && (msToSubstract += ms);
  sec && (msToSubstract += sec * msInSec);
  min && (msToSubstract += min * msInMin);
  hours && (msToSubstract += hours * msInHour);
  days && (msToSubstract += days * msInDay);

  const timestamp = new Date().getTime() - msToSubstract;

  return new Date(timestamp);
};
