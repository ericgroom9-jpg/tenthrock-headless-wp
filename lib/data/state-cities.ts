export interface StateData {
  abbreviation: string;
  cities: string[];
}

export const stateCitiesMap: Record<string, StateData> = {
  alabama: {
    abbreviation: "AL",
    cities: ["Birmingham", "Montgomery", "Huntsville", "Mobile", "Tuscaloosa", "Hoover", "Dothan", "Auburn", "Decatur", "Madison", "Florence", "Gadsden", "Vestavia Hills", "Prattville", "Phenix City", "Alabaster"],
  },
  arizona: {
    abbreviation: "AZ",
    cities: ["Phoenix", "Tucson", "Mesa", "Chandler", "Scottsdale", "Glendale", "Gilbert", "Tempe", "Peoria", "Surprise", "Yuma", "Avondale", "Flagstaff", "Goodyear", "Lake Havasu City", "Buckeye"],
  },
  arkansas: {
    abbreviation: "AR",
    cities: ["Little Rock", "Fort Smith", "Fayetteville", "Springdale", "Jonesboro", "North Little Rock", "Conway", "Rogers", "Pine Bluff", "Bentonville", "Hot Springs", "Benton", "Texarkana", "Sherwood", "Jacksonville", "Cabot"],
  },
  california: {
    abbreviation: "CA",
    cities: ["Los Angeles", "San Diego", "San Jose", "San Francisco", "Fresno", "Sacramento", "Long Beach", "Oakland", "Bakersfield", "Anaheim", "Santa Ana", "Riverside", "Stockton", "Irvine", "Chula Vista", "Fremont", "San Bernardino", "Modesto", "Fontana", "Moreno Valley"],
  },
  colorado: {
    abbreviation: "CO",
    cities: ["Denver", "Colorado Springs", "Aurora", "Fort Collins", "Lakewood", "Thornton", "Arvada", "Westminster", "Pueblo", "Centennial", "Boulder", "Greeley", "Longmont", "Loveland", "Broomfield", "Castle Rock"],
  },
  connecticut: {
    abbreviation: "CT",
    cities: ["Bridgeport", "New Haven", "Hartford", "Stamford", "Waterbury", "Norwalk", "Danbury", "New Britain", "Bristol", "Meriden", "Milford", "West Haven", "Middletown", "Norwich", "Shelton", "Torrington"],
  },
  delaware: {
    abbreviation: "DE",
    cities: ["Wilmington", "Dover", "Newark", "Middletown", "Smyrna", "Milford", "Seaford", "Georgetown", "Elsmere", "New Castle", "Millsboro", "Laurel", "Harrington", "Camden", "Clayton", "Lewes"],
  },
  florida: {
    abbreviation: "FL",
    cities: ["Jacksonville", "Miami", "Tampa", "Orlando", "St. Petersburg", "Hialeah", "Tallahassee", "Fort Lauderdale", "Port St. Lucie", "Cape Coral", "Pembroke Pines", "Hollywood", "Gainesville", "Miramar", "Coral Springs", "Clearwater", "Palm Bay", "Lakeland", "Pompano Beach", "West Palm Beach"],
  },
  georgia: {
    abbreviation: "GA",
    cities: ["Atlanta", "Augusta", "Columbus", "Macon", "Savannah", "Athens", "Sandy Springs", "Roswell", "Johns Creek", "Albany", "Warner Robins", "Alpharetta", "Marietta", "Valdosta", "Smyrna", "Dunwoody"],
  },
  idaho: {
    abbreviation: "ID",
    cities: ["Boise", "Meridian", "Nampa", "Idaho Falls", "Caldwell", "Pocatello", "Coeur d'Alene", "Twin Falls", "Post Falls", "Lewiston", "Rexburg", "Eagle", "Kuna", "Star", "Mountain Home", "Garden City"],
  },
  illinois: {
    abbreviation: "IL",
    cities: ["Chicago", "Aurora", "Joliet", "Naperville", "Rockford", "Springfield", "Elgin", "Peoria", "Champaign", "Waukegan", "Cicero", "Bloomington", "Arlington Heights", "Evanston", "Schaumburg", "Bolingbrook", "Decatur", "Palatine"],
  },
  indiana: {
    abbreviation: "IN",
    cities: ["Indianapolis", "Fort Wayne", "Evansville", "South Bend", "Carmel", "Fishers", "Bloomington", "Hammond", "Gary", "Lafayette", "Muncie", "Terre Haute", "Kokomo", "Noblesville", "Anderson", "Greenwood"],
  },
  iowa: {
    abbreviation: "IA",
    cities: ["Des Moines", "Cedar Rapids", "Davenport", "Sioux City", "Iowa City", "Waterloo", "Ames", "West Des Moines", "Council Bluffs", "Ankeny", "Dubuque", "Urbandale", "Cedar Falls", "Marion", "Bettendorf", "Mason City"],
  },
  kansas: {
    abbreviation: "KS",
    cities: ["Wichita", "Overland Park", "Kansas City", "Olathe", "Topeka", "Lawrence", "Shawnee", "Manhattan", "Lenexa", "Salina", "Hutchinson", "Leavenworth", "Leawood", "Dodge City", "Garden City", "Emporia"],
  },
  kentucky: {
    abbreviation: "KY",
    cities: ["Louisville", "Lexington", "Bowling Green", "Owensboro", "Covington", "Richmond", "Georgetown", "Florence", "Hopkinsville", "Nicholasville", "Elizabethtown", "Henderson", "Frankfort", "Jeffersontown", "Paducah", "Radcliff"],
  },
  louisiana: {
    abbreviation: "LA",
    cities: ["New Orleans", "Baton Rouge", "Shreveport", "Lafayette", "Lake Charles", "Kenner", "Bossier City", "Monroe", "Alexandria", "Houma", "New Iberia", "Slidell", "Central", "Ruston", "Sulphur", "Hammond"],
  },
  maine: {
    abbreviation: "ME",
    cities: ["Portland", "Lewiston", "Bangor", "South Portland", "Auburn", "Biddeford", "Sanford", "Brunswick", "Saco", "Scarborough", "Westbrook", "Windham", "Gorham", "Augusta", "Waterville", "Kennebunk"],
  },
  maryland: {
    abbreviation: "MD",
    cities: ["Baltimore", "Columbia", "Germantown", "Silver Spring", "Waldorf", "Glen Burnie", "Ellicott City", "Frederick", "Dundalk", "Rockville", "Bethesda", "Bowie", "Towson", "Gaithersburg", "Hagerstown", "Annapolis"],
  },
  massachusetts: {
    abbreviation: "MA",
    cities: ["Boston", "Worcester", "Springfield", "Cambridge", "Lowell", "Brockton", "New Bedford", "Quincy", "Lynn", "Fall River", "Newton", "Lawrence", "Somerville", "Framingham", "Haverhill", "Waltham"],
  },
  michigan: {
    abbreviation: "MI",
    cities: ["Detroit", "Grand Rapids", "Warren", "Sterling Heights", "Ann Arbor", "Lansing", "Flint", "Dearborn", "Livonia", "Troy", "Westland", "Farmington Hills", "Kalamazoo", "Wyoming", "Southfield", "Rochester Hills"],
  },
  minnesota: {
    abbreviation: "MN",
    cities: ["Minneapolis", "St. Paul", "Rochester", "Duluth", "Bloomington", "Brooklyn Park", "Plymouth", "Maple Grove", "Woodbury", "St. Cloud", "Eagan", "Eden Prairie", "Minnetonka", "Burnsville", "Apple Valley", "Edina"],
  },
  mississippi: {
    abbreviation: "MS",
    cities: ["Jackson", "Gulfport", "Southaven", "Hattiesburg", "Biloxi", "Meridian", "Tupelo", "Olive Branch", "Greenville", "Horn Lake", "Pearl", "Madison", "Clinton", "Starkville", "Ridgeland", "Columbus"],
  },
  missouri: {
    abbreviation: "MO",
    cities: ["Kansas City", "St. Louis", "Springfield", "Columbia", "Independence", "Lee's Summit", "O'Fallon", "St. Joseph", "St. Charles", "Blue Springs", "St. Peters", "Florissant", "Joplin", "Chesterfield", "Jefferson City", "Cape Girardeau"],
  },
  montana: {
    abbreviation: "MT",
    cities: ["Billings", "Missoula", "Great Falls", "Bozeman", "Butte", "Helena", "Kalispell", "Havre", "Anaconda", "Miles City", "Belgrade", "Livingston", "Laurel", "Whitefish", "Lewistown", "Sidney"],
  },
  nebraska: {
    abbreviation: "NE",
    cities: ["Omaha", "Lincoln", "Bellevue", "Grand Island", "Kearney", "Fremont", "Hastings", "Norfolk", "North Platte", "Columbus", "Papillion", "La Vista", "Scottsbluff", "South Sioux City", "Beatrice", "Lexington"],
  },
  nevada: {
    abbreviation: "NV",
    cities: ["Las Vegas", "Henderson", "Reno", "North Las Vegas", "Sparks", "Carson City", "Fernley", "Elko", "Mesquite", "Boulder City", "Fallon", "Winnemucca", "West Wendover", "Ely", "Yerington", "Carlin"],
  },
  "new-hampshire": {
    abbreviation: "NH",
    cities: ["Manchester", "Nashua", "Concord", "Derry", "Dover", "Rochester", "Salem", "Merrimack", "Londonderry", "Hudson", "Keene", "Bedford", "Portsmouth", "Laconia", "Lebanon", "Claremont"],
  },
  "new-jersey": {
    abbreviation: "NJ",
    cities: ["Newark", "Jersey City", "Paterson", "Elizabeth", "Lakewood", "Edison", "Woodbridge", "Toms River", "Hamilton", "Trenton", "Clifton", "Camden", "Brick", "Cherry Hill", "Passaic", "Union City"],
  },
  "new-mexico": {
    abbreviation: "NM",
    cities: ["Albuquerque", "Las Cruces", "Rio Rancho", "Santa Fe", "Roswell", "Farmington", "South Valley", "Hobbs", "Clovis", "Alamogordo", "Carlsbad", "Gallup", "Deming", "Los Lunas", "Sunland Park", "Las Vegas"],
  },
  "new-york": {
    abbreviation: "NY",
    cities: ["New York City", "Buffalo", "Rochester", "Yonkers", "Syracuse", "Albany", "New Rochelle", "Mount Vernon", "Schenectady", "Utica", "White Plains", "Troy", "Niagara Falls", "Binghamton", "Hempstead", "Long Beach"],
  },
  "north-carolina": {
    abbreviation: "NC",
    cities: ["Charlotte", "Raleigh", "Greensboro", "Durham", "Winston-Salem", "Fayetteville", "Cary", "Wilmington", "High Point", "Concord", "Greenville", "Asheville", "Gastonia", "Jacksonville", "Chapel Hill", "Huntersville"],
  },
  "north-dakota": {
    abbreviation: "ND",
    cities: ["Fargo", "Bismarck", "Grand Forks", "Minot", "West Fargo", "Williston", "Dickinson", "Mandan", "Jamestown", "Wahpeton", "Devils Lake", "Valley City", "Grafton", "Beulah", "Rugby", "Bottineau"],
  },
  ohio: {
    abbreviation: "OH",
    cities: ["Columbus", "Cleveland", "Cincinnati", "Toledo", "Akron", "Dayton", "Parma", "Canton", "Youngstown", "Lorain", "Hamilton", "Springfield", "Kettering", "Elyria", "Lakewood", "Cuyahoga Falls"],
  },
  oklahoma: {
    abbreviation: "OK",
    cities: ["Oklahoma City", "Tulsa", "Norman", "Broken Arrow", "Edmond", "Lawton", "Moore", "Midwest City", "Enid", "Stillwater", "Muskogee", "Bartlesville", "Owasso", "Shawnee", "Yukon", "Bixby"],
  },
  oregon: {
    abbreviation: "OR",
    cities: ["Portland", "Salem", "Eugene", "Gresham", "Hillsboro", "Beaverton", "Bend", "Medford", "Springfield", "Corvallis", "Albany", "Tigard", "Lake Oswego", "Keizer", "Grants Pass", "Oregon City"],
  },
  pennsylvania: {
    abbreviation: "PA",
    cities: ["Philadelphia", "Pittsburgh", "Allentown", "Reading", "Scranton", "Bethlehem", "Lancaster", "Harrisburg", "York", "Wilkes-Barre", "Chester", "Erie", "State College", "Easton", "Lebanon", "Norristown"],
  },
  "rhode-island": {
    abbreviation: "RI",
    cities: ["Providence", "Warwick", "Cranston", "Pawtucket", "East Providence", "Woonsocket", "Coventry", "Cumberland", "North Providence", "South Kingstown", "West Warwick", "Johnston", "North Kingstown", "Newport", "Bristol", "Westerly"],
  },
  "south-carolina": {
    abbreviation: "SC",
    cities: ["Charleston", "Columbia", "North Charleston", "Mount Pleasant", "Rock Hill", "Greenville", "Summerville", "Goose Creek", "Hilton Head Island", "Sumter", "Florence", "Spartanburg", "Myrtle Beach", "Aiken", "Anderson", "Greer"],
  },
  "south-dakota": {
    abbreviation: "SD",
    cities: ["Sioux Falls", "Rapid City", "Aberdeen", "Brookings", "Watertown", "Mitchell", "Yankton", "Huron", "Pierre", "Spearfish", "Vermillion", "Brandon", "Box Elder", "Madison", "Sturgis", "Belle Fourche"],
  },
  tennessee: {
    abbreviation: "TN",
    cities: ["Nashville", "Memphis", "Knoxville", "Chattanooga", "Clarksville", "Murfreesboro", "Franklin", "Jackson", "Johnson City", "Bartlett", "Hendersonville", "Kingsport", "Collierville", "Smyrna", "Cleveland", "Brentwood"],
  },
  texas: {
    abbreviation: "TX",
    cities: ["Houston", "San Antonio", "Dallas", "Austin", "Fort Worth", "El Paso", "Arlington", "Corpus Christi", "Plano", "Lubbock", "Laredo", "Irving", "Garland", "Frisco", "McKinney", "Amarillo", "Grand Prairie", "Brownsville", "Killeen", "Pasadena"],
  },
  utah: {
    abbreviation: "UT",
    cities: ["Salt Lake City", "West Valley City", "Provo", "West Jordan", "Orem", "Sandy", "Ogden", "St. George", "Layton", "South Jordan", "Lehi", "Millcreek", "Taylorsville", "Logan", "Murray", "Draper"],
  },
  vermont: {
    abbreviation: "VT",
    cities: ["Burlington", "South Burlington", "Rutland", "Barre", "Montpelier", "Winooski", "St. Albans", "Newport", "Vergennes", "Bennington", "Brattleboro", "Essex Junction", "Hartford", "Milton", "Colchester", "Shelburne"],
  },
  virginia: {
    abbreviation: "VA",
    cities: ["Virginia Beach", "Norfolk", "Chesapeake", "Richmond", "Newport News", "Alexandria", "Hampton", "Roanoke", "Portsmouth", "Suffolk", "Lynchburg", "Harrisonburg", "Charlottesville", "Manassas", "Fredericksburg", "Danville"],
  },
  washington: {
    abbreviation: "WA",
    cities: ["Seattle", "Spokane", "Tacoma", "Vancouver", "Bellevue", "Kent", "Everett", "Renton", "Federal Way", "Spokane Valley", "Kirkland", "Bellingham", "Kennewick", "Auburn", "Redmond", "Olympia"],
  },
  "west-virginia": {
    abbreviation: "WV",
    cities: ["Charleston", "Huntington", "Morgantown", "Parkersburg", "Wheeling", "Weirton", "Fairmont", "Martinsburg", "Beckley", "Clarksburg", "South Charleston", "St. Albans", "Vienna", "Bluefield", "Bridgeport", "Elkins"],
  },
  wisconsin: {
    abbreviation: "WI",
    cities: ["Milwaukee", "Madison", "Green Bay", "Kenosha", "Racine", "Appleton", "Waukesha", "Eau Claire", "Oshkosh", "Janesville", "West Allis", "La Crosse", "Sheboygan", "Wauwatosa", "Fond du Lac", "Brookfield"],
  },
  wyoming: {
    abbreviation: "WY",
    cities: ["Cheyenne", "Casper", "Laramie", "Gillette", "Rock Springs", "Sheridan", "Green River", "Evanston", "Riverton", "Jackson", "Cody", "Rawlins", "Lander", "Torrington", "Powell", "Douglas"],
  },
};

// Public location URLs carry a "-junk-removal" suffix on the state segment
// (e.g. /locations/texas-junk-removal). The underlying WP slugs and the keys
// in `stateCitiesMap` remain bare. These helpers strip the suffix so the same
// lookups work whether they receive a bare key or a public (suffixed) slug.
export const LOCATION_URL_SUFFIX = "-junk-removal";

export function stripLocationSuffix(slug: string): string {
  return slug.endsWith(LOCATION_URL_SUFFIX)
    ? slug.slice(0, -LOCATION_URL_SUFFIX.length)
    : slug;
}

/** Build a public location URL segment from a bare state key. */
export function toLocationSlug(stateKey: string): string {
  return `${stateKey}${LOCATION_URL_SUFFIX}`;
}

export function getStateData(slug: string): StateData | null {
  return stateCitiesMap[stripLocationSuffix(slug)] || null;
}

export function getStateName(slug: string): string {
  return stripLocationSuffix(slug)
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function cityToSlug(city: string): string {
  return city
    .toLowerCase()
    .replace(/['.]/g, "")
    .replace(/\s+/g, "-");
}

export function getCityFromSlug(stateSlug: string, citySlug: string): string | null {
  const state = stateCitiesMap[stripLocationSuffix(stateSlug)];
  if (!state) return null;
  return state.cities.find((c) => cityToSlug(c) === citySlug) || null;
}
