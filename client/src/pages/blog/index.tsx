import { ScrollToTop } from '@/components/shared/ScrollToTop'
// import { BlogCards } from './components/Cards'
import blogService from '@/services/blog'
import { QUERY_KEYS } from '@/constants/query-keys'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { Spinner } from '@/components/shared/Spinner'

export const Blog = () => {
    const { id } = useParams<{ id: string }>()
    const { data: blogDetail, isLoading } = useQuery({
        queryKey: [QUERY_KEYS.BLOG_DETAIL, id],
        queryFn: () => blogService.getById(id!)
    })

    const blogdetail = blogDetail?.data?.item
    console.log("blogdetail", blogdetail);
    console.log("id", id);


    if (isLoading) {
        return (
            <div className="flex flex-col  justify-center items-center mt-28">
                <Spinner />
            </div>
        )
    }


    return (
        <div className='bg-white'>
            {/* <BlogCards blog={blogdetail} /> */}
            <ScrollToTop />
        </div>
    )
}
