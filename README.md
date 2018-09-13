# Minimum Viable Product (Image to Text)

Hello all and welcome to application. Have you ever taken notes by hand and but wanted a digital version? You could type it out but that takes time, and now there will be 2 sources of truth for the document you were looking for (ie: if you made changes to your physical copy you would need to type those into your digital version). Like most developers I like to be lazy, so I automate things to make more efficient, which lead me to create this project. Simply upload an image with text, and my application will parse it for all text, and save the text contents of that image to a local rtf file. Also I am going to go over this in depth for anyone who is not farmiliar the comand line or basic code skills, so veterans skip to the end and look at the TLDR section.

## Getting Started

NOTE: After immediately downloading the application it WILL NOT WORK. This is becuase I use the Google Vision API in my parsing process, which you need a key for. If you have a Google Vision API key, simply change the paths in the code (which I will discuss later on). If not, but you still would like a demo, reach out to me on linkedIn: linkedin.com/in/gregpereira1/, hopefully we will be able to work something out!

### Download Project

To install the project simply clone it down and run the build script to start.

1. Open terminal
2. Create or enter a folder in which you want the project to live
3. Clone repo:
```
git clone https://github.com/Gregory-Pereira/image-to-text
```
4. Enter project folder: 
```
cd image-to-text
```
### Fix key Paths

Thankfully there is only one file we will need to adjust. We simply need to fix the path to your google vision api key.

1. Enter the googleCloudVision folder
```
cd googleCloudVision
```
2. Open the index.js file with your favorite editor (personally I like sublime but not everyone has it so I will show how to do this for both sublime and text edit.

Sublime: ```subl index.js``` | 
TextEdit: ```open -a TextEdit index.js``` | 
Vim: ```vim index.js```

3. Adjust lines 1 and 7 (all lines that refer to your api key). Find the path for your api key, which you can do by opening the file in the finder inspector (⌘i) and select whatever text is in the 'Where' property. Paste that text somewhere, like a sticky note, or other temporary text storage and add a / character after it. Then grab the name of the file from the 'Name & Extension' section of the finder inspector and paste that after the file path and the slash. Copy that new path and paste it over the file path on lines 1 and 7. An example of my working file path, is currently in the code, again on lines 1 and 7 so make sure it roughly matches that format. Finally don't forget to escape spaces! if your filepath or file-name has any spaces in it (realistically it shouldn't but if it does) add a \ before them and it should work.


**random example file path without spaces:**

path: ```/Users/Jack/Desktop/workingProjects/keys/```
key file name: ```my-key-1234-jjes2731y4.json```
whole path: ```/Users/Jack/Desktop/working\ projects/keys/my-key-1234-jjes2731y4.json```

**random example file path with spaces:**

path: ```/Users/Jack/Desktop/working\ projects/keys/```
key file name: ```my-key-1234-jjes2731y4.json```
whole path: ```/Users/Jack/Desktop/working\ projects/keys/my-key-1234-jjes2731y4.json```

Once you updated your file path, make sure to save.

### Build

Now we need to install our dependencies. Simply move up one directory and start my build script which should do everything for this step.

```
cd ..
npm run build
```

### Starting it up

Simply run my start script and go to localhost at port 3000 in the browser

1. Run the server: ```npm run start```
2. Open browser of choice
3. Go to: http://localhost:3000

From there it should be running

## Notes when using:

Once you have uploaded an image manuever to the uploads folder in either the finder or the terminal. It should take about 1-5 seconds for the image to save and parse but after that it should appear in the uploads folder. 

Right now the app is slightly buggy because I haven't had too much time to bug fix. Simply know that if you already have an image or text file with the same name in the uploads folder it wont re-parse. Also I think you need to reload the webpage every time your server restarts (in the terminal).Finally, the API certainly suprassed my expectations in terms of its strength, but just know it is far from foolproof. Some images just won't work yet, but hopefully with some time and more bugfixing that issue will soon go away.


## FAQ:

Q1: How difficult was it to work with this tech and would you recomend it?

A1: This was super fun and simple to build, it took me about 6-7 hours total, and that is from never having worked with any of the middleware or google vision API. 

Q2: Can I use / play with this code?

A2: Please do, I am making it public because I think this is some really cool stuff and want people to play with it.

Q3: Is the project finished?

A3: No, the project is still in development. I plan to continue some light mantinence and work on it about every week or so.

Q4: Where does this go from here?

A4: Well the next 3 things I wanted to implement were a better form of data persistence (in the form of using the elastic search database), deployment, and better code support. Using elastic search would allow me to store documents at a time, and search them for anything inside of that document. I think there is a lot of search and storage value that can be added by adding the database, although I haven't used or looked into elasticSearch to heavily yet. Secondly by more code support I mean the ability to do better parsing of code, as well as running your code. Right now it works fairly well for higher level languages, however I probably would like to try and give the googleVisionAPI some support by filtering what I get back, and then running that code in an environment and printing the output. Finally I have deployed a lot with AWS and docker and while it would be very easy to use those, I would like some practice broadening my skillset, and so I want to look into using heroku for deployment. 

## TLDR

1. Clone down repo
2. cd into folder (image-to-text)
3. cd into googleCloudVision folder
4. Open index.js and change key on lines 1 and 7
5. back out into the root directory of the project
6. run npm build
7. run npm start
8. open browser and go to localhost at port 3000

Command:
```
git clone https://github.com/Gregory-Pereira/image-to-text
cd image-to-text
subl googleCloudVision/index.js
```
Change key on lines 1 and 7
```
npm run build
npm run start
```
open browser at http://localhost:3000

Thanks for looking into my application, hope you enjoy using it! Also shoutout to the amazing people and google for their API, it's pretty awesome.


