
import userNotification from '../../assets/images/user-notification-icon.png'
import StatsCard from '../components/StatsCard'
import TableHeaderUnit from '../components/TableHeaderUnit'
import TableRowWithBorder from '../components/TableRowWithBorder'

const UsersPage = () => {
  return (
    <>
      <h1 className='users-page-title'>Users</h1>
      <div className='users-stats-container'>
        <StatsCard
          icon={userNotification}
          title="Users"
          value="2,453"
        />
        <StatsCard
          icon={userNotification}
          title="Users"
          value="2,453"
        />
        <StatsCard
          icon={userNotification}
          title="Users"
          value="2,453"
        />
        <StatsCard
          icon={userNotification}
          title="Users"
          value="2,453"
        />
      </div>

      <div className='users-table-container'>
        <div className='users-table-header'>
            {Array.from({ length: 10 }).map(() => (
          <TableHeaderUnit
            title="Organization"
                sortIcon={userNotification}
                onSort={() => {/* Add sorting logic here */}}
            />
            ))}
        </div>


        <div className='users-table-body'>
            {Array.from({ length: 10 }).map((_, index, array) => (
                <TableRowWithBorder
                  key={index}
                  text="Organization"
                  isLastRow={index === array.length - 1}
                  index={index}
                />
            ))}

        </div>
      </div>
    </>
  )
}

export default UsersPage