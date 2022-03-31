//Next js images
import Image from "next/image";
import classes from "./hero.module.css";
//Welcome component
function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/emmanuel.png"
          alt="An image of Emmanuel"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Emmanuel</h1>
      <p>I blog about web development, and I am currenly looking for a web dev role.</p>
    </section>
  );
}
export default Hero;
