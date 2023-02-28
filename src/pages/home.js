import Layout from '../layouts/mainLayout'
import Sidebar from '../sections/sidebar'
import UpgradeMembership from '../sections/UpdateMemberShip'
import SearchBar from '../sections/searchbar'
import Profile from '../sections/profile'
import TopCard from '../sections/topCards'
import SendMoney from '../sections/sendMoneyCard'
import FinanceTable from '../sections/financeTable'
import Chart from '../sections/chart'


export default function Home(){
    return(
        <Layout>
                <div className='flex'>
                    <div className=''>
                        <Sidebar/>
                        <UpgradeMembership/> 
                        
                    </div>
                    <div>
                        <SearchBar />
                        <TopCard />
                        <Chart />
                        <FinanceTable/>
                    </div>
                    <div>
                        <Profile />
                        <SendMoney />
                    </div>

                </div>
            
        </Layout>
    )
}