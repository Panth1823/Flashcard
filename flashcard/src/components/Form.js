import React from 'react'

const Form = () => {
  return (
    <div>
    
<form>
   <div className=" mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 mt-10  w-1/2 mx-auto h-auto">
       <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
           <label for="comment" className="sr-only">Your comment</label>
           <textarea id="comment" rows="4" className="w-full text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="Enter your Text" required></textarea>
       </div>
       <div className="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
           <button type="submit" className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800 mx-auto">
               Generate Flashcard
           </button>
           <div className="flex pl-0 space-x-1 sm:pl-2">
              
             
               
           </div>
       </div>
   </div>
</form>

    </div>
  )
}

export default Form
