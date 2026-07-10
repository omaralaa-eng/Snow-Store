import { useState,useEffect,useRef } from 'react'
import emailjs from '@emailjs/browser'
import './App.css'

function App() {
  const [selected, setSelected] = useState(0)
  const [buy,setBuy] = useState(false)
  const [gameName,setGameName] = useState("")
  const [gamePrice,setGamePrice] = useState()
  const [gameImage,setGameImage] = useState("")
  const [gameWish,setGameWish] = useState(false)
  const [searchValue, setSearchValue] = useState("");
  const NavRef = useRef(null)
  const serchInputRef = useRef(null);
  const [email,setEmail] = useState("")
  const [steamUser,setSteamUser] = useState("")
  const [steamPass,setSteamPass] = useState("")
  const [whatsApp,setWhatsApp] = useState("")
  const [payNo,setPayNo] = useState("")
  const [Sent,setSent] = useState(false)
  const [error,setError] = useState()
  const [next,setNext] = useState(0)
  const [none,setNone] = useState(false)
  const [loading,setLoading] = useState(false)
  const specialRef = useRef(null)
  const mainGames = useRef(null)
  const [circle,setCircle] = useState(1)
  const scroll = useRef({})
  useEffect(() => {
    const handleScroll = () => {
      if(selected === 0 || selected === 4){
      if (window.scrollY > 270) {
        setNone(true)
      } else {
        setNone(false)
      }
    }
    else{
     setNone(false)
    }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [selected]);

  useEffect(()=>{
    const savedScroll = scroll.current[buy];
    window.scrollTo(0,savedScroll);
  },[buy])


  function goToBuy(name,price,image,wish){
    scroll.current[buy] = window.scrollY;
    setGameName(name);
    setGamePrice(price);
    setGameImage(image)
    setGameWish(wish)
    setBuy(true);
  }

function Next(){
  mainGames.current.scrollLeft += 400;
}
function Back1(){
  mainGames.current.scrollLeft -= 400;
}
  const [games,setGames] = useState([
    { id: 1,
      name: 'Resident Evil 4',
      price: 1815,
      priceU: 1925,
      priceE: 2090,
      priceT: 2090, 
      image: 'https://wallpapercave.com/wp/wp12116720.jpg',
      bought: false,
      wishlist: false,
      special: true,
      recommed: true,
    },
    { id: 2,
      name: 'FC26',
      price: 550,
      priceU: 2695,
      priceE: 4840,
      priceT: 4840,
      image: 'https://wallpapercave.com/wp/wp15596323.jpg',
      bought: false,
      wishlist: false,
      special: false,
      recommed: true,
     },
    { id: 3,
       name: 'God of War',
       price: 2365,
       priceU: 1925,
       priceE: 3465,
       priceT: 3465,
       image: 'https://wallpaperaccess.com/full/707061.jpg',
       bought: false,
       wishlist: false,
      special: false,
      recommed: true,
      },
    { id: 4,
      name: 'Uncharted 4',
      price: 900,
      priceU: 2695,
      priceE: 4840,
      priceT: 4840,
      image: 'https://wallpaperaccess.com/full/40632.jpg',
      bought: false,
      wishlist: false,
      special: true,
      recommed: true, 
     },
    { id: 5,
      name: 'GTA V',
      price: 1210,
      priceU: 1430,
      priceE: 1375,
      priceT: 1375,
      image: 'https://4kwallpapers.com/images/wallpapers/grand-theft-auto-v-2880x1800-10738.jpg',
      bought: false,
      wishlist: false,
      special: false,
      recommed: false, 
        },
    { id: 6,
       name: 'Assassins Creed Valhalla',
      price: 750,
      image: 'https://wallpaperaccess.com/full/2702188.jpg',
      bought: false,
      wishlist: false,
      special: false,
      recommed: true, 
        },
    { id: 7,
       name: 'The Last of Us',
      price: 2860,
      priceU: 2695,
      priceE: 4125,
      priceT: 4125,
      image: 'https://wallpapercave.com/wp/wp6448323.png',
      bought: false,
      wishlist: false,
      special: true,
      recommed: true, 
        },
  {   id: 8,
      name: 'Horizon Zero Dawn',
      price: 1500,
      priceU: 2695,
      priceE: 4840,
      priceT: 4840,
      image: 'https://getwallpapers.com/wallpaper/full/3/f/7/789279-new-horizon-zero-dawn-wallpapers-3840x2160-smartphone.jpg',
      bought: false,
      wishlist: false,
      special: false,
      recommed: true, 
     },
    { id: 9,
       name: 'Forza Horizon 5',
      price: 2530,
      priceU: 1925,
      priceE: 2255,
      priceT: 2255,
      image: 'https://wallpaperaccess.com/full/6070334.jpg',
      bought: false,
      wishlist: false,
      special: false,
      recommed: true, 
      },
    { id: 10,
       name: 'Cyberpunk 2077',
       price: 2200,
      priceU: 2200,
      priceE: 3135,
      priceT: 3135,
       image: 'https://wallpaperaccess.com/full/1096894.jpg',
       bought: false,
       wishlist: false,
       special: false,
       recommed: true, 
      },
      {
        id: 11,
        name: 'Elden Ring',
        price: 2585,
         priceU: 2860,
      priceE: 2750,
      priceT: 2750,
        image: 'https://4kwallpapers.com/images/wallpapers/elden-ring-pc-games-playstation-4-playstation-5-xbox-one-1920x1080-7712.jpg',
        bought: false,
        wishlist: false,
        special: true,
        recommed: true, 
      },
      {
        id: 12,
        name: 'Red Dead Redemption 2',
        price: 935,
         priceU: 1045,
        priceE: 1045,
        priceT: 1045,
        image: 'https://wallpapercave.com/wp/wp3660596.jpg',
        bought: false,
        wishlist: false,
        special: true,
        recommed: true, 
      },
      {
        id: 13,
        name: 'Black Myth: Wukong',
        price: 2250,
        priceU: 2695,
        priceE: 4840,
        priceT: 4840,
        image: 'https://4kwallpapers.com/images/wallpapers/black-myth-wukong-3840x2160-17948.jpeg',
        bought: false,
        wishlist: false,
        special: false,
        recommed: false, 
      },
      {
        id: 14,
        name: 'Ready or Not',
        price: 1485,
        priceU: 990,
        priceE: 2035,
        priceT: 2035,
        image: 'https://www.senses.se/wp-content/uploads/2025/10/ready-or-not-finish-cl-250331.jpg',
        bought: false,
        wishlist: false,
        special: false,
        recommed: true, 
      },
       {
        id: 15,
        name: 'Clair Obscur: Expedition 33',
        price: 2200,
         priceU: 2365,
      priceE: 2420,
      priceT: 2420,
        image: 'https://image.api.playstation.com/vulcan/ap/rnd/202412/1011/2f394381118d051422d9d8da9e9ea7f9bc300c6b746483c6.jpg',
        bought: false,
        wishlist: false,
        special: false,
        recommed: false, 
      },
       {
        id: 16,
        name: 'Marvels Spider-Man Remastered',
        price: 2860,
         priceU: 2200,
      priceE: 4125,
      priceT: 4125,
        image: 'https://wallpapercave.com/wp/wp7593605.jpg',
        bought: false,
        wishlist: false,
        special: false,
        recommed: true, 
      },
       {
        id: 17,
        name: "Call of Duty: Modern Warfare II",
        price: 3630,
         priceU: 3740,
      priceE: 4840,
      priceT: 4840,
        image: "https://tse3.mm.bing.net/th/id/OIP.NXILAogM1nnMSkI-1ennKwHaEK?pid=Api&h=220&P=0",
        bought: false,
        wishlist: false,
        special: false,
        recommed: true, 
      },
      {
        id: 18,
        name: "Assassin's Creed Mirage",
        price: 750,
        image: "https://wallpapercave.com/wp/wp11468139.jpg",
        bought: false,
        wishlist: false,
        special: false,
        recommed: true, 
      },
      {
        id: 19,
        name: "Tom Clancy's Rainbow Six Siege",
        price: 500,
        image: "https://wallpapercave.com/wp/wp3830478.jpg",
        bought: false,
        wishlist: false,
        special: false,
        recommed: true, 
      },
      {
        id: 20,
        name: "ARC Raiders",
        price: 1600,
        image: "https://4kwallpapers.com/images/wallpapers/arc-raiders-key-art-2560x1440-19855.jpg",
        bought: false,
        wishlist: false,
        special: false,
        recommed: false, 
      },
      {
        id: 21,
        name: "UNCHARTED: Legacy of Thieves Collection",
        price: 850,
        image: "https://wallpapercave.com/wp/wp10511331.jpg",
        bought: false,
        wishlist: false,
        special: false,
        recommed: true, 
      },
      {
        id: 22,
        name: "DOOM: The Dark Ages",
        price: 2200,
        image: "https://4kwallpapers.com/images/wallpapers/doom-the-dark-ages-3840x2160-20800.jpg",
        bought: false,
        wishlist: false,
        special: false,
        recommed: false, 
      },
      {
        id: 23,
        name: "DETROIT",
        price: 700,
        image: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2024/09/detroit-become-human.jpg",
        bought: false,
        wishlist: false,
        special: false,
        recommed: true, 
      },
  ] )
const [games2,setGames2] = useState(games)
const [games3,setGames3] = useState()
  function Search() {
    setSearchValue(serchInputRef.current.value);
    const searchInput = serchInputRef.current.value.toLowerCase();
    const filteredGames = games.filter((game) =>
      game.name.toLowerCase().includes(searchInput)
    );
    setGames2(filteredGames);
  }

useEffect(() => {
  const storedGames = localStorage.getItem("saved3");

  if (storedGames) {
    const stored = JSON.parse(storedGames);
    const merged = games.map((game) => {
      const savedGame = stored.find((g) => g.id === game.id);
      return savedGame
        ? { ...game, bought: savedGame.bought, wishlist: savedGame.wishlist }
        : game;
    });
    setGames(merged);
    setGames2(merged);
  }
}, []);

useEffect(() =>{
  const interval = setInterval(() =>{
        const el = specialRef.current;

        if(el.scrollLeft + el.clientWidth >= el.scrollWidth -1){
          el.scrollLeft = 0
        }else{
          el.scrollLeft += el.clientWidth;
        }

   },5000)


  return () => clearInterval(interval);
},[])

useEffect(() => {
  const el = specialRef.current;
   if(!el || buy) return;
  const handleScroll = () => {
   
    const index = Math.round(el.scrollLeft / el.clientWidth);
    setCircle(index + 1);
   
  };

  el.addEventListener("scroll", handleScroll);

  return () => {
    el.removeEventListener("scroll", handleScroll);
  };
},[selected,buy]);

function Hand(){
  if (!email || !steamPass || !steamUser || !whatsApp || !payNo) {
      setError("Please fill all fields")
      setTimeout(() =>{
             setError("")
          },3000)
      return
    }
     if (whatsApp.trim().length !== 11 || !whatsApp.trim().startsWith("01") || isNaN(whatsApp) ) {
          setError("Please enter a valid number")
          setTimeout(() =>{
             setError("")
          },5000)
          return
     }
     if(payNo.trim().length < 6){
       setError("Please enter a valid Transaction ID")
          setTimeout(() =>{
             setError("")
          },5000)
          return
     }
     if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())){
       setError("Please enter a valid email")
          setTimeout(() =>{
             setError("")
          },5000)
          return
     }setLoading(true)
    emailjs.send(
      "service_iutzono",
      "template_i28ez5q",
      {
        gmail: email,
        steamUser: steamUser,
        steamPass: steamPass,
        whatsApp: whatsApp,
        payNo: payNo,
        gameName: gameName,
      },
      "HaYR2qNVjiwhpY3Df"
    ).then(() => {
      const updatedGames = games.map((g) => {
        if (g.name === gameName) {
          return { ...g, bought: true };
        }
        return g;
      });
      setGames(updatedGames);
      setGames2(updatedGames);
      localStorage.setItem("saved3", JSON.stringify(updatedGames));

      setSent(true)
      setLoading(false)
      setBuy(false)
      setNext(0)
      setTimeout(()=>{
        setSent(false)
      },5000)
    }).catch((err) => {
      console.error(err)
      setLoading(false)
      setError("Something went wrong, try again")
      setTimeout(() =>{
             setError("")
          },5000)
    })
}
function Back(){
  setBuy(false)
  setNext(0)
}
  return (
    <>
       {!buy &&
     <main className='main'>
    
       <header className='header' id='home'>
         <h1>Snow Store</h1>
         <div className="">
         <p>Steam games & Steam gift cards</p>
         </div>
          <img src="https://www.pngmart.com/files/15/Egypt-Flag-Download-PNG-Image.png" alt="Egypt logo" />
       
       </header>
          {none && <div className='nav' style={{opacity:"0",marginTop:"30px"}}></div>}
          <nav className={none ?"scrolled":"nav"} ref={NavRef}>
       { selected < 4 &&<>
        
            <div className={selected === 0 ? 'selected' : 'divNav'} onClick={() => {setSelected(0);setNone(false)}}><a ><i class="fa-solid fa-house"></i></a></div>
            <div className={selected === 1 ? 'selected' : 'divNav'} onClick={() => {setSelected(1);setNone(false)}}><a ><i class="fa-solid fa-magnifying-glass"></i></a></div>
            <div className={selected === 2 ? 'selected' : 'divNav'} onClick={() => {setSelected(2);setNone(false)}}><a ><i class="fa-solid fa-cart-shopping"></i></a></div>
            <div className={selected === 3 ? 'selected' : 'divNav'} onClick={() => {setSelected(3);setNone(false)}}><a ><i class="fa-solid fa-heart"></i></a></div>
            <div className='divNav' onClick={() => {setSelected(4);if(window.scrollY > 270){setNone(true)}else{setNone(false)}}}><a ><i class="fa-solid fa-plus"></i></a></div>
       </>}

        {selected >= 4 && <>
            <div className={selected === 4 ? 'selected' : 'divNav2'} onClick={() => {setSelected(4);setNone(false)}}><p >All games</p></div>
            <div className={selected === 5 ? 'selected' : 'divNav2'} onClick={() => {setSelected(5);setNone(false)}}><p >Steam gift cards</p></div>
            <div className={selected === 6 ? 'selected' : 'divNav2'} onClick={() => {setSelected(6);setNone(false)}}><p >Support</p></div>
            <div className={selected === 7 ? 'selected' : 'divNav2'} onClick={() => {setSelected(7);setNone(false)}}><p >To pay</p></div>
            <div className='divNav' onClick={() => {setSelected(0);if(window.scrollY > 270){setNone(true)}else{setNone(false)}}}><a > <i class="fa-solid fa-arrow-left"></i></a></div>
        </> } </nav> 
       
        {selected === 0 && <>
            <section className="scrollDiv">
              <div className="container" ref={specialRef}>
                  {games.filter((g)=> g.special === true).map((game)=>(<>
                    <div className='special' key={game.id} onClick={() => goToBuy(game.name,game.price,game.image,game.wishlist)}>

                      <img src={game.image} alt={game.name} />
                      <h1>{game.name}</h1>
                  </div>
                 </> ))}
                  </div>

                  <div className="scrollI">
               <div className={circle === 1 ? "circle2" :"circle"} onClick={() => {specialRef.current.scrollLeft = 0 }}></div>
               <div className={circle === 2? "circle2" :"circle"}  onClick={() => {specialRef.current.scrollLeft = specialRef.current.clientWidth}}></div> 
               <div className={circle === 3? "circle2" :"circle"}  onClick={() => {specialRef.current.scrollLeft = specialRef.current.clientWidth * 2 }}></div>
               <div className={circle === 4? "circle2" :"circle"}  onClick={() => {specialRef.current.scrollLeft = specialRef.current.clientWidth * 3 }}></div>
               <div className={circle === 5? "circle2" :"circle"}  onClick={() => {specialRef.current.scrollLeft = specialRef.current.clientWidth * 4 }}></div>
                 </div>

                 <h1 className='welcome'>Welcome to Snow Store <i class="fa-brands fa-steam-symbol"></i></h1>
                 <hr />

                 <h1  className='welcome'>What we offer :</h1>
                 <div className="service">

                   <div className="" onClick={() => setSelected(4)}><p>Steam games</p></div>
                   <div className="giftCard" onClick={() => setSelected(5)}><p>Steam gift cards</p></div>

                 </div>
                       
                  <hr style={{margin:"80px auto"}}/>
                  <h1>Recommneded Games:</h1>
                  <div className='mainGames' ref={mainGames}>
                   {games.filter((g) => g.recommed).map((game) => (

                     <div className="game" style={{width:"250px",margin:"0"}} key={game.id} onClick={() => goToBuy(game.name,game.price,game.image,game.wishlist)}>
                      <img src={game.image} alt={game.name} />
                      <h3 className={game.name.length > 18  ? "scroll2" : ""} >{game.name}</h3>
                      <p className={game.name.length > 18  ?"pLength":""}>{game.price} EGP</p>

                      {game.bought && <button className='btnBuy' onClick={() => goToBuy(game.name, game.price,game.image,game.wishlist)}>Buy again</button>}
                     
                      <button className={game.bought?"bought" :"btnBuy"} disabled={game.bought} onClick={() => goToBuy(game.name, game.price,game.image,game.wishlist)}>
                        {game.bought ? 'Bought' : 'Buy'}
                      </button>

                      <button className="btnWishlist" onClick={(e) => {
                        e.stopPropagation()
                        const updatedGames = games.map((g) => {
                          if (g.id === game.id) {
                            return { ...g, wishlist: !g.wishlist };
                          }
                          return g;
                          
                        });
                        setGames2(updatedGames);
                        setGames(updatedGames);
                        localStorage.setItem("saved3",JSON.stringify(updatedGames))
                      }
                      }>
                        {game.wishlist ? <i class="fa-solid fa-heart"></i> : <i class="fa-regular fa-heart"></i>}
                      </button>
                    </div>
                    
                   ))} </div>
                  <i class="fa-solid fa-angle-right" id='next' onClick={Next}></i>  <i class="fa-solid fa-angle-left" id='back' onClick={Back1}></i>
                  <hr style={{margin:"80px auto"}}/>

                  <h1 className='welcome'>How to pay:</h1>
                   <div className="paymentMethod" onClick={() => setSelected(7)}><p>Payment method</p></div>

                   <footer className="footer">
      <div className="footer-container">
        <div className="footer-col brand">
          <h2 className="footer-logo">Snow<span>Store</span></h2>
          <p>Your trusted store for Steam games at the best prices and fastest delivery.</p>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li onClick={() => setSelected(0)}><a>Home</a></li>
            <li onClick={() => setSelected(4)}><a>Games</a></li>
            <li onClick={() => setSelected(3)}><a>Wishlist</a></li>
            <li onClick={() => setSelected(2)}><a>Cart</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Support</h4>
          <ul>
            <li onClick={() => setSelected(7)}><a>Payment Methods</a></li>
            <li onClick={() => setSelected(6)}><a>Contact Us</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Follow Us</h4>
          <div className="footer-socials">
            <a href="https://www.facebook.com/share/1CohKdH2wc/" target='_blank'><i className="fa-brands fa-facebook"></i></a>
            <a href="https://www.instagram.com/__ommaarr.a__? igsh=a2JIODNzdXFqZmk3" target='_blank'><i className="fa-brands fa-instagram"></i></a>
            <a href="https://wa.me/qr/AUKSFTDUYHWFD1" target="_blank"><i className="fa-brands fa-whatsapp"></i></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Snow Store. All rights reserved.</p>
      </div>
    </footer>
            </section> </>}


                 {selected === 1 && <>
                  <section className="sec2">
                    <form>
                      <input className="search-input" type="search" placeholder="Search for a game..." onChange={Search}  ref={serchInputRef}/>
                      <i class="fa-solid fa-magnifying-glass" id="search-icon" onClick={Search}></i>
                      {/* <i class="fa-solid fa-arrow-down-wide-short" id="sort-icon"></i> */}
                    </form>
                    <section className="sec">
                      {searchValue === "" ? <p className="search-p">Please enter a game name to search.</p> : <>
                     {games2.map((game) => (
                    <div className="game" key={game.id} onClick={() => goToBuy(game.name,game.price,game.image,game.wishlist)}>
                      <img src={game.image} alt={game.name} />
                      <h3 className={game.name.length > 23  ? "scroll" : ""}>{game.name}</h3>
                      <p className={game.name.length > 23  ?"pLength":""}>{game.price} EGP</p>

                      {game.bought && <button className='btnBuy' onClick={() => goToBuy(game.name, game.price,game.image,game.wishlist)}>Buy again</button>}
                      <button className={game.bought?"bought" :"btnBuy"} disabled={game.bought} onClick={() => goToBuy(game.name, game.price,game.image,game.wishlist)}>
                        {game.bought ? 'Bought' : 'Buy'}
                      </button>
                      <button className="btnWishlist" onClick={(e) => {
                          e.stopPropagation()
                        const updatedGames = games.map((g) => {
                          if (g.id === game.id) {
                            return { ...g, wishlist: !g.wishlist };
                          }
                          return g;
                          
                        });
                        setGames2(updatedGames);
                        setGames(updatedGames);
                        localStorage.setItem("saved3",JSON.stringify(updatedGames))
                      }}>
                        {game.wishlist ? <i class="fa-solid fa-heart"></i> : <i class="fa-regular fa-heart"></i>}
                      </button>
                    </div>
                  ))}</>}
                  </section>
                  </section>
                 </>}


                  {selected === 2 && <>
                  <section className="sec">
                      {games.filter((game) => game.bought).length === 0 ? (
                        <p className="search-p">Your cart is empty.</p>
                      ) : (
                        games.filter((game) => game.bought).map((game) => (
                          <div className="game" key={game.id} >
                            <img src={game.image} alt={game.name} />
                            <h3 className={game.name.length > 23  ? "scroll" : ""}>{game.name}</h3>
                            <p className={game.name.length > 23  ?"pLength":""}>{game.price} EGP</p>


                            <button className={game.bought?"bought" :"btnBuy"} disabled={game.bought}>
                              Bought
                            </button>
                          </div>
                        ))
                      )}
                  </section>
                  </>}

                  {selected === 3 && <>
                  <section className="sec">
                      {games.filter((game) => game.wishlist).length === 0 ? (
                        <p className="search-p">Your wishlist is empty.</p>
                      ) : (
                        games.filter((game) => game.wishlist).map((game) => (
                          <div className="game" key={game.id} onClick={() => goToBuy(game.name,game.price,game.image,game.wishlist)}>
                            <img src={game.image} alt={game.name} />
                            <h3 className={game.name.length > 23  ? "scroll" : ""}>{game.name}</h3>
                            <p className={game.name.length > 23  ?"pLength":""}>{game.price} EGP</p>

                            {game.bought && <button className='btnBuy' onClick={() => goToBuy(game.name, game.price,game.image,game.wishlist)}>Buy again</button>}

                             <button className={game.bought?"bought" :"btnBuy"} disabled={game.bought} onClick={() => goToBuy(game.name, game.price,game.image,game.wishlist)}>
                                {game.bought ? 'Bought' : 'Buy'}
                              </button>

                            <button className="btnWishlist" onClick={(e) => {
                                e.stopPropagation()
                              const updatedGames = games.map((g) => {
                                if (g.id === game.id) {
                                  return { ...g, wishlist: !g.wishlist };
                                }
                                return g;
                              });
                              setGames(updatedGames);
                              setGames2(updatedGames);
                              localStorage.setItem("saved3",JSON.stringify(updatedGames))
                            }}>
                             <i class="fa-solid fa-heart"></i>
                            </button>
                          </div>
                        ))
                      )}
                  </section>
                  </>}

                   {selected === 4 && <>
            <section className="sec">
                  {games.map((game) => (
                    <div className="game" key={game.id} onClick={() => goToBuy(game.name,game.price,game.image,game.wishlist)}>
                      <img src={game.image} alt={game.name} />
                      <h3 className={game.name.length > 23 ? "scroll" : ""}>{game.name}</h3>
                      <p className={game.name.length > 23 ?"pLength":""}>{game.price} EGP</p>
                      {game.bought && <button className='btnBuy' onClick={() => goToBuy(game.name, game.price,game.image,game.wishlist)}>Buy again</button>}
                      <button className={game.bought?"bought" :"btnBuy"} disabled={game.bought} onClick={() => goToBuy(game.name, game.price,game.image,game.wishlist)}>
                        {game.bought ? 'Bought' : 'Buy'}
                      </button>
                      <button className="btnWishlist" onClick={(e) => {
                          e.stopPropagation()
                        const updatedGames = games.map((g) => {
                          if (g.id === game.id) {
                            return { ...g, wishlist: !g.wishlist };
                          }
                          return g;
                          
                        });
                        setGames(updatedGames);
                        setGames2(updatedGames);
                        localStorage.setItem("saved3",JSON.stringify(updatedGames))
                      }}>
                        {game.wishlist ? <i class="fa-solid fa-heart"></i> : <i class="fa-regular fa-heart"></i>}
                      </button>
                    </div>
                  ))}
            </section> </>}

            {selected === 5 && <section className='sec'>
                <h1>comming soon..</h1>
              </section>}

              {selected === 6 && <><h1 className='contact'>You can contact us through:</h1><section className='sec4'>
                <div className="game2"  onClick={() => window.open("https://www.facebook.com/share/1CohKdH2wc/")}>
                  <i class="fa-brands fa-facebook-f" style={{color:"blue"}}></i>
                </div>
                <div className="game2" onClick={() => window.open("https://www.instagram.com/__ommaarr.a__? igsh=a2JIODNzdXFqZmk3")} id='instaD'>
                   <i class="fa-brands fa-instagram" id='insta'></i>
                </div>
                <div className="game2" id='grid3' onClick={() => window.open("https://wa.me/qr/AUKSFTDUYHWFD1")}>
                    <i class="fa-brands fa-whatsapp" style={{color:"rgb(14, 218, 14)",fontSize:"100px"}}></i>
                </div>
                </section></>}

                  {selected === 7 && <>
                  <section className="About">
                    <h1>Payment method:</h1>
                    <ol>
                      <li>Choose your game and click "Buy".</li>
                      <li>A QR code will appear to Pay with InstaPay or Vodafon cash.</li>
                      <li>After paying click next.</li>
                      <li>Fill the form that appears and submit it.</li>
                      <li className='li1'>After submitting the form, you will receive our message in your email and what's app.</li>
                      <li className='li1'>We will process your order and send you the game in your Steam account when it's finished.</li>
                      <li className='li1'>You can track your order status at any time on What's App.</li>
                    </ol>
                  </section>
                  </>}

                   {Sent && (
                      <div className='message'>
                        <h2>Your order has been received!</h2>
                        <p>We will text you on Whats App.</p>
                      </div>
                    )}

     </main>}
   {buy &&
       <main className="main">
         <section className='sec3'>
           
          {next === 0 && <>
            <div className="buyPage">
              <img src={gameImage} alt={gameName} />
                <h1 className='Gamename g1' > <span>{gameName}</span></h1>
                <h1 className='Gamename2 g2' > <span> {gamePrice} EGP</span></h1>
                <button type='button' onClick={() => setNext(prev => prev += 1)} className='btnNext'>Next</button>

                  <button  className="btnWishlist2" onClick={(e) => {
                        e.stopPropagation()
                        const updatedGames = games.map((g) => {
                          if (g.name === gameName) {
                            return { ...g, wishlist: !g.wishlist };
                          }
                          return g;
                        });
              
                        setGames2(updatedGames);
                        setGames(updatedGames);
                        setGameWish(!gameWish)
                        localStorage.setItem("saved3",JSON.stringify(updatedGames))
                        
                 }}>{gameWish ? <i class="fa-solid fa-heart"></i> : <i class="fa-regular fa-heart"></i>}</button>
                 
            </div>
          </>}




            {next === 1 &&<>
             <img src="/Qrcode.jpg" alt="Qr code" />
            <form>
              <h1>If you paied click next</h1>
              <button type='button' onClick={() => setNext(prev => prev += 1)}>Next</button>
              </form></>}
              {next === 2 &&
                    <form>
                      <h1>Please fill the form</h1>
                       <input type="Email" placeholder='Personal Email'  value={email} onChange={(e) => setEmail(e.target.value)} />
                       <input type="text" placeholder='Steam User Name' value={steamUser} onChange={(e) => setSteamUser(e.target.value)} />
                       <input type="text" placeholder='Steam Password'  value={steamPass} onChange={(e) => setSteamPass(e.target.value)}/>
                       <input type="text" placeholder='Whats App'  value={whatsApp} onChange={(e) => setWhatsApp(e.target.value)} />
                       <input type="text" placeholder='Transaction ID (رقم عملية الشراء)' value={payNo} onChange={(e) => setPayNo(e.target.value)} />
                       <button type='button' onClick={Hand}>{loading?"...":"Submit"}</button>
                     </form>}
                    <i class="fa-solid fa-arrow-left" onClick={Back} id='BackI'></i>
                     
         </section>
              {error && (
                      <div className='messageErr'>
                        <h2>{error}.</h2>
                      </div>
                    )}
                  
       </main>}
    </>
  )
}

export default App