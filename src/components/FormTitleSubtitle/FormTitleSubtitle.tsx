import { FormTitleSubtitleProps } from '../../types/types';
import './FormTitleSubtitle.scss';

export const FormTitleSubtitle = ({ title, subtitle }: FormTitleSubtitleProps) => {
  return (
    <div className='text'>
      <div className='text__title'>{title}</div>
      <div className='text__subtitle'>{subtitle}</div>
    </div>
  );
};
