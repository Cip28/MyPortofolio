import React from "react";
import "./sass/Main.scss";
import data from "../skills.js";
import Button from "./Button";

const Main = () => {
  return (
    <main>
      <a name="about"></a>
      <section className="main--top">
        <h1>About me</h1>
        <div className="decorative"></div>
        <p>Here are some things about myself </p>
      </section>
      <section className="main--mid">
        <article>
          <h3>Get to know me!</h3>
          <p>
            Hey! My name is <span>Ciprian Barbu</span> and I'm a{" "}
            <span>Junior Frontend Developer</span> located in Bucharest. Since
            August 2021, I am working at Accenture as an{" "}
            <span>Application Development Associate</span>, permanently learning
            new things about how the Web works.{" "}
          </p>
          <br />
          <p>
            I love to create new layouts, animations and various visual effects
            in order to make a website more attractive.
          </p>
          <p>
            My goal is to master the Web Technologies. If you are willing to
            collaborate, feel free to <span>contact</span> me.
          </p>

          <div className="social-links">
            <div className="social-btn flex-center" id="gmail">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="48"
                height="48"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#4caf50"
                  d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z"
                ></path>
                <path
                  fill="#1e88e5"
                  d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z"
                ></path>
                <polygon
                  fill="#e53935"
                  points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"
                ></polygon>
                <path
                  fill="#c62828"
                  d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z"
                ></path>
                <path
                  fill="#fbc02d"
                  d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z"
                ></path>
              </svg>
              <span>cip.barbu28@gmail.com</span>
            </div>

            <div className="social-btn flex-center" id="linkedin">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
              </svg>
              <span>in/BarbuCiprian</span>
            </div>

            <div className="social-btn flex-center" id="github">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              <span>ChanceSQ</span>
            </div>
          </div>
        </article>
        <article>
          <h3>My Skills</h3>
          <div className="skills--card">
            {data.skills.map((item) => {
              return <Button key={item.id} name={item.skill} />;
            })}
          </div>
        </article>
      </section>
    </main>
  );
};

export default Main;
