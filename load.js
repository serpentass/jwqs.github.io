const skeletons = document.querySelectorAll('.skeleton')
skeletons.forEach((skeleton) => {
 setTimeout(() => {
   $(skeletons).removeClass('skeleton')
 }, 4000)
})