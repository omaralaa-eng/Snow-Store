import { useState,useEffect,useRef } from 'react'
import emailjs from '@emailjs/browser'
import './App.css'

function App() {
  const [selected, setSelected] = useState(0)
  const [buy,setBuy] = useState(false)
  const [gameName,setGameName] = useState("")
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
  const [gamePrice,setGamePrice] = useState()
  const [next,setNext] = useState(false)
  const scroll = useRef({})
  useEffect(() => {
    const handleScroll = () => {
      if(selected === 0){
      if (window.scrollY > 370) {
        NavRef.current.classList.add('scrolled');
      } else {
        NavRef.current.classList.remove('scrolled');
      }
    }
    else{
      NavRef.current.classList.remove('scrolled');
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


  function goToBuy(name,price){
    scroll.current[buy] = window.scrollY;
    setGameName(name);
    setGamePrice(price);
    setBuy(true);
  }

  const [games,setGames] = useState([
    { id: 1,
      name: 'Resident Evil 4',
      price: 19.99,
      image: 'public/resident-evil-4-2880x2160-10442.jpeg',
      bought: false,
      wishlist: false,
    },
    { id: 2,
      name: 'FC26',
      price: 29.99,
      image: 'public/fc26.jpg',
      bought: false,
      wishlist: false
     },
    { id: 3,
       name: 'God of War',
       price: 39.99,
       image: 'public/god-of-war-kratos-and-atreus-at-river-nahx1u4rudbu55hy.jpg',
       bought: false,
       wishlist: false
      },
    { id: 4,
       name: 'Uncharted 4',
        price: 49.99,
         image: 'public/Uncharted 4.jpg',
          bought: false,
          wishlist: false },
    { id: 5,
       name: 'GTA V',
        price: 59.99,
         image: 'public/grand-theft-auto-v-2880x1800-10738.jpg',
          bought: false,
          wishlist: false
        },
    { id: 6,
       name: 'Assassin\'s Creed Valhalla',
        price: 69.99,
         image: 'public/Assassins.jpg',
          bought: false,
          wishlist: false
        },
    { id: 7,
       name: 'The Last of Us',
        price: 79.99,
         image: 'public/The Last of Us.png',
          bought: false,
          wishlist: false
        },
  {   id: 8,
      name: 'Horizon Zero Dawn',
      price: 89.99,
      image: 'https://getwallpapers.com/wallpaper/full/3/f/7/789279-new-horizon-zero-dawn-wallpapers-3840x2160-smartphone.jpg',
      bought: false,
      wishlist: false
     },
    { id: 9,
       name: 'Forza Horizon 5',
       price: 99.99,
        image: 'https://wallpaperaccess.com/full/6070334.jpg',
        bought: false,
        wishlist: false
      },
    { id: 10,
       name: 'Cyberpunk 2077',
       price: 109.99,
       image: 'https://wallpaperaccess.com/full/1096894.jpg',
       bought: false,
       wishlist: false
      },
      {
        id: 11,
        name: 'Elden Ring',
        price: 119.99,
        image: 'https://4kwallpapers.com/images/wallpapers/elden-ring-pc-games-playstation-4-playstation-5-xbox-one-1920x1080-7712.jpg',
        bought: false,
        wishlist: false
      },
      {
        id: 12,
        name: 'Red Dead Redemption 2',
        price: 129.99,
        image: 'https://wallpapercave.com/wp/wp3660596.jpg',
        bought: false,
        wishlist: false
      },
      {
        id: 13,
        name: 'Black Myth: Wukong',
        price: 149.99,
        image: 'https://4kwallpapers.com/images/wallpapers/black-myth-wukong-3840x2160-17948.jpeg',
        bought: false,
        wishlist: false,
      },
      {
        id: 14,
        name: 'Ready or Not',
        price: 149.99,
        image: 'https://www.senses.se/wp-content/uploads/2025/10/ready-or-not-finish-cl-250331.jpg',
        bought: false,
        wishlist: false,
      },
       {
        id: 15,
        name: 'Clair Obscur: Expedition 33',
        price: 149.99,
        image: 'https://image.api.playstation.com/vulcan/ap/rnd/202412/1011/2f394381118d051422d9d8da9e9ea7f9bc300c6b746483c6.jpg',
        bought: false,
        wishlist: false,
      },
       {
        id: 16,
        name: 'Marvels Spider-Man Remastered',
        price: 149.99,
        image: 'https://wallpapercave.com/wp/wp7593605.jpg',
        bought: false,
        wishlist: false,
      },
       {
        id: 17,
        name: "Call of Duty: Modern Warfare II",
        price: 370,
        image: "https://tse3.mm.bing.net/th/id/OIP.NXILAogM1nnMSkI-1ennKwHaEK?pid=Api&h=220&P=0",
        bought: false,
        wishlist: false,
      },
      {
        id: 18,
        name: "Assassin's Creed Mirage",
        price: 650,
        image: "https://wallpapercave.com/wp/wp11468139.jpg",
        bought: false,
        wishlist: false,
      },
      {
        id: 19,
        name: "Tom Clancy's Rainbow Six Siege",
        price: 540,
        image: "https://wallpapercave.com/wp/wp3830478.jpg",
        bought: false,
        wishlist: false,
      },
      {
        id: 20,
        name: "ARC Raiders",
        price: 1350,
        image: "https://4kwallpapers.com/images/wallpapers/arc-raiders-key-art-2560x1440-19855.jpg",
        bought: false,
        wishlist: false,
      },
      {
        id: 21,
        name: "UNCHARTED: Legacy of Thieves Collection",
        price: 730,
        image: "https://wallpapercave.com/wp/wp10511331.jpg",
        bought: false,
        wishlist: false,
      },
      {
        id: 22,
        name: "DOOM: The Dark Ages",
        price: 1080,
        image: "https://4kwallpapers.com/images/wallpapers/doom-the-dark-ages-3840x2160-20800.jpg",
        bought: false,
        wishlist: false,
      },
      {
        id: 23,
        name: "DETROIT",
        price: 250,
        image: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2024/09/detroit-become-human.jpg",
        bought: false,
        wishlist: false,
      }
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
  const storedGames = localStorage.getItem("saved");

  if (storedGames) {
    setGames(JSON.parse(storedGames));
    setGames2(JSON.parse(storedGames));
  }
}, []);

function Hand(){
  if (!email || !steamPass || !steamUser || !whatsApp || !payNo) {
      setError("Please fill all fields")
      setTimeout(() =>{
             setError("")
          },5000)
      return
    }
     if (whatsApp.trim().length !== 11 || payNo.trim().length !== 11 || !whatsApp.trim().startsWith("01") || !payNo.trim().startsWith("01") || isNaN(payNo) || isNaN(whatsApp) ) {
          setError("Please enter a valid number")
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
     }
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
      localStorage.setItem("saved", JSON.stringify(updatedGames));

      setSent(true)
      setBuy(false)
      setTimeout(()=>{
        setSent(false)
      },5000)
    }).catch((err) => {
      console.error(err)
      setError("Something went wrong, try again")
      setTimeout(() =>{
             setError("")
          },5000)
    })
}
function Back(){
  setBuy(false)
  setNext(false)
}
  return (
    <>
       {!buy &&
     <main className='main'>
    
       <header className='header' id='home'>
         <h1>Snow Store</h1>

         <div className="flex">
          <div className="">
         <h3>Welcome to Snow Store!</h3>
         <p>Snow Store offers you with the best Steam games at competitive prices.</p>
         <p>Find a wide variety of games for all your gaming needs.</p>
  
        </div>
        <h3 className='jour'>Start your gaming journey!</h3>

         <div className="aboutPayment">
         <h3>About payment method:</h3>
         <p>We accept InstaPay and Vodafon cash.</p>
         <p><span>And we provide:</span></p>
         <ul>
           <li>Secure & Privacy <i class="fa-solid fa-lock" style={{ color: 'gray'}}></i></li>
           <li>Fast & Reliable <i class="fa-solid fa-bolt-lightning" style={{ color: 'yellow', paddingLeft: '17px' }}></i></li>
           <li>Instant Response <i class="fa-regular fa-comment-dots" style={{ color: 'lightblue' }}></i></li>
         </ul>
        </div>

         </div>
       </header>

        <nav className="nav" ref={NavRef}>
         
            <div className={selected === 0 ? 'selected' : 'divNav'} onClick={() => {setSelected(0)}}><a>Home</a></div>
            <div className={selected === 1 ? 'selected' : 'divNav'} onClick={() => {setSelected(1)}}><a >Search</a></div>
            <div className={selected === 2 ? 'selected' : 'divNav'} onClick={() => {setSelected(2)}}><a >Cart</a></div>
            <div className={selected === 3 ? 'selected' : 'divNav'} onClick={() => {setSelected(3)}}><a >Wishlist</a></div>
            <div className={selected === 4 ? 'selected' : 'divNav'} onClick={() => {setSelected(4)}}><a >To Pay</a></div>
          
        </nav>
        {selected === 0 && <>
            <section className="sec">
                  {games.map((game) => (
                    <div className="game" key={game.id}>
                      <img src={game.image} alt={game.name} />
                      <h3 className={game.name.length > 23 ? "scroll" : ""}>{game.name}</h3>
                      <p className={game.name.length > 23 ?"pLength":""}>{game.price.toFixed(2)} EGP</p>
                      {game.bought && <button className='btnBuy' onClick={() => goToBuy(game.name, game.price)}>Buy again</button>}
                      <button className={game.bought?"bought" :"btnBuy"} disabled={game.bought} onClick={() => goToBuy(game.name, game.price)}>
                        {game.bought ? 'Bought' : 'Buy'}
                      </button>
                      <button className="btnWishlist" onClick={() => {
                        const updatedGames = games.map((g) => {
                          if (g.id === game.id) {
                            return { ...g, wishlist: !g.wishlist };
                          }
                          return g;
                          
                        });
                        setGames(updatedGames);
                        setGames2(updatedGames);
                        localStorage.setItem("saved",JSON.stringify(updatedGames))
                      }}>
                        {game.wishlist ? 'Remove from Wishlist' : 'Add to Wishlist'}
                      </button>
                    </div>
                  ))}
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
                    <div className="game" key={game.id}>
                      <img src={game.image} alt={game.name} />
                      <h3 className={game.name.length > 23  ? "scroll" : ""}>{game.name}</h3>
                      <p className={game.name.length > 23  ?"pLength":""}>{game.price.toFixed(2)} EGP</p>

                      {game.bought && <button className='btnBuy' onClick={() => goToBuy(game.name, game.price)}>Buy again</button>}
                      <button className={game.bought?"bought" :"btnBuy"} disabled={game.bought} onClick={() => goToBuy(game.name, game.price)}>
                        {game.bought ? 'Bought' : 'Buy'}
                      </button>
                      <button className="btnWishlist" onClick={() => {
                        const updatedGames = games.map((g) => {
                          if (g.id === game.id) {
                            return { ...g, wishlist: !g.wishlist };
                          }
                          return g;
                          
                        });
                        setGames2(updatedGames);
                        setGames(updatedGames);
                        localStorage.setItem("saved",JSON.stringify(updatedGames))
                      }}>
                        {game.wishlist ? 'Remove from Wishlist' : 'Add to Wishlist'}
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
                          <div className="game" key={game.id}>
                            <img src={game.image} alt={game.name} />
                            <h3 className={game.name.length > 23  ? "scroll" : ""}>{game.name}</h3>
                            <p className={game.name.length > 23  ?"pLength":""}>{game.price.toFixed(2)} EGP</p>


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
                          <div className="game" key={game.id}>
                            <img src={game.image} alt={game.name} />
                            <h3 className={game.name.length > 23  ? "scroll" : ""}>{game.name}</h3>
                            <p className={game.name.length > 23  ?"pLength":""}>{game.price.toFixed(2)} EGP</p>

                            {game.bought && <button className='btnBuy' onClick={() => goToBuy(game.name, game.price)}>Buy again</button>}

                             <button className={game.bought?"bought" :"btnBuy"} disabled={game.bought} onClick={() => goToBuy(game.name, game.price)}>
                                {game.bought ? 'Bought' : 'Buy'}
                              </button>

                            <button className="btnWishlist" onClick={() => {
                              const updatedGames = games.map((g) => {
                                if (g.id === game.id) {
                                  return { ...g, wishlist: !g.wishlist };
                                }
                                return g;
                              });
                              setGames(updatedGames);
                              setGames2(updatedGames);
                              localStorage.setItem("saved",JSON.stringify(updatedGames))
                            }}>
                              Remove from Wishlist
                            </button>
                          </div>
                        ))
                      )}
                  </section>
                  </>}

                  {selected === 4 && <>
                  <section className="About">
                    <h1>Payment method:</h1>
                    <ol>
                      <li>Choose your game and click "Buy".</li>
                      <li>A QR code will appear to Pay with InstaPay or Vodafon cash.</li>
                      <li>After paying click next.</li>
                      <li>Fill the form that appears and submit it.</li>
                      <li>After submitting the form, you will receive our message in your email and what's app.</li>
                      <li>We will process your order and send you the game in your Steam account when it's finished.</li>
                      <li>You can track your order status at any time on What's App.</li>
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
            <img src="public/Qrcode.jpg" alt="Qr code" />
            {!next &&
            <form>
              <h1>If you paied click next</h1>
              <button type='button' onClick={() => setNext(true)}>Next</button>
              </form>}
              {next &&
                    <form>
                      <h1 className='Gamename g1' >Game name: {gameName}</h1>
                      <h1 className='Gamename g2' >Game price: {gamePrice} EGP</h1>
                      <h1>Please fill the form</h1>
                       <input type="Email" placeholder='Personal Email'  value={email} onChange={(e) => setEmail(e.target.value)} />
                       <input type="text" placeholder='Steam User Name' value={steamUser} onChange={(e) => setSteamUser(e.target.value)} />
                       <input type="text" placeholder='Steam Password'  value={steamPass} onChange={(e) => setSteamPass(e.target.value)}/>
                       <input type="text" placeholder='Whats App'  value={whatsApp} onChange={(e) => setWhatsApp(e.target.value)} />
                       <input type="text" placeholder='Transaction ID (رقم عملية الشراء)' value={payNo} onChange={(e) => setPayNo(e.target.value)} />
                       <button type='button' onClick={Hand}>Submit</button>
                    </form>}
                    
                    <i class="fa-solid fa-arrow-left" onClick={Back}></i>
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