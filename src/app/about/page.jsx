import React from "react";
import Image from "next/image";
import styles from './page.module.css';
const About = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" fill={true} alt="" className={styles.img} />

                <div className={styles.imgText}>
                    <h1 className={styles.imgTitle}>Digital Storytellers</h1>
                    <h2 className={styles.imgDesc}>
                        Handcrafting award winning digital experiences
                    </h2>
                </div>
            </div>
            <div className={styles.textContainer}>
                <div className={styles.item}>
                    <h1 className={styles.title}>Who Are We ?</h1>
                    <p className={styles.desc}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis, minima odio. Fuga amet quae itaque Lorem ipsum dolor sit amet consectetur adipisicing elit. Et autem illum molestias! Beatae totam eum dicta, rerum harum esse in? Sit, nulla qui! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam quo repellendus incidunt officiis soluta reiciendis voluptatem molestiae ducimus voluptate? Placeat aliquid, quia maiores sunt possimus deleniti, exercitationem eum ratione necessitatibus maxime voluptatem veritatis cupiditate.
                        <br />
                        <br />
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis placeat amet in aut commodi assumenda iste quibusdam esse nam! Nisi ipsum neque vel, quibusdam optio quaerat ducimus distinctio a mollitia nostrum vitae sunt quo.
                    </p>
                </div>
                <div className={styles.item}>
                    <h1 className={styles.title}>What We Do ?</h1>
                    <p className={styles.desc}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni nesciunt facilis possimus aut ex quae quisquam ullam fugiat tenetur vel maiores impedit eos ea saepe nemo dolore consequatur, iste ipsa autem? Quam, explicabo vitae!
                        <br />
                        <br /> - Dynamic Websites
                        <br />
                        <br /> - Fast and Handy
                        <br />
                        <br /> - Mobile Apps
                    </p>
                    <button url="/contact" text="Contact" />
                </div>
            </div>
        </div>
    )
}

export default About;