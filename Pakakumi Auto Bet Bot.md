 # Pakakumi Auto Bet Bot

This is a Selenium WebDriver script written in JavaScript that automates the process of betting on the Pakakumi online gambling platform. The script is designed to log in to the user's account, skip the tutorial, and place bets on the "Bust" option in the game.

## Prerequisites

To run this script, you will need the following:

- Node.js installed on your machine
- Selenium WebDriver for JavaScript installed
- A Pakakumi account

## Installation

1. Clone this repository to your local machine.
2. Open a terminal window and navigate to the directory where you cloned the repository.
3. Run the following command to install the required dependencies:

```
npm install
```

## Usage

To run the script, simply run the following command in the terminal:

```
node example.js
```

The script will automatically launch a Firefox browser and navigate to the Pakakumi login page.

## How the Script Works

The script works by following these steps:

1. **Logs in to the user's Pakakumi account.** The script first enters the user's username and password and then clicks the "Login" button.
2. **Skips the tutorial.** If the user has not yet completed the Pakakumi tutorial, the script will automatically click the "Skip" button.
3. **Waits for the next round to start.** The script then waits for the next round of the game to start. This is determined by the presence of a specific element on the page.
4. **Places a bet on the "Bust" option.** Once the next round has started, the script places a bet of 10 shillings on the "Bust" option.
5. **Waits for the round to end.** The script then waits for the round to end. This is determined by the presence of a specific element on the page.
6. **Repeats steps 3-5.** The script then repeats steps 3-5 until the user manually stops the script.

## Troubleshooting

If you encounter any issues running the script, here are a few things you can try:

- Make sure that you have installed all of the required dependencies.
- Make sure that you are using the correct version of Selenium WebDriver for JavaScript.
- Check the Pakakumi website to make sure that the login page has not changed.
- If you are still having trouble, please create an
