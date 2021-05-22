'use strict'

let data = [
  {title:'mar', count:10,},
  {title:'apr', count:15,},
  {title:'may',count:30,},
  {title:'jun',count:80,},
  {title:'jul',count:100,},
  {title:'oug',count:88,},
]

let table = document.querySelector('.table')
let date = document.querySelector('.month')
let inpDate = document.querySelector('.inputDate')
let inpPrice = document.querySelector('.inputPrice')

function func(){
for(let i=0; i<data.length; i++){
  let colum = document.createElement('div')
  let months = document.createElement('li')

  table.appendChild(colum).classList.add('graphSchedule')
  table.appendChild(colum).style.height = data[i].count + 'px'
  date.appendChild(months).innerHTML = data[i].title
}
}
func()
inpPrice.addEventListener('keydown', (event)=>{
	if(event.keyCode == 13){
		let newCardState = {
			title:inpDate.value,
			count:inpPrice.value,
		}
	data = [newCardState]
	inpDate.value = ''
  inpPrice.value = ''
	return func()	
	}
})
