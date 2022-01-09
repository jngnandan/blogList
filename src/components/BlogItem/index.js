// Write your JS code here
import React, { Component } from 'react'

export class BlogItem extends Component {
    render(props) {
        const { blogsList } = this.props
        const { id, title, description, publishedDate } = blogsList
        return (
            <div className='flex flex-row justify-between items-start px-8 mb-3'>
                <div>
                    <h1 className='font-bold pb-2'>{title}</h1>
                    <p className='text-gray-500'>{description}</p>
                </div>
                <p className='text-gray-500 w-20 text-right'>{publishedDate}</p>

            </div>
        )
    }
}

export default BlogItem
