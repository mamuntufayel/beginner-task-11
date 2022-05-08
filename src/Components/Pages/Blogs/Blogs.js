import React from "react";

const Blogs = () => {
  return (
    <div className="container text-center w-75 mx-auto">
      <h3>Difference between javascript and node js</h3>
      <p>
        Ans:NodeJs is a programming language.We use JS mainly to write scripts
        on a website that makes web pages more dynamic in nature.We can run
        NodeJS on browsers.It runs mainly on the client-side.And JavaScript is a
        runtime environment for Javascript that lets a user run this programming
        language on the server-side as well.Javascript needs helps of NodeJs
        outside the browser as well and It runs on the server-side.{" "}
      </p>
      <div>
        <h3>When should you use nodeJS when should use mongodb</h3>
        <p>
          Ans:NodeJS is very good when one need to do several things at the same
          time.NodeJS is event-based so all the excellent like stuff can be done
          on the server side. And Once created collections in MongoDb, MongoDB
          has an integrated distribution system, which includes horizontal
          scaling, geographic distribution, and high availability—all of which
          are easy to use. You can analyze data quickly and easily, which wasn’t
          possible with other NoSQL databases.
        </p>
      </div>
      <div>
        <h3> What is the purpose of jwt and how does it work</h3>
        <p>
          Ans:JWT is an open standard used to share security information between
          two parties — a client and a server. Each JWT contains encoded JSON
          objects, including a set of claims. JWTs are signed using a
          cryptographic algorithm to ensure that the claims cannot be altered
          after the token is issued.The browser sends a POST request to the
          server with the credential like the username and password.Server
          catches the request, verifies it, authenticate it and if everything
          good JWT is generated with a secret and then that passed back to the
          browser.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
