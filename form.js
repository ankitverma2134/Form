
let parentEle = `<header class="container">
<div class="title">
  <p class="contact-us">Contact Us</p>
  <button class="close-button">X</button>
</div>
<form>
  <div class="user-details">
    <div class="input-box">
      <span class="details">Name</span>
      <input id="name" type="text" placeholder="Name" />
    </div>

    <div class="input-box">
      <span class="details">Email</span>
      <input id="email" type="text" placeholder="Enail" />
    </div>

    <div class="input-box">
      <span class="details">Contact Number</span>
      <input id="number" type="text" placeholder="Contact Number" />
    </div>

    <div class="input-box">
      <span class="details">Message</span>
      <textarea id="message" rows="2" cols="2" placeholder="Enter message"></textarea>
    </div>
  </div>
  <div class="submit-button">
    <button type="submit" class="button">Submit</button>
  </div>
</form>
</header>`;


document.getElementsByTagName('body')[0].innerHTML = parentEle;