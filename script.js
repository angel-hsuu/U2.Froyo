// prompt user for flavors
let flavors = prompt("List out the flavors of froyo and use commas to separate:");
// turn input into an array of flavors using .split()
const eachFlavors = flavors.split(",");
// create empty object
function countFlavors(array) {
const froyo = {};
// loop through array
for (const flavor of eachFlavors) {
// check if key is in object
const trimFlavor = flavor.trim();
// if key is NOT in obj, set key and set value of key to 1
  if (trimFlavor in froyo) {
    froyo[trimFlavor] = froyo[trimFlavor] + 1;
  } 
// if key IS in object, then increase value by 1

}
}