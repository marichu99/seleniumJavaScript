const { Buider, Builder, By,until } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome")
async function example() {
  try {
    const username = "0799692741";
    const password = "#Toothless31#";

    const driver = new Builder().forBrowser('firefox').build();

    let hasBett = false;

    let isLoggedIn =false;

    let isSkippedClicked = true;

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

            isLoggedIn=true;
            if(isLoggedIn){
              console.log("the logged in value is ",isLoggedIn)
              try{
                driver.wait(until.elementLocated(By.xpath('//button[@title="Skip"]')),8000).click()
                
                isSkippedClicked = true;
                

                setTimeout(async()=>{
                  if(isSkippedClicked){
                    // look for the bet button
                    const betBtn = await driver.wait(until.elementLocated(By.className("css-15qmqf7")),2000)
                    
                    // when the button is found, set the prequisites of the game
                    setAmountandBet(driver,betBtn);

                    // check actively and cash out in time
                    recursiveElementCheck(driver);
                  }
                },10000)                                

              }catch(e){
                console.log("The error is ",e)
              }
            }            
        }catch(e){
            console.log("Element not found",e)
            driver.quit()
        }
      
    }, 12000);

    let counter=0;
    async function recursiveElementCheck(driver,betBtn){
      
      try{
        // check for this element every split second
       await driver.wait(until.elementLocated(By.className("css-1wyrx7x")),200000)

        // if found, print success message
        counter+=1;
        console.log("Bust has been found",counter)

        // cash out
        await betBtn.click()

        // quit the driver
        driver.quit()
        
        // recursiveElementCheck(driver);
        
      }catch(e){
        if(e.name == "TimeOutError"){
          console.log("The error name is ",e.name())
          // recurse till we find the element
          recursiveElementCheck(driver)
        }        
      }      
    }

    async function setAmountandBet(driver,betBtn){
      try{
        // find the bet amount and set it to 10 shillings
        const amount = await driver.findElement(By.xpath("//input[@id='tour_bet_amount']"));

        // clear the amount
        await amount.clear();

        // set the amount 
        await amount.sendKeys("10");

        // get the auto cash out field and set it to 10
        const autoCashOut = await driver.findElement(By.xpath("//input[@id='tour_bet_auto_cashout']"));

        await autoCashOut.clear();

        await autoCashOut.sendKeys("10");

        // find the auto play button
        // await driver.findElement(By.className("react-switch-handle")).click()

        // click the bet button
        await betBtn.click()
      }catch(e){
        console.log("The element that was not found is ", e)
      }
    }

  } catch (e) {
    console.error("The error is ", e);
  }
}
example();
