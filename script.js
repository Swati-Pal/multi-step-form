const nexts =document.querySelectorAll(".next");
const steps =document.querySelectorAll(".step");
const selector = document.querySelectorAll(".select");
const backs = document.querySelectorAll(".back");


let stepCount = 0;
let selectorCount = 1;

let currentStep;

function removeSelectors(){
    selector.forEach(select =>{
        select.classList.remove("active");
    })
}

function decrementSelector(){
    removeSelectors();
    selectorCount--;
    let select = selector[stepCount];   
    select.classList.add("active");
}

function incrementSelector(){
    removeSelectors();
    let select = selector[selectorCount];
    select.classList.add("active");
    selectorCount++;
}

function removeStep(){
    steps.forEach(step =>{
        step.classList.remove("active");
    })
}




const Name = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const nameErr = document.getElementById("name-error");
const emailErr = document.getElementById("email-error");
const phoneErr = document.getElementById("phone-error");
let $email
let $phone

// function for adding error
function setError (error, message) {
    error.parentElement.childNodes[1].children[1].textContent = message;
    error.parentElement.childNodes[3].style.borderColor = "var(--strawberry-red)";
}

// This section handles the form validation in step 1
function formValidation(){
    $name = Name.value.trim();
    $email = email.value.trim();
    $phone = phone.value.trim();
    let isValid = true; 

    if( $name == ""){
        setError(Name, "This field is required");
        isValid = false;
    }else{
        setError(Name, "");
        Name.style.borderColor = "hsl(229, 24%, 87%)";
    }
    if( $email == ""){
        setError(email, "This field is required");
        isValid = false;

    }else if( !validateEmail($email)){
        setError(email, "This field is required");
        isValid = false;
    }
    else{
        setError(email, "");
        email.style.borderColor = "hsl(229, 24%, 87%)";
    }

    if( $phone == ""){
        setError(phone, "This field is required");
        isValid = false;
    } //else if (isNaN($phone)){
    //     setError(phone, "This field is required");
    //     isValid = false;
    // }
    else{
        setError(phone, "");
        phone.style.borderColor = "hsl(229, 24%, 87%)";
    }
    return isValid;
}
// Function to validate email format
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
/*
nexts.forEach(next => {
    currentStep = steps[stepCount];
    next.addEventListener("click", ()=>{
        
        if(stepCount < ((steps.length)-2) && formValidation()){
            console.log(stepCount);
            removeStep();
            console.log(stepCount);
            stepCount++;
            currentStep = steps[stepCount];
            currentStep.classList.add("active");
            console.log(currentStep);
            incrementSelector();
            //console.log(currentStep);
        } else {
            if(formValidation()){
                console.log(stepCount);
                removeStep();
                console.log(stepCount);
                stepCount++;
                currentStep = steps[stepCount];
                currentStep.classList.add("active");
                console.log(currentStep);
            }
        }

    })

}) */

for(var i = 0; i < nexts.length; i++){
    currentStep = steps[stepCount];
    nexts[i].addEventListener("click", ()=>{
        
        if(stepCount < (steps.length)-2 && formValidation()){
            removeStep();
            stepCount++;
            currentStep = steps[stepCount];
            currentStep.classList.add("active");
            incrementSelector();
            
        } else {
            if(formValidation()){
                removeStep();
                stepCount++;
                currentStep = steps[stepCount];
                currentStep.classList.add("active");
                
            }
        }
    })
}


backs.forEach(back =>{
    back.addEventListener("click", () =>{
        removeStep(); 
        stepCount--;
        currentStep = steps[stepCount];
        currentStep.classList.add("active");
        decrementSelector();
    })
})

// this javascript code is for step2 
const PlanName = document.querySelector(".name");
const selectedPlanPrice = document.querySelector(".selectedPlanPrice")
const radios =  document.querySelectorAll(".radios");
const selectedPlanDuration = document.querySelector(".selectedPlandurarion");
const toggleButtons = document.getElementById("switch");

radios.forEach(radio => {

    radio.addEventListener("change", (event) => {
        if (radio.checked) {
            selectedRadio = event.target.value;
            let selectedRadioPrice = event.target.parentElement.children[2].textContent;
            PlanName.textContent = selectedRadio;
            selectedPlanPrice.textContent = selectedRadioPrice;
            selectedPlanDuration.textContent = "(Monthly)"

            toggleButton.addEventListener("change", ()=>{
                if(toggleButton.checked){
                    arcadeDuration.textContent = "$90/yr";
                    advanceDuration.textContent = "$120/yr";
                    proDuration.textContent = "$150/yr";
            
                    selectedPlanDurarion.textContent = "(Yearly)"
                    totalSelectedPlanDurarion.textContent = "(per Year)"
                    totalPriceDuration.textContent = "yr"
                    selectedPlanPrice.textContent = event.target.parentElement.children[2].textContent;
                    
                }
                else{
                    arcadeDuration.textContent = "$9/mo";
                    advanceDuration.textContent = "$12/mo";
                    proDuration.textContent = "$15/mo"; 
                
                    // Change the default checked option price based on the toggle button status
    
                    selectedPlanDurarion.textContent = "(Monthly)"
                    totalSelectedPlanDurarion.textContent = "(per month)"
                    totalPriceDuration.textContent = "mo"    
                    selectedPlanPrice.textContent =  event.target.parentElement.children[2].textContent;
                    
                }   
            })

        }
        else{
            PlanName.textContent = "";
            
        }

    });

})

// this is to change the toggle button from monthly to yearly
const frees = document.querySelectorAll(".free-month");
const toggleButton = document.getElementById("switch");
const planDuration = document.querySelectorAll(".plan-duration");
const selectedPlanDurarion = document.querySelector(".selectedPlandurarion");
const arcadeDuration = document.getElementById("arcade-duration");
const advanceDuration = document.getElementById("advance-duration");
const proDuration = document.getElementById("pro-duration");

const servicePrice1 = document.querySelector(".servicePrice1");
const servicePrice2 = document.querySelector(".servicePrice2");
const servicePrice3 = document.querySelector(".servicePrice3");

const monthly = document.querySelector(".monthly");
const yearly = document.querySelector(".yearly");

const defaultCheck = document.querySelector(".checkz:checked");
const totalSelectedPlanDurarion = document.querySelector(".totalSelectedPlanDurarion")
const totalPriceDuration = document.querySelector(".totalPriceDuration");


toggleButton.addEventListener("change", ()=>{
    frees.forEach(free =>{
        if(free.textContent == ""){
            free.textContent = "2 months free";
        }else{
            free.textContent = "";
        }
    })
    if(toggleButton.checked) {

        toggleButton.nextElementSibling.style.justifyContent = 'flex-end';
        monthly.classList.remove("active");
        yearly.classList.add("active");

        arcadeDuration.textContent = "$90/yr";
        advanceDuration.textContent = "$120/yr";
        proDuration.textContent = "$150/yr";

        selectedPlanDurarion.textContent = "(Yearly)"
        totalSelectedPlanDurarion.textContent = "(per year)"
        totalPriceDuration.textContent = "yr"


        servicePrice1.textContent = "+$10/yr";
        servicePrice2.textContent = "+$20/yr";
        servicePrice3.textContent = "+$20/yr";
    }
    else{
        
        toggleButton.nextElementSibling.style.justifyContent = 'flex-start';
        monthly.classList.add("active");
        yearly.classList.remove("active");

        arcadeDuration.textContent = "$9/mo";
        advanceDuration.textContent = "$12/mo";
        proDuration.textContent = "$15/mo"; 

        selectedPlanDurarion.textContent = "(Monthly)"
        totalSelectedPlanDurarion.textContent = "(per month)"
        totalPriceDuration.textContent = "mo"

        servicePrice1.textContent = "+$1/mo";
        servicePrice2.textContent = "+$2/mo";
        servicePrice3.textContent = "+$2/mo";
    }
    
})




// the code is for step 3
const checkboxs = document.querySelectorAll(".checkz")
let addons =[]
let checkName = document.querySelector(".checkz:checked") ? document.querySelector(".checkz:checked").value : "";
let checkPrice = document.querySelector(".checkz:checked") ? document.querySelector(".checkz:checked").parentElement.children[2].textContent : "";

const selectedServiceName1 = document.querySelector(".selectedServiceName1");
const selectedServiceName2 = document.querySelector(".selectedServiceName2");
const selectedServiceName3 = document.querySelector(".selectedServiceName3");

const selectedServicePrice1 = document.querySelector(".selectedServicePrice1");
const selectedServicePrice2 = document.querySelector(".selectedServicePrice2");
const selectedServicePrice3 = document.querySelector(".selectedServicePrice3"); 
//const total = document.querySelector(".total"); 
let replaced;
let totalPrice;
let addonTotal;

checkboxs.forEach(check =>{
    if(check.checked){
        
        checkName = check.value
        checkPrice = check.parentElement.children[2].textContent;
        addons.push({name : checkName,  price : checkPrice});
        
        check.addEventListener("change", (event)=>{
            // check.toggleAttribute('checked')
            if(event.target.checked){
                
                checkName = event.target.value
                checkPrice = event.target.parentElement.children[2].textContent;
                addons.push({name : checkName,  price : checkPrice});
                
                toggleButton.addEventListener("change", ()=>{

                    if(toggleButton.checked){

                        checkName = event.target.value;
                        checkPrice = event.target.parentElement.children[2].textContent;

                        addons.map(addon=>{
                            addon.price = checkPrice;
                            if(addons.length >= 1){
                                selectedServicePrice1.textContent = addons[0].price;
                                selectedServiceName1.textContent = addons[0].name;
                            }
                            else{
                                selectedServicePrice1.textContent = "";
                                selectedServiceName1.textContent = "";
                            }
                            if(addons.length >= 2){
                                selectedServicePrice2.textContent = addons[1].price;
                                selectedServiceName2.textContent = addons[1].name;
                            }
                            else{
                                selectedServicePrice2.textContent = "";
                                selectedServiceName2.textContent = "";
                            }
                            if(addons.length >= 3){
                                selectedServicePrice3.textContent = addons[2].price;
                                selectedServiceName3.textContent = addons[2].name;
                            }
                            else{
                                selectedServicePrice3.textContent = "";
                                selectedServiceName3.textContent = "";
                            }
                        })
                            
                    }
                    else{

                        addons.map(addon=>{
                            addon.price = event.target.parentElement.children[2].textContent;
                        })
                        
                        if(addons.length >= 1){
                            selectedServicePrice1.textContent = addons[0].price;
                            selectedServiceName1.textContent = addons[0].name;
                        }
                        else{
                            selectedServicePrice1.textContent = "";
                            selectedServiceName1.textContent = "";
                        }
                        if(addons.length >= 2){
                            selectedServicePrice2.textContent = addons[1].price;
                            selectedServiceName2.textContent = addons[1].name;
                        }
                        else{
                            selectedServicePrice2.textContent = "";
                            selectedServiceName2.textContent = "";
                        }
                        if(addons.length >= 3){
                            selectedServicePrice3.textContent = addons[2].price;
                            selectedServiceName3.textContent = addons[2].name;
                        }
                        else{
                            selectedServicePrice3.textContent = "";
                            selectedServiceName3.textContent = "";
                        }
                    }
                })
                if(addons.length >= 1){
                    selectedServicePrice1.textContent = addons[0].price;
                    selectedServiceName1.textContent = addons[0].name;
                }
                else{
                    selectedServicePrice1.textContent = "";
                    selectedServiceName1.textContent = "";
                }
                if(addons.length >= 2){
                    selectedServicePrice2.textContent = addons[1].price;
                    selectedServiceName2.textContent = addons[1].name;
                }
                else{
                    selectedServicePrice2.textContent = "";
                    selectedServiceName2.textContent = "";
                }
                if(addons.length >= 3){
                    selectedServicePrice3.textContent = addons[2].price;
                    selectedServiceName3.textContent = addons[2].name;
                }
                else{
                    selectedServicePrice3.textContent = "";
                    selectedServiceName3.textContent = "";
                }
            }
            else{

                check.parentElement.style.cssText = "border-color: var(--light-gray); background-color: transparent";
                addons = addons.filter(obj =>{
                    return obj.name !== event.target.value;
                })
                
            }

            if(addons.length >= 1){
                selectedServicePrice1.textContent = addons[0].price;
                selectedServiceName1.textContent = addons[0].name;
            }
            else{
                selectedServicePrice1.textContent = "";
                selectedServiceName1.textContent = "";
            }
            if(addons.length >= 2){
                selectedServicePrice2.textContent = addons[1].price;
                selectedServiceName2.textContent = addons[1].name;
            }
            else{
                selectedServicePrice2.textContent = "";
                selectedServiceName2.textContent = "";
            }
            if(addons.length >= 3){
                selectedServicePrice3.textContent = addons[2].price;
                selectedServiceName3.textContent = addons[2].name;
            }
            else{
                selectedServicePrice3.textContent = "";
                selectedServiceName3.textContent = "";
            }
        })
    }
    else {

        check.addEventListener("change", (event)=>{
            // check.toggleAttribute('checked')
            if(event.target.checked){
                
                checkName = event.target.value
                checkPrice = event.target.parentElement.children[2].textContent;
                addons.push({name : checkName,  price : checkPrice});

                toggleButton.addEventListener("change", ()=>{

                    if(toggleButton.checked){

                        checkName = event.target.value;
                        checkPrice = event.target.parentElement.children[2].textContent;

                        addons.map(addon=>{
                            addon.price = checkPrice;
                            if(addons.length >= 1){
                                selectedServicePrice1.textContent = addons[0].price;
                                selectedServiceName1.textContent = addons[0].name;
                            }
                            else{
                                selectedServicePrice1.textContent = "";
                                selectedServiceName1.textContent = "";
                            }
                            if(addons.length >= 2){
                                selectedServicePrice2.textContent = addons[1].price;
                                selectedServiceName2.textContent = addons[1].name;
                            }
                            else{
                                selectedServicePrice2.textContent = "";
                                selectedServiceName2.textContent = "";
                            }
                            if(addons.length >= 3){
                                selectedServicePrice3.textContent = addons[2].price;
                                selectedServiceName3.textContent = addons[2].name;
                            }
                            else{
                                selectedServicePrice3.textContent = "";
                                selectedServiceName3.textContent = "";
                            }
                        })
                            
                    }
                    else{

                        addons.map(addon=>{
                            addon.price = event.target.parentElement.children[2].textContent;
                        })
                        
                        if(addons.length >= 1){
                            selectedServicePrice1.textContent = addons[0].price;
                            selectedServiceName1.textContent = addons[0].name;
                        }
                        else{
                            selectedServicePrice1.textContent = "";
                            selectedServiceName1.textContent = "";
                        }
                        if(addons.length >= 2){
                            selectedServicePrice2.textContent = addons[1].price;
                            selectedServiceName2.textContent = addons[1].name;
                        }
                        else{
                            selectedServicePrice2.textContent = "";
                            selectedServiceName2.textContent = "";
                        }
                        if(addons.length >= 3){
                            selectedServicePrice3.textContent = addons[2].price;
                            selectedServiceName3.textContent = addons[2].name;
                        }
                        else{
                            selectedServicePrice3.textContent = "";
                            selectedServiceName3.textContent = "";
                        }
                    }
                })
                if(addons.length >= 1){
                    selectedServicePrice1.textContent = addons[0].price;
                    selectedServiceName1.textContent = addons[0].name;
                }
                else{
                    selectedServicePrice1.textContent = "";
                    selectedServiceName1.textContent = "";
                }
                if(addons.length >= 2){
                    selectedServicePrice2.textContent = addons[1].price;
                    selectedServiceName2.textContent = addons[1].name;
                }
                else{
                    selectedServicePrice2.textContent = "";
                    selectedServiceName2.textContent = "";
                }
                if(addons.length >= 3){
                    selectedServicePrice3.textContent = addons[2].price;
                    selectedServiceName3.textContent = addons[2].name;
                }
                else{
                    selectedServicePrice3.textContent = "";
                    selectedServiceName3.textContent = "";
                }
            }
            else{

                check.parentElement.style.cssText = "border-color: var(--light-gray); background-color: transparent";
                addons = addons.filter(obj =>{
                    return obj.name !== event.target.value;
                })
                
            }

            if(addons.length >= 1){
                selectedServicePrice1.textContent = addons[0].price;
                selectedServiceName1.textContent = addons[0].name;
            }
            else{
                selectedServicePrice1.textContent = "";
                selectedServiceName1.textContent = "";
            }
            if(addons.length >= 2){
                selectedServicePrice2.textContent = addons[1].price;
                selectedServiceName2.textContent = addons[1].name;
            }
            else{
                selectedServicePrice2.textContent = "";
                selectedServiceName2.textContent = "";
            }
            if(addons.length >= 3){
                selectedServicePrice3.textContent = addons[2].price;
                selectedServiceName3.textContent = addons[2].name;
            }
            else{
                selectedServicePrice3.textContent = "";
                selectedServiceName3.textContent = "";
            }
        })
    }
})


// this code is for step4

const total = document.querySelector(".total");

total.addEventListener('click', () => {
    if(toggleButton.checked){

        totalPrice = document.querySelector(".totalSelectedPrice");
        addonTotal = addons.reduce((total, addon) => {
            return total + parseFloat(addon.price.replace(/\$/g, ''));
        }, 0);

        replaced = selectedPlanPrice.textContent.replace("$", "").replace("yr", "").replace("/", "");
        totalPrice.textContent = Number(addonTotal) + Number(replaced);

    }
    else{

        totalPrice = document.querySelector(".totalSelectedPrice");
        addonTotal = addons.reduce((total, addon) => {
            return total + parseFloat(addon.price.replace(/\$/g, ''));
        }, 0);

        replaced = selectedPlanPrice.textContent.replace("$", "").replace("mo", "").replace("/", "");
        totalPrice.textContent = Number(addonTotal) + Number(replaced);     

    }
});

const changePlanBtn = document.getElementById('change-plan');
// function to handle change button

changePlanBtn.addEventListener('click', () => {

    changePlanBtn.classList.toggle("active");

    removeStep(); 
    stepCount = stepCount - 2;

    currentStep = steps[stepCount];
    currentStep.classList.add("active");
    decrementSelector();
    decrementSelector();
   // console.log(currentStep);
    removeSelectors();

    let select = selector[stepCount];   
    select.classList.add("active");

});