<h1>Negative cases</h1>

<h2>TC #1. User is not registerter without filling the required fields</h2>

    Description: User should not be able to register without filling the required fields

    Precondition: assume mockup of the registration from is provided

      Test Steps:
      1. Navigate to the https://demoqa.com/automation-practice-form page
      2. Check the registration form is rendered
      3. Check Default fields state of the form
      4. Click on the "Submit" button
      5. Check registration modal is not appeared

      Expected Result: User is not registered and is left on the /automation-practice-form page - registration form is rendered

      Actual Result: As expected

      Status: Passed

<h2>TC #2. User is not registerter with invalid mobile number - letters instead of digits</h2>

    Description: User should not be able to register with invalid (only 10 digits are allowed) mob number

    Precondition: assume mockup of the registration from is provided

      Test Steps:
      1. Navigate to the https://demoqa.com/automation-practice-form page
      2. Check the registration form is rendered
      3. Fill in invalid mobile number and fill-out rest of all required form fields
      4. Click on the "Submit" button
      5. Check registration modal is not appeared

      Expected Result: User is not registered and is left on the /automation-practice-form page - registration form is rendered

      Actual Result: As expected

      Status: Passed


<h2>TC #3. User is not registerter with invalid mobile number - less then 10 digits is entered</h2>

    Description: User should not be able to register with invalid (less then 10 digits is entered) mob number

    Precondition: assume mockup of the registration from is provided

      Test Steps:
      1. Navigate to the https://demoqa.com/automation-practice-form page
      2. Check the registration form is rendered
      3. Fill 9 digits to mobile number field and fill-out rest of all required and optinal form fields
      4. Click on the "Submit" button
      5. Check registration modal is not appeared

      Expected Result: User is not registered and is left on the /automation-practice-form page - registration form is rendered

      Actual Result: As expected

      Status: Passed

<h2>TC #4. Mobile number field doesn't accept more than 10 digits</h2>

    Description: Upon user entered more than 10 digits to the mobile field then follwing digits or chaars are not accepted

    Precondition: assume mockup of the registration from is provided

      Test Steps:
      1. Navigate to the https://demoqa.com/automation-practice-form page
      2. Check the registration form is rendered
      3. Fill 11 digits to mobile number field and fill-out rest of all required and optinal form fields
      4. Click on the "Submit" button

      Expected Result: Mobile number field is to accepting any char and digit strictly after 10 digit was entered

      Actual Result: As expected

      Status: Passed

<h2>TC #5. User is not registerter with invalid email - regex fail</h2>

    Description: User should not be able to register with invalid email (regex fail)

    Precondition: assume mockup of the registration from is provided

      Test Steps:
      1. Navigate to the https://demoqa.com/automation-practice-form page
      2. Check the registration form is rendered
      3. Fill invalid email (someMail@io) field and fill-out rest of all required form fields
      4. Click on the "Submit" button
      5. Check registration modal is not appeared

      Expected Result: User is not registered and is left on the /automation-practice-form page - registration form is rendered

      Actual Result: As expected

      Status: Passed 

<h2>TC #6. User is not able to upload any type of the file extention except of picture formats</h2>

    Description: User should not be able to upload any type of the file extention except of picture formats like .jpg | .png | .bmp

    Precondition: assume mockup of the registration from is provided

      Test Steps:
      1. Navigate to the https://demoqa.com/automation-practice-form page
      2. Check the registration form is rendered
      3. Upload file with .pdf extention

      Expected Result: .pdf file is NOT uploaded

      Actual Result: .pdf file is uploaded

      Status: Failed

<h2>TC #7. User is not able to apply unsupported subjects option</h2>

    Description: User should not be able to apply unsupported subjects option except of existent

    Precondition: assume mockup of the registration from is provided

      Test Steps:
      1. Navigate to the https://demoqa.com/automation-practice-form page
      2. Check the registration form is rendered
      3. Enter and apply to the subjects field any value (f.e. Cinema) which is not in the list of supported options

      Expected Result: unsupported subjects option is not applied - field remains empty

      Actual Result: As expected

      Status: Passed 

<h2>TC #8. User is not able to apply unsupported state and city options</h2>

    Description: User should not be able to apply unsupported state and city options except of existent

    Precondition: assume mockup of the registration from is provided

      Test Steps:
      1. Navigate to the https://demoqa.com/automation-practice-form page
      2. Check the registration form is rendered
      3. Enter and apply to the state select any value (f.e. USA) which is not in the list of supported options 

      Expected Result: unsupported state option is not applied - select remains empty
      Actual Result: As expected

      4. Enter and apply to the state any value (f.e. NCR) which is the list of supported options
      5. Enter and apply to the city any value (f.e. Kyiv) which is not in the list of supported options

      Expected Result: unsupported city option is not applied - select remains empty
      Actual Result: As expected

      Status: Passed

<b>FYI</b> 
1. From the API perspective - make sence to repeat all negative test cases trying register the user with required data or with invalid data.
2. Clross-browser, GUI and mobile testing was not applied due to time limitation

<br>_________________________________________________________________________
      
<h1>Positive cases</h1>

<h2>TC #1. User is succesfully registered only with required fields</h2>
    Description: User is registered upon required form fields are filled

    Precondition: assume mockup of the registration from is provided

      Test Steps:
      1. Navigate to the https://demoqa.com/automation-practice-form page
      2. Check the registration form is rendered
      3. Fill-out all required fields
      4. Click on the "Submit" button

      Expected Result: User is registered - registration modal is rendered and filled data is present

      Actual Result: As expected

      Status: Passed

      
<h2>TC #2. User is succesfully registered with required and optional fields</h2>
    Description: User is registered upon required and optional form fields are filled

    Precondition: assume mockup of the registration from is provided

      Test Steps:
      1. Navigate to the https://demoqa.com/automation-practice-form page
      2. Check the registration form is rendered
      3. Fill-out all required and all optinal form fields
      4. Click on the "Submit" button

      Expected Result: User is registered - registration modal is rendered and filled data is present

      Actual Result: As expected

      Status: Passed