// Document ready function for JQuery code
$(function() {

    // code for about Me Pic animation

    // code from youtube: https://www.youtube.com/watch?v=oBcKmmjpwls&t=209s
    // code for image container when mouse over and mouse out (changes color and cursor when hover)
    $("#imageContainer").on({
      mouseover:function(){
        $(this).css({
          'cursor':'pointer',
          'border-color':'red'
        });
      },
      mouseout: function(){
        $(this).css({
          'cursor':'default',
          'border-color':'grey'
        });
      },

      // When Click image change change image and fadeOut
      click: function(){
        var imageURL = $(this).attr('src');
        $('#changeAboutMePic').fadeOut(500,function(){
          $(this).attr('src',imageURL);
        }).fadeIn(500);
      }

    }, 'img');


    // Input Validation
  
    // Double click handler for text input boxes
    $("input[type='text']").dblclick(function () {
      $(this).val("").next().text("*");
    })
    // Double click handler for email type input boxes
    $("input[type='email']").dblclick(function () {
        $(this).val("").next().text("*");
      })
  
    // Click handler for clear entries button
    // Must put back asterisk on all error text fields
    $("#reset").click(function () {
      $("input[type='text']").val("").next().text("*");
      $("#fullName").focus();
    });
  
    // Click handler for submit button
    $("#submit").click(
      function() {
        // Want to run both validation functions
        let validEmail = validateEmail();
        let validName  = validateName();
        let validMessage = validateMessage();
        
       // Submit the form if email and name and message are valid
        if (validEmail && validName && validMessage) {
          $("#submitForm").submit(); 
        }
      }
    );
    // End of input Validation
    
      
    // Hide the projects
    $("#projectsToHide").hide();
    
    // When click the h4, show the projects
    $("#projectButton").click(
        function(){
            $("#projectsToHide").toggle(1000);
        });
        
    // change the image after clicking on picture
        $("#changeAboutMePic").click(function(){
        // Change src attribute of image
        $(this).attr("src", "images/aboutMePic2.jpg");
    });  
    
    

  // end document ready function
  });
  
  
  
  
  /**
   * validateName - validates the the entry in the first_name field is
   *                at least two letters
   * @return (boolean) - true if name is valid, false otherwise
   */
  function validateName() {
    let isValid = true;
    const firstName = $("#fullName");
    const firstNameVal = firstName.val().trim();
    const pattern = /^([a-zA-Z]){2}/;
  
    if (firstNameVal == "") {
      firstName.next().text("This field is required.");
      isValid = false;
    } 
    else if (! pattern.test(firstNameVal)) 
    {
      firstName.next().text("Must be at least two letters");
      isValid = false;
    } 
    else 
    {
      firstName.next().text(""); // Clear error or asterisk
    }
  
    return isValid;  
  }

  /**
   * validateEmail - validates the the entry in the email_address fields
   * @return (boolean) - true if email_address is valid, false otherwise
   */
  function validateEmail() {
    let isValid = true;
    const emailAddress1 = $("#email");
    const emailAddress1Val = emailAddress1.val().trim();
    const pattern = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
              
    // validate the first email address - not empty and matches pattern
    if (emailAddress1Val == "") { 
      emailAddress1.next().text("This field is required.");
      isValid = false;
    } 
    else if (! pattern.test(emailAddress1Val)) 
    {
      emailAddress1.next().text("Not a valid email address.");
      isValid = false;
    } else {
      emailAddress1.next().text("");  // Clear error or asterisk
    } 
    return isValid;
  }

  /**
   * validateMessage- validates the entry in the message field
   * @return (boolean) true if message is valid, false otherwise
   */
  function validateMessage() {
    let isValid = true;
    const messageBox = $("#message");
    const messageBoxVal = messageBox.val().trim();
  
    if (messageBoxVal == "") {
      messageBox.next().text("This field is required.");
      isValid = false;
    } 
    else 
    {
      messageBox.next().text(""); // Clear error or asterisk
    }
  
    return isValid;  
  }
  
  /* Validation logic
     Test the following invalid entries for email address:
     - '', '  ', 'John', 'John@', '@gmail', '@gmail.com'
     - 'John Smith@gmail.com', 'John@gmail com'
     - Illegal charcters anywhere i.e., \, $, *, etc.
  
     Only accept letters for first two characters - then anything
     Test the following invalid entries for name:
     - '', '  ', 'a ', '12', '#$', 'a1'
  */
