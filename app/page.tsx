import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
import bg from '../public/img/intro-bg.jpg'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home page',
  description: 'Homepage',
}

export default function Home() {
  return (
    <>
      <div id="home" className="intro route bg-image" style={{ backgroundImage: `url(${bg.src})` }}>
        <div className="overlay-itro"></div>
        <div className="intro-content display-table">
          <div className="table-cell">
            <div className="container">
              <h1 className="intro-title mb-4">I am Morgan Freeman</h1>
              <p className="intro-subtitle"><span className="text-slider-items">CEO DevFolio,Web Developer,Web Designer,Frontend Developer,Graphic Designer</span><strong className="text-slider"></strong></p>
            </div>
          </div>
        </div>
      </div>

      <section id="blog" className="blog-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">
                  Blog
                </h3>
                <p className="subtitle-a">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </p>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4">
              <div className="card card-blog">
                <div className="card-img">
                  <a href="blog-single.html"><img src="img/post-1.jpg" alt="" className="img-fluid" /></a>
                </div>
                <div className="card-body">
                  <div className="card-category-box">
                    <div className="card-category">
                      <h6 className="category">Travel</h6>
                    </div>
                  </div>
                  <h3 className="card-title"><a href="blog-single.html">See more ideas about Travel</a></h3>
                  <p className="card-description">
                    Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus. Praesent sapien massa, convallis
                    a pellentesque nec,
                    egestas non nisi.
                  </p>
                </div>
                <div className="card-footer">
                  <div className="post-author">
                    <a href="#">
                      <img src="img/testimonial-2.jpg" alt="" className="avatar rounded-circle" />
                      <span className="author">Morgan Freeman</span>
                    </a>
                  </div>
                  <div className="post-date">
                    <span className="ion-ios-clock-outline"></span> 10 min
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card card-blog">
                <div className="card-img">
                  <a href="blog-single.html"><img src="img/post-2.jpg" alt="" className="img-fluid" /></a>
                </div>
                <div className="card-body">
                  <div className="card-category-box">
                    <div className="card-category">
                      <h6 className="category">Web Design</h6>
                    </div>
                  </div>
                  <h3 className="card-title"><a href="blog-single.html">See more ideas about Travel</a></h3>
                  <p className="card-description">
                    Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus. Praesent sapien massa, convallis
                    a pellentesque nec,
                    egestas non nisi.
                  </p>
                </div>
                <div className="card-footer">
                  <div className="post-author">
                    <a href="#">
                      <img src="img/testimonial-2.jpg" alt="" className="avatar rounded-circle" />
                      <span className="author">Morgan Freeman</span>
                    </a>
                  </div>
                  <div className="post-date">
                    <span className="ion-ios-clock-outline"></span> 10 min
                  </div>
                </div>
              </div>
            </div>


            <div className="col-md-4">
              <div className="card card-blog">
                <div className="card-img">
                  <a href="blog-single.html"><img src="img/post-3.jpg" alt="" className="img-fluid" /></a>
                </div>
                <div className="card-body">
                  <div className="card-category-box">
                    <div className="card-category">
                      <h6 className="category">Web Design</h6>
                    </div>
                  </div>
                  <h3 className="card-title"><a href="blog-single.html">See more ideas about Travel</a></h3>
                  <p className="card-description">
                    Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus. Praesent sapien massa, convallis
                    a pellentesque nec,
                    egestas non nisi.
                  </p>
                </div>
                <div className="card-footer">
                  <div className="post-author">
                    <a href="#">
                      <img src="img/testimonial-2.jpg" alt="" className="avatar rounded-circle" />
                      <span className="author">Morgan Freeman</span>
                    </a>
                  </div>
                  <div className="post-date">
                    <span className="ion-ios-clock-outline"></span> 10 min
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}
