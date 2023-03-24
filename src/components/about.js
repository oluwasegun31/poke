import AnimatedPage from "./animationPage";
import {FaGithub} from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';

function About(){
    return(
        <AnimatedPage>
            <section className="about">
                <article>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores repudiandae tempore necessitatibus officia vero aspernatur eaque alias eveniet veniam dolor animi provident, quae voluptatibus, enim impedit a inventore quidem numquam. Ut sed voluptatibus ducimus quis, dolores impedit fugiat neque obcaecati optio voluptate quam minima. Ratione consequatur amet laboriosam laborum rem, optio ipsam, corporis minima eum harum quod inventore quia numquam distinctio dicta, iste obcaecati. Reiciendis totam laboriosam ex eius vero pariatur odio facilis cum corrupti officiis dolor, architecto deserunt aliquam ea aspernatur alias dicta iusto corporis sunt ipsam quasi fugiat doloribus laudantium. 
                </article>
                <div className="socials">
                    <p>CONTACTS</p>
                    <div className="social-icons">
                        <a href="https://github.com/oluwasegun31"><FaGithub /></a>
                        <a href="https://twitter.com/__oluwasegun"><FaTwitter /></a>
                        <a href="https://instagram.com/_oluwa.segun"><FaInstagram /></a>
                    </div>
                </div>
            </section>
        </AnimatedPage>
    )
}

export default About