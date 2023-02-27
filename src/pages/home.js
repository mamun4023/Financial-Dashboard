import Layout from '../layouts/mainLayout'


import Sidebar from '../sections/sidebar'
import UpgradeMembership from '../sections/UpdateMemberShip'
import SearchBar from '../sections/searchbar'
import Profile from '../sections/profile'
import TopCard from '../sections/topCards'


export default function Home(){
    return(
        <Layout>
                <div className='flex'>
                    <div className='h-screen'>
                        <Sidebar/>
                        <UpgradeMembership/> 
                        
                    </div>
                    <div>
                        <SearchBar />
                        <TopCard />
                    </div>
                    <div>
                        <Profile />
                        
                    </div>

                </div>
            
        </Layout>
    )
}