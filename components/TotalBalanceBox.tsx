
'use client'
import React from 'react'
import CountUp from 'react-countup';
import DoghnutChart from './DoghnutChart';

const TotalBalanceBox = ({
    accounts = [], totalBanks, totalCurrentBalance
}: TotlaBalanceBoxProps) => {
    return (
        <section className='total-balance'>
            <div className='total-balance-chart'>
                <DoghnutChart accounts={accounts}/>
            </div>

            <div className='flex flex-col gap-6'>
                <h2 className='header-2'>
                    Bank Accounts:{totalBanks}

                </h2>
                <div className='flex flex-col gap-2'>
                    <p className='total-balance-label'>
                        Total Current Balance
                    </p>
                   
                    <div className='total-balance-amount flex-center gap-2'>
                        <CountUp end={totalCurrentBalance}
                        decimals={2}
                        decimal=','
                        prefix='$'/>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default TotalBalanceBox
