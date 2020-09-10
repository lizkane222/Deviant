////////////////////////////////////////////////////////////////////
// OTHER SCREEN FUNCTIONS (BACKSTORY/ PROFILE/ HELP)
////////////////////////////////////////////////////////////////////

//highlights words with the span on hover
$('#backstory span').hover(function(){
    $(this).css("color", "#90e0ef");
    $(this).css("background-color","gray");
    }, 
    function(){
    $(this).css("background-color", "rgba(20,20,20,1)");
  });

  $('#nameSubmit').click(function(event){
      event.preventDefault()
      let $inputName = $('#nameInput').val()
    //   console.log($inputName);
      $('#newName').text($inputName);
      $('#nameInput').hide();
      $('#nameSubmit').hide()
    //   $('#deviant__name').remove();
  })


// CLICK MIDDLE SECTION TO CHOOSE TO PLAY OR SET UP PROFILE
// player clicks Yes- to 'Do you want to play?'
$('#goBtn').click(function(){
    $('#goBtn').hide(); 
    $('#startBar').show();
    $('#dontPlay').hide();
    $('#askProfile').show(); // show buttons to set up profile
    $('#challengeQs').hide();
    $('#askProfile').prepend(`<h4 #askQs>Great let's go! But first...Would you like to set up your profile?</h4>`).show();
 })
// player clicks No- to 'Do you want to play?'
$('#dontPlay').click(function(){
    $("#gif1").effect("shake", {direction: "up", times:4, distance: 10}, 300)
    $('#askPlay').append(`<h4 #askQs>Would you like to set up your profile?</h4>`)
    $('#askProfile').show() // show buttons to set up profile
    $('#askPlay').hide()
    // $('#challenge').hide()
})
// player clicks Yes to setUpProfile & profile section border lights up
$('#setUpProfile').click(function(){
    setInterval(function(){$("#deviant").css('border','3px groove cyan')}, 3000)
    $('#more').show()
    clearInterval(setInterval(function(){$("#deviant").css('border','none')}, 3000))
    $('#askProfile').hide()
})
// player clicks No to profile, shows gif, shows more options
$('#gif2').click(function(){
    // $("#gif1").effect("shake", {direction: "up", times:4, distance: 10}, 100)

    setInterval(function(){$("#deviant").css('border','3px groove cyan')}, 3000)
    $('#more').show()
    clearInterval(setInterval(function(){$("#deviant").css('border','none')}, 3000))    // highlights borders of info buttons
    $('#askProfile').hide()
})
// player clicks Later, entire section disappears
$('#later').click(function(){
    $('#askPlay').append(`<h4 #askQs>Would you like to set up your profile?</h4>`)
})
// player clicks Not Sure and is prompted & foot print icon highlights
$('#helpQ').click(function(){
    setInterval(function(){$('.highlightHelpI').css('border','3px groove cyan')}, 3000)
    clearInterval(setInterval(function(){$('.highlightHelpI').css('border','none')}, 3000));
    $('#askPlay').append(`<h4 #askQs>Look for the footprints for help.</h4>`)
})
// + Info was clicked, h5 is appended to clarify
$('#goHelp').click(function(){
    $('#askMore').append(`<h5 #moreInfo .askQs>I'd like further clarification on <u>how to play?</u></h5>`);
    
})
// Player clicks new prompt and ? icon highlights
$('#moreInfo').click(function(){
    setInterval(function(){$('.highlightHelpI').css('border','3px groove cyan')}, 3000)
    clearInterval(setInterval(function(){$('.highlightHelpI').css('border','none')}, 3000));
    $('#gameChoiceButtons').hide()
    $('#askPlay').append(`<h4 #askQs>Look for the ? for more info.</h4>`)
})

$('.help__missions').hide()
$('.fa-shoe-prints').click(function(event){
    $('.help__missions').show()
})
$('.help__transmitter').hide()
$('.fa-question-circle').click(function(event){
    $('.help__transmitter').show()
})





////////////////////////////////////////////////////////////////////
// GAME PLAY FUNCTIONS  
////////////////////////////////////////////////////////////////////

const streets = [
    {
        streetType: "base",
        streetNumber : 0,
        numEQReq : 0,
        eachEQvalue : 0,
        accuracy : 0,
        damage : 0,
        abdaPromptPRE : [`You've arrived, great! My name is Abda, I'm a tracker and decrypter.Put this earpiece on so you can hear me throughout training and your mission...`, `check... check... okay let's do this thing. Our transmitters are updated daily but there is still a portion of the code we have to manually input to pass identity checks in the street. Don't worry I'll show you how.`],
        robotPromptPRE : false,
        abdaPromptPOST : [``],
        robotPromptPOST : false,
        instructions : [`Can you find the missing code? 1st: type the symbol. 2nd: try using parenthesis. 3rd: input equation for the missing code. Once you've figured it out, how many equations can you write that equal that number? Hurry! The time is running. Remember the quicker you execute the missing code the quicker you'll be approved. The more equations you write before the time runs out the higher your score.`],
        visited : false,
        heal : 50,
        image: "https://i.imgur.com/bxqYPzP.jpg",
        floaterImg : "https://i.imgur.com/2Ir5FZM.png",
    },
    {
        streetType: "quiz",
        streetNumber : 1,
        numEQReq : 3,
        eachEQvalue : 20,
        accuracy : 60,
        damage : -10,
        abdaPromptPRE: [`Your transmitter has been charged, let's get you ready too. Train with these codes first`,`You've been cleared for the field.`,`Feel ready to deliver this package without detection?.`,`Don't worry, I'll be with you the whole time tracking you from satelite`,`I should be able to detect when a cop-bot is near and other threats.`,`Keep in mind, if stopped for an identity check, you must reach the approved state or you'll be imprisoned, few have come back from that.`],
        robotPromptPRE : false,
        abdaPromptPOST : [``],
        robotPromptPOST: false,
        instructions : [`Can you find the missing code? 1st: type the symbol. 2nd: try using parenthesis. 3rd: input equation for the missing code. Once you've figured it out, how many equations can you write that equal that number? Hurry! The time is running. Remember the quicker you execute the missing code the quicker you'll be approved. The more equations you write before the time runs out the higher your score.`],
        visited : false,
        heal : 50,
        image: "https://i.imgur.com/1j9xZzj.jpg",
        floaterImg : "",
    },
    {
        streetType: "street",
        streetNumber : 2,
        numEQReq : 3,
        eachEQvalue : 20,
        accuracy : 60,
        damage : -10,
        abdaPromptPRE: [`I see some movement in the next street`,`Stay alert but relax`,`Click the ID-Check button to begin decoding.`],
        robotPromptPRE : [`Citizen, stay where you are`,`What are you doing around these streets?`,`Transmitter please, protocol Identity Check Enabled`,`You're free to go, but don't be dilly dallying`,`Looks like you've been linked to rebel forces. Should've stayed home deviant.`],
        abdaPromptPOST : [``],
        robotPromptPOST: false,
        instructions : [`Can you find the missing code? 1st: type the symbol. 2nd: try using parenthesis. 3rd: input equation for the missing code. Once you've figured it out, how many equations can you write that equal that number? Hurry! The time is running. Remember the quicker you execute the missing code the quicker you'll be approved. The more equations you write before the time runs out the higher your score.`],
        visited : false,
        heal : 30,
        image: "https://i.imgur.com/nDJKXMP.jpg",
        floaterImg : "",
    },
    {
        streetType: "street",
        streetNumber : 3,
        numEQReq : 3,
        eachEQvalue : 15,
        accuracy : 60,
        damage : -10,
        abdaPromptPRE: [`Watch out ahead!`,,`As we get closer to the rebel base you'll have to provide more codes, they're a lot stricter wherever there is more recorded deviant activity.`,`Don't worry you can do this.`,``],
        robotPromptPRE : [`Citizen, stay where you are`,`What are you doing around these streets?`,`Transmitter please, protocol Identity Check Enabled`,`You're free to go, but don't be dilly dallying`,`Looks like you've been linked to rebel forces. Should've stayed home deviant.`],
        abdaPromptPOST : [``],
        robotPromptPOST: false,
        instructions : [`Can you find the missing code? 1st: type the symbol. 2nd: try using parenthesis. 3rd: input equation for the missing code. Once you've figured it out, how many equations can you write that equal that number? Hurry! The time is running. Remember the quicker you execute the missing code the quicker you'll be approved. The more equations you write before the time runs out the higher your score.`],
        visited : false,
        heal : 30,
        image: "https://i.imgur.com/i6Irk38.jpg",
        floaterImg : "",
    },
    {
        streetType: "street",
        streetNumber : 4,
        numEQReq : 3,
        eachEQvalue : 15,
        accuracy : 60,
        damage : -10,
        abdaPromptPRE: [`Ready yourself! There's been a disturbance in the area, more cop-bots than usual, we can't avoid them.`,``,``,``,``,``],
        robotPromptPRE : [`Citizen, stay where you are`,`What are you doing around these streets?`,`Transmitter please, protocol Identity Check Enabled`,`You're free to go, but don't be dilly dallying`,`Looks like you've been linked to rebel forces. Should've stayed home deviant.`],
        abdaPromptPOST : [``],
        robotPromptPOST: false,
        instructions : [`Can you find the missing code? 1st: type the symbol. 2nd: try using parenthesis. 3rd: input equation for the missing code. Once you've figured it out, how many equations can you write that equal that number? Hurry! The time is running. Remember the quicker you execute the missing code the quicker you'll be approved. The more equations you write before the time runs out the higher your score.`],
        visited : false,
        heal : 30,
        image: "https://i.imgur.com/OomGERm.jpg",
        floaterImg : "",
    },
    {
        streetType: "street",
        streetNumber : 5,
        numEQReq : 3,
        eachEQvalue : 12,
        accuracy : 60,
        damage : -10,
        abdaPromptPRE: [`The difficult will again rise, get ready you provide more codes to reach approved status`],
        robotPromptPRE : [`Citizen, stay where you are`,`What are you doing around these streets?`,`Transmitter please, protocol Identity Check Enabled`,`You're free to go, but don't be dilly dallying`,`Looks like you've been linked to rebel forces. Should've stayed home deviant.`],
        abdaPromptPOST : [``],
        robotPromptPOST: false,
        instructions : [`Can you find the missing code? 1st: type the symbol. 2nd: try using parenthesis. 3rd: input equation for the missing code. Once you've figured it out, how many equations can you write that equal that number? Hurry! The time is running. Remember the quicker you execute the missing code the quicker you'll be approved. The more equations you write before the time runs out the higher your score.`],
        visited : false,
        heal : 30,
        image: "https://i.imgur.com/P8ZihT8.jpg",
        floaterImg : "",
    },
    {
        streetType: "street",
        streetNumber : 6,
        numEQReq : 3,
        eachEQvalue : 10,
        accuracy : 60,
        damage : -10,
        abdaPromptPRE: [`We're getting close, the street detectors have been very sensitive so the slightest movement may alert a cop-bot`,``,``,``,``],
        robotPromptPRE : [`Citizen, stay where you are`,`What are you doing around these streets?`,`Transmitter please, protocol Identity Check Enabled`,`You're free to go, but don't be dilly dallying`,`Looks like you've been linked to rebel forces. Should've stayed home deviant.`],
        abdaPromptPOST : [``],
        robotPromptPOST: false,
        instructions : [`Can you find the missing code? 1st: type the symbol. 2nd: try using parenthesis. 3rd: input equation for the missing code. Once you've figured it out, how many equations can you write that equal that number? Hurry! The time is running. Remember the quicker you execute the missing code the quicker you'll be approved. The more equations you write before the time runs out the higher your score.`],
        visited : false,
        heal : 30,
        image: "https://i.imgur.com/FP8hMvR.jpg",
        floaterImg : "",

    },
    {
        streetType: "rebelBase",
        streetNumber : 7,
        numEQReq : 3,
        eachEQvalue : 9,
        accuracy : 72,
        damage : -10,
        abdaPromptPRE: [`There's the guard, approach him slowly. They're not always the friendliest of rebels`,`Tell him you're here to deliver a resource to the Deviant Base`,`This guy's tough, you'll have to go through some extra screening.`,`Three codes, that's nothing compared to what we've already accomplished tonight.`],
        robotPromptPRE : [`State your business`,`I deny having any affiliation with this deviant force. How do we know you haven't been compromised?`,`Prove yourself. You'll be given three codes, if you pass all three, then maybe I'll believe you are a rebel-loyalist.`,`Alright, looks like you've been authorized for delivery. Come on in.`,`Get out of here imposter, before I call the cop-bots myself.`],
        abdaPromptPOST : [``],
        robotPromptPOST: false,
        instructions : [`Can you find the missing code? 1st: type the symbol. 2nd: try using parenthesis. 3rd: input equation for the missing code. Once you've figured it out, how many equations can you write that equal that number? Hurry! The time is running. Remember the quicker you execute the missing code the quicker you'll be approved. The more equations you write before the time runs out the higher your score.`],
        visited : false,
        heal : 30,
        image: "https://i.imgur.com/RWz6I4u.jpg",
        floaterImg : "",
    },
    
]


let health = 0;
let currentStreet = 0;
let compIdChecks = 0;
let compMissions = 0;

//open map on click
$('.mapIcon').click(function(event){
    $('#play').show();
    $('#return').show();
    $('#preview').show();
    generateStreets();
    enterStreet();
    $('#openTransmitter').css("border","3px solid white");  // remove css after 5 seconds
})

//  ID CHECK BUTTON OPENS TRANSMITTER
$('#openTransmitter').click(function(event){
    $('.transmitterBothDisplays').css("bottom", "11.7vh").css("right","27vh")
    $('#openTransmitter').css("border","2px inset var(--button-radius)");  // ref .mapIcon click => to remove css
    $('#playbtn').css("border","3px solid white");
})

// creates streets with their images, ability to click between streets using return next
const generateStreets = function(){
    $('#mapDiv').empty();

    for (let index=0; index < streets.length-1; index++){
        if(index === currentStreet){
            $('#mapDiv').append($(`<div class="street highlight"></div>`).css('background-image',`url(${streets[index].image})`));
        }else if (streets[index].visited){
            $('#mapDiv').append($(`<div class="street visited"></div>`).css('background-image',`url(${streets[index].image})`));
        }else {
            $('#mapDiv').append($(`<div class="street"></div>`).css('background-image',`url(${streets[index].image})`));
        }
    }
}

// go button prompts player to user to check that coast is clear, click on robot to submit to idcheck
// ADD FUNCTION & PROMPTS TO LOOK THROUGH THE SCREEN

$('#playbtn').click(function(event){
    $('#bubbleIntake').empty()
    $('#loadingBar').empty
    health = streets.health
    currentStreet = 0;
    $('#playbtn').css("border","2px inset var(--button-radius");

    
    $("#mid-connect-bubble").show()
    $('.fa-wave-square').fadeToggle("slow","swing",)
    $('.fa-wave-square').fadeToggle("slow","swing",)
    $('.fa-wave-square').fadeToggle("slow","swing",)
    $('.fa-wave-square').fadeToggle("slow","swing",)
    $('.fa-wave-square').show()

    $('.fa-eye').fadeToggle("slow","swing",)
    $('.fa-eye').fadeToggle("slow","swing",)
    $('.fa-eye').fadeToggle("slow","swing",)
    $('.fa-eye').fadeToggle("slow","swing",)
    $('.fa-eye').fadeToggle("slow","swing",)
    $('.fa-eye').fadeIn("slow",)
    $('.fa-eye').show
    // $('#abdaPromptLines').empty()
    // $('#robotPromptLines').empty()
    chooseEquation()
});


//// this is where to add prompts and other contexts from the room
const enterStreet = function(){
    let street = streets[currentStreet];

    if(street.visited){
        $('#abdaPromptLines').append(`<p class="adbaPrompt">We've already been down this street.</p>`)
    } else {
        // for(let i=0; i<=street.abdaPromptPRE.length;i++)
        $('#abdaPromptLines').prepend(`<p class="adbaPrompt">${street.abdaPromptPRE[0]}</p>`)
        // ASK DALTON WHY THIS SETINTERVAL FUNCTION DOESN'T WORK w/ the above for loop
        // setInterval(function() {$('#abdaPromptLines').prepend(`<p class="adbaPrompt">${street.abdaPromptPRE[i]}</p>`);}, 5000)
        
        // $('#abdaPromptLines').empty()
        // after 5 seconds 
        //
        //$('#abdaPromptLines').prepend(`<p class="adbaPrompt">${street.abdaPromptPre[i]}</p>`)
         //add delay somehow/ slide effect
        if (robotPrompt!== false){
            $('#robotPromptLines').append(`<p >${street.robotPromptPRE}</p>`)
            // $('#abdaPromptBar').empty
            $('#robotPromptLines').empty
        }
        $('#abdaPromptLines').append(`<p >You'll do great, get your transmitter out and prepare yourself for an identity check.</p>`)
        $('#startBar').show()
        $('#abdaPromptLines').append(`<p>${streets.instructions}</p>`)
        compIdChecks++
        health = health-streets.damage+streets.heal;
        street++
        if (health <= 0) {
            console.log('Game Over!');
        }
        if(currentStreet === streets.length-1 && health>0){
            console.log("You win!!")
        }
        streets[currentStreet].visited = true;
    }
}


const nextStreet = function(){
    if(currentStreet < streets.length-1)
    currentStreet++
    generateStreets();
    enterStreet();
    console.log(currentStreet);
    $('#abdaPromptLines').empty()
    $('#robotPromptLines').empty()
}

const previousStreet = function(){
    if (currentStreet > 0) currentStreet--;
    generateStreets();
    enterStreet();
    console.log(currentStreet);
    $('#abdaPromptLines').empty()
    $('#robotPromptLines').empty()
}




$('#preview').on('click',nextStreet);
$('#return').on('click',previousStreet);




