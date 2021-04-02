function anime(title, songtitle, video, unplayed, blocked) {
    this.title = title;
    this.songtitle = songtitle;
    this.video = video;
    this.unplayed = unplayed;
    this.blocked = blocked
}

let animelist = [
    new anime("Absolute Duo", "\"Absolute Soul\" by Konomi Suzuki", "zL6fxRygbMY", true, false),
    new anime("Acchi Kocchi", "\"Acchi de Kocchi de\" by Acchiâ‡”Kocchi", "qkyAPKo-qkc", true, false),
    new anime("Akame Ga Kill", "\"Skyreach\" by Sora Amamiya", "cGHOWUkvbC4", true, false),
    new anime("Akame Ga Kill", "\"LIAR MASK\" by Rika Mayama", "xui6WpsKeSc", true, false),
    new anime("Anohana", "\"Aoi Shiori\" by Galileo Galilei", "woLjcLUQVxs", true, false),
    new anime("Anohana", "\"Circle Game\" by Galileo Galilei", "tpliFaBhxf4", true, false),
    new anime("Another", "\"Kyoumu Densen\" by ALI PROJECT", "pe3kUUW-Sw0", true, true),
    new anime("Assassination Classroom", "\"Jiriki Hongan Revolution\" by 3-nen E-gumi Utatan", "Eich6wkDtNg", true, false),
    new anime("Blue Exorcist", "\"CORE PRIDE\" by UVERworld", "1M8TZcZdc5M", true, false),
    new anime("Blue Exorcist", "\"IN MY WORLD\" by ROOKiEZ is PUNK'D", "bkp8bt2yau4", true, true),
    new anime("Blue Exorcist: Kyoto Saga", "\"Itteki no Eikyou\" by UVERworld", "kr8kTev-Yb0", true, false),
    new anime("Baccano!", "\"Gun's & Roses\" by Paradise Lunch", "I-s6XZhrNZI", true, false),
    new anime("Black Bullet", "\"black bullet\" by fripSide", "TX5CJfmQbo8", true, false),
    new anime("Black Lagoon", "\"Red Fraction\" by MELL", "uVXItgOO4k0", true, false),
    new anime("ERASED", "\"Re:Re:\" by Asian Kung-Fu Generation", "jQ17uNJ5umQ", true, false),
    new anime("My Hero Academia", "\"The Day\" by Porno Graffitti", "z1tC0bL2Qj4", true, true),
    new anime("Btooom!", "\"No pain, No game\" by Nano", "xdd08xeMrIE", true, false),
    new anime("Btooom!", "\"Exist\" by Nano", "l2_8AaEryUM", true, false),
    new anime("Charlotte", "\"Bravely You\" by Lia", "tC0KqHKA0KM", true, false),
    new anime("Love, Chunibyo & Other Delusions!", "\"Sparkling Daydream\" by ZAQ", "WTodeJ6zj-c", true, false),
    new anime("Love, Chunibyo & Other Delusions!", "\"For You\" by ZAQ", "yTUDSfA7y6Y", true, false),
    new anime("Love, Chunibyo & Other Delusions!: Heart Throb", "\"VOICE\" by ZAQ", "a3SI4MlAqNQ", true, false),
    new anime("Code Geass: Lelouch of the Rebellion", "\"COLORS\" by FLOW", "ZUcuMs0R8lQ", true, false),
    new anime("Code Geass: Lelouch of the Rebellion", "\"Kaidoku Funou\" by Jinn", "SVPcyVwca3I", true, false),
    new anime("Code Geass: Lelouch of the Rebellion", "\"Hitomi no Tsubasa\" by Access", "hO_qbZMtGMM", true, false),
    new anime("Code Geass: Lelouch of the Rebellion R2", "\"02~O-Two~\" by Orange Range", "wxkx7ZjlnqY", true, false),
    new anime("Code Geass: Lelouch of the Rebellion R2", "\"WORLD END\" by FLOW", "vnldHOJAlVU", true, false),
    new anime("Cowboy Bebop", "\"Tank!\" by The Seatbelts", "tO7c0x8V6UY", true, false),
    new anime("Dagashi Kashi", "\"Checkmate!?\" by MICHI", "Q3dKfPRXaIM", true, false),
    new anime("Darker Than Black", "\"Howling\" by Abingdon Boys School", "35nAfhTjxfI", true, true),
    new anime("Darker Than Black", "\"Kakusei Heroism ~The Hero without a Name~\" by An Cafe ", "GwgAW9lSuqY", true, false),
    new anime("Death Parade", "\"Flyers\" by BRADIO", "XreJ80gDgLI", true, false),
    new anime("Is It Wrong to Try to Pick Up Girls in a Dungeon?", "\"Hey World\" by Yuka Iguchi", "mQisr1Sza5I", true, false),
    new anime("Elfen Lied", "\"Lilium\" by Kumiko Noma", "m74qG8FqRwQ", true, false),
    new anime("Fairy Tail (2014)", "\"MASAYUME CHASING\" by BoA", "XwJ3UrZmhWE", true, true),
    new anime("Fairy Tail (2014)", "\"STRIKE BACK\" by BACK-ON", "Ok0SLO_gtX0", true, true),
    new anime("Fairy Tail (2014)", "\"Mysterious Magic\" by Do As Infinity", "1G3HwKwfvz8", true, true),
    new anime("Fairy Tail (2014)", "\"BREAK OUT\" by V6", "-SCPxE0UO6Y", true, true),
    new anime("Fairy Tail", "\"Snow fairy\" by FUNKIST", "ZvgoZxVSZRc", true, true),
    new anime("Fairy Tail", "\"S.O.W. Sense of Wonder\" by Idoling!!!", "zrtdJ6o9X5o", true, true),
    new anime("Fairy Tail", "\"ft.\" by FUNKIST", "byBMHHcqLjs", true, true),
    new anime("Fairy Tail", "\"R.P.G. ~Rockin' Playing Game\" by SuG", "6zLT9ygXcYY", true, true),
    new anime("Fairy Tail", "\"Egao No Mahou\" by Magic Party", "bMwV_Q0z5CA", true, true),
    new anime("Fairy Tail", "\"Fiesta\" by +Plus", "x6B3UapCCIE", true, true),
    new anime("Fairy Tail", "\"Evidence\" by Daisy X Daisy", "_hljbfNXtm4", true, true),
    new anime("Fairy Tail", "\"The Rock City Boy\" by JAMIL", "Wps7xFxbVRU", true, true),
    new anime("Fairy Tail", "\"Towa no Kizuna\" by Daisy x Daisy feat. Another Infinity", "w-xLpukpaK0", true, true),
    new anime("Fairy Tail", "\"I Wish\" by Milky Bunny", "JnuHGPhr9jM", true, true),
    new anime("Fairy Tail", "\"The Starting Sky\" by +Plus", "vBEM-oF3Zms", true, true),
    new anime("Fairy Tail", "\"Tenohira\" by HERO", "wJ13GUHOPWg", true, true),
    new anime("Fairy Tail", "\"Break through\" by GOING UNDER GROUND", "RMv9ClkVtSg", true, true),
    new anime("Fairy Tail", "\"Fairy Tail ~Yakusoku no Hi~\" by Chihiro Yonekura", "UMYGMUoBJE4", true, true),
    new anime("Fullmetal Alchemist: Brotherhood", "\"again\" by YUI", "slZGg0JPOXA", true, false),
    new anime("Fullmetal Alchemist: Brotherhood", "\"Hologram\" by NICO Touches the Walls", "2sB3hD7H_-o", true, true),
    new anime("Fullmetal Alchemist: Brotherhood", "\"Golden Time Lover\" by Sukima Switch", "fDF-wr_OiCY", true, false),
    new anime("Fullmetal Alchemist: Brotherhood", "\"Period\" by Chemistry", "6LMYRLrzThg", true, false),
    new anime("Fullmetal Alchemist: Brotherhood", "\"Rain\" by SID", "34jk4MlDfig", true, true),
    new anime("Fullmetal Alchemist", "\"Melissa\" by Porno Graffitti", "2AED3dReUDM", true, false),
    new anime("Fullmetal Alchemist", "\"READY STEADY GO\" by L'Arc~en~Ciel", "eV5lBGbcyrw", true, false),
    new anime("Fullmetal Alchemist", "\"UNDO\" by Cool Joke", "as3XSytgvi4", true, false),
    new anime("Fullmetal Alchemist", "\"Rewrite\" by Asian Kung-fu Generation", "JcImwhm3bUY", true, false),
    new anime("School-Live!", "\"Friend Shitai\" by Gakuen Seikatsubu", "4nJ2JlvQZWw", true, false),
    new anime("The Asterisk War", "\"Brand-new World\" by Shiena Nishizawa ", "EF4loWpTPKs", true, false),
    new anime("GATE", "\"GATE: Sore wa Akatsuki no you ni\" by Kishida Kyoudan & The Akeboshi Rockets", "yOzbnyCHztg", true, false),
    new anime("GATE", "\"GATE II: Sekai wo Koete\" by Kishida Kyoudan & The Akeboshi Rockets", "poEbZ8Mtln8", true, false),
    new anime("Gintama", "\"Pray\" by Tommy heavenly6", "gCzoizqQBWI", true, true),
    new anime("Gintama", "\"Tooi Nioi\" by YO-KING", "1q3nYLtqEYs", true, true),
    new anime("Gintama", "\"Giniro no Sora\" by redballoon", "BXgHjpiaeUQ", true, true),
    new anime("Gintama", "\"Kasanaru Kage\" by Hearts Grow", "ZsFudNy6skM", true, true),
    new anime("Gintama", "\"DONTEN\" by DOES", "mIu4NwF1t7E", true, true),
    new anime("Gintama", "\"Anata MAGIC\" by monobright", "7i0zvCcihZw", true, true),
    new anime("Gintama", "\"Stairway Generation\" by Base Ball Bear", "O2RYYwEBebU", true, true),
    new anime("Gintama", "\"Light Infection\" by Prague", "Qfn6gHikp9o", true, true),
    new anime("Brynhildr in the Darkness", "\"BRYNHILDR IN THE DARKNESS -Ver. EJECTED-\" by Nao Tokisawa", "WhltwPscdG8", true, false),
    new anime("Brynhildr in the Darkness", "\"Virtue and Vice\" by Fear, and loathing in Las Vegas", "rxvSoPXA64w", true, false),
    new anime("Guilty Crown", "\"Euterpe\" by EGOIST; produced by supercell; performed by Chelly", "ppDUGeUetro", true, true),
    new anime("Guilty Crown", "\"My Dearest\" by supercell; performed by Koeda", "d6LmmPgu6-w", true, false),
    new anime("Grimgar: Ashes and Illusions", "\"Knew day\" by (K)NoW_NAME", "sU9zXSma1NE", true, true),
    new anime("The Devil is a Part-Timer!", "\"ZERO!!\" by Minami Kuribayashi", "suLH0MWoPF4", true, false),
    new anime("Hunter x Hunter (1999)", "\"Ohayou\" by Keno", "dVNVznw15IY", true, false),
    new anime("Hunter x Hunter (1999)", "\"Taiyou wa Yoru mo Kagayaku\" by Wino ", "KtRlMnI-LTY", true, false),
    new anime("Hunter x Hunter (2011)", "\"departure!\" by Ono Masatoshi ", "Hecej3ztREI", true, true),
    new anime("Inu X Boku Secret Service", "\"Nirvana\" by MUCC", "c33EblvER7c", true, false),
    new anime("One Week Friends", "\"Niji no Kakera\" by Natsumi Kon", "uSFceZ6d1LY", true, true),
    new anime("JoJo's Bizarre Adventure: Stardust Crusaders - Battle in Egypt", "\"JoJo - Sono Chi no Kioku: end of THE WORLD\" by JOâ˜†STARSï½žTOMMY, Coda, JINï½ž", "BlEJH-OU8SA", true, false),
    new anime("JoJo's Bizarre Adventure: Stardust Crusaders", "\"STAND PROUD\" by Jin Hashimoto", "id_5SzdX4t8", true, false),
    new anime("JoJo's Bizarre Adventure", "\"JoJo ~Sono Chi no Sadame~\" by Hiroaki TOMMY Tominaga", "to-VRzu097E", true, false),
    new anime("JoJo's Bizarre Adventure", "\"BLOODY STREAM\" by Coda", "4CMeyNsk0gM", true, false),
    new anime("Heaven's Memo Pad", "\"Kawaru Mirai\" by Choucho", "fRHOePxK3B0", true, false),
    new anime("Blood Blockade Battlefront", "\"Hello, world!\" by BUMP OF CHICKEN", "3Va5xN8efEQ", true, true),
    new anime("Kill la Kill", "\"Sirius\" by Eir Aoi", "NHfwCf8jE2Y", true, true),
    new anime("Kill la Kill", "\"ambiguous\" by GARNiDELiA", "b7gZWpvvkEE", true, false),
    new anime("Your Name.", "\"Yume Tourou\" by RADWIMPS", "PV5Qka3TxjM", true, false),
    new anime("Kiznaiver", "\"LAY YOUR HANDS ON ME\" by BOOM BOOM SATELLITES", "mSSbXx-9rYU", true, false),
    new anime("Miss Kobayashi's Dragon Maid", "\"Aozora no Rhapsody\" by fhÃ¡na", "7TLWizSRWp4", true, false),
    new anime("A Silent Voice", "\"My Generation\" by The Who", "oDpsKWxi--Y", true, false),
    new anime("KonoSuba: God's Blessing on This Wonderful World!", "\"fantastic dreamer\" by Machico", "aowtZbUKDCw", true, false),
    new anime("KonoSuba: God's Blessing on This Wonderful World! 2", "\"TOMORROW\" by Machico", "DYbt-XKqWUo", true, false),
    new anime("Magi: The Labyrinth of Magic", "\"V.I.P\" by SID", "Qvwh74yrl4M", true, true),
    new anime("Magi: The Kingdom of Magic", "\"ANNIVERSARY\" by SID", "p03oWYL6zF8", true, false),
    new anime("Magi: The Kingdom of Magic", "\"Hikari\" by ViViD", "8aHRfsHxj2Q", true, false),
    new anime("The Irregular at Magic High School", "\"Rising Hope\" by LiSA", "9UlwTRNhqiI", true, false),
    new anime("The Irregular at Magic High School", "\"grilletto\" by GARNiDELiA", "jUGHBrDfB2A", true, false),
    new anime("Mekakucity Actors", "\"daze\" by Jin ft. MARiA from GARNiDELiA", "hYDURqo4unY", true, false),
    new anime("The Future Diary", "\"Kuusou Mesorogiwi\" by Yousei Teikoku", "UI5Aa10j1U4", true, false),
    new anime("The Future Diary", "\"Dead END\" by Faylan", "tGRwhqYObP4", true, true),
    new anime("The Future Diary", "\"Kyouki Chinden\" by Yousei Teikoku", "iqGCsLXd5uU", true, false),
    new anime("Problem children are coming from another world, aren't they?", "\"Black â€  White\" by Iori Nomizu", "PaLou9sOCFg", true, false),
    new anime("Monster Musume: Everyday Life with Monster Girls", "\"Saikousoku Fall in Love\" by Miia", "fWbhAUAUVUo", true, true),
    new anime("Myriad Colors Phantom World", "\"Naked Dive\" by SCREEN mode", "AwOiTgaUOgw", true, false),
    new anime("The Seven Deadly Sins", "\"Seven Deadly Sins\" by MAN WITH A MISSION", "Qc1Dlj9617I", true, false),
    new anime("Neon Genesis Evangelion", "\"Zankoku na Tenshi no Thesis (A Cruel Angel's Thesis)\" by Yoko Takahashi", "jSi-5tYlnUY", true, true),
    new anime("And you thought there is never a girl online?", "\"1st Love Story\" by Luce Twinkle Wink☆", "_dGPj5PBwu8", true, false),
    new anime("Nisekoi: False Love", "\"CLICK\" by ClariS", "p5A_3urfn4U", true, true),
    new anime("Nisekoi: False Love", "\"STEP\" by ClariS", "S5OJZmR5E2Y", true, false),
    new anime("Nisekoi: False Love", "\"Rally Go Round\" by LiSA", "6oyGviN5KqQ", true, true),
    new anime("Nisekoi: False Love", "\"Magical☆Styling\" by Magical Pâtissière Kosaki-chan", "pdGOwE8qfuU", true, false),
    new anime("No Game, No Life", "\"This game\" by Konomi Suzuki", "_qFB2X38AcM", true, false),
    new anime("Noragami: Stray God", "\"Goya no Machiawase\" by Hello Sleepwalkers", "wf9gs-Y_9zY", true, false),
    new anime("Noragami Aragoto", "\"Kyouran Hey Kids!!\" by THE ORAL CIGARETTES", "fF-BLbA3fCM", true, false),
    new anime("Okami-San and Her Seven Companions", "\"Ready Go!\" by May'n", "45EZ9zoSfdc", true, false),  
    new anime("One Punch Man", "\"THE HERO !! ~Okoreru Kobushi ni Hi wo Tsukero~\" by JAM Project", "WIJ1c4Aj-Os", true, false),  
    new anime("My Mental Choices Are Completely Interfering With My School Romantic Comedy", "\"S・M・L☆\" by Afilia Saga", "ed6QI0LGc2A", true, false),  
    new anime("My Mental Choices Are Completely Interfering With My School Romantic Comedy", "\"Taiyou to Tsuki no Cross\" by TWO-FORMULA", "cTKwsMj37Hw", true, false),  
    new anime("Overlord", "\"Clattanoia\" by O×T", "86f5zNhEDBo", true, false),  
    new anime("Parasyte -the maxim-", "\"Let Me Hear\" by Fear, and Loathing in Las Vegas", "rOww2Powig8", true, false),  
    new anime("Persona 4 the Animation", "\"sky's the limit\" by Shihoko Hirata", "aR5dmkdaNbI", true, false),  
    new anime("Plastic Memories", "\"Ring of Fortune\" by Eri Sasaki", "WeKuEqaUgO8", true, true),  
    new anime("Psycho-Pass", "\"abnormalize\" by Ling Tosite Sigure", "2uljvj02m-w", true, false),  
    new anime("Psycho-Pass", "\"Out of Control\" by Nothing's Carved in Stone", "7X43tlCZFGg", true, false),  
    new anime("Psycho-Pass 2", "\"Enigmatic Feeling\" by Ling Tosite Sigure", "gAVMV9tGm9U", true, false),  
    new anime("Punch Line", "\"PUNCH LINE!\" by Shokotan ♥ Denpa Gumi", "lSy52K5cwMo", true, false),  
    new anime("Chivalry of a Failed Knight", "\"Identity\" by Mikio Sakai", "VuwzXrHC3oU", true, false),  
    new anime("Rampo Kitan: Game of Laplace", "\"Speed to Masatsu\" by amazarashi", "jocLEw7IyaY", true, false),  
    new anime("Re:ZERO -Starting Life in Another World-", "\"Redo\" by Konomi Suzuki", "2znQrZGYE7A", true, true),  
    new anime("Re:ZERO -Starting Life in Another World-", "\"Paradisus-Paradoxum\" by MYTH & ROID", "lEt7rHdJU3w", true, true),  
    new anime("Rokka: Braves of the Six Flowers", "\"Cry for the Truth\" by MICHI", "TJ8yMcKVHIo", true, false),  
    new anime("Beautiful Bones -Sakurako's Investigation-", "\"Dear answer\" by TRUE", "JGlyns_x3qE", true, true),  
    new anime("The Pet Girl of Sakurasou", "\"Kimi ga Yume wo Tsuretekita\" by Pet na Kanojo-tachi", "W08VV_87F6g", true, false),  
    new anime("Samurai Champloo", "\"Battlecry\" by Nujabes feat. Shing02", "_R6fZ5IKtGg", true, false),  
    new anime("Your Lie in April", "\"Hikaru nara\" by Goose house", "jS_A-sUTWGU", true, false),  
    new anime("Your Lie in April", "\"Nanairo Symphony\" by Coala Mode.", "nj71uHj2ikQ", true, true),  
    new anime("SHIMONETA: A Boring World Where the Concept of Dirty Jokes Doesn't Exist", "\"B Chiku Sentai SOX\" by SOX", "1E7nDlvzQTI", true, true),  
    new anime("Attack on Titan", "\"Guren no Yumiya\" by Linked Horizon", "gfHYnDLAx8c", true, true),  
    new anime("Attack on Titan", "\"Jiyuu no Tsubasa\" by Linked Horizon", "5sanyd0vIZA", true, false),  
    new anime("Food Wars!", "\"Kibou no Uta\" by ULTRA TOWER", "vw-A_1KMmeU", true, false),  
    new anime("Food Wars!", "\"Rising Rainbow\" by Misokkasu", "aLsv4hOIbVc", true, false),  
    new anime("Heaven's Lost Property", "\"Ring My Bell\" by Blue Drops", "BHO0KQq_iKc", true, false),  
    new anime("Soul Eater", "\"Resonance\" by T.M.Revolution", "gLTG4iZlhXc", true, false),  
    new anime("Soul Eater", "\"PAPERMOON\" by Tommy heavenly6", "cgs3nnHNWOs", true, true),  
    new anime("Steins;Gate", "\"Hacking to the Gate\" by Kanako Itou", "r1mVKeeD1xU", true, false),  
    new anime("Sword Art Online", "\"crossing field\" by LiSA", "JEPs2EaisFI", true, false),  
    new anime("Sword Art Online II", "\"IGNITE\" by Eir Aoi", "--K7MxVDTRM", true, false),  
    new anime("Gurren Lagann", "\"Sorairo Days\" by Shoko Nakagawa", "SvP_7aOH9AQ", true, true),  
    new anime("Tokyo Ghoul", "\"unravel\" by TK from Ling Tosite Sigure", "Q9T-5jB65RA", true, true),  
    new anime("My Little Monster", "\"Q&A Recital!\" by Haruka Tomatsu", "4St_0XhYFG0", true, false),  
    new anime("Toradora!", "\"Pre-Parade\" by Rie Kugimiya, Yui Horie, and Eri Kitamura ", "UDwTiPhU3gU", true, true),  
    new anime("Toradora!", "\"silky heart\" by Yui Horie", "PgLjJ1M8kTE", true, false),  
    new anime("Trigun", "\"H.T.\" by Tsuneo Imahori", "VPPFZLdlhbs", true, false),  
    new anime("Trinity Seven", "\"Seven Doors\" by ZAQ", "VW_IZ2-PxLQ", true, true),  
    new anime("Yamada-kun and the Seven Witches", "\"Kuchizuke Diamond\" by WEAVER", "GvGeAQ1FfYs", true, false), 
    // new anime("", "", "", true, false),  
// number of anime = line# - 9
]