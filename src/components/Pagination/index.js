import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {

    const pageNumber = []

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumber.push(i)
    }
    return (
        <div className="bg-white px-4 py-3 flex items-center justify-between sm:px-6">

            <div className="hidden sm:flex-1 sm:flex sm:items-center">
                <div>
                    <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                        {pageNumber.map((number) => {
                            return <a
                                onClick={() => paginate(number)}
                                href="#/zain"
                                className="relative inline-flex items-center px-2 py-2 rounded-l-md  bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                            >
                                {number}

                            </a>
                        })}
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Pagination