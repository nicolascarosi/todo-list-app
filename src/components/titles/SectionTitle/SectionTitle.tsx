import { Divider } from 'antd';
import { ISectionTitle } from './SectionTitle.interface';

export const SectionTitle = ({
  title,
  subtitle,
  rightElement,
}: ISectionTitle) => (
  <>
    <div className="section-title">
      <div className="section-title__text">
        <h1 className="section-title__text__title">{title}</h1>
        {subtitle && (
          <p className="section-title__text__subtitle">{subtitle}</p>
        )}
      </div>
      {rightElement ? rightElement : ''}
    </div>
    <Divider />
  </>
);
