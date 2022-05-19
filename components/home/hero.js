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
        Welcome to my blog! Here you can find new technologies I am currently learing as well as a short post about it. Additionally, here are some of the apps I've created and a form to contact me!
      </p>
      <h2> - Tech Stack - </h2>
      <div className={classes.hero}>
        <span>
          <Image
            src="/static/js.png"
            width={64}
            height={64}
            alt="Javascript logo"
          />
        </span>
        <span>
          <Image
            src="/static/react.png"
            width={74}
            height={74}
            alt="React logo"
          />
        </span>
        <span>
          <Image
            src="/static/mongodb.png"
            width={64}
            height={64}
            alt="Mongo Database logo"
          />
        </span>
        <span>
          <Image
            src="/static/express.png"
            width={64}
            height={64}
            alt="Express.js logo"
          />
        </span>
        <span>
          <Image
            src="/static/node.png"
            width={64}
            height={64}
            alt="Node.js logo"
          />
        </span>
      </div>
    </section>
  );
}
export default Hero;
