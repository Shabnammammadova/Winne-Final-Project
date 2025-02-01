import { ScrollToTop } from '@/components/shared/ScrollToTop'
import { BlogCards } from './components/Cards'

export const Blog = () => {
    return (
        <div className='bg-white'>
            <BlogCards />
            <ScrollToTop />
        </div>
    )
}
