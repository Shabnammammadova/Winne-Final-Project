import { ScrollToTop } from '@/components/shared/ScrollToTop'
import blogService from '@/services/blog'
import { QUERY_KEYS } from '@/constants/query-keys'
import { useQuery } from '@tanstack/react-query'
import { Spinner } from '@/components/shared/Spinner'
import { BlogCards } from './components/Cards'
import { RenderIf } from '@/components/shared/RenderIf'

export const Blog = () => {
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
            <RenderIf condition={isLoading}>
                {
                    [1].map((index) => (
                        <BlogCards.Skeleton key={index} />
                    ))
                }
            </RenderIf>
            <RenderIf condition={!isLoading}>
                <BlogCards blog={bloglist} />
            </RenderIf>

            <ScrollToTop />
        </div>
    )
}
