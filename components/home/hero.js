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
      <p>
        I am web developer from El Paso TX, welcome to my personal website.
        I am open for new opportunities, please contact me in my contact page or through LinkedIn.
      </p>
      <h2>-Tech Stack-</h2>
      <div className={classes.hero}>
        <span>
          <Image
            src="/static/js.png"
            width={100}
            height={100}
            alt="Javascript logo"
          />
        </span>
        <span>
          <Image
            src="/static/react.png"
            width={100}
            height={100}
            alt="React logo"
          />
        </span>
        <Image
          src="/static/mongodb.png"
          width={100}
          height={100}
          alt="Mongo Database logo"
        />
        <Image
          src="/static/nodejs.png"
          width={100}
          height={100}
          alt="Node.js logo"
        />
      </div>
    </section>
  );
}
export default Hero;
