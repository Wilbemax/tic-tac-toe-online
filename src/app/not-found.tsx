import Link from 'next/link'

export default async function NotFound() {
  
  
  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <div className="max-w-md w-full px-6 py-8 text-center">
        <h1 className="text-5xl font-bold text-gray-800 dark:text-gray-200 mb-2">404</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8"> This page does not exist.</p>
        <div className="h-px bg-gray-200 dark:bg-gray-700 w-16 mx-auto mb-8"></div>
        <Link 
          href="/" 
          className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors duration-200"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Go back home
        </Link>
      </div>
    </div>
  )
}
