<h2>Scientific Calculator</h2>
<ins>Client Deploy:</ins> <b>https://scientific-calculator-three.vercel.app/</b>
In addition to basic arithmetic, the scientific calculator can evaluate scientific notation. The main difference seems to be that a scientific calc has functional & memory support, allowing it to perform more complex calculations. Whereas, a regular calculator can only perform direct low-level calculations. ie. 1+1, 2*5, but it can't do 2^5, because that would require holding values in memory. 

<h2>What I learned</h2>

Building this project was surprisingly tough when handling input cases depending on the state of a current calculation. It required a lot of playing around with my native windows calculator to see what expected behavior actually looked like and then inventorying all the cases to make sure behavior is expected. 

For example: 
if I input: [8, x, 9, =]
I get 72 and this also ends the calculation
however if I input:  [8, x, 9, /]
I get 72 as well, but the substring will log a proceeding operator. Then further inputs of other operators will manipulate the string as well as swap out operators until either '=' or a number gets entered. 
then if I input: [8, x, 9, x, =]
It assumes I want to take the previous product multiplied by the most recent input '9' to generate 5184

Handling all these different cases was a real exercise in determination and patience since they would build off each other and create mind-boggling state-sequences. I just kept inventorying my cases and simplifying it while taking deep breaths and eventually the logic cleaned up and I programmed a calculator. I'm glad I didn't just simplify the problem to where it would just perform calculations but didn't 'behave' like a scientific calc normally does. That would have been way easier, and less rewarding.

<h2>Technologies Used</h2>
<ins>Client:</ins> <br/>
"react": "^17.0.1"<br />

<h2>Docs</h2>
Local Boot-Up

git clone [use github's clone link]

yarn install<br/>
yarn start
