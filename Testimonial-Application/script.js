const testimonials = [ 
    {
        name: "Jannatul Fardouse",
        position: "Creator of Info with Masum",
        image: "images/employee.png",
        testimonial: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt ex et lacus pulvinar, eu fermentum sapien volutpat. Nullam non ullamcorper elit.`,
      },
  
      {
        name: "Khan Acadmey",
        position: "Tutorial Channel",
        image: "images/manager.png",
        testimonial: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt ex et lacus pulvinar, eu fermentum sapien volutpat. Nullam non ullamcorper elit.`,
      },

      {
        name:"Masud Iqbal",
        position: "Founder of the Code Academy",
        image:"images/testimonial.png",
        testimonial:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt ex et lacus pulvinar, eu fermentum sapien volutpat. Nullam non ullamcorper elit.`,
    },
];

const testimonialContainer = document.getElementById("_testimonial-container");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
let currentIndex = 0;


function showTestimonial(){

    const testimonial = testimonials[currentIndex];
    testimonialContainer.innerHTML = `
        <img src="${testimonial.image}" />
        <h3>${testimonial.name}</h3>
        <h6>${testimonial.position}</h6>
        <p>${testimonial.testimonial}</p>
    `;
}

function changeTestimonial(direction){

    currentIndex += direction;
    if(currentIndex < 0){
        currentIndex = testimonials.length -1;
    }else if(currentIndex >= testimonials.length){
        currentIndex = 0;
    }

    showTestimonial();

}

prevButton.addEventListener("click",()=> changeTestimonial(-1));
nextButton.addEventListener("click",()=> changeTestimonial(1));

showTestimonial();