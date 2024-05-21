import React, { useState, useEffect } from "react";
import "../styles/Landing.css";
import { Link } from "react-router-dom";
import { Bars } from "react-loader-spinner";
import Colors from "../components/Colors";
import img from "../images/puzzle.png";
import arrow from "../images/arrow.png";
import bulb from "../images/bulb.png";
import connect from "../images/connect.png";
import cube from "../images/cube.png";
import gear from "../images/gear.png";
import person from "../images/person.jpeg";
import team from "../images/team.png";

const Landing = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);
  return (
    <div>
      <div>
        {isLoading ? (
          <div className="spinner-container">
            <Bars
              height="80"
              width="80"
              color={Colors.violet}
              ariaLabel="bars-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          </div>
        ) : (
          <div className="landMain">
            <div className="landDiv1">
              <div className="landDiv11">
                <h1>
                  Connect, Collaborate and Grow with{" "}
                  <span style={{ color: "rgb(138, 36, 221" }}>Flowzone</span>
                </h1>
                <h2>
                  Join the ultimate platform for developers to build their
                  portfolio, find collaborators, and accelerate their careers.
                </h2>
                <h4>
                  Flowzone is where developers come together to turn ideas into
                  reality. Our platform connects you with like-minded
                  professionals, provides access to real-world projects, and
                  helps you build a portfolio that showcases your skills. Join
                  our community today and start flowing towards success!
                </h4>
                <Link to="/register" className="landDiv1Btn">
                  Sign Up for Free | Join the Flowzone Community
                </Link>
              </div>

              <img src={img} />
            </div>

            <div className="landDiv2">
              <div className="landDiv21">
                <h1>
                  All Your Collaborations, In One{" "}
                  <span style={{ color: "rgb(138, 36, 221" }}>Place</span>
                </h1>
                <h3>Initiate.create.optimize.share.</h3>
              </div>
              <div className="landDiv22">
                <div className="landDiv221">
                  <img src={cube} alt="" />
                </div>
                <div className="landDiv221">
                  <h1>Project Matching</h1>
                  <h3>
                    Connecting beginners with suitable projects that match their
                    skills, interests, and availability, providing a platform
                    for collaboration and portfolio building.
                  </h3>
                </div>
              </div>
              <div className="landDiv23">
                <div className="landDiv231">
                  <div className="landDiv2311">
                    <h1>Community Building</h1>
                    <h3>
                      Creating a supportive community where beginners can
                      connect with peers, mentors, and industry experts,
                      facilitating knowledge sharing, feedback, and growth.
                    </h3>
                  </div>
                  <div className="landDiv2311">
                    <img src={connect} alt="" />
                  </div>
                </div>
                <div className="landDiv232">
                  <div className="landDiv2321">
                    <h1> Skill Development</h1>
                    <h3>
                      Offering resources, tools, and guidance to help beginners
                      develop their skills, bridge knowledge gaps, and stay
                      up-to-date with industry trends, empowering them to take
                      on new challenges and advance in their careers.
                    </h3>
                  </div>
                  <div className="landDiv2321">
                    <img src={bulb} alt="" />
                  </div>
                </div>
              </div>
            </div>

            <div className="landDiv3">
              <div className="landDiv31">
                <div className="landDiv311">
                  <h1>Connect Developers</h1>
                  <h3>
                    Flowzone connects developers from various roles and skill
                    levels, providing a platform for collaboration and
                    networking. This feature will allow users to find and join
                    projects that match their interests and skills, facilitating
                    meaningful connections and relationships within the
                    community.
                  </h3>
                  <h3>
                    By connecting developers, flowzone will enable the exchange
                    of ideas, expertise, and resources, leading to innovative
                    solutions and growth. Users will be able to learn from each
                    other, share knowledge, and build relationships that can
                    lead to new opportunities, mentorship, and friendships.
                  </h3>
                  <div className="landDiv3111">
                    <Link to="/register" className="landDiv31111">
                      Sign Up
                    </Link>
                    <Link to="/register" className="landDiv31112">
                      Learn More
                    </Link>
                  </div>
                </div>
                <div className="landDiv312">
                  <img src={team} alt="" />
                </div>
              </div>
              <div className="landDiv31">
                <div className="landDiv312">
                  <img src={gear} alt="" />
                </div>
                <div className="landDiv311">
                  <h1>Facilitate Project Collaboration</h1>
                  <h3>
                    Flowzone facilitate project collaboration by providing a
                    range of tools and features that enable seamless
                    communication, organization, and progress tracking. Users
                    will be able to create and manage projects, assign tasks,
                    set deadlines, and share resources, all within a single
                    platform.
                  </h3>
                  <h3>
                    By streamlining project collaboration, flowzone will help
                    developers overcome common obstacles such as
                    miscommunication, procrastination, and lack of
                    accountability. With clear goals, roles, and expectations,
                    users will be able to work together efficiently, deliver
                    high-quality results, and build a portfolio of successful
                    projects.
                  </h3>
                  <div className="landDiv3111">
                    <Link to="/register" className="landDiv31111">
                      Sign Up
                    </Link>
                    <Link to="/register" className="landDiv31112">
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
              <div className="landDiv31">
                <div className="landDiv311">
                  <h1>Foster Skill Development</h1>
                  <h3>
                    Flowzone foster skill development by offering a range of
                    resources, including tutorials, guides, webinars, and
                    workshops. Users will have access to personalized learning
                    paths, skill assessments, and recommendations for
                    improvement, helping them bridge knowledge gaps and stay
                    up-to-date with industry trends.
                  </h3>
                  <h3>
                    By investing in skill development, flowzone will empower
                    developers to take control of their careers, build
                    confidence, and stay competitive in the job market. With a
                    strong foundation in skills and knowledge, users will be
                    able to tackle complex projects, innovate, and make
                    meaningful contributions to the development community.
                  </h3>
                  <div className="landDiv3111">
                    <Link to="/register" className="landDiv31111">
                      Sign Up
                    </Link>
                    <Link to="/register" className="landDiv31112">
                      Learn More
                    </Link>
                  </div>
                </div>
                <div className="landDiv312">
                  <img src={arrow} alt="" />
                </div>
              </div>
            </div>

            <div className="landDiv4">
              <div className="landDiv41">
                <h1>
                  What They Say{" "}
                  <span style={{ color: "rgb(138, 36, 221" }}>About Us</span>
                </h1>
              </div>
              <div className="landDiv42">
                <div className="landDiv421">
                  <h2>"Flowzone Helped Me Find My Dream Team"</h2>
                  <h3>
                    I was struggling to find the right collaborators for my
                    project, but Flowzone connected me with talented developers
                    who shared my vision. We delivered a top-notch product and I
                    couldn't be happier!
                  </h3>
                  <div className="landDiv4211">
                    <img src={person} alt="" />
                    <div className="landDiv42111">
                      <h3>Emily Chen</h3>
                      <h4>Project Manager at TechCorp</h4>
                    </div>
                  </div>
                </div>
                <div className="landDiv422">
                  <h2>"From Junior to Senior Dev in No Time"</h2>
                  <h3>
                    Flowzone's resources and mentorship helped me level up my
                    skills in just a few months. I went from a junior developer
                    to a senior dev, and now I'm leading my own projects!
                  </h3>
                  <div className="landDiv4221">
                    <img src={person} alt="" />
                    <div className="landDiv42211">
                      <h3>David Kim</h3>
                      <h4>Senior Developer at StartUpX</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="landDiv43">
                <div className="landDiv431">
                  <h2>"Flowzone Opened Doors to New Opportunities"</h2>
                  <h3>
                    Thanks to Flowzone, I landed my first big client and grew my
                    freelance business. The community support and feedback were
                    invaluable in helping me improve my craft
                  </h3>
                  <div className="landDiv4311">
                    <img src={person} alt="" />
                    <div className="landDiv43111">
                      <h3>Sophia Patel</h3>
                      <h4>Freelance Developer & Designer</h4>
                    </div>
                  </div>
                </div>
                <div className="landDiv431">
                  <h2>"Collaboration Made Easy with Flowzone"</h2>
                  <h3>
                    Flowzone streamlined our project workflow, making it easy to
                    work with team members across different time zones. We
                    delivered our project ahead of schedule and under budget!
                  </h3>
                  <div className="landDiv4311">
                    <img src={person} alt="" />
                    <div className="landDiv43111">
                      <h3>Michael Brown</h3>
                      <h4>Team Lead at DevOps Inc</h4>
                    </div>
                  </div>
                </div>
                <div className="landDiv431">
                  <h2>"A Game-Changer for Career Growth"</h2>
                  <h3>
                    Flowzone's personalized learning paths and mentorship helped
                    me fill knowledge gaps and stay up-to-date with industry
                    trends. I feel confident in my abilities and ready for new
                    challenges!
                  </h3>
                  <div className="landDiv4311">
                    <img src={person} alt="" />
                    <div className="landDiv43111">
                      <h3>Rachel Lee</h3>
                      <h4>Junior Developer at CodeSprint</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="landDiv44">
                <div className="landDiv441">
                  <h2>Unlock Your Full Potential as a Developer</h2>
                  <h3>
                    Don't miss out on this opportunity to take your skills to
                    the next level. Sign up for Flowzone today and start
                    building your dream projects, connecting with peers, and
                    growing your skills. Our platform is designed to help you
                    succeed, with features like project matching, community
                    building, and skill development resources. Join our
                    community of passionate developers and start achieving your
                    full potential. Sign up now and start flowing!
                  </h3>
                  <div className="landDiv4411">
                    <h3>Your Email Address</h3>
                    <Link to="/register" className="landDiv31111">
                      Sign Up Now
                    </Link>
                  </div>
                </div>
                <div className="landDiv441">
                  <img src={team} alt="" />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Landing;
