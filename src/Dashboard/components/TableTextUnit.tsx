interface TableTextUnitProps {
  text: string;
  className?: string;
  onClick?: () => void;
}

const TableTextUnit = ({
  text,
  className = 'users-table-unit',
  onClick
}: TableTextUnitProps) => {
  return (
    <span className={className} onClick={onClick}>
      {text}
    </span>
  );
};

export default TableTextUnit;
