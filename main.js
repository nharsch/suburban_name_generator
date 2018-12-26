const first_names = ['Oak', 'Forest', 'North', 'Western', 'Southern', 'Glen', 'Wooded', 'Green', 'Deer', 'River']
const last_names = ['Park', 'Woods', 'Stream', 'Dale', 'Hills', 'Grove', 'Springs', 'Lake', 'Field', 'Ellyn', 'View', 'Brook', 'Forest', 'Estates', 'Ridge', 'Bluff']

function getRandomName(arr) {
  let idx = Math.floor(Math.random() * Math.floor(arr.length));
  return arr[idx]
}

function newName() {
    return getRandomName(first_names) + " " + getRandomName(last_names)
}

export { newName }
