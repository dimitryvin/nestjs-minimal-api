import { Injectable } from '@nestjs/common';

const parseYearMonthString = (
  startYearMonth: string,
  endYearMonth: string,
) => {
  const start = startYearMonth.split('-').map((str) => parseInt(str));
  const end = endYearMonth.split('-').map((str) => parseInt(str));

  const [startingYear, startingMonth] = start;
  const [endingYear, endingMonth] = end;

  const startDate = new Date(startingYear, startingMonth - 1, 1);
  const endDate = new Date(endingYear, endingMonth, 0);

  return { startDate, endDate };
};


export interface MonthYear {
  month: number;
  year: number;
}

@Injectable()
export class SalesService {
  getAllTimeSales() {
    return new Promise((resolve, reject) => {
      resolve(10)
    });
  }
}
