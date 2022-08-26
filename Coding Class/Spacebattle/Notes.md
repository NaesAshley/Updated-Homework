//////////////////////////////////////////////////////////////////////
//////////////Angel Help/////////////////

spaceship
hull | damage(health system)
accuracy range between two numbers (.5/.9)

main character
hull
accuracy

fight a list of ships

when i fight. either i hit the ship or not

how to detect a hit?
i need accuracy was randomly generated between two nubers
imaginge we have magic number

we have to keep checking if the hsip we're about to hit still has health or not
if it has health keep checking if you hit it
if it doesn't have health go to the next ship
if(accuracy score > poointage){
attach the enemy ship} else{
miss (notify \ don't notif)
}
}

///////////////////////////////////////////////////////////////////////
///////////////// own psudo-help //////////////////////////////

Main -
spaceship
hull | damage(health system)

objective: destroy all 6 alienships

attack ship1
if it survives
if attacks you //if e
you survive and attack until hull <= 0
or you die and lose game
if it dies - you go to next round
-- accuracy of 0-1
-- <=0.8 attack successful
--- > 0.8 attack = miss

Option to Attack Ship2 or Retreat

- if retreat = lose
- if attack = go to game 2

attack ship2
if it survives

- return attacks to you
  you survive and attack
  or you die and lose game
  if it dies - you win

keep repeating until after game 6
<alienship.length;

if at game 6 you beat all ships, you win
if at any point you don't win until after game 6 you lose ( === )
