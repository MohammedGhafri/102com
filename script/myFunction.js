'use strict';
//this is my first java scripts

var Time = new Date();

var first= confirm('In the next Window please enter your favorite Engineering(Just Enter First letter)_press ok thing to continue');

var confirmation = confirm (' after you choosed the flavoured engineering go to the bottom of the page to see short definition')
var list;

var Falvoured_Engineering = prompt('Electrical Engineering = e Civil Engineering = c mechanical Engineering = m ');
myFunction{
if (Falvoured_Engineering == 'e') {
list='Electrical engineering is an engineering discipline concerned with the study, design and application of equipment, devices and systems which use electricity, electronics, and electromagnetism. It emerged as an identifiable occupation in the latter half of the 19th century after commercialization of the electric telegraph, the telephone, and electrical power generation, distribution and use.';
}else if(Falvoured_Engineering == 'c') {
list ='Civil engineering is a professional engineering discipline that deals with the design, construction, and maintenance of the physical and naturally built environment, including public works such as roads, bridges, canals, dams, airports, sewerage systems, pipelines, structural components of buildings, and railways';
}else if(Falvoured_Engineering == 'm'){
    list= 'Mechanical engineering is an engineering discipline that combines engineering physics and mathematics principles with materials science to design, analyze, manufacture, and maintain mechanical systems. It is one of the oldest and broadest of the engineering disciplines'
}else{
    list=' Either you do not like engineering or you did not enter well'
}
document.write('<h2>' +list+ '</h2>');
}