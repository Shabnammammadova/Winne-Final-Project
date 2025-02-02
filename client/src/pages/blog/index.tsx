import { ScrollToTop } from '@/components/shared/ScrollToTop'
// import { BlogCards } from './components/Cards'
import blogService from '@/services/blog'
import { QUERY_KEYS } from '@/constants/query-keys'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { Spinner } from '@/components/shared/Spinner'
import { BlogCards } from './components/Cards'

export const Blog = () => {
    const { id } = useParams<{ id: string }>()
    const { data: blogList, isLoading } = useQuery({
        queryKey: [QUERY_KEYS.BLOG_LIST],
        queryFn: () => blogService.getAll({})
    })

    const bloglist = blogList?.data.items


    if (isLoading) {
        return (
            <div className="flex flex-col  justify-center items-center mt-28">
                <Spinner />
            </div>
        )
    }


    return (
        <div className='bg-white'>
            <BlogCards blog={bloglist} />
            <ScrollToTop />
        </div>
    )
}
