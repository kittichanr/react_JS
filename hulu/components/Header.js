import Image from "next/image"
import HeaderItem from "./HeaderItem"
import {
    HomeIcon,
    BadgeCheckIcon,
    CollectionIcon,
    LightningBoltIcon,
    SearchIcon,
    UserIcon
} from '@heroicons/react/outline'

const Header = () => {
    return (
        <header className='flex flex-col sm:flex-row m-5 justify-between items-center h-auto'>
            <div className='flex flex-grow justify-evenly max-w-2xl'>
                <div><HeaderItem title='HOME' Icon={HomeIcon} /></div>
                <div><HeaderItem title='TRENDING' Icon={LightningBoltIcon} /></div>
                <div><HeaderItem title='VERIFIED' Icon={BadgeCheckIcon} /></div>
                <div><HeaderItem title='COLLECTIONS' Icon={CollectionIcon} /></div>
                <div><HeaderItem title='SEARCH' Icon={SearchIcon} /></div>
                <div><HeaderItem title='ACCOUNT' Icon={UserIcon} /></div>
            </div>
            <Image
                className='object-contain'
                src='https://links.papareact.com/ua6'
                width={200}
                height={100} />

        </header>
    )
}

export default Header
