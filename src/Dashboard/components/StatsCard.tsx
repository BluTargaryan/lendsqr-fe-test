interface StatsCardProps {
  icon: string;
  title: string;
  value: string | number;
  iconAlt?: string;
}

const StatsCard = ({
  icon,
  title,
  value,
  iconAlt = title
}: StatsCardProps) => {
  return (
    <div className='users-stats-item'>
      <img src={icon} alt={iconAlt} className='users-stats-item-icon'/>
      <h2 className='users-stats-item-title'>{title}</h2>
      <span className='users-stats-item-value'>{value}</span>
    </div>
  );
};

export default StatsCard;
