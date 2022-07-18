// const name = document.getElementById('name')
// const email = document.getElementById('email')
// const mobile = document.getElementById('mobile')
// const subject = document.getElementById('subject')
// const message = document.getElementById('message')
// const form = document.getElementById('submit-form')
// const errorElement = document.getElementById('error')

// form.addEventListener('submit',(e) => {
//     let messages = []
//     if( name.value === '' || name.value == null){
//         messages.push('Name is required')
//     }

//     if( email.value === '' || email.value == null){
//         messages.push('Email is required')
//     }

//     if( mobile.value === '' || mobile.value == null){
//         messages.push('Mobile number is required')
//     }

//     if(message.value.length >=4) {
//         messages.push('message  must be longer than 3 words')
//     } 

//     if(messages.length > 0){
//       e.preventDefault()
//       errorElement.innerText = messages.join(',') 
//     }

// })





// $(document).ready(function(){
//     $("#submit-form").validate({
//         rules:{
//             name:{
//             required:true,
//             minlength:4,
//             maxlength:8
//         },
        
//         email:{
//             required:true,
//             email:true
//         },
//         mobile:{
//             minlength:6
//         },
//         message:{
//             required:true
//         },
//         // gender:{
//         //     required:true
//         // }
//         },
//         messages:{
//             //fname:"Enter first name"
//             name:{
//             required:"Enter the name",
//             minlength:"Enter atleast 4 characters"
//         },
//         email:{
//             required:"Enter the email",
//             email:"Enter the valuable email"
//         }
//     }


        
//     })
// })








