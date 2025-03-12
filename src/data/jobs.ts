import { Job } from "../interfaces/cv";

export const JOBS: Job[] = [
  {
    id: 'job1',
    startDate: new Date('2022-03-07'),
    companyId: 'gft',
    projects: [
      {
        id: '1',
        name: 'Project 1',
        startDate: new Date('2020-01-01'),
        endDate: new Date('2020-01-01'),
        roles: ['Frontend Developer']
      }
    ]
  },
  {
    id: 'job2',
    startDate: new Date('2021-03-08'),
    endDate: new Date('2022-03-08'),
    companyId: 'habi'
  },
  {
    id: 'job3',
    startDate: new Date('2019-02-25'),
    endDate: new Date('2021-03-05'),
    companyId: 'sophos'
  },
  {
    id: 'job4',
    startDate: new Date('2016-09-05'),
    endDate: new Date('2019-02-22'),
    companyId: 'certicamara'
  },
  {
    id: 'job5',
    startDate: new Date('2017-02-01'),
    endDate: new Date('2019-02-01'),
    companyId: 'unitec',
    description: 'Especialización en diseño de contenidos digitales, Febrero de 2017, Septiembre de 2017, Marzo 2018, Septiembre 2018'
  },
  {
    id: 'job6',
    startDate: new Date('2015-08-19'),
    endDate: new Date('2016-09-02'),
    companyId: 'ath',
  },
  {
    id: 'job7',
    startDate: new Date('2010-06-04'),
    endDate: new Date('2015-07-10'),
    companyId: 'porvenir',
  },
  {
    id: 'job8',
    startDate: new Date('2008-01-15'),
    endDate: new Date('2010-06-03'),
    companyId: 'servinte'
  }
]