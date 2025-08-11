interface TableHeaderUnitProps {
  title: string;
  sortIcon: string;
  onSort?: () => void;
}

const TableHeaderUnit = ({
  title,
  sortIcon,
  onSort
}: TableHeaderUnitProps) => {
  return (
    <div className='users-table-unit' onClick={onSort}>
      <span className='title'>{title}</span>
      <img src={sortIcon} alt="sort" />
    </div>
  );
};

export default TableHeaderUnit;
