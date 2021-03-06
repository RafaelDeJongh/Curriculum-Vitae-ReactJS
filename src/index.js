var React = require('react');
var ReactDOM = require('react-dom');
var QRCode = require('qrcode.react');
var Styles = require('./index.css');

function CV(props) {
	const personalia = props.pContent.map(info => (
		<aside key="1">
			<header>
				<figure id="profile-fig">
					<img id="profile-img" src={`${info.picture}`} alt={`${info.name} - ${info.title}`} />
				</figure>
				<h1>{info.name}</h1>
				<h2>{info.title}</h2>
			</header>
			<section id="personalia">
				<h3>Personalia</h3>
				{info.personalia.map(info => (
					<ul key={info}>
						<li id="p-birth">{info.birthday}</li>
						<li id="p-nationality">Nationality: {info.nationality}</li>
						<li id="p-address">{info.location}</li>
						<li id="p-gsm"><a href={`tel:${info.phone}`}>{info.phone}</a></li>
						<li id="p-mail"><a href={`mailto:${info.mail}`}>{info.mail}</a></li>
						<li id="p-web"><a href={`https://${info.website}`} target="_blank">{info.website}</a></li>
					</ul>
				))}
			</section>
			<section>
				<h3>Language Skills</h3>
				{info.languages.map(info => (
					<div className="p-languages" key={info.id}>
						<h4>{info.language}</h4>
						<div className="p-progress">
							<h5>{info.level}</h5>
							<progress max={100} value={info.knowledge} />
						</div>
					</div>
					))}
			</section>
			<footer id="qr">
				<div id="qr-code">
					<img id="qr-logo" src={`${info.qrlogo}`} alt="QR Logo" />
					<QRCode value={`${info.qr}`} bgColor="#1e1f21" fgColor="#fff" size={256} level="M"/>
				</div>
				<a href={`${info.qr}`} target="_blank">{info.qr.replace(/(^\w+:|^)\/\//,'').replace(/\/+$/,'')}</a>
			</footer>
		</aside>
	));
	const experience = props.eContent.map(info => (
		<article key="1">
			<section id="education">
				<h2>Education</h2>
				{info.cBoxHead.reverse().map(info => (
				<section className="infItem" key={info.id}>
					<div className="infDesc">
						<h3>{info.school}</h3>
						<h4>{info.course}</h4>
					</div>
					<h5>{info.yearStart.length ? info.yearStart+'–' : ""}{info.yearEnd}</h5>
				</section>
			))}
			</section>
			<section id="work-experience">
				<h2>Work Experience</h2>
				{info.cBoxMain.reverse().map(info => (
				<section className="infItem" key={info.id}>
					<div className="infDesc">
						<h3>{info.work}</h3>
						<h4>{info.description}</h4>
					</div>
					<h5>{info.yearStart.length ? info.yearStart+'–' : ""}{info.yearEnd}</h5>
				</section>
			))}
			</section>
			<section id="knowledge">
				<h2>Knowledge</h2>
				<section className="infItem">
					{info.cBoxFooter.map(info => (
					<div className="infoL" key={info}>
						<h3>{info.cListLT}</h3>
						<ul>
							{info.cListL.map(info => (
								<li key={info.id}>{info.item}</li>
							))}
						</ul>
					</div>
					))}
					{info.cBoxFooter.map(info => (
					<div className="infoR" key={info}>
						<h3>{info.cListRT}</h3>
						<ul>
							{info.cListR.map(info => (
								<li key={info.id}>{info.item}</li>
							))}
						</ul>
					</div>
				))}
				</section>
			</section>
		</article>
	));
	return (
		<main>
			{personalia}
			{experience}
		</main>
	);
}
const pContent = [
	{
		name:"Rafaël De Jongh",
		title:"Web Developer | 3D Artist",
		picture:"images/profilepicture.jpg",
		personalia:[
			{
				birthday:"12 September 1994",
				nationality:"Belgian",
				location:"Antwerp, Belgium",
				phone:"+32 485 34 62 49",
				mail:"rafaeldejongh@live.be",
				website:"www.rafaeldejongh.com"
			}
		],
		languages:[
			{id:1,language:"Dutch",level:"Native",knowledge:100},
			{id:2,language:"English",level:"C1",knowledge:85},
			{id:3,language:"French",level:"A2",knowledge:40}
		],
		qr:"https://www.RafaelDeJongh.com/",
		qrlogo:"images/qrcode-logo.svg",
		qrfb:"images/qrcode.svg"
	}
];
const eContent = [
	{
		cBoxHead:[
			{
				id:1,
				school:"Stedelijk Lyceum Olympiade",
				course:"Technical Education Tourism, Reception and PR.",
				yearStart:"2006",
				yearEnd:"2011"
			},
			{
				id:2,
				school:"Stedelijk Lyceum Cadix",
				course:"Technical Education Multimedia.",
				yearStart:"2011",
				yearEnd:"2014"
			},
			{
				id:3,
				school:"AP Hogeschool Antwerpen",
				course:"Professional Bachelor Crossmedia-Design.",
				yearStart:"2014",
				yearEnd:"2018"
			},
			{
				id:4,
				school:"Google Digitaal Atelier",
				course:"Google Online Marketing Certificate.",
				yearStart:"",
				yearEnd:"10/2017"
			},
		],
		cBoxMain:[
			{
				id:1,
				work:"Gamebanana.com",
				description:"Head of 3D Art and Moderator.",
				yearStart:"2013",
				yearEnd:"Present"
			},
			{
				id:2,
				work:"Steam Workshop Paid Mods: Gifts of Akatosh",
				description:"A personal collaboration with Valve and Bethesda to create mods for Skyrim.",
				yearStart:"",
				yearEnd:"06/2015"
			},
			{
				id:3,
				work:"Oconceptstore.be",
				description:"WordPress webshop made with WooCommerce.",
				yearStart:"",
				yearEnd:"06/2016"
			},
			{
				id:4,
				work:"Smartgoldhamilton.ca",
				description:"WordPress website for a physical gold store in Canada.",
				yearStart:"",
				yearEnd:"07/2016"
			},
			{
				id:5,
				work:"APCOA Parking",
				description:"Student job as a parking attendant in Antwerp.",
				yearStart:"2014",
				yearEnd:"2016"
			},
			{
				id:6,
				work:"JohannesDeJongh.com",
				description:"WordPress portfolio website for a cinematographer and motion Graphics Artist.",
				yearStart:"",
				yearEnd:"01/2017"
			},
			{
				id:7,
				work:"Beeple.eu",
				description:"WordPress website for as a collaborated internship assignment.",
				yearStart:"02",
				yearEnd:"03/2017"
			},
			{
				id:8,
				work:"Carlino-FGS.com",
				description:"WordPress WooCommerce webshop with a focus on a POS system.",
				yearStart:"",
				yearEnd:"05/2017"
			},
			{
				id:9,
				work:"Safegold.ca",
				description:"WordPress website for a physical gold store in Canada.",
				yearStart:"",
				yearEnd:"06/2017"
			},
			{
				id:10,
				work:"DDCare.be",
				description:"WordPress website for a Belgian dentist practice.",
				yearStart:"",
				yearEnd:"06/2017"
			},
			{
				id:11,
				work:"SandhillSstudio.be",
				description:"WordPress website for a startup production house.",
				yearStart:"",
				yearEnd:"07/2017"
			},
			{
				id:12,
				work:"UKLederwaren.be",
				description:"WordPress WooCommerce Webshop with B2B functionality.",
				yearStart:"",
				yearEnd:"07/2017"
			},
			{
				id:13,
				work:"MyRetailJungle.com",
				description:"WordPress website for an online platform for retail experts.",
				yearStart:"",
				yearEnd:"09/2017"
			},
			{
				id:14,
				work:"tZotKiekske.be",
				description:"WordPress website for a chicken restaurant.",
				yearStart:"",
				yearEnd:"12/2017"
			},
			{
				id:15,
				work:"NendoAddicts.be",
				description:"WordPress catalogus website for anime figurines.",
				yearStart:"",
				yearEnd:"01/2018"
			},
			{
				id:16,
				work:"Lonely Alien",
				description:"A perfect internship where I developed various Online Web Development skills.",
				yearStart:"01",
				yearEnd:"04/2018"
			},
			{
				id:17,
				work:"MIMU-TankLeasing.com",
				description:"WordPress Elementor website as an Internship assignment from Lonely Alien.",
				yearStart:"",
				yearEnd:"03/2018"
			},
			{
				id:18,
				work:"TheMovieLot.com",
				description:"WordPress E-Commerce site as an Internship assignment from Lonely Alien.",
				yearStart:"",
				yearEnd:"04/2018"
			},
		],
		cBoxFooter:[{
			cListLT:"Web Development",
			cListL:[
				{id:1,item:"HTML5"},
				{id:2,item:"CSS3"},
				{id:3,item:"Sass/Less"},
				{id:4,item:"JavaScript"},
				{id:5,item:"jQuery"},
				{id:6,item:"PHP"},
				{id:7,item:"MySQL"},
				{id:8,item:"WordPress"},
				{id:9,item:"WooCommerce"},
				{id:10,item:"SEO/SMO/SME"},
			],
			cListRT:"Software",
			cListR:[
				{id:1,item:"Notepad++"},
				{id:2,item:"Photoshop"},
				{id:3,item:"Illustrator"},
				{id:4,item:"Premiere Pro"},
				{id:5,item:"After Effects"},
				{id:6,item:"InDesign"},
				{id:7,item:"Audition"},
				{id:8,item:"3DsMax"},
				{id:9,item:"Quixel Suite"},
				{id:10,item:"Microsoft Office"}
			]
		}]
	}
];
ReactDOM.render(<CV pContent={pContent} eContent={eContent} />,document.getElementById("cv"),);