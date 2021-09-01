const loadBuddies = () => {
    fetch('https://randomuser.me/api/?results=5')
    .then(res => res.json ())
    .then (data =>displayBuddies(data) );

}
loadBuddies();
const displayBuddies = data => {
    const buddiesDiv = document.getElementById('buddies');
    const buddies = data.results;
  for(const buddy of buddies){
      console.log(buddy.name.first, buddy.name.last)
      const p = document.createElement('p');
      p.innerText =`Name: ${buddy.name.title} ${buddy.name.first} Name: ${buddy.name.last}
      email: ${buddy.email}`;
      buddiesDiv.appendChild(p);
  }
}

