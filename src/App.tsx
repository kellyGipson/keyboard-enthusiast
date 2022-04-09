import { useState } from 'react';
import './App.css';

function App() {

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
		const searchParams = ["home", "why", "keytypes", "switchtypes"];
		let result: string = "";
		for(let navItem of searchParams) {
			if(e.currentTarget.classList.contains(navItem)) {
				result = navItem; 
				break;}
		}
		//TODO change left offset to selected nav item
		let selectedNavItem: Element;
		switch(result) {
			case "home": 
				console.log(result); 
				selectedNavItem = document.getElementsByClassName("homeArticle")[0];
        selectedNavItem.scrollIntoView({behavior: "smooth"});
				break;
			case "why": 
				console.log(result); 
				selectedNavItem = document.getElementsByClassName("whyKeyboards")[0];
				selectedNavItem.scrollIntoView();
				break;
			case "keytypes": 
				console.log(result); 
				selectedNavItem = document.getElementsByClassName("keyboards")[0];
        selectedNavItem.scrollIntoView();
				break;
			case "switchtypes": 
				console.log(result); 
				selectedNavItem = document.getElementsByClassName("switches")[0];
				selectedNavItem.scrollIntoView();
				break;
		}
	}

  return (
    <div className="App">
			<header className='header'>
				<h2>Keyboards as a hobby</h2>
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
				<li className='home navItem'        onClick={(e) => handleClickNav(e)}>Home</li>
				<li className='why navItem'         onClick={(e) => handleClickNav(e)}>Why Keyboards?</li>
				<li className='keytypes navItem'    onClick={(e) => handleClickNav(e)}>Types of Keyboards</li>
				<li className='switchtypes navItem' onClick={(e) => handleClickNav(e)}>Types of Switches</li>
			</nav>
			<section className='content'>
				<article className="homeArticle">
					As a keyboard enthusiast, I get a particular brain itch when a keyboard has a certain sound and feel that most people don't really care much about. I want to share a bit about my hobby and perhaps you might be inclined to look further into custom keyboards yourself.
				</article>
				<article className='whyKeyboards'>
					<h1>Why Keyboards?</h1>
					When you've spent 10+ hours on a custom keyboard, the most satisfying part of the entire process is typing on it for the first time. There's something about knowing that you did all of it yourself that makes it all the more worth the tedious hours spent lubricating every last switch, and fine tuning it to your liking. Just like any hobby, keyboards aren't worth it for everyone but as someone who is constantly using a keyboard like myself, a custom keyboard with a tailored look, feel and sound is truly magical.
				</article>
				<article className="keyboards">
					<h1>Types of Keyboards</h1>
					<h4>Pre-built keyboards</h4>
					Pre-built keyboards come in many shapes, sizes, and key layouts. The main takeaway is that a company has created the keyboard, and the sound and the feel are predetermined. There are things you can do to alter the way pre-built keyboards sound and feel, but eventually you will come to a halt when it comes down to modifications. Most of the time, this comes down to build quality amongst other variences.
					<h4>Custom Keyboards</h4>
					Where the real fun comes in, is when you build a keyboard from scratch(with pre-made parts of course). Some crazy people engineer their own keyboards but that is outside of the scope of what I'm going to talk about. Custom keyboards are exactly what you make of them. They take the longest time to build, but when you're finished, the keyboard that you build is exactly as you want it. 
				</article>
				<article className="switches">
					<h1>Types of Switches</h1>
					<h4>Mechanical Switches</h4>
					Mechanical switches are exactly what they sound like. They are switches actuated by a piece called the stem, that when pressed down allows two thin pieces of metal called the leaf to make contact, closing the circuit. They come in three main styles: Linear, Tactile and Clicky. Linear switches actuate well, linearly. Tactile switches have a small bump on the stem that allows the typist to physically feel when the switch actuates. Tactile switches are my favorite. Clicky switches generally have a collar around the bottom of the stem and smack the bottom housing of the switch upon actuation. In my humble opinion, they are novel at first, but eventually get to be very annoying. Especially for other people in the room(or across the house).
				</article>
			</section>
			<footer className='footer'>

			</footer>
    </div>
  );

}

export default App;
