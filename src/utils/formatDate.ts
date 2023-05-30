import { format, parseISO } from 'date-fns';
import { ru } from 'date-fns/locale';

export const formatedDate = (endTime:string):string => format(parseISO(endTime), 'dd LLLL, y', { locale: ru });