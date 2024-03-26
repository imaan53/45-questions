"use strict";
function describe_city(city, Country = 'Default country.') {
    console.log(` ${city} is in ${Country}`);
}
describe_city('Karachi', ' Pakistan');
describe_city('tokyo', ' japan');
describe_city('Paris');