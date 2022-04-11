import { useEffect, useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io'

import './App.css';

function App() {

  const [headerHide, setHeaderHide] = useState("");
  let prevY = window.scrollY;
  function handleScrollNav() {
    let currentY = window.scrollY;
    setHeaderHide((prevY < currentY) ? " headerHide" : "");
    prevY = currentY;
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScrollNav);
    return () => {
      window.removeEventListener("scroll", handleScrollNav)
    }
  }, []);

	const [navOpen, setNavOpen] = useState("");

	const [HamburgerHoverActive, setHamburgerHoverActive] = useState(false);
	const [hamburgerHoverClass, setHamburgerHoverClass] = useState("");
	function setHBLineHover() {
		setHamburgerHoverActive(!HamburgerHoverActive);
		setHamburgerHoverClass((!HamburgerHoverActive) ? "hbline-hover " : "");
	}

	function toggleNav() {
		setNavOpen((!navOpen) ? " hasNavOpen" : "");
	}

	function handleClickNav(e: React.MouseEvent<HTMLSpanElement, MouseEvent>) {
		toggleNav();
		const searchParams = ["homeArticle", "whyKeyboards", "keyboards", "switches"];
		for(let navItem of searchParams) {
			if(e.currentTarget.classList.contains(navItem)) {
        document.getElementsByClassName(navItem)[1].scrollIntoView({block: 'start'});
        break;
      }
		}
	}

  return (
    <div className="App">
      <div className="downArrowContainer">
        <div>Scroll Down</div> 
        <IoIosArrowDown className='downArrow downArrow-scrollDown'></IoIosArrowDown>
      </div>
			<header className={`header${headerHide}`}>
				<h2>Keyboard Hobby</h2>
				<span className="hamburger" 
          onMouseEnter={() => setHBLineHover()} 
          onMouseLeave={() => setHBLineHover()} 
          onClick={(e) => toggleNav()}
        >
					<div className={`${hamburgerHoverClass}lineOne`  }></div>
					<div className={`${hamburgerHoverClass}lineTwo`  }></div>
					<div className={`${hamburgerHoverClass}lineThree`}></div>
				</span>
			</header>
			<nav className={`nav${navOpen}`}>
				<li className='homeArticle navItem'  onClick={(e) => handleClickNav(e)}>Home</li>
				<li className='whyKeyboards navItem' onClick={(e) => handleClickNav(e)}>Why Keyboards?</li>
				<li className='keyboards navItem'    onClick={(e) => handleClickNav(e)}>Types of Keyboards</li>
				<li className='switches navItem'     onClick={(e) => handleClickNav(e)}>Types of Switches</li>
			</nav>
			<section className='content'>
				<article className="homeArticle">
          <div className="imageShade"></div>
          <img className='contentImg' src={require("./assets/custom-keyboard-1.webp")} alt="Custom Keyboard" />
          <p className='contentText'>As a keyboard enthusiast, I get a particular brain itch when a keyboard has a certain sound and feel that most people don't really care much about. I want to share a bit about my hobby and perhaps you might be inclined to look further into custom keyboards yourself.</p>
				</article>
				<article className='articleContainer whyKeyboards'>
          <img className='contentImg' src={require("./assets/custom-keyboard-2.webp")} alt="Another Custom Keyboard" />
					<h1 className='contentText'>Why Keyboards?</h1>
          <p className='contentText'>When you've spent 10+ hours on a custom keyboard, the most satisfying part of the entire process is typing on it for the first time. There's something about knowing that you did all of it yourself that makes it all the more worth the tedious hours spent lubricating every last switch, and fine tuning it to your liking. Just like any hobby, keyboards aren't worth it for everyone but as someone who is constantly using a keyboard like myself, a custom keyboard with a tailored look, feel and sound is truly magical.</p>
				</article>
				<article className="articleContainer keyboards">
          <img className='contentImg' src={require("./assets/pre-built-keyboard.webp")} alt="Pre-built keyboard"/>
					<h1 className='contentText'>Types of Keyboards</h1>
					<h4 className='contentText'>Pre-built keyboards</h4>
          <p className='contentText'>Pre-built keyboards come in many shapes, sizes, and key layouts. The main takeaway is that a company has created the keyboard, and the sound and the feel are predetermined. There are things you can do to alter the way pre-built keyboards sound and feel, but eventually you will come to a halt when it comes down to modifications. Most of the time, this comes down to build quality amongst other variences.</p>
          <img className='contentImg' src={require("./assets/custom-keyboard-3.webp")} alt="Custom Keyboard" />
					<h4 className='contentText'>Custom Keyboards</h4>
          <p className='contentText'>Where the real fun comes in, is when you build a keyboard from scratch(with pre-made parts of course). Some crazy people engineer their own keyboards but that is outside of the scope of what I'm going to talk about. Custom keyboards are exactly what you make of them. They take the longest time to build, but when you're finished, the keyboard that you build is exactly as you want it. </p>
				</article>
				<article className="articleContainer switches">
          <img className='contentImg' src={require("./assets/switches.webp")} alt="Exposed keyboard switches on a keyboard" />
					<h1 className='contentText'>Types of Switches</h1>
					<h4 className='contentText'>Mechanical Switches</h4>
          <p className='contentText'>Mechanical switches are exactly what they sound like. They are switches actuated by a piece called the stem, that when pressed down allows two thin pieces of metal called the leaf to make contact, closing the circuit. They come in three main styles: Linear, Tactile and Clicky. Linear switches actuate well, linearly. Tactile switches have a small bump on the stem that allows the typist to physically feel when the switch actuates. Tactile switches are my favorite. Clicky switches generally have a collar around the bottom of the stem and smack the bottom housing of the switch upon actuation. In my humble opinion, they are novel at first, but eventually get to be very annoying. Especially for other people in the room(or across the house).</p>
				</article>
			</section>
			<footer className='footer'>
        <p className='footerText'>Website crafted from scratch by Kelly Gipson. 
          <a href="https://github.com/kellyGipson/" target="_blank" rel='noreferrer' className='githublink footerlink'>
            <FaGithub />
          </a>
        </p>
			</footer>
    </div>
  );

}

export default App;
