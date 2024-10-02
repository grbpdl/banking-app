import HeaderBox from '@/components/headerBox'
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import React from 'react'

const Home = () => {
  const loggedIn = {
    $id: "stroms",
    email: "stroms",
    userId: "stroms",
    dwollaCustomerUrl: "stroms",
    dwollaCustomerId: "stroms",
    firstName: "stroms",
    lastName: "stroms",
    address1: "stroms",
    city: "stroms",
    state: "stroms",
    postalCode: "stroms",
    dateOfBirth: "stroms",
    ssn: "stroms",
  };
  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox type='greeting'
            title="Welcome"
            user={loggedIn?.firstName || 'Guest'}
            subtext="Acccesss and mangage your account and transaction efficiently "
          />

          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.35}
          />
        </header>
rescent transaction
      </div>
      <RightSidebar
      user={loggedIn}
      transactions={[]}
      banks={[{currentBalance:123.50},{currentBalance:500}]}
      />
    </section>
  )
}

export default Home
