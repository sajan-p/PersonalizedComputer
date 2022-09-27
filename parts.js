const parts = [
  {
    productName: "Intel Core i5-10400F 2.9 GHz 6-Core Processor",
    img: "https://cdna.pcpartpicker.com/static/forever/images/product/e5d8c71ba7c15404b87a7fcdf7251281.256p.jpg",
    price: (1.13 *155.94).toFixed(2),
    category: "cpu",
    build: "student",
    description: `
    <p>Brand Intel</p>
    <p>CPU manufacturer	Intel</p>
    <p>CPU speed	4.3 GHz</p>
    <p>CPU socket	BGA 437</p>
    <p>Platform	Windows 10</p>
    <p>Secondary cache	12 MB</p>`,
    link: "https://www.shoprbc.com/ca/shop/product_details.php?pid=55415643",
  }, {
    productName: "ASRock B560 Pro4 ATX LGA1200",
    img: "https://cdna.pcpartpicker.com/static/forever/images/product/a6db53db17e0daae333dc2ab77f02b70.256p.jpg",
    price: (1.13 *99.99).toFixed(2),
    category: "motherboard",
    build: "student",
    description: `
    <p>Intel B560</p>
    <p>Supports 11th / 10th Gen Intel Core Processors</p>
    <p>DDR4 4800+(OC) (11th Gen Intel Core Processors)*</p>
    <p>DDR4 4600+(OC) (10th Gen Intel Core Processors)*</p>
    <p>* 11th Gen Intel Core (i9/i7/i5) support DDR4 2933 natively; Core (i3), Pentium and Celeron support DDR4 2666 natively.</p>
    <p>* 10th Gen Intel Core (i9/i7) support DDR4 2933 natively; Core (i5/i3), Pentium and Celeron support DDR4 2666 natively.</p>`,
    link: "https://www.newegg.ca/p/N82E16813157977?Item=N82E16813157977"
  }, {
    productName: "Corsair Vengeance LPX 16 GB",
    img: "https://cdna.pcpartpicker.com/static/forever/images/product/835ab3efad1be13bbe53beef3e3c6f96.256p.jpg",
    price: (1.13 *74.98).toFixed(2),
    category: "memory",
    build: "student",
    description: `<p>Hand-sorted memory chips ensure high performance with generous Overclocking headroom.</p> <p>SPD Speed-2133MHz
    Vengeance LPX is optimized for wide compatibility with the latest Intel and AMD DDR4 motherboards.</p><p>Package Memory Pin:288</p>
    <p>A low-profile height of just 34mm ensures that vengeance LPX even fits in most small-form-factor builds.</p>
    <p>A high-performance PCB guarantees strong signal quality and stability for superior Overclocking ability.</p>
    <p>A solid aluminum heatspreader efficiently dissipates heat from each module so that they consistently run at high clock speeds.</p>
    <p>Supports Intel XMP 2.0 for simple one-setting installation and setup.</p>
    <p>Available in multiple colors to match the style of your system.</p>`,
    link: "https://www.amazon.ca/dp/B0143UM4TC?tag=pcp0f-20&linkCode=ogi&th=1&psc=1"
  }, {
    productName: "Crucial P2 500 GB M.2-2280",
    img: "https://cdna.pcpartpicker.com/static/forever/images/product/50d7356e9199580f1c35e7b8f01232ab.256p.jpg",
    price: (1.13 *51.75).toFixed(2),
    category: "storage",
    build: "student",
    description: `
    <p>Form Factor	M.2 Type 2280</p>
    <p>Total Capacity	500GB</p>
    <p>Specs	500GB M.2 SSD • PCIe NVMe Gen 3 • 2,300 MB/s Read, 940 MB/s Write
    Series	P2</p>
    <p>Interface	NVMe/PCIe Gen3 1x4</p>
    <p>Device Type	Internal Solid State Drive</p>
    <p>Unit Height	22mm x 80mm</p>
    <p>Form Factor	M.2</p>
    <p>Package Content	Crucial® Storage Executive, Acronis® True Image for Crucial, Crucial Easy</p>`,
    link: "https://www.vuugo.com/crucial-ssd-CT500P2SSD8.html?tracking=5108053939762",
  }, {
    productName: "EVGA GeForce GTX 1650",
    img: "https://cdna.pcpartpicker.com/static/forever/images/product/50af1d4d41843ea4c143fff3dfbdf33b.256p.jpg",
    price: (1.13 *245.94).toFixed(2),
    category: "video_card",
    build: "student",
    description: `<p>The EVGA GeForce GTX 16-Series Graphics Cards are powered by the all-new NVIDIA Turing architecture to give you incredible new levels of gaming realism, speed, power efficiency, and immersion.</p> <p>With the EVGA GeForce GTX 16-Series gaming cards you get the best gaming experience with next generation graphics performance, ice cold cooling, and advanced overclocking features with the all new EVGA Precision X1 software.</p>`,
    link: "https://isanek.com/shop/product/55952980/1?utm_content=PCPartPicker&utm_campaign=15&ranMID=46412&ranEAID=8BacdVP0GFs&ranSiteID=8BacdVP0GFs-CDrb_6HVugBIoFCag0nQ2g",
  }, {
    productName: "Cougar MX330 ATX",
    img: "https://m.media-amazon.com/images/I/51N2BQA3cBL.jpg",
    price: (1.13 *59.99).toFixed(2),
    category: "case",
    build: "student",
    description: `<p>Form Factor: Mid Tower Case</p>
    <p>Colors / Materials: black, steel</p>
    <p>Drive bays supported: 5</p>
    <p>Fans included: 1</p>
    <p>Dimensions: 427mm x 195mm x 473mm</p>`,
    link: "https://www.thesource.ca/en-ca/computers-tablets/computer-components-parts/computer-cases/cougar-mx330-pc-gaming-case---black/p/108077641?bid=sPexa3Rar8sw&URL=https%3A%2F%2Fwww.thesource.ca%2Ffr-ca%2Fcomputers-tablets%2Fcomputer-components-parts%2Fcomputer-cases%2Fcougar-mx330-pc-gaming-case---black%2Fp%2F108077641%3Fbid%3DsPexa3Rar8sw&aff=cj&utm_campaign=cj_affiliate_sale&utm_medium=affiliate&utm_source=cj&utm_content=3938566&utm_term=13715427&cjevent=989b50ff3c6811ed82b9c6f60a82b839",
  }, {
    productName: "EVGA BQ 600 W 80+ Bronze Certified Semi-modular",
    img: "https://m.media-amazon.com/images/I/512voawCsuL.jpg",
    price: (1.13 *69.81).toFixed(2),
    category: "power_supply",
    build: "student",
    description: `<p>Manufacturer:	EVGA Corporation</p>
    <p>Manufacturer Part Number:	110-BQ-0600-K1</p>
    <p>Brand Name:	EVGA</p>
    <p>Product Series:	BQ</p>
    <p>Product Name:	BQ Power Supply</p>
    <p>Introducing the next generation in value; the EVGA BQ Series. These power supplies take some of the best features from EVGA's award winning power supply lineup, like near silent operation and modular cables to make one of the best values today in high performance power supplies.  </p> 
    <p>Package Type:	Retail</p>
    <p>Product Type:	Power Supply</p>`,
    link: "https://isanek.com/shop/product/40310835/1?utm_content=PCPartPicker&utm_campaign=15&ranMID=46412&ranEAID=8BacdVP0GFs&ranSiteID=8BacdVP0GFs-3ub6m8d4pa8I17ALvz.inA"
  }, {
    productName: "LG 22BK430H-B 21.5 1920x1080 60 Hz Monitor",
    img: "https://cdna.pcpartpicker.com/static/forever/images/product/d29e0b1290b1c62761625167b46ed45b.256p.jpg",
    price: (1.13 *119.50).toFixed(2),
    category: "monitor",
    build: "student",
    description: `<p>Native Resolution	Full HD (1080p) 1920 x 1080</p>
    <p>Features	HDCP, 72% (CIE 1976) color gamut, Auto Resolution, Flicker Safe, Reader Mode, Smart</p> <p>Energy Saving technology</p>
    <p>Aspect Ratio	16:9</p>
    <p>Weight	6.2 lbs</p>
    <p>Pixel Pitch	0.24795 mm</p>
    <p>Brightness	250 cd/m²</p>
    <p>Diagonal Size	22"</p>
    <p>Horizontal Viewing Angle	178</p>
    <p>Response Time	5 ms</p>
    <p>Display Type	LED-backlit LCD monitor / TFT active matrix</p>`,
    link: "https://www.vuugo.com/lg-monitors-22BK430H-B.html?tracking=5108053939762",

  }, {
    productName: "Redragon K552 Wired Gaming Keyboard",
    img: "https://m.media-amazon.com/images/I/41LA45NiUmL.jpg",
    price: (1.13 *45.99).toFixed(2),
    category: "keyboard",
    build: "student",
    description: `<p>Tenkeyless compact mechanical gaming keyboard Redragon k552 tkl small compact with dust proof mechanical red switches Linear switches quiet click sound fast action with minimal resistance without a tactile bump feel</p>
    <p>Rainbow LED RGB backlit mechanical USB gaming keyboard 19 different lighting effects and game modes 2 user defined modes 6 colors multiple brightness level breathing speed precision engineered keycaps offering crystal clear uniform backlighting</p>
    <p>Ergonomic designed steel series mechanical game keyboards high-quality durable metal-abs construction with plate-mounted mechanical keys and switches that stand up even during the most testing marathon gaming sessions</p>
    <p>Anti ghosting all 87 keys are conflict free nkey rollover featuring 12 multimedia keyboard keys and a non-slip ergonomic, splash-proof design comes with gold-plated high-speed corrosion free</p> <p>USB connector for a reliable connection</p>
    <p>Compatible with windows 10, windows 8, windows 7, windows vista, or windows xp, limited mac os keyboard support works well with all major computers brands and gaming pcs.</p>`,
    link: "https://www.amazon.ca/dp/B016MAK38U?tag=pcp0f-20&linkCode=ogi&th=1&psc=1",
  }, {
    productName: "Razer Viper Mini Wired Optical Mouse",
    img: "https://cdna.pcpartpicker.com/static/forever/images/product/ae6e2d9188a5b8d2452c008cbbdfb6c2.256p.jpg",
    price: (1.13 *32.99).toFixed(2),
    category: "mouse",
    build: "student",
    description: `<p>Lightest, Zero-Compromise Miniature Mouse: 10% Smaller Than the Viper and lighter at 61g, with a 8500 DPI optical sensor befitting the most serious gamers without the need for drilling holes in the chassis like competitor mice</p>
    <p>Faster Than Traditional Mechanical Switches: Razer optical mouse switches uses light beam-based actuation, registering button presses at the speed of light for absolute control</p>
    <p>Customizable Chroma RGB Color Profiles & Underglow: Includes 16.8 million color combinations w, included preset profiles</p>
    <p>6 Programmable Buttons: Allows for reconfiguration and assignment of complex macro functions through Razer Synapse 3</p>
    <p>Drag-Free Cord for Wireless-Like Performance: Razer Speedflex cables eliminate the need for mouse bungees, drastically reducing weight and drag.</p> <p>Switch Lifecycle 50 Million Clicks</p>`,
    link: "https://www.amazon.ca/dp/B084RPZD6T?tag=pcp0f-20&linkCode=ogi&th=1&psc=1",
  }, {
    productName: "HP HyperX Cloud II 7.1 Channel Headset",
    img: "https://cdna.pcpartpicker.com/static/forever/images/product/72a586f112591cd7b43f4b0dc244ba29.256p.jpg",
    price: (1.13 *111.47).toFixed(2),
    category: "headphones",
    build: "student",
    description: `<p>USB Audio Sound Card with 7.1 Virtual Surround Sound; Sound pressure level: 104dBSPL/mW at 1kHz</p>
    <p>53mm Drivers Neodymium Magnets. Durable aluminium frame with expanded headband</p>
    <p>Noise Cancelling Microphone via Inline Sound Card</p>
    <p>Echo Cancelling via Inline Sound Card.Ambient noise attenuation:approx. 20 dBa
    15-25kKhz Frequency Response</p>`,
    link: "https://www.amazon.ca/dp/B00SAYCXWG?tag=pcp0f-20&linkCode=ogi&th=1&psc=1",
  },{
    productName: "Logitech Z200 10 W 2.0 Channel Speakers",
    img: "https://cdna.pcpartpicker.com/static/forever/images/product/044e21f178b0ad10f69fbc76b6ac013e.256p.jpg",
    price: (1.13 *49.99).toFixed(2),
    category: "speakers",
    build: "student",
    description: `<p>These 2.0 speakers deliver 10 watt of peak power and rich, clear stereo for great acoustics and a room-filling sound. </p> <p>The front panel has integrated volume and power controls with headphone plug-in and auxiliary input. </p> `,
    link: "https://www.dell.com/en-ca/shop/logitech-multimedia-speakers-z200/apd/a7428351/pc-accessories?AID=3938566&cjevent=52da34723c6a11ed81560daa0a82b820&publisher=&cjdata=MXxOfDB8WXww&gacd=9683780-23772081-5750457-266468022-127878509&dgc=af&VEN1=13533776-3938566-&dclid=CJDrxP_ZrvoCFTENaAgdRmcJ7A&nclid=vBRxKm0wCAwzLzKh4BAVCtobrDPwckYoWi6qHqdJ8RoS9L9i44QzoIguVJyEBnlh",
  },{
    productName: "Logitech C920 HD Pro Webcam",
    img: "https://cdna.pcpartpicker.com/static/forever/images/product/c62b66e9b02a82a043c913ff5f43b4f4.256p.jpg",
    price: (1.13 *97.71).toFixed(2),
    category: "webcam",
    build: "student",
    description: `<p> Connect with everyone in Full HD 1080p on Skype, or in fluid HD 720p on FaceTime for Mac. </p> <p>Diagonal field of view (dFoV): 78°
    Record vibrant, true-to-life HD 1080p video clips that capture the smallest details. Full HD is made possible by H.264, an advanced compression technology.</p> <p>
    Make sure everyone hears the real you. Two microphones, one on either side of the webcam, capture natural stereo audio.</p> <p>
    The Full HD, five-element glass lens captures razor-sharp, clear images, while the premium autofocus adjusts smoothly and precisely to provide consistent high definition.</p> <p>
    Record clear videos even in dim light. C920 webcam automatically corrects low-light settings.</p> <p>Frame Rate:30 fps</p> <p>
    2-Year Limited Hardware Warranty; package contains webcam with 6-foot cable and user documentation.</p> <p>
    Logitech has different serial numbers for packaging vs. product, please keep your receipt for warranty purposes.</p> <p>`,
    link: "https://www.amazon.ca/dp/B006JH8T3S?tag=pcp0f-20&linkCode=ogi&th=1&psc=1",
  },{
    productName: "Intel Core i7-12700K 3.6 GHz 12-Core Processor",
    img: "https://cdna.pcpartpicker.com/static/forever/images/product/3f7037db801def4db8418df8e7498e6a.256p.jpg",
    price: (1.13 *509.99).toFixed(2),
    category: "cpu",
    build: "gaming",
    description: `<p>Fulfill any task at hand and more with the boxed Intel® Core™ i7-12700K Desktop Processor. </p> <p> Stay competitive with its Hybrid Core architecture with the Intel 7 process that has 12 cores, a combined performance of four Efficient-cores and eight 3.6 GHz Performance-cores, plus 20 threads to handle today's titles. </p> <p> This processor also has a 5 GHz Turbo Boost Max 3.0 frequency with 25MB of Intel® Smart Cache for fast and reliable performance. </p> <p> With multiple advanced technologies and support up to PCIe 5.0 and dual-channel DDR5 memory, take on more games and projects with more performance.`,
    link: "https://www.canadacomputers.com/product_info.php?cPath=4_65_3860&item_id=201280",
  },{
    productName: "Cooler Master Hyper 212",
    img: "https://m.media-amazon.com/images/I/81nu-dwkAeS._AC_SX425_.jpg",
    price: (1.13 *88.88).toFixed(2),
    category: "cpu_cooler",
    build: "gaming",
    description: `<p>Direct contact Technology : 4 Heat Pipe with exclusive direct contact technology effectively provide excellent heat dissipation; </p> <p> Air flow : 57.3 CFM; </p> <p> Noise level : 26.0 decibels
    </p> <p> Precise air flow : stacked fin array ensure least airflow resistance which allows cooler air flow into the heat sink;</p> <p>  FAN NOISE LEVEL: 8 - 30 dBA
    </p> <p> RGB LED controller : the wired RGB LED controller allows for customizable colors and effects with just the touch of a button</p> <p> 
    Smart Fan sensor for jam protection : never worry about your cables getting snagged or components being mucked up ever again</p> <p> 
    Snap and play : intuitive fan bracket design makes upgrading and removing the fan a breeze. </p> <p> FAN RATED VOLTAGE: 12VDC</p> <p> 
    CPU socket support: Intel : LGA2066, LGA2011-v3, LGA2011, LGA1151, LGA1150, LGA1156, LGA1155, LGA1366, AMD : AM4, AM3+, AM3, AM2+, AM2, FM2+, FM2, FM1. Fan Airflow: 42 CFM (Max)</p> <p> `,
    link: "https://www.amazon.ca/dp/B07H22TC1N?tag=pcp0f-20&linkCode=ogi&th=1&psc=1",
  },{
    productName: "Gigabyte B660M DS3H DDR4",
    img: "https://cdna.pcpartpicker.com/static/forever/images/product/9a09d966167a7cdc937d39d9bf9edc8b.256p.jpg",
    price: (1.13 *139.99).toFixed(2),
    category: "motherboard",
    build: "gaming",
    description: `<p>Intel LGA 1700 Socket: Supports 12th Gen Intel Core Series Processors </p> <p>
    DDR4 Compatible: Dual Channel DDR4, 4 DIMMs
    Sturdy Power Design: 6 plus2 plus1 Phases Hybrid Power Design, Premium Choke and Capacitors, 8-pin Solid Pin CPU Power Connector </p> <p>
    Comprehensive Thermal Design: M.2 Thermal Guard </p> <p>
    Next Gen Connectivity: PCIe 4.0, Dual NVME PCIe 4.0 x4 M.2, USB 3.2 Gen2 Type-C, HDMI 2.0,
    Fast Networking: 2.5GbE LAN </p> <p>
    Dynamic Audio: High-End Audio Capacitors, Audio Noise Guard </p> <p>
    Fine Tuning Features: RGB FUSION 2.0, Supports Addressable LED & RGB LED Strips, Smart Fan 6, Q-Flash Plus Update BIOS without installing, CPU, Memory, and GPU`,
    link: "https://www.amazon.ca/dp/B09QH5MFMN?tag=pcp0f-20&linkCode=ogi&th=1&psc=1",
  },{
    productName: "G.Skill Ripjaws V 32 GB",
    img: "https://cdna.pcpartpicker.com/static/forever/images/product/f97fce0b44ff2447a790b0bffc74f9f3.256p.jpg",
    price: (1.13 *117.99).toFixed(2),
    category: "memory",
    build: "gaming",
    description: `<p> DDR4 3200 (PC4 25600)</p><p>
    Timing 16-18-18-38</p> <p>
    CAS Latency 16</p> <p>
    Voltage 1.35V</p> <p>
    `,
    link: "https://www.newegg.ca/g-skill-32gb-288-pin-ddr4-sdram/p/N82E16820232091?Item=N82E16820232091&nm_mc=AFC-RAN-CAN&cm_mmc=AFC-RAN-CAN&utm_medium=affiliates&utm_source=afc-PCPartPicker&AFFID=2558510&AFFNAME=PCPartPicker&ACRID=1&ASID=https%3a%2f%2fca.pcpartpicker.com%2f&ranMID=44589&ranEAID=2558510&ranSiteID=8BacdVP0GFs-hs0BJ9o9NHngbtTiz1Uw8Q",
  },{
    productName: "Samsung 970 Evo Plus 1 TB M.2-2280",
    img: "https://cdna.pcpartpicker.com/static/forever/images/product/326881d073c1b667bd348893696c690e.256p.jpg",
    price: (1.13 *131.50).toFixed(2),
    category: "storage",
    build: "gaming",
    description: `<p>Featuring our latest V-NAND technology and a newly enhanced Phoenix controller, Samsung 970 EVO Plus Series NVMe M.2 SSDs deliver outstanding performance in Non-Volatile Memory Express (NVMe), with exceptionally fast sequential speeds outperforming our standard 970 EVO models. Plus, Samsung's Magician software solution provides advanced functionality for you to manage, monitor and maintain your drive.</p> <p>

    - NVMe speeds up sequential read/write performance, while Samsung TurboWrite technology accelerates write speeds even further</p> <p>
    - Compact M.2 form factor ready for high-end computing</p> <p>
    - Samsung Magician software for SSD management, including automatic firmware updates</p> <p>
    - Ideal for high-performance client PC applications (not designed for server or data center applications and warranty does not support such usage)</p> <p>`,
    link: "https://www.shoprbc.com/ca/shop/product_details.php?pid=51959768",
  },{
    productName: "Gigabyte GeForce RTX 3060 Ti",
    img: "https://cdna.pcpartpicker.com/static/forever/images/product/0c5f0e5e6cd671133808843a5f9236bb.256p.jpg",
    price: (1.13 *664.99).toFixed(2),
    category: "video_card",
    build: "gaming",
    description: `<p>NVIDIA Ampere Streaming Multiprocessors</p> <p>
    2nd Generation RT Cores</p> <p>
    3rd Generation Tensor Cores</p> <p>
    Powered by GeForce RTX™ 3060 Ti</p> <p>
    Integrated with 8GB GDDR6 256-bit memory interface</p> <p>
    WINDFORCE 3X Cooling System with alternate spinning fans</p> <p>
    RGB Fusion 2.0</p> <p>
    Protection metal back plate</p> <p>
    4 years warranty (Online registration required)</p> <p>
    LHR (Lite Hash Rate) version</p> <p>`,
    link: "https://ca.pcpartpicker.com/mr/memoryexpress/pqpzK8",
  },{
    productName: "NZXT H510 ATX Mid Tower Case",
    img: "https://cdna.pcpartpicker.com/static/forever/images/product/604fef5ac9874dffa927a3db98c1188d.256p.jpg",
    price: (1.13 *114.25).toFixed(2),
    category: "case",
    build: "gaming",
    description: `<p>Dimensions	W: 210mm H: 435mm D: 428mm (without feet)</p> <p>
    W: 210mm H: 460mm D: 428mm (with feet)</p> <p>
    Material(s)	SGCC Steel, Tempered Glass</p> <p>
    Weight	6.6 kg</p> <p>
    Motherboard Support	Mini-ITX, MicroATX, and ATX</p> <p>
    Front I/O Ports	1x USB 3.1 Gen 2 Type-C</p> <p>
    1x USB 3.1 Gen 1 Type-A</p> <p>
    1x Headset audio Jack</p> <p>
    Filters	All Air Intakes</p> <p>
    Included Accessories	Installation screws</p> <p>
    10x Cable ties</p> <p>
    1x Headset Audio Jack splitter (4 pole to 3 pole)</p> <p>`,
    link: "https://www.vuugo.com/nzxt-pc-cases-CA-H510B-W1.html?tracking=5108053939762",
  },{
    productName: "Corsair RMx (2021) 850 W 80+ Gold Certified Fully Modular",
    img: "https://cdna.pcpartpicker.com/static/forever/images/product/4f19c6453ce4ebe67091e6d9735f3a19.256p.jpg",
    price: (1.13 *179.05).toFixed(2),
    category: "power_supply",
    build: "gaming",
    description: `<p>Weight   1.7</p> <p>
    Adjustable Single/Multi 12V Rail   No</p> <p>
    ATX Connector   1</p> <p>
    ATX12V Version   v2.4</p> <p>
    Continuous output rated temperature C   50°C</p> <p>
    Continuous power W   850 Watts</p> <p>
    Fan bearing technology   Magnetic Levitation Bearing</p> <p>
    Fan size mm   135mm</p> <p>
    MTBF hours   100,000 hours</p> <p>
    Multi-GPU ready   Yes</p> <p>
    Warranty   Ten Years</p> <p>
    80 PLUS Efficiency   80 PLUS Gold Certified</p> <p>
    PSU Form Factor   ATX</p> <p>
    iCUE Compatibility   No</p> <p>
    Zero RPM Mode  </p> <p> `,
    link: "https://www.vuugo.com/corsair-power-supply-CP-9020200-NA.html?tracking=5108053939762",
  },{
    productName: "Asus TUF GAMING VG259QM 24.5 1920x1080 280 Hz Monitor",
    img: "https://cdna.pcpartpicker.com/static/forever/images/product/4a15d08226d960b85040c9a8e9d00406.256p.jpg",
    price: (1.13 *418.98).toFixed(2),
    category: "monitor",
    build: "gaming",
    description: `<p>24.5-inch Full HD (1920 x 1080) Fast IPS gaming monitor with ultrafast 280Hz refresh rate (supports 144Hz) designed for professional gamers and immersive gameplay
     </p> <p>Fast IPS technology enables a 1ms response time (GTG) for sharp gaming visuals with high frame rates. </p> <p>
    ASUS Extreme Low Motion Blur Sync (ELMB SYNC) technology enables ELMB together with G-SYNC Compatible, eliminating ghosting and tearing for sharp gaming visuals with high frame rates
    Certified as G-SYNC Compatible, delivering a seamless, tear-free gaming experience by enabling VRR (variable refresh rate) by default </p> <p>
    High Dynamic Range (HDR) technology with professional color gamut delivers contrast and color performance that meets the DisplayHDR 400 certification </p> <p>
    Connectivity ports include DisplayPort 1.2 and HDMI (v2.0) x2;  </p> <p>HDR (High Dynamic Range) Support : HDR10 </p> <p>`,
    link: "https://www.amazon.ca/dp/B0876KP2CK?tag=pcp0f-20&linkCode=ogi&th=1&psc=1",
  },{
    productName: "Corsair K70 RGB MK.2 Wired Gaming Keyboard",
    img: "https://cdna.pcpartpicker.com/static/forever/images/product/56fb9eb6b2096e15b3035c683e7f51a0.256p.jpg",
    price: (1.13 *183.99).toFixed(2),
    category: "keyboard",
    build: "gaming",
    description: `<p>Aircraft-grade anodized brushed aluminum frame, built to withstand a lifetime of gaming
    8MB profile storage with hardware macro and lighting playback allow access to up to three stored profiles on the go, independent of external software </p> <p>
    Per-key dynamic multi-color RGB backlighting offers near unlimited color customization and control
     </p> <p>100 Percent CHERRY MX mechanical key switches provide the reliability and accuracy you demand
     </p> <p>USB pass-through port provides convenient access to an additional USB port for your mouse or headset </p> <p>
    HID Keyboard Report Rate: 1000Hz`,
    link: "https://www.amazon.ca/dp/B07D5S54C6?tag=pcp0f-20&linkCode=ogi&th=1&psc=1",
  },{
    productName: "Logitech G602 Wireless Optical Mouse",
    img: "https://m.media-amazon.com/images/I/51C0WpswuDL.jpg",
    price: (1.13 *300.91).toFixed(2),
    category: "mouse",
    build: "gaming",
    description: `<p>Up to 250 hours of battery life. 2 AA batteries (non-rechargeable) </p> <p>
    Power-saving, high-accuracy Delta Zero sensor technology </p> <p>
    Lag-free gaming-grade wireless, Performance and Endurance modes maximize battery life </p> <p>
    Long-life buttons rated to 20 million clicks, 11 programmable buttons. Ultra-durable build </p> <p>
    For Windows 10, Windows 8, Windows 7, Windows Vista, and Mac OS X 10.6.8 or higher.  </p> <p>For more details go through the "System Requirements" mentioned below. </p> <p>Max. speed: > 80  </p> `,
    link: "https://www.amazon.ca/dp/B00E4MQODC?tag=pcp0f-20&linkCode=ogi&th=1&psc=1",
  },{
    productName: "SENNHEISER HD 599 Open Back Headphone",
    img: "https://cdn.shopify.com/s/files/1/0036/4806/1509/products/562cf9892022487ea2410a5531de0a7d588bab24_square2872138_1.jpg?v=1653664975g",
    price: (1.13 *259.95).toFixed(2),
    category: "headphones",
    build: "gaming",
    description: `<p>HD 598 audiophile headphones inspired by European sport sedans </p> <p>
    Ergonomic Acoustic Refinement technology </p> <p>
    Plush Premium metal mesh and sophisticated burl wood accents luxurious velour ear pads for long listening sessions </p> <p>
    Peace of mind – 2-year international warranty </p> <p>`,
    link: "https://www.amazon.ca/Sennheiser-HD-599-Open-Headphone-dp-B01L1IICR2/dp/B01L1IICR2/ref=dp_ob_title_ce",
  },{
    productName: "Logitech G560 120 W 2.1 Channel Speakers",
    img: "https://cdna.pcpartpicker.com/static/forever/images/product/ad2ea31f9621f1aa5f4693fa012bc4de.256p.jpg",
    price: (1.13 *249.99).toFixed(2),
    category: "speakers",
    build: "gaming",
    description: `<p>Powerful sound from its 2.1 design with an active subwoofer </p> <p> 
    240 Watts Peak/ 120 Watts RMS power provides bold, clear sound </p> <p>
    Built-In LIGHTSYNC RGB lighting blasts game driven lighting colors and effects activated by the audio in many popular games </p> <p>
    Easily customize four speaker lighting zones with Logitech family software for both front and rear light projection in your choice of 16.8 Million colors </p> <p>
    Integrated DTS:X ultra surround sound renders 3d positional audio so you hear your gaming environment from every angle </p> <p>
    Bluetooth v4.1 and 25m line of sight range for the most reliable connection </p> <p>
    Works with windows based PCs and Bluetooth enabled devices including computers, smartphones and tablets (DTS:X not supported on mac OS x) </p>`,
    link: "https://www.memoryexpress.com/Products/MX71499",
  },{
    productName: "Logitech BRIO Ultra HD Pro Webcam",
    img: "https://cdna.pcpartpicker.com/static/forever/images/product/6c931846f8b1f5346a3700526272ea24.256p.jpg",
    price: (1.13 *205.53).toFixed(2),
    category: "webcam",
    build: "gaming",
    description: `<p>Connectivity technology	USB </p> 
    <p>Special feature	Low Light</p> 
    <p>Screen size	3 Inches </p> 
    <p>Series	960-001178 </p> 
    <p>Included components	USB Type C cable, Privacy Shutter, Soft cloth </p> `,
    link: "https://www.amazon.ca/dp/B06X92Z67Z?tag=pcp0f-20&linkCode=ogi&th=1&psc=1",
  },{
    productName: "Intel Core i9-12900K 3.2 GHz 16-Core Processor",
    img: "https://cdna.pcpartpicker.com/static/forever/images/product/b9d3c68bbf713cdd1211f3792040ce95.256p.jpg",
    price: (1.13 *719.98).toFixed(2),
    category: "cpu",
    build: "pgve",
    description: `<p>Create a perfect machine for gaming or content creation using this Intel Core i9-12900K octa-core 3.2GHz processor.  </p> <p>This unlocked 12th Gen Intel Core desktop processor features Turbo Boost Max 3.0 technology that automatically kicks up the clock speed for critical workloads. </p> <p> With 8 cores, DDR5 and DDR4 support and PCIe Gen 5.0 & 4.0 support, this processor assures speedy performance. </p> <p>`,
    link: "https://www.bestbuy.ca/en-ca/product/intel-core-i9-12900k-octa-core-3-2ghz-processor/15778670?irclickid=1Ke3h5zZIxyNRqG3iHyDTyiwUkDTnb1tx16t2E0&ref=affiliate&utm_content=79301&utm_source=IR&acmp=PCPartPicker&utm_term=898179&irgwc=1",
  },{
    productName: "Cooler Master MASTERLIQUID ML240L",
    img: "https://cdna.pcpartpicker.com/static/forever/images/product/5b6a5e7f4cf456ccf6415235cf7adc99.256p.jpg",
    price: (1.13 *99.50).toFixed(2),
    category: "cpu_cooler",
    build: "pgve",
    description: `<p>EXTERIOR COLOR: 
    Black</p> <p>
    CPU SOCKET: 
    LGA2066, LGA2011-v3, LGA2011, LGA1200, LGA1151, LGA1150, LGA1155, LGA1156, AM4, AM3+, AM3, AM2+, AM2, FM2+, FM2, FM1</p> <p>
    RADIATOR MATERIAL:
    Aluminum</p> <p>
    RADIATOR DIMENSIONS:
    157 x 119.6 x 27.2 mm / 6.2 x 4.7 x 1.1 inch, 277 x 119.6 x 27.2 mm / 10.9 x 4.7 x 1.1 inch</p> <p>
    PUMP DIMENSIONS:
    79.9 x 76 x 47.1 mm / 3.1 x 3 x 1.9 inch</p> <p>
    PUMP MTTF:
    70,000 Hours</p> <p>
    PUMP NOISE LEVEL: 15 dBA </p> <p>
    POWER CONNECTOR:
    3-Pin</p> <p>
    PUMP RATED VOLTAGE:
    12 VDC</p> <p>
    PUMP POWER CONSUMPTION:
    2.36W (LED 2.21W)</p> <p>`,
    link: "https://www.vuugo.com/coolermaster-liquid-cooling-MLW-D24M-A18PC-R2.html?tracking=5108053939762",
  },{
    productName: "MSI MAG B660 TOMAHAWK WIFI DDR4",
    img: "https://cdna.pcpartpicker.com/static/forever/images/product/62befea3ebf04f78b865687fab11c7b1.256p.jpg",
    price: (1.13 *244.63).toFixed(2),
    category: "motherboard",
    build: "pgve",
    description: `<p>4x DDR4 memory slots, support up to 128GB 1 </p> <p>
    Supports 1R 2133 / 2666 / 3200 MHz (by JEDEC & POR) </p> <p>
    Max overclocking frequency: </p> <p>
    1DPC 1R Max speed up to 4800+ MHz </p> <p>
    1DPC 2R Max speed up to 4000+ MHz </p> <p>
    2DPC 1R Max speed up to 4000+ MHz </p> <p>
    2DPC 2R Max speed up to 3600+ MHz </p> <p>
    Supports Dual-Channel mode </p> <p>
    Supports non-ECC, un-buffered memory </p> <p>
    Supports Intel® Extreme Memory Profile (XMP) </p>`,
    link: "https://www.vuugo.com/msi-motherboards-B660TOMWID4.html?tracking=5108053939762",
  },{
    productName: "G.Skill Trident Z Neo 32 GB",
    img: "https://cdna.pcpartpicker.com/static/forever/images/product/20348ef9eb7ca86600eefb50c6a56597.256p.jpg",
    price: (1.13 *228.33).toFixed(2),
    category: "memory",
    build: "pgve",
    description: `<p>Ddr4-3600Mhz, cl16-19-19-39 timing</p> <p>
    16Gb (2 x 16gb) total capacity</p> <p>
    Voltage 1.35v</p> <p>
    Designed with a low voltage of 1.2v1.35v At ddr4 standard, this lowers the memory voltage requirement by 20% from ddr3 memory kits</p> <p>
    Xmp 2.0 Ready</p> <p>`,
    link: "https://www.amazon.ca/dp/B07WTS8T2W?tag=pcp0f-20&linkCode=ogi&th=1&psc=1",
  },{
    productName: "Samsung 970 Evo Plus 2 TB M.2-2280",
    img: "https://cdna.pcpartpicker.com/static/forever/images/product/13eff9fb98909107806f62c493d3775f.256p.jpg",
    price: (1.13 *239.99).toFixed(2),
    category: "storage",
    build: "pgve",
    description: `<p>INNOVATIVE V-NAND TECHNOLOGY: Powered by Samsung V-NAND Technology, the 970 EVO Plus SSD's NVMe interface (PCIe Gen 3.0 x4 NVMe 1.3) offers enhanced bandwidth, low latency, and power efficiency ideal for tech enthusiasts, high end gamers, and 4K & 3D content designers
    </p> <p>BREAKTHROUGH READ WRITE SPEEDS: Sequential read and write performance levels of up to 3,500MB s and 3,300MB s, respectively; Random Read (4KB, QD32): Up to 600,000 IOPS Random Read
    </p> <p>PERFORMANCE OPTIMIZATION AND DATA SECURITY: Seamless cloning and file transfers with Samsung Magician Software, the ideal SSD management solution for performance optimization and data security with automatic firmware updates
    </p> <p>SUPERIOR HEAT DISSIPATION: Samsung's Dynamic Thermal Guard automatically monitors and maintains optimal operating temperatures to minimize performance drops
    </p> <p>5-YEAR LIMITED WARRANTY: 5-year limited warranty or 600 TBW (Terabytes Written)
    </p>`,
    link: "https://www.amazon.ca/dp/B07MFZXR1B?tag=pcp0f-20&linkCode=ogi&th=1&psc=1",
  },{
    productName: "Zotac GeForce RTX 3060 Ti",
    img: "https://m.media-amazon.com/images/I/31Qfpn4jBbL.jpg",
    price: (1.13 *716.87).toFixed(2),
    category: "video_card",
    build: "pgve",
    description: `<p>NVIDIA Ampere architecture, 2nd Gen Ray Tracing Cores, 3rd Gen Tensor Cores
    Boost Clock 1695 MHz, 8GB 256-bit GDDR6, 14 Gbps, PCIE 4.0; Low Hash Rate (LHR) 25 MH's ETH hash rate (est.)</p> <p>
    White LED Logo Lighting, IceStorm 2.0 Advanced Cooling, </p> <p>Active Fan Control, </p> <p>Freeze Fan Stop, Metal Backplate</p> <p>
    8K Ready, </p> <p>4 Display Ready, </p> <p>HDCP 2.3, </p> <p>VR Ready
    4 x DisplayPort 1.4a, </p> <p>1 x HDMI 2.1, </p> <p>DirectX 12 Ultimate, </p> <p>Vulkan RT API, </p> <p>OpenGL 4.6</p> <p>`,
    link: "https://www.amazon.ca/dp/B097YW4FW9?tag=pcp0f-20&linkCode=ogi&th=1&psc=1",
  },{
    productName: "Fractal Design Focus G ATX Mid Tower Case",
    img: "https://cdna.pcpartpicker.com/static/forever/images/product/1ee4eb7d40aaf6bb43c86b4865407c2d.256p.jpg",
    price: (1.13 *69.99).toFixed(2),
    category: "case",
    build: "pgve",
    description: `<p>The new Focus series from Fractal Design is the cornerstone for your PC build, showcasing the hardware aesthetics at the heart of your system with elegant accents and sophisticated style.  </p> <p>Focus G: Contemporary ATX case design accommodates high-performance components with smart and efficient space utilization for a compact footprint. </p> <p>

    Extensive cooling options are available with support for tall CPU heatsink/fan combos and water cooling with multiple dual-fan radiators.  </p> <p>Filtered front, top and base air intakes maintain a dust-free environment while expert cable management options keep wiring tidy.  </p> <p>With edge-to-edge visibility, clean contemporary styling and two Silent Series LED fans, the Focus makes your hardware the center of attention.`,
    link: "https://www.memoryexpress.com/Products/MX68120",
  },{
    productName: "Corsair RMx (2021) 1000 W 80+ Gold",
    img: "https://cdna.pcpartpicker.com/static/forever/images/product/2e9c1e7ffca723f2acf802efc7f4e331.256p.jpg",
    price: (1.13 *219.99).toFixed(2),
    category: "power_supply",
    build: "pgve",
    description: `<p>Fully modular, so you only connect the cables that your system needs. </p> <p>
    A 135mm ML fan utilizes a magnetic levitation bearing and custom engineered rotors for high performance, low noise, and superior reliability. </p> <p>
    EPS12V connector for compatibility with modern graphics cards and motherboards. </p> <p>
    100% Industrial-grade, 105°C rated Japanese capacitors ensure unwavering power and reliability.
    Supports Modern Standby sleep mode for extremely fast wake-from-sleep times and better low-load efficiency. </p> <p>
    Zero RPM fan mode for near-silent operation at low to medium loads. </p> <p>
    Resonant LLC topology with DC-to-DC conversion provides clean, consistent power, reduces coil whine for quieter operation, and enables use of more energy efficient sleep states. </p> <p>
    Ten-year warranty for complete peace of mind. </p> <p>`,
    link: "https://www.newegg.ca/corsair-rmx-series-rm1000x-cp-9020201-na-1000w/p/N82E16817139273?Item=N82E16817139273&nm_mc=AFC-RAN-CAN&cm_mmc=AFC-RAN-CAN&utm_medium=affiliates&utm_source=afc-PCPartPicker&AFFID=2558510&AFFNAME=PCPartPicker&ACRID=1&ASID=https%3a%2f%2fca.pcpartpicker.com%2f&ranMID=44589&ranEAID=2558510&ranSiteID=8BacdVP0GFs-wlkfG7S4N.k5iybQ1SbARw",
  },{
    productName: "Microsoft Windows 11 Pro OEM",
    img: "https://m.media-amazon.com/images/I/41m9J8wV3cL.jpg",
    price: (1.13 *155.25).toFixed(2),
    category: "operating_system",
    build: "pgve",
    description: `<p>System Requirement	 </p> <p> 
    Processor	1 gigahertz (GHz) or faster with 2 or more cores on a?compatible 64-bit processor or System on a Chip (SoC). </p> <p>
    RAM	4 gigabyte (GB). </p> <p>
    Storage	64 GB or larger storage device Note: See below under “More information on storage space to keep Windows 11 up-to-date” for more details. </p> <p>
    System firmware	UEFI, Secure Boot capable. Check here for information on how your PC might be able to meet this requirement. </p> <p>
    TPM	Trusted Platform Module (TPM) version 2.0. </p>`,
    link: "https://www.vuugo.com/microsoft-os-FQC-10529.html?tracking=5108053939762",
  },{
    productName: "Asus TUF Gaming VG27AQ 27.0 2560x1440 165 Hz Monitor",
    img: "https://m.media-amazon.com/images/I/41ZM7pNwiJL.jpg",
    price: (1.13 *409.50).toFixed(2),
    category: "monitor",
    build: "pgve",
    description: `<p>Number of Screens:   1 </p> <p>
    Screen Size Class:   27" (685.80 mm) </p> <p>
    Viewable Screen Size:   27" </p> <p>
    Screen Mode:   WQHD </p> <p>
    Panel Technology:   In-plane Switching (IPS) Technology </p> <p>
    Response Time:   1 ms MPRT </p> <p>
    Aspect Ratio:   16:9 </p> <p>
    Pixel Pitch:   9.17 mil (0.23 mm) </p> <p>
    Horizontal Frequency:   30 kHz to 243 kHz - DisplayPort </p> <p>
    Horizontal Frequency:   30 kHz to 230 kHz - HDMI </p> <p>
    Vertical Frequency:   48 Hz to 144 Hz - HDMI </p> <p>
    Vertical Frequency:   48 Hz to 165 Hz - DisplayPort </p> <p>
    Adjustable Stand Height:   Yes </p> <p>`,
    link: "https://www.vuugo.com/asus-monitors-VG27AQ.html?tracking=5108053939762",
  },{
    productName: "Logitech G413 Carbon Wired Gaming Keyboard",
    img: "https://cdna.pcpartpicker.com/static/forever/images/product/4cb0d315a2e8482f745eb053f92c9f31.256p.jpg",
    price: (1.13 *78.55).toFixed(2),
    category: "keyboard",
    build: "pgve",
    description: `<p>Manufacturer:	Logitech </p> <p>
    Manufacturer Part Number:	920-008300 </p> <p>
    Brand Name:	Logitech </p> <p>
    Product Model:	G413 </p> <p>
    Product Name:	G413 Keyboard </p> <p>
    Product Type:	Keyboard </p> <p>`,
    link: "https://isanek.com/shop/product/40959724/1?utm_content=PCPartPicker&utm_campaign=15&ranMID=46412&ranEAID=8BacdVP0GFs&ranSiteID=8BacdVP0GFs-y65_8DBhm8eyuO5leSPKQw",
  },{
    productName: "Logitech G Pro X Superlight Wireless Optical Mouse",
    img: "https://m.media-amazon.com/images/I/31Ub3hpjHWL.jpg",
    price: (1.13 *199.99).toFixed(2),
    category: "mouse",
    build: "pgve",
    description: `<p>Meticulously designed in collaboration with many of the world's leading esports pros.  </p> <p>Engineered to win, being the pinnacle of our continued pursuit for the highest levels of performance. </p> <p>
    Ultra-lightweight at under 63 grams, with hyper-minimal redesign achieving nearly 25% weight reduction compared to standard PRO Wireless mouse. </p> <p>
    Powered by Lightspeed, PRO X Superlight is our fastest and most reliable PRO mouse yet. </p> <p>
    Incredibly precise, fast and consistent control with Hero Sensor, designed from the ground up by Logitech G engineers for the best possible gaming performance </p> <p>`,
    link: "https://www.amazon.ca/dp/B087LXCTFJ?tag=pcp0f-20&linkCode=ogi&th=1&psc=1",
  },{
    productName: "SteelSeries ARCTIS 7 2019 Edition",
    img: "https://cdna.pcpartpicker.com/static/forever/images/product/bdb3916323d5db4d6349200782f3f0ba.256p.jpg",
    price: (1.13 *386.34).toFixed(2),
    category: "headphones",
    build: "pgve",
    description: `<p>Designed for gaming, the 2.4G connection delivers rock-solid, lossless wireless audio with ultra-low latency and zero interference.  </p> <p>Headphone Frequency Response: 20–20000 Hz
    Widely recognized as the best mic in gaming, the Discord-certified ClearCast microphone delivers studio-quality voice clarity and background noise cancellation. </p> <p>Headphone Impedance:32 Ohm
    Sound is your competitive advantage with the S1 speaker drivers, engineered to produce ultra-low distortion audio so you hear every detail.  </p> <p>Effective Range: 12 m / 40 ft </p> <p>
    Immerse yourself in 360-degrees of precision audio with next-generation </p> <p> DTS Headphone:X v2.0 surround sound </p> <p>
    24-hour battery life gives you enough continuous play for even your longest gaming sessions; </p> <p> Headphone Sensitivity: 98 db; Does not have bluetooth`,
    link: "https://www.amazon.ca/dp/B07FZVXS8H?tag=pcp0f-20&linkCode=ogi&th=1&psc=1",
  },{
    productName: "Logitech Z906 500 W 5.1 Channel Speakers",
    img: "https://m.media-amazon.com/images/I/41tnErFDq3L.jpg",
    price: (1.13 *499.99).toFixed(2),
    category: "speakers",
    build: "pgve",
    description: `<p> Ultra-Precise Supercardioid Pickup Pattern: The Razer Seiren Mini is tuned with a tighter pickup angle, so it can focus on your voice while ensuring that background noises like typing and mouse clicks don't get picked up.</p> <p>
    Professional Recording Quality: With its 14mm condenser capsule and flat frequency response, the mic broadcasts your voice with stellar clarity that's filled with crisp highs and deep lows.</p> <p>
    Ultra-Compact Build: Made for minimalist or smaller setups, it barely takes up any desk space and is discreet on-camera, putting more focus on you. Easy to bring along if you need take your streaming elsewhere.</p> <p>`,
    link: "https://www.amazon.ca/dp/B004M18O60?tag=pcp0f-20&linkCode=ogi&th=1&psc=1",
  },{
    productName: "Razer Seiren Mini USB Condenser Microphone",
    img: "https://cdn.shopify.com/s/files/1/0036/4806/1509/products/e551d80d98cf5b856e0626aae8de30583fb188ff_square3005083_1.jpg?v=1636720773",
    price: (1.13 *69.96).toFixed(2),
    category: "microphone",
    build: "student",
    description: `<p>5.1 digital surround sound: Hear every detail in your Dolby Digital and DTS soundtracks the way the studio intended. </p> <p>
    THX-certified home theater speakers: Your assurance of true cinema-quality sound.
    Delivers a continuous 500 watts of power, with the ability to deliver a peak of 1,000 watts under certain circumstances. </p> <p>
    Thunderous, room-shaking audio with deep bass you can feel and digital optical input is 2
    Flexible setup: Connect up to six devices—computer, music player, TV, game console and more. </p> <p>Satellites: 4 x 67 W, wall mountable </p> <p>
    Easy sound control: Compact control console and wireless remote let you instantly personalize your surround-sound experience. </p> `,
    link: "https://www.amazon.ca/Razer-Seiren-Mini-Streaming-Microphone/dp/B08HH3FTYT/ref=zg_bs_8397190011_sccl_1/141-0592001-0794036?pd_rd_i=B08HH3FTYT&psc=1",
  }, {
    productName: "Logitech for Creators Blue Yeti USB Microphone",
    img: "https://multimedia.bbycastatic.ca/multimedia/products/500x500/103/10361/10361788.jpg",
    price: (1.13 * 179.98).toFixed(2),
    category: "microphone",
    build: "gaming",
    description: `<p>Custom Three-Capsule Array: Produces clear, powerful, broadcast-quality sound for YouTube, game streaming, podcasting, Zoom calls and music </p> <p>
    Blue VO!CE Software: Craft the perfect broadcast vocal sound and entertain your audience with enhanced effects, advanced modulation and HD audio samples </p> <p> Frequency Response: 15 Hz - 22 kHz
    Four Pickup Patterns: Flexible cardioid, omni, bidirectional, and stereo pickup patterns allow you to record in ways that would normally require multiple mics </p> <p>
    Onboard Audio Controls: Headphone volume, pattern selection, instant mute, and mic gain put you in charge of every level of the recording and streaming process </p> <p>
    Unique Positionable Design: Adjust and pivot the microphone in relation to the sound source to optimize your sound quality </p> <p>
    Unique Positionable Design: Adjust and pivot the microphone in relation to the sound source to optimize your sound quality </p> <p> `,
    link: "https://www.amazon.ca/Blue-Microphones-Yeti-Microphone-Blackout/dp/B00N1YPXW2/ref=sr_1_12?crid=2G190RP4KTX3J&keywords=%5Cmicrophone&qid=1664229662&refinements=p_36%3A12035763011&rnid=12035759011&s=musical-instruments&sprefix=microphone%2Caps%2C115&sr=1-12",
  }, {
    productName: "Rode NT1-A Anniversary",
    img: "https://images-na.ssl-images-amazon.com/images/I/A1hly9ZK6CL._SL1500_.jpg",
    price: (1.13 * 249).toFixed(2),
    category: "microphone",
    build: "pgve",
    description: `<p>Large diaphragm 1” gold-sputtered capsule</p> <p>
    Cardioid polar pattern</p> <p>
    Ultra-low noise, self-noise of only 5dB (A)</p> <p>
    Includes Rode SM6 shock mount, pop filter and dust cover</p> <p>
    Internal capsule shock mounting </p>`,
    link: "https://www.amazon.ca/Rode-Anniversary-Condenser-Microphone-Package/dp/B002QAUOKS/ref=sr_1_17?crid=2G190RP4KTX3J&keywords=%5Cmicrophone&qid=1664229676&refinements=p_36%3A12035764011&rnid=12035759011&s=musical-instruments&sprefix=microphone%2Caps%2C115&sr=1-17",
  },
]

let partFilter = [{
  category: "cpu",
  enabled: true
},{
  category: "cpu_cooler",
  enabled: true
},{
  category: "motherboard",
  enabled: true
},{
  category: "memory",
  enabled: true
},{
  category: "storage",
  enabled: true
},{
  category: "video_card",
  enabled: true
},{
  category: "case",
  enabled: true
},{
  category: "power_supply",
  enabled: true
},{
  category: "optical_drive",
  enabled: true
},{
  category: "operating_system",
  enabled: true
},{
  category: "monitor",
  enabled: true
},{
  category: "keyboard",
  enabled: true
},{
  category: "mouse",
  enabled: true
},{
  category: "headphones",
  enabled: true
},{
  category: "speakers",
  enabled: true
},{
  category: "webcam",
  enabled: true
},{
  category: "sound_card",
  enabled: true
},{
  category: "network_adapter",
  enabled: true
},{
  category: "microphone",
  enabled: true
},{
  category: "external_storage",
  enabled: true
},];

let buildClicked = [
  {
    build: "student",
    clicked: false,
  },
  {
    build: "gaming",
    clicked: false,
  },
  {
    build: "pgve",
    clicked: false,
  }
]

let studentSoftware = `
<a href="https://www.microsoft.com/en-us/education/products/office" class="software-container" target=”_blank”>
<div>
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Office_365_app_logos.svg/1200px-Office_365_app_logos.svg.png">
</div>
<div class="software-description">
  <h4>Microsoft 365</h4>
  <p>FREE FOR STUDENTS!</p>
</div>
</a>
`

let gamingSoftware = `
<a href="https://store.steampowered.com/about/" class="software-container" target=”_blank”>
<div>
  <img src="https://cdn.cloudflare.steamstatic.com/store/home/store_home_share.jpg">
</div>
<div class="software-description">
  <h4>Steam</h4>
  <p>Has free/paid games!</p>
</div>
</a>
`

let videoEditingSoftware = `
<a href="https://www.blackmagicdesign.com/ca/products/davinciresolve/whatsnew" class="software-container" target=”_blank”>
<div>
  <img src="https://www.cined.com/content/uploads/2022/04/DaVinciResolve18-ColorPage_featured.jpg">
</div>
<div class="software-description">
  <h4>DaVinci Resolve 18</h4>
  <p>Free video editing software</p>
</div>
</a>
`