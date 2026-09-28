import express from 'express'

const app = express()
const port = 4000

app.get('/', (req, res) => {
    res.send(` <head>
                    <title>Home</title>
                </head>
            <body style="background: radial-gradient(circle,rgba(238, 174, 202, 1) 0%, rgba(148, 187, 233, 1) 100%);">
            
            <h1 style="text-align: center; padding: 10px; text-shadow: 2px 2px 4px skyblue">This is Home Page</h1>

            <div style="display:grid; grid-template-columns: repeat(4, 1fr); gap:30px;">

                    <div style="width: 350px; height: auto; background: white; color: black; box-shadow: 0px 0px 10px 2px black; border: 1px solid black; border-radius: 10px; padding: 15px;">

                        <h3 style="text-align: center; font-size: 20px;">
                            BELLAVITA Unisex Scents Gift Set
                        </h3>

                        <div>
                            <img src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSrZj4Op4tv0HpSOz6_eOMjW5R12QLAy3eol1sy54j-tEPtCv5lx1kcx428RpjqyTFhrf_Yu2PB-lyM0BItc88GivpKo-yaSBJ6AGacusXZs3hzdeZ-vs3HQQ" style="width: 350px; height: 300px;" />
                        </div>

                        <div style="font-size: 20px; font-weight: 600; margin:5px;">
                            &#x20B9;799
                        </div>

                        <button type="submit" style="text-align: center; width:100%; padding:8px; font-size:17px; font-weight:500; background:#005EFF; outline:none; border-radius:5px; color:white; border:none; cursor: pointer; background: #458EFF;">Add</button>

                    </div>

                    <div style="width: 350px; height: auto; background: white; color: black; box-shadow: 0px 0px 10px 2px black; border: 1px solid black; border-radius: 10px; padding: 15px;">

                        <h3 style="text-align: center; font-size: 20px;">
                            Beardo Whisky Smoke Bourbon 
                        </h3>

                        <div>
                            <img src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQxWvB4F3QubIFjhKMT5PwSnHNTgA3QcjPNBdWh91y67sI-Ki-uyoTn4a-ayDrpSANUSi6zARQUM4KSGKBLn1GMCU0VaEnp8ZVWnYPP3NAKxIqrUsFnRtZMtA" style="width: 350px; height: 300px;" />
                        </div>

                        <div style="font-size: 20px; font-weight: 600; margin:5px;">
                            &#x20B9;399
                        </div>

                        <button type="submit" style="text-align: center; width:100%; padding:8px; font-size:17px; font-weight:500; background:#005EFF; outline:none; border-radius:5px; color:white; border:none; cursor: pointer; background: #458EFF;">Add</button>

                    </div>

                    <div style="width: 350px; height: auto; background: white; color: black; box-shadow: 0px 0px 10px 2px black; border: 1px solid black; border-radius: 10px; padding: 15px;">

                        <h3 style="text-align: center; font-size: 20px;">
                            Wild Stone Edge Perfume
                        </h3>

                        <div>
                            <img src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcStMGVV6HAXhQAHcrSuRKnbDYcRo1Ig6VWrubIurTs5A2Y22rbdovVagmM-hTDZEdHjEFjP4sRjXYvgf9nfifYxQLCA0xOQ1ifPmfSR16e8BizdJIzp-Z7IIg" style="width: 350px; height: 300px;" />
                        </div>

                        <div style="font-size: 20px; font-weight: 600; margin:5px;">
                            &#x20B9;499
                        </div>

                        <button type="submit" style="text-align: center; width:100%; padding:8px; font-size:17px; font-weight:500; background:#005EFF; outline:none; border-radius:5px; color:white; border:none; cursor: pointer; background: #458EFF;">Add</button>

                    </div>

                    <div style="width: 350px; height: auto; background: white; color: black; box-shadow: 0px 0px 10px 2px black; border: 1px solid black; border-radius: 10px; padding: 15px;">

                        <h3 style="text-align: center; font-size: 20px;">
                            Bella Vita Luxury Unisex Perfume
                        </h3>

                        <div>
                            <img src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTDWPshAJviFMxgyBTrfsnSZF500CFcWciL2FimydM8WzI_pdaCPO2FgzOyI_jgQHityvNuUR2wHDu9AwwdPNFzdOCtX-XPmENcylIdy8FMw1jQSudKy-Ri8Q" style="width: 350px; height: 300px;" />
                        </div>

                        <div style="font-size: 20px; font-weight: 600; margin:5px;">
                            &#x20B9;299
                        </div>

                        <button type="submit" style="text-align: center; width:100%; padding:8px; font-size:17px; font-weight:500; background:#005EFF; outline:none; border-radius:5px; color:white; border:none; cursor: pointer; background: #458EFF;">Add</button>

                    </div>

                    <div style="width: 350px; height: auto; background: white; color: black; box-shadow: 0px 0px 10px 2px black; border: 1px solid black; border-radius: 10px; padding: 15px;">

                        <h3 style="text-align: center; font-size: 20px;">
                            Secret Temptation Premium Perfume
                        </h3>

                        <div>
                            <img src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ6n0zbw6ng1Tt2cWxZarhfML_K_xqnJScj8YJ1z8iF0V-QpaWQXKsHUefcHzhS-LyhEgxniqY4nKJAp-9pse9_13T4ei8SqQr5c0wQ7eNHBu8E_jj4VXszDw" style="width: 350px; height: 300px;" />
                        </div>

                        <div style="font-size: 20px; font-weight: 600; margin:5px;">
                            &#x20B9;349
                        </div>

                        <button type="submit" style="text-align: center; width:100%; padding:8px; font-size:17px; font-weight:500; background:#005EFF; outline:none; border-radius:5px; color:white; border:none; cursor: pointer; background: #458EFF;">Add</button>

                    </div>

                    <div style="width: 350px; height: auto; background: white; color: black; box-shadow: 0px 0px 10px 2px black; border: 1px solid black; border-radius: 10px; padding: 15px;">

                        <h3 style="text-align: center; font-size: 20px;">
                            Wild Stone Boss and Chief Perfume
                        </h3>

                        <div>
                            <img src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQNRfu4w-OEHdWNVcov_IEBh0o7Dg9C6ZNn95b9XA68m-fSWuTZ-lBhtk2RV5tOXP-YMz6FniNW_JpnxmWrekgWgra9Fkbjquz-1l0XvBeHVpNO05Ha4c4rPdM" style="width: 350px; height: 300px;" />
                        </div>

                        <div style="font-size: 20px; font-weight: 600; margin:5px;">
                            &#x20B9;1299
                        </div>

                        <button type="submit" style="text-align: center; width:100%; padding:8px; font-size:17px; font-weight:500; background:#005EFF; outline:none; border-radius:5px; color:white; border:none; cursor: pointer; background: #458EFF;">Add</button>

                    </div>

                    <div style="width: 350px; height: auto; background: white; color: black; box-shadow: 0px 0px 10px 2px black; border: 1px solid black; border-radius: 10px; padding: 15px;">

                        <h3 style="text-align: center; font-size: 20px;">
                            Luxury Perfume Trio
                        </h3>

                        <div>
                            <img src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQuNsOm6VGP67NP8Yn0azn4oqsXsp91uYsAlKQytc6MNUbIqrPgDZmGWx7R-pgzCTHNtvUDm1vklCY06_ou8Sa6o39G-5IrgXZaQGn6OV8mUst_Gm3ygBMFvAA" style="width: 350px; height: 300px;" />
                        </div>

                        <div style="font-size: 20px; font-weight: 600; margin:5px;">
                            &#x20B9;1499
                        </div>

                        <button type="submit" style="text-align: center; width:100%; padding:8px; font-size:17px; font-weight:500; background:#005EFF; outline:none; border-radius:5px; color:white; border:none; cursor: pointer; background: #458EFF;">Add</button>

                    </div>

                    <div style="width: 350px; height: auto; background: white; color: black; box-shadow: 0px 0px 10px 2px black; border: 1px solid black; border-radius: 10px; padding: 15px;">

                        <h3 style="text-align: center; font-size: 20px;">
                            EM5 Coffee Elixir Unisex EDP 50ml
                        </h3>

                        <div>
                            <img src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQif8dR08VWuiar_Y8KnQZJV_ztDYQnxW_aQJlhPG51ZKGAH7o7YmAPi4y3DexAUl5FvS0Eu5T93KYyV2h27PQWDUpYEJmtfZbLjLMoHDSlyTEn6SIIBsiNrA" style="width: 350px; height: 300px;" />
                        </div>

                        <div style="font-size: 20px; font-weight: 600; margin:5px;">
                            &#x20B9;299
                        </div>

                        <button type="submit" style="text-align: center; width:100%; padding:8px; font-size:17px; font-weight:500; background:#005EFF; outline:none; border-radius:5px; color:white; border:none; cursor: pointer; background: #458EFF;">Add</button>

                    </div>
                </div>
            </body>`)
})

app.get('/product', (req, res) => {
    res.send(`
        <head>
            <title>Product Details</title>
        </head>

        <body style="background: radial-gradient(circle,rgba(238, 174, 202, 1) 0%, rgba(148, 187, 233, 1) 100%); font-family: sans-serif;">
            
            <h1 style="text-align: center; padding: 10px; text-shadow: 2px 2px 4px skyblue">Product Details</h1>

            <div style="display: flex; justify-content: center; margin-top: 30px;">

                <div style="width: 800px; display: flex; background: white; color: black; box-shadow: 0px 0px 10px 2px black; border: 1px solid gray; border-radius: 20px; padding: 20px; gap: 30px;">
                    
                    <div style="flex: 1;">
                        <img src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSrZj4Op4tv0HpSOz6_eOMjW5R12QLAy3eol1sy54j-tEPtCv5lx1kcx428RpjqyTFhrf_Yu2PB-lyM0BItc88GivpKo-yaSBJ6AGacusXZs3hzdeZ-vs3HQQ" style="width: 100%; height: auto; border-radius: 10px;" />
                    </div>

                    <div style="flex: 1; display: flex; flex-direction: column; justify-content: space-between;">
                        <div>
                            <h2 style="font-size: 28px; margin-top: 0;">BELLAVITA Unisex Scents Gift Set</h2>
                            
                            <div style="font-size: 18px; color: #ff9900; margin-bottom: 15px;">
                                <span>&#9733; &#9733; &#9733; &#9733; &#9734;</span> 
                                <span style="color: gray; font-size: 16px;">(4.0 Rating)</span>
                            </div>
                            
                            <div style="font-size: 26px; font-weight: 600; color: #d32f2f; margin-bottom: 15px;">
                                &#x20B9;799
                            </div>
                            
                            <p style="font-size: 16px; line-height: 1.5; color: #333;">
                                Experience the luxury of BELLAVITA Scents. This unisex gift set contains premium, long-lasting fragrances perfect for any occasion. Boost your confidence and leave a lasting impression wherever you go.
                            </p>
                            
                            <ul style="font-size: 15px; color: gray; line-height: 1.8;">
                                <li>Long-lasting freshness</li>
                                <li>Unisex fragrance</li>
                                <li>Perfect for gifting</li>
                            </ul>
                        </div>
                        
                        <button type="submit" style="text-align: center; width:100%; padding:12px; font-size:18px; font-weight:600; background:#458EFF; outline:none; border-radius:5px; color:white; border:none; cursor: pointer; margin-top: 20px; box-shadow: 0px 4px 6px rgba(0,0,0,0.2);">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </body>
        `)
})

app.get('/contact', (req, res) => {
    res.send(`
        <head>
            <title>contact</title>
        </head>
        <body style="background: radial-gradient(circle,rgba(238, 174, 202, 1) 0%, rgba(148, 187, 233, 1) 100%);">
            <h1 style="text-align: center; padding: 10px; text-shadow: 2px 2px 4px skyblue">This is contact Page</h1>
        </body>
        `)
})

app.use(express.json())

const Perfumes = [
    {
        id: 1,
        name: "BELLAVITA Unisex Scents Gift Set",
        image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSrZj4Op4tv0HpSOz6_eOMjW5R12QLAy3eol1sy54j-tEPtCv5lx1kcx428RpjqyTFhrf_Yu2PB-lyM0BItc88GivpKo-yaSBJ6AGacusXZs3hzdeZ-vs3HQQ",
        rupees: 799,
    },
    {
        id: 2,
        name: "Beardo Whisky Smoke Bourbon",
        image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQxWvB4F3QubIFjhKMT5PwSnHNTgA3QcjPNBdWh91y67sI-Ki-uyoTn4a-ayDrpSANUSi6zARQUM4KSGKBLn1GMCU0VaEnp8ZVWnYPP3NAKxIqrUsFnRtZMtA",
        rupees: 399,
    },
    {
        id: 3,
        name: "Wild Stone Edge Perfumet",
        image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTDWPshAJviFMxgyBTrfsnSZF500CFcWciL2FimydM8WzI_pdaCPO2FgzOyI_jgQHityvNuUR2wHDu9AwwdPNFzdOCtX-XPmENcylIdy8FMw1jQSudKy-Ri8Q",
        rupees: 499,
    },
    {
        id: 4,
        name: "Bella Vita Luxury Unisex Perfume",
        image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTDWPshAJviFMxgyBTrfsnSZF500CFcWciL2FimydM8WzI_pdaCPO2FgzOyI_jgQHityvNuUR2wHDu9AwwdPNFzdOCtX-XPmENcylIdy8FMw1jQSudKy-Ri8Q",
        rupees: 299,
    },
    {
        id: 5,
        name: "Secret Temptation Premium Perfume",
        image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ6n0zbw6ng1Tt2cWxZarhfML_K_xqnJScj8YJ1z8iF0V-QpaWQXKsHUefcHzhS-LyhEgxniqY4nKJAp-9pse9_13T4ei8SqQr5c0wQ7eNHBu8E_jj4VXszDw",
        rupees: 349,
    },
    {
        id: 6,
        name: "Wild Stone Boss and Chief Perfume",
        image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQNRfu4w-OEHdWNVcov_IEBh0o7Dg9C6ZNn95b9XA68m-fSWuTZ-lBhtk2RV5tOXP-YMz6FniNW_JpnxmWrekgWgra9Fkbjquz-1l0XvBeHVpNO05Ha4c4rPdM",
        rupees: 1299,
    },
    {
        id: 7,
        name: "Luxury Perfume Trio",
        image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQuNsOm6VGP67NP8Yn0azn4oqsXsp91uYsAlKQytc6MNUbIqrPgDZmGWx7R-pgzCTHNtvUDm1vklCY06_ou8Sa6o39G-5IrgXZaQGn6OV8mUst_Gm3ygBMFvAA",
        rupees: 1499,
    },
    {
        id: 8,
        name: "EM5 Coffee Elixir Unisex EDP 50ml",
        image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQif8dR08VWuiar_Y8KnQZJV_ztDYQnxW_aQJlhPG51ZKGAH7o7YmAPi4y3DexAUl5FvS0Eu5T93KYyV2h27PQWDUpYEJmtfZbLjLMoHDSlyTEn6SIIBsiNrA",
        rupees: 299,
    },
]

app.get('/Perfume', (req, res) => {
    res.json(Perfumes)
})

app.get('/Perfume/:id', (req, res) => {
    const id = req.params.id;
    const Perfume = Perfumes.filter(item => item.id == id)
    res.send(Perfume)
})

app.listen(port, () => {
    console.log("Server Started....");
})

