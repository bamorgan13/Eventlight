db.events.insertMany([
	{
		title: 'Delaware Beer Wine and Spirits Festival',
		description:
			'No gambling on the weather - Rain or shine! In case of bad weather we are able to move the event indoors. See you there!\n\nThe Delaware Beer, Wine & Spirits Festival celebrates its 10th year on August 24, 2019 and is the only statewide festival for this industry. This year’s event will take place at the Delaware Agricultural Museum and Village, with VIP-only tastings from 2:30-4pm and General Admission from 3:30-7:30pm, and will incorporate a collaboration with Delaware’s agriculture industry.\n\nThe event features beer, wine and spirits tastings, meet the brewer opportunities, a mechanical bull, special demonstrations, food trucks, live music, outdoor games, special exhibits, guided tours of the Agricultural Museum. Event will also spotlight the Delaware Beer, Wine & Spirits Trail (VisitDelaware.com/bwst) and the Trail’s downloadable mobile app.\n\nVIP Tickets provide reserved parking, early access, exclusive samplings, catered meal and more. Early-bird discounts are available for VIP and General Admission tickets. Tickets go on sale March 1.',
		creator: db.users.findOne({ full_name: 'Bryce Morgan' })._id,
		organizer_name: 'Event Allies',
		organizer_description: '',
		start_date: new Date('2019-08-24T14:30:00.000-04:00'),
		end_date: new Date('2019-08-24T19:30:00.000-04:00'),
		location: {
			location_name: 'Delaware Agricultural Museum',
			location_address: '866 North Dupont Highway',
			city: db.cities.findOne({ city: 'Dover', state: 'DE' })._id
		},
		online_url: null,
		price: 15,
		category: db.categories.findOne({ name: 'Food & Drink' })._id,
		type: db.types.findOne({ name: 'Festival' })._id,
		capacity: null,
		image_url:
			'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F57652538%2F4401683602%2F1%2Foriginal.jpg?w=800&auto=compress&rect=82%2C0%2C2208%2C1104&s=ba693a81582dcbf608670b1f4d45f8f2'
	},
	{
		title: 'The Price is Right Live',
		description:
			'The Price Is Right Live™ is the hit interactive stage show that gives eligible individuals the chance to hear their names called and "Come On Down" to win. Prizes may include appliances, vacations and possibly a new car! Play classic games just like on television\'s longest running and most popular game show…from Plinko™ to Cliffhangers™ to The Big Wheel™ and even the fabulous Showcase.\n\nPlaying to near sold-out audiences for more than 14 years, the Price Is Right Live™ has entertained millions of guests and given away more than 12 million dollars in cash and prizes.\n\nIf you’re a fan of The Price Is Right™ on TV, you’ll no doubt love this exciting, live (non-televised), on-stage version of the show!\n\nWANT TO PLAY? NO PURCHASE NECESSARY. Open to legal residents of 50 United States and Canada (excluding Puerto Rico & Quebec), 21 years or older. Ticket purchase will not increase your chances of being selected to play. To register for a chance to be a contestant, visit the registration area located at grandstand lobby 3 hours prior to show time. For complete rules & regulations, including eligibility requirements, visit or call the gift shop. To enter venue to watch show, a ticket purchase is required. Sponsored by Good Games Live, Inc. Void where prohibited. Price is Right Live™/© 2019 FremantleMedia. All Rights Reserved.',
		creator: db.users.findOne({ full_name: 'Richard Robinson' })._id,
		organizer_name: 'Harrington Raceway & Casino',
		organizer_description:
			'Take a break from all of the gaming action, for a different kind of action! Get a drink and listen to the best local bands at Bonz Lounge or on the Patio during the summer months. Purchase your tickets to one of the headliners performing Live On Stage! For the best in entertainment, Harrington Raceway & Casino has it all!',
		start_date: new Date('2019-10-06T15:00:00.000-04:00'),
		end_date: new Date('2019-08-24T19:00:00.000-04:00'),
		location: {
			location_name: 'Dover Building',
			location_address: '18500 S Dupont Highway',
			city: db.cities.findOne({ city: 'Harrington', state: 'DE' })._id
		},
		online_url: null,
		price: 46,
		category: db.categories.findOne({ name: 'Hobbies' })._id,
		type: db.types.findOne({ name: 'Game' })._id,
		capacity: null,
		image_url:
			'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F62706472%2F300064094729%2F1%2Foriginal.20190522-135100?w=800&auto=compress&rect=0%2C0%2C2160%2C1080&s=9c9444fe9b403e3b497b072facc16148'
	},
	{
		title: "Let's Do Trivia! in Dover @ Grotto Pizza",
		description:
			"Let's Do Trivia! is the most-fun live-hosted trivia game show, ever! This ain't no frustrating high-school quiz and there's always something for everyone! We take a team-oriented style of play at a casual pace so you can enjoy yourself without feeling rushed.\n\nAlways FREE TO PLAY with PRIZES TO WIN!\n\nAny number of players makes a team! Bring the family, friends, co-workers, friends!\n\nGame begins promptly at the listed time, arrive early to get settled and ready to play.\n\nMore info at www.letsdoentertainment.com",
		creator: db.users.findOne({ full_name: 'Bryce Morgan' })._id,
		organizer_name: 'Salt & Light Entertainment, LLC',
		organizer_description:
			'The entertainment company that specializes in fun! Helping restaurant and pubs improve midweek sales while providing a downright memorable night fo rplayers. We have 24+ hosts running three different game shows 42 games each week.\n\nAlways hiring, always seeking new venues. ',
		start_date: new Date('2019-07-05T19:00:00.000-04:00'),
		end_date: new Date('2019-07-05T21:00:00.000-04:00'),
		location: {
			location_name: 'Grotto Pizza',
			location_address: '1159 North Dupont Highway',
			city: db.cities.findOne({ city: 'Dover', state: 'DE' })._id
		},
		online_url: null,
		price: 0,
		category: db.categories.findOne({ name: 'Food & Drink' })._id,
		type: db.types.findOne({ name: 'Game' })._id,
		capacity: null,
		image_url:
			'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F61124878%2F24565748888%2F1%2Foriginal.20190424-171131?w=800&auto=compress&rect=0%2C0%2C2160%2C1080&s=b8686c6905e8f3203ca1525ae6dca699'
	},
	{
		title: 'The Chesapeake Bay Balloon Festival',
		description:
			'We invite you to be a part of our Hot Air Balloon Festival in Cordova, Md. Hosted by us, Triple Creek Winery!!! This year the Festival is a 3 day festival from Friday, August 2nd - Sunday, August 4th. All activities will be aimed toward young children and those young at heart. \n\nActivities: Over 20 Hot Air Balloons! There will be tethered balloon rides and flights available, or just come to view these beautiful craft in a picturesque country setting. Each day of the festival will close with a balloon glow ( Not currently scheduled for Sunday) where 12 or more balloons will light up the evening sky, Weather permitting.\n\nLive Entertainment. Bands & a DJ everyday.\nExpanded Kids Zone that includes 5 inflatable activities for kids of all ages.\nOver 75 handmade crafts and boutique vendors.\n20 Food Trucks and Food Vendors -serving everything from the Eastern Shore Seafood to Gourmet TexMex. Don’t Worry there will be plenty of ice cream and funnel cakes! And Wine!\nTriple Creek will have their wines available for sale by the glass or by the bottle.',
		creator: db.users.findOne({ full_name: 'Bryce Morgan' })._id,
		organizer_name: 'The Chesapeake Bay Balloon Festival',
		organizer_description:
			'A group that brings you hot air balloons to enjoy on the Eastern Shore of Maryland.  This group uses the festival to raise money for non profit organizations in the local community.',
		start_date: new Date('2019-08-02T12:00:00.000-04:00'),
		end_date: new Date('2019-08-04T20:00:00.000-04:00'),
		location: {
			location_name: 'Triple Creek Winery',
			location_address: '11138 Three Bridge Branch Road',
			city: db.cities.findOne({ city: 'Cordova', state: 'MD' })._id
		},
		online_url: null,
		price: 0,
		category: db.categories.findOne({ name: 'Family & Education' })._id,
		type: db.types.findOne({ name: 'Festival' })._id,
		capacity: null,
		image_url:
			'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F58269253%2F297108526568%2F1%2Foriginal.20190311-151416?w=800&auto=compress&rect=0%2C32%2C960%2C480&s=4bec3620b0c62bc353ace371ef892f8f'
	},
	{
		title: 'Summer Concert: June 9, 2019',
		description: 'Join us for our end of the season recital featuring ALL members of PCBT!',
		creator: db.users.findOne({ full_name: 'Bryce Morgan' })._id,
		organizer_name: 'Providence Creek Ballet Theater',
		organizer_description:
			'Providence Creek Ballet Theater is a non-profit dance studio in central Delaware that provides classical ballet training to students from across the state.',
		start_date: new Date('2019-06-09T14:00:00.000-04:00'),
		end_date: new Date('2019-06-09T16:30:00.000-04:00'),
		location: {
			location_name: 'Providence Creek Ballet Theater',
			location_address: '273 West Duck Creek Road',
			city: db.cities.findOne({ city: 'Clayton', state: 'DE' })._id
		},
		online_url: null,
		price: 8,
		category: db.categories.findOne({ name: 'Performing & Visual Arts' })._id,
		type: db.types.findOne({ name: 'Performance' })._id,
		capacity: null,
		image_url:
			'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F61433680%2F152443019352%2F1%2Foriginal.20190430-150529?w=800&auto=compress&rect=0%2C194%2C720%2C360&s=d395e23f2483cfda0c237a328d085d90'
	},
	{
		title: 'Burnout BBQ Competition',
		description:
			'This is the FIRST South Jersey Veterans Burnout BBQ Competition! We welcome professionals and amateur teams alike to compete! This will be a full day event full of good food, good drinks and good fun!\n\nThis competition will follow modified KCBS rules and each team will receive the rules packet via email after registration. Teams must provide all meat and supplies, serving trays will be provided. NO public sampling. Teams may not sell or sample food to public, and may not have non-team members in the immediate cooking area. Cooked food will feed teams, judges, and volunteers.\n\nTeams must compete in ALL categories: Chicken, Pulled Pork and Spare Ribs.\n\nCooking Source: Pellet, Wood, Charcoal - No gas grills (Gas Assist is allowed)',
		creator: db.users.findOne({ full_name: 'Bryce Morgan' })._id,
		organizer_name: null,
		organizer_description: null,
		start_date: new Date('2019-08-17T06:00:00.000-04:00'),
		end_date: new Date('2019-08-17T23:00:00.000-04:00'),
		location: {
			location_name: null,
			location_address: '6478 Dehirsch Avenue',
			city: db.cities.findOne({ city: 'Hamilton', state: 'NJ' })._id
		},
		online_url: null,
		price: 300,
		category: db.categories.findOne({ name: 'Food & Drink' })._id,
		type: db.types.findOne({ name: 'Festival' })._id,
		capacity: null,
		image_url:
			'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F58711670%2F298416038529%2F1%2Foriginal.20190319-012550?w=800&auto=compress&rect=0%2C22%2C750%2C375&s=8281411daa6d9f970a44c3ec38e6e7e6'
	},
	{
		title: 'Monster Truck Madness',
		description:
			"BetterTitleLoans.com presents Monster Truck Madness at Georgetown Speedway on Friday, July 5 and Saturday, July 6, 2019 - complete shows each night! See famed BIGFOOT live and in person joined by Snake Bite and a fleet of Monster Trucks from the Monster Truck Racing League (MTRL). Don't miss the popular Quad Wars as seen on national television! Families will enjoy a night of entertainment with excellent food from Fat Daddy's BBQ, FREE Parking, a pre-show Meet & Greet and post-show Autograph Session!\n\nGates Open: 5 p.m.\nPre-Show Meet & Greet: 5:30-6:30 p.m.\nShowtime: 7 p.m.",
		creator: db.users.findOne({ full_name: 'Bryce Morgan' })._id,
		organizer_name: 'Georgetown Speedway',
		organizer_description:
			"Located just south of Georgetown, Delaware on Route 113, Georgetown Speedway is an 80-acre motorsports facility with a half-mile oval track and seating for more than 2,000 spectators. There is plentiful free parking, portable restrooms on site and delicious food served up by Fat Daddy's BBQ. The facility is managed by BD Motorsports Media LLC, known for auto racing promotions in four states.",
		start_date: new Date('2019-07-05T17:00:00.000-04:00'),
		end_date: new Date('2019-07-06T21:00:00.000-04:00'),
		location: {
			location_name: 'Georgetown Speedway',
			location_address: 'Speedway Road',
			city: db.cities.findOne({ city: 'Georgetown', state: 'DE' })._id
		},
		online_url: null,
		price: 20,
		category: db.categories.findOne({ name: 'Auto, Boat & Air' })._id,
		type: db.types.findOne({ name: 'Game' })._id,
		capacity: null,
		image_url:
			'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F54948632%2F242217966589%2F1%2Foriginal.20190110-201817?w=800&auto=compress&rect=0%2C21%2C1200%2C600&s=3b786452741877462f7bfcb1db9abcb9'
	},
	{
		title: 'Wine, Cheese and Glitter- DIY Glitter Your Sneakers or Shoes Workshop',
		description:
			'Wine, Cheese and Glitter- DIY Glitter Shoe Customazation Workshop\n\nGet that special sparkle that is sure to stand out with your hand designed sneaker or shoe. This glitter design can be added to flats,mid heel,high heel and wedges. Great for a customized unique look, prom, wedding or special occasion.\n\nJoin us and see why everyone is raving about the tremendous guidance and step by step directions iby you instructor who has a costume design background. The artist behind the brush can take it at their own pace and use their creative design and fashion background to help you take it to the next level. In 2 hours, you can construct a custom designed, sneaker, shoe or sandal.\n\nAre you ready to upgrade to Feel good kicks\n\nBring a clean pair of sneakers, shoes or sandals for a brand new look',
		creator: db.users.findOne({ full_name: 'Bryce Morgan' })._id,
		organizer_name: 'Tracey Evelyn',
		organizer_description:
			"Tracey Evelyn is a wardrobe consultant, personal shopper and licensed esthetician.  We are here to help emerging professionals to reinvent themselves. No more mediocracy!  It's time to be intentional",
		start_date: new Date('2019-06-08T13:00:00.000-04:00'),
		end_date: new Date('2019-06-08T15:00:00.000-04:00'),
		location: {
			location_name: 'Tracey Evelyn/ Perna & Abracht',
			location_address: '610 Mller Hill 2nd Floor',
			city: db.cities.findOne({ city: 'Kennett Square', state: 'PA' })._id
		},
		online_url: null,
		price: 45,
		category: db.categories.findOne({ name: 'Fashion' })._id,
		type: db.types.findOne({ name: 'Class' })._id,
		capacity: null,
		image_url:
			'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F63085222%2F154017519237%2F1%2Foriginal.20190529-200524?w=800&auto=compress&rect=0%2C647%2C1200%2C600&s=59ec0466b2e1e68739d6f59b844d6219'
	},
	{
		title: "Father's Day Craft & Take",
		description:
			"This year I will be hosting a Father's day craft and take!\n\nWe will be crafting some cute father's day related items!\n\nEverything is completely safe and non toxic, so you can even bring the kids to help decorate your master piece!\n\nI will be providing Food and Drinks for everyone!\n\nAnd a (kid friendly) Movie!\n\nLet's all show Dad just how cool he really is!\n\nI hope to see you there! And I cannot wait to see your creations!",
		creator: db.users.findOne({ full_name: 'Bryce Morgan' })._id,
		organizer_name: null,
		organizer_description: null,
		start_date: new Date('2019-06-14T11:00:00.000-04:00'),
		end_date: new Date('2019-06-14T14:00:00.000-04:00'),
		location: {
			location_name: 'South County Regional Branch, Camden County Library System',
			location_address: '35 Cooper Folly Road',
			city: db.cities.findOne({ city: 'Atco', state: 'NJ' })._id
		},
		online_url: null,
		price: 12,
		category: db.categories.findOne({ name: 'Hobbies' })._id,
		type: db.types.findOne({ name: 'Party' })._id,
		capacity: null,
		image_url:
			'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F62139157%2F307411057973%2F1%2Foriginal.20190512-235213?w=800&auto=compress&rect=0%2C0%2C1200%2C600&s=ecbda2031777cf3b42ebcc49b792d029'
	}
])
