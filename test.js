const { Buider, Builder, By,until } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome")
async function example() {
  try {
    const username = "0799692741";
    const password = "#Toothless31#";

    const driver = new Builder().forBrowser('firefox').build();

    let hasBett = false;

    let parentElement;

    // load the website
    console.log("Success !!!");

    // navigate the application
    await driver.get("https://play.pakakumi.com/login");    

    setTimeout( () => {
        try{
            // fill in the username
             driver
            .findElement(
                By.xpath("//div[@class='css-acwcvw']//input[@type='text']")
            )
            .sendKeys(username);

            // fill in the password
             driver
            .findElement(By.xpath("//input[@type='password']"))
            .sendKeys(password);

            // click the login button
             driver
            .findElement(By.xpath("//button[normalize-space()='Login']"))
            .click();
        }catch(e){
            console.log("Element not found",e)
            driver.quit()
        }
      
    }, 7000);

    // setTimeout(async()=>{
    //     // click the skip button
    //     // Wait for the popup to appear (use an appropriate condition)
    //     driver.wait(until.elementLocated(By.className("__floater __floater__open")), 5000);

    //     // Find the skip button by its attributes (e.g., title or type)
    //     const skipButton = await driver.findElement(By.xpath('//button[@title="Skip"]'));
    //     skipButton.click();
        
    // },3000)

    // setTimeout(()=>{
    //     // get the bet button
    //     let btnBet = driver.findElement(By.className("css-15qmqf7"));
    //     btnBet.click();
    //     hasBett=true;

    //     // main logic
    //     parentElement = document.getElementById("tour_multiplier");
    // },1000)
    

    // main logic
    // while (true) {
    //   setTimeout(() => {
    //     // after every millisecond, check whether the busted element exists
    //     let bustedElement = parentElement.querySelector(".css-1wyrx7x");
    //     if (bustedElement != null) {
    //       btnBet.click();
    //     }
    //   }, 0.1);
    // }
  } catch (e) {
    console.error("The error is ", e);
  }
}
example();
