import { useRef, useEffect, useState } from "react";
import Layout from "./components/Layout";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import emailjs from "emailjs-com";

export default function () {
  const el = useRef();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const loadGsap = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      const { ScrollSmoother } = await import("../contexts/ScrollSmoother");

      gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

      const q = gsap.utils.selector(el);

      let smoother = ScrollSmoother.create({
        smooth: 1, // how long (in seconds) it takes to "catch up" to the native scroll position
        effects: true, // looks for data-speed and data-lag attributes on elements
      });

      setIsReady(true);

      return () => {
        smoother.kill();
      };
    };

    loadGsap();
  }, []);

  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [name, setName] = useState("");
  const [name1, setName1] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const formRef = useRef();

  function sendEmail(e) {
    e.preventDefault();

    const isValid = validateInputs();
    if (!isValid) {
      return;
    }
    setSent(true);
    setSending(true);

    emailjs
      .sendForm(
        "service_jf8nza9",
        "template_stv1zyc",
        formRef.current,
        "qe_5QnRhPOV92GdYp"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSending(false);
          setSent(true);
        },
        (error) => {
          console.log(error.text);
          alert(
            "Sorry, there was an error sending your message. Please try again later."
          );
        }
      );
    setTimeout(() => {
      setSending(false);
      setSent(true);
    }, 2000);
  }

  const handleExpired = () => {
    setIsVerified(false);
    // disable submit button
    document.getElementById("submit-btn").Disabled = true;
  };

  function validateInputs() {
    if (!name) {
      alert("Please enter your name");
      return false;
    }

    if (!email) {
      alert("Please enter your email");
      return false;
    }

    if (!message) {
      alert("Please enter your message");
      return false;
    }

    return true;
  }

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleLastNameChange(e) {
    setName1(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handleMessageChange(e) {
    setMessage(e.target.value);
  }

  return (
    <>
      <div ref={el}>
        <Nav />
        <div id="smooth-content" className="h-screen">
          <Layout />
          <div className="flex justify-center w-screen h-screen font-Aboreto">
            <div className="w-screen sm:w-[50%] h-screen grid place-items-center absolute sm:relative z-[15]">
              <form
                onSubmit={sendEmail}
                className="grid gap-3 place-items-center w-[100vw] sm:w-[30vw]"
                ref={formRef}
              >
                <div className="flex w-[90vw] sm:w-[30vw] gap-3">
                  <input
                    type="text"
                    name="from_name"
                    className="bg-transparent border border-black w-[50%] h-[40px] outline-none p-5 text-xs placeholder:text-gray-400 font-thin"
                    placeholder="first name"
                    value={name}
                    onChange={handleNameChange}
                  />
                  <input
                    type="text"
                    name="from_last_name"
                    className="bg-transparent border border-black w-[50%] h-[40px] outline-none p-5 text-xs placeholder:text-gray-400 font-thin"
                    placeholder="last name"
                    value={name1}
                    onChange={handleLastNameChange}
                  />
                </div>
                <input
                  type="email"
                  name="from_email"
                  className="w-[90vw] sm:w-[30vw] bg-transparent border border-black h-[40px] outline-none p-5 text-xs placeholder:text-gray-400 font-thin"
                  placeholder="Email"
                  value={email}
                  onChange={handleEmailChange}
                />
                <textarea
                  type="text"
                  name="message"
                  className="w-[90vw] sm:w-[30vw] bg-transparent border border-black h-[25vh] resize-none outline-none pl-5 pt-3 text-xs placeholder:text-gray-400 font-thin"
                  placeholder="message"
                  value={message}
                  onChange={handleMessageChange}
                />
              </form>
            </div>
            <h1 className="hidden sm:block z-30 absolute text-[4vw] 2xl:text-[4vw] font-thin text-black 2xl:text-5xl  w-max rotate-[-90deg] animatess">
              <span className="h-[50%]"> GET IN TOUCH · GET IN TOUCH ·</span>
              <span className="h-[50%]"> GET IN TOUCH · GET IN TOUCH ·</span>
              <span className="h-[50%]"> GET IN TOUCH · GET IN TOUCH ·</span>
              <span className="h-[50%]"> GET IN TOUCH · GET IN TOUCH ·</span>
              <span className="h-[50%]"> GET IN TOUCH · GET IN TOUCH ·</span>
              <span className="h-[50%]"> GET IN TOUCH · GET IN TOUCH ·</span>
              <span className="h-[50%]"> GET IN TOUCH · GET IN TOUCH ·</span>
              <span className="h-[50%]"> GET IN TOUCH · GET IN TOUCH ·</span>
              <span className="h-[50%]"> GET IN TOUCH · GET IN TOUCH ·</span>
              <span className="h-[50%]"> GET IN TOUCH · GET IN TOUCH ·</span>
              <span className="h-[50%]"> GET IN TOUCH · GET IN TOUCH ·</span>
              <span className="h-[50%]"> GET IN TOUCH · GET IN TOUCH ·</span>
            </h1>
            <div className="w-screen sm:w-[50%] h-screen grid place-items-center">
              <div className="absolute h-screen w-[100vw] sm:w-50%">
                <div className="absolute z-10 w-screen h-screen" />
                <div className="absolute flex p-[3%] sm:p-[7%] gap-5 z-10 sm:z-20 w-[100vw] sm:w-50%  animatesss">
                  <div className="grid gap-5 tt ">
                    <Image
                      src="/img/t.jpg"
                      width={300}
                      height={500}
                      alt="Picture of the author"
                    />
                    <Image
                      src="/img/b.jpg"
                      width={300}
                      height={500}
                      alt="Picture of the author"
                    />
                    <Image
                      src="/img/m.jpg"
                      width={300}
                      height={500}
                      alt="Picture of the author"
                    />
                    <Image
                      src="/img/e.jpg"
                      width={300}
                      height={500}
                      alt="Picture of the author"
                    />
                    <Image
                      src="/img/s.jpg"
                      width={300}
                      height={500}
                      alt="Picture of the author"
                    />
                    <Image
                      src="/img/t.jpg"
                      width={300}
                      height={500}
                      alt="Picture of the author"
                    />
                    <Image
                      src="/img/b.jpg"
                      width={300}
                      height={500}
                      alt="Picture of the author"
                    />
                    <Image
                      src="/img/m.jpg"
                      width={300}
                      height={500}
                      alt="Picture of the author"
                    />
                    <Image
                      src="/img/e.jpg"
                      width={300}
                      height={500}
                      alt="Picture of the author"
                    />
                    <Image
                      src="/img/s.jpg"
                      width={300}
                      height={500}
                      alt="Picture of the author"
                    />
                    <Image
                      src="/img/t.jpg"
                      width={300}
                      height={500}
                      alt="Picture of the author"
                    />
                    <Image
                      src="/img/b.jpg"
                      width={300}
                      height={500}
                      alt="Picture of the author"
                    />
                    <Image
                      src="/img/m.jpg"
                      width={300}
                      height={500}
                      alt="Picture of the author"
                    />
                    <Image
                      src="/img/e.jpg"
                      width={300}
                      height={500}
                      alt="Picture of the author"
                    />
                    <Image
                      src="/img/s.jpg"
                      width={300}
                      height={500}
                      alt="Picture of the author"
                    />
                    <Image
                      src="/img/t.jpg"
                      width={300}
                      height={500}
                      alt="Picture of the author"
                    />
                    <Image
                      src="/img/b.jpg"
                      width={300}
                      height={500}
                      alt="Picture of the author"
                    />
                    <Image
                      src="/img/m.jpg"
                      width={300}
                      height={500}
                      alt="Picture of the author"
                    />
                    <Image
                      src="/img/e.jpg"
                      width={300}
                      height={500}
                      alt="Picture of the author"
                    />
                    <Image
                      src="/img/s.jpg"
                      width={300}
                      height={500}
                      alt="Picture of the author"
                    />
                    <Image
                      src="/img/t.jpg"
                      width={300}
                      height={500}
                      alt="Picture of the author"
                    />
                    <Image
                      src="/img/b.jpg"
                      width={300}
                      height={500}
                      alt="Picture of the author"
                    />
                    <Image
                      src="/img/m.jpg"
                      width={300}
                      height={500}
                      alt="Picture of the author"
                    />
                    <Image
                      src="/img/e.jpg"
                      width={300}
                      height={500}
                      alt="Picture of the author"
                    />
                  </div>
                  <div className="grid gap-5 tt ">
                    <Image
                      src="/img/m.jpg"
                      width={300}
                      height={500}
                      alt="Picture of the author"
                    />
                    <Image
                      src="/img/b.jpg"
                      width={300}
                      height={500}
                      alt="Picture of the author"
                    />
                    <Image
                      src="/img/t.jpg"
                      width={300}
                      height={500}
                      alt="Picture of the author"
                    />
                    <Image
                      src="/img/s.jpg"
                      width={300}
                      height={500}
                      alt="Picture of the author"
                    />
                    <Image
                      src="/img/e.jpg"
                      width={300}
                      height={500}
                      alt="Picture of the author"
                    />
                    <Image
                      src="/img/t.jpg"
                      width={300}
                      height={500}
                      alt="Picture of the author"
                    />
                    <Image
                      src="/img/m.jpg"
                      width={300}
                      height={500}
                      alt="Picture of the author"
                    />
                    <Image
                      src="/img/s.jpg"
                      width={300}
                      height={500}
                      alt="Picture of the author"
                    />
                    <Image
                      src="/img/e.jpg"
                      width={300}
                      height={500}
                      alt="Picture of the author"
                    />
                    <Image
                      src="/img/b.jpg"
                      width={300}
                      height={500}
                      alt="Picture of the author"
                    />
                    <Image
                      src="/img/s.jpg"
                      width={300}
                      height={500}
                      alt="Picture of the author"
                    />
                    <Image
                      src="/img/b.jpg"
                      width={300}
                      height={500}
                      alt="Picture of the author"
                    />
                    <Image
                      src="/img/m.jpg"
                      width={300}
                      height={500}
                      alt="Picture of the author"
                    />
                    <Image
                      src="/img/e.jpg"
                      width={300}
                      height={500}
                      alt="Picture of the author"
                    />
                    <Image
                      src="/img/s.jpg"
                      width={300}
                      height={500}
                      alt="Picture of the author"
                    />
                    <Image
                      src="/img/t.jpg"
                      width={300}
                      height={500}
                      alt="Picture of the author"
                    />
                    <Image
                      src="/img/b.jpg"
                      width={300}
                      height={500}
                      alt="Picture of the author"
                    />
                    <Image
                      src="/img/m.jpg"
                      width={300}
                      height={500}
                      alt="Picture of the author"
                    />
                    <Image
                      src="/img/e.jpg"
                      width={300}
                      height={500}
                      alt="Picture of the author"
                    />
                    <Image
                      src="/img/t.jpg"
                      width={300}
                      height={500}
                      alt="Picture of the author"
                    />
                    <Image
                      src="/img/s.jpg"
                      width={300}
                      height={500}
                      alt="Picture of the author"
                    />
                    <Image
                      src="/img/b.jpg"
                      width={300}
                      height={500}
                      alt="Picture of the author"
                    />
                    <Image
                      src="/img/e.jpg"
                      width={300}
                      height={500}
                      alt="Picture of the author"
                    />
                    <Image
                      src="/img/m.jpg"
                      width={300}
                      height={500}
                      alt="Picture of the author"
                    />
                  </div>
                </div>
              </div>
              <button
                onClick={sendEmail}
                value="Send"
                id="submit-btn"
                className="w-[12vh] h-[12vh] -mt-10 sm:w-[20vh] sm:h-[20vh] bg-black rounded-full text-white z-20 hover:bg-[#ffffff5d] hover:backdrop-blur-lg hover:text-black transition-all"
              >
                {sending ? (
                  <span>...</span>
                ) : sent ? (
                  <span>&#10004;</span>
                ) : (
                  <span>SEND</span>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
