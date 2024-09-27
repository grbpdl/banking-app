import HeaderBox from '@/components/headerBox'
import TotalBalanceBox from '@/components/TotalBalanceBox';
import React from 'react'

const Home = () => {
  const loggedIn={firstname:'Gaurab'};
  return (
  <section className='home'>
<div className='home-content'>
  <header className='home-header'>
<HeaderBox type='greeting'
title="Welcome"
user={loggedIn?.firstname || 'Guest'} 
subtext="Acccesss and mangage your account and transaction efficiently "
/>

<TotalBalanceBox 
accounts={[]}
totalBanks={1}
totalCurrentBalance={1250.35}


/>
  </header>

</div>
  </section>
  )
}

export default Home
