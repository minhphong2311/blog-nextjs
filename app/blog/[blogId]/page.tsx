import { getAllBlogs, getDetailBlog } from '@/services/BlogService'
import { blogType } from '@/types'
import { Metadata } from 'next'
import Link from 'next/link'
import React from 'react'

interface Props{
  params: {
    blogId: string
  }
}

export async function generateMetadata({ params }: Props):Promise<Metadata> {
  const blog:blogType = await getDetailBlog(params.blogId)

  return {
    title: blog.title,
    description: blog.summary,
  }
}

const BlogDetail = async ({params} : Props) => {

  const blog = await getDetailBlog(params.blogId)

  const latestBlogs:blogType[] = await getAllBlogs({items_per_page: '6'})

  return (
    <section className="blog-wrapper sect-pt4" id="blog">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <div className="post-box">
              <div className="post-thumb">
                <img src="img/post-1.jpg" className="img-fluid" alt="" />
              </div>
              <div className="post-meta">
                <h1 className="article-title">{blog.title}</h1>
                <ul>
                  <li>
                    <i className='fa fa-tags'></i> <label>{blog.category.name}</label>
                  </li>
                </ul>
                <p className='mt-3'>{blog.summary}</p>
              </div>
              <div className="article-content" dangerouslySetInnerHTML={{__html:blog.description}}></div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="widget-sidebar sidebar-search">
              <h5 className="sidebar-title">Search</h5>
              <div className="sidebar-content">
                <form>
                  <div className="input-group">
                    <input type="text" className="form-control" placeholder="Search for..." aria-label="Search for..." />
                      <span className="input-group-btn">
                        <button className="btn btn-secondary btn-search" type="button">
                          <span className="ion-android-search"></span>
                        </button>
                      </span>
                  </div>
                </form>
              </div>
            </div>
            <div className="widget-sidebar">
              <h5 className="sidebar-title">Latest Post</h5>
              <div className="sidebar-content">
                <ul className="list-sidebar">
                  {latestBlogs.map(item => {
                    return (
                      <li>
                        <Link href={`/blog/${item.id}`}>{item.title}</Link>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BlogDetail