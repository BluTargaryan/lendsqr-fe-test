import TableTextUnit from "./TableTextUnit";
import userNotification from '../../assets/images/user-notification-icon.png'

interface TableRowWithBorderProps {
  text: string;
  isLastRow: boolean;
  index: number;
}

const TableRowWithBorder = ({
  text,
  isLastRow,
  index
}: TableRowWithBorderProps) => {
  return (
    <div className='users-table-row-and-border'>
      <div className='users-table-row'>
        <TableTextUnit
          key={index}
          text={text}
        />
        <TableTextUnit
          key={index}
          text={text}
        />
        <TableTextUnit
          key={index}
          text={text}
        />
        <TableTextUnit
          key={index}
          text={text}
        />
        <TableTextUnit
          key={index}
          text={text}
        />
        <TableTextUnit
          key={index}
          text={text}
        />
        <TableTextUnit
          key={index}
          text={text}
        />
        <TableTextUnit
          key={index}
          text={text}
        />
        <TableTextUnit
          key={index}
          text={text}
        />
        <div className='users-table-unit'>
            <span className='users-table-unit-status'>
               Blacklisted
            </span>
        </div>
        <img src={userNotification} alt="arrow-down" className='users-table-row-img'/>
      </div>
      {!isLastRow && <span className='users-table-border'/>}
    </div>
  );
};

export default TableRowWithBorder;
