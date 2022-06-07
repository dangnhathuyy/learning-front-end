const testimonialsContainer = document.querySelector('testimonials-container')
const testimonial = document.querySelector('.testimonial')
const userImage = document.querySelector('.user-image')
const username = document.querySelector('.username')
const role = document.querySelector('.role')

const testimonials = [
  {
    name: 'Miyah Myles',
    position: 'Marketing',
    photo: 'https://randomuser.me/api/portraits/women/46.jpg',
    text:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime accusamus consequuntur corporis hic neque voluptatum. Animi debitis voluptatem magni unde quia fugit illo ipsa molestias ipsam, nesciunt nisi excepturi, accusamus cumque aliquam similique minus asperiores accusantium dolores ratione mollitia odio aliquid ducimus dolorem? Ea quis nemo necessitatibus vel sequi in.',
  },
  {
    name: 'June Cha',
    position: 'Pilot',
    photo: 'https://randomuser.me/api/portraits/women/47.jpg',
    text:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed ut sequi distinctio nemo atque ad assumenda odit asperiores sint voluptatem, accusantium rem tempora quibusdam doloremque non. Ad pariatur exercitationem asperiores maxime, suscipit eaque culpa? Blanditiis, architecto fugit quisquam delectus nulla sint aliquam aliquid corporis accusamus, repudiandae cum ab et, dolore suscipit?.',
  },
  {
    name: 'Veeti Seppanen',
    position: 'Director',
    photo: 'https://randomuser.me/api/portraits/men/97.jpg',
    text:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad nesciunt assumenda officia repellat officiis corrupti, veritatis ex. Aspernatur doloribus aliquam nemo nesciunt debitis distinctio optio, at officiis veniam esse, animi ullam! Quae delectus, recusandae repellat inventore dicta iste blanditiis quia assumenda fuga cumque illum quam, provident ab obcaecati quas!',
  },
]

let idx = 1

function updateTestimonial() {
  const { name, position, photo, text } = testimonials[idx]

  testimonial.innerHTML = text
  userImage.src = photo
  username.innerHTML = name
  role.innerHTML = position

  idx++

  if (idx > testimonials.length - 1) {
    idx = 0
  }
}

setInterval(updateTestimonial, 10000)
