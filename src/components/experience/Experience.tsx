import { useTranslation } from "react-i18next";
import ExperienceStyled from "./ExperienceStyled";
import { useCvStore } from "../../store/cvStore";
import { Job } from "../../interfaces/cv";
import { COMPANIES } from "../../data/companies";
import { differenceInMonths, differenceInYears, format } from "date-fns";
import { Timeline } from "antd";

function Experience() {
  const { t } = useTranslation();
  const jobs: Job[] = useCvStore((state) => state.jobs)
  
  const calculateDuration = (startDate: Date, endDate?: Date) => {
    const end = endDate || new Date();
    const years = differenceInYears(end, startDate);
    const months = differenceInMonths(end, startDate) % 12;
    return { years, months };
  };
  
  const { years: totalExperienceYears, months: totalExperienceMonths } = calculateDuration(jobs[jobs.length-1].startDate, new Date());

  const items = [{ children: 'sample', label: 'sample' }];

  return (
    <ExperienceStyled>
      <h1>{ t('experience') }</h1>
      <span>
        {totalExperienceYears > 0 && t('year', { count: totalExperienceYears })+' '} 
      </span>
      <span>
        {totalExperienceMonths > 0 && t('month', { count: totalExperienceMonths })}
      </span>

      <Timeline items={items} />
      <ul>
        {jobs.map((job) => {
          const { years, months } = calculateDuration(job.startDate, job.endDate);
          return (
            <li key={job.id}>
              <div>
                {COMPANIES[job.companyId].name}
              </div>
              <div> 
                {t(COMPANIES[job.companyId].country)}
              </div>
              <div>
                {t(job.companyId+'JobName')}
              </div>
              <div>
                {t('period')}: {format(job.startDate, 'MMMM yyyy')} {t('toDate')} {job.endDate ? format(job.endDate, 'MMMM yyyy'): t('present')}
              </div>
              <div>
                <span>
                  {years > 0 && t('year', { count: years })+' '} 
                </span>
                <span>
                  {months > 0 && t('month', { count: months })}
                </span>
              </div>
              <div>
                {job.description}
              </div>
              <br />
            </li>
          )}
        )}
      </ul>
      
    </ExperienceStyled>
  );
}

export default Experience