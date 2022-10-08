-- 1. List the names of all NFL teams'
  select name from teams

-- 2. List the stadium name and head coach of all NFC teams
select stadium, head_coach from teams where conference = 'NFC';

-- 3. List the head coaches of the AFC South
select head_coach from teams where conference = 'AFC' and division = 'South';

-- 4. The total number of players in the NFL
select count(name) from players;
select count(*) from players;

-- "COMMIT: NFL - queried some NFL stuff"

-- 5. The team names and head coaches of the NFC North and AFC East
select head_coach, name from teams where (conference = 'NFC' and division = 'North') or (conference ='AFC' and division = 'East');

-- 6. The 50 players with the highest salaries
select name, salary from players order by salary desc limit 50;

-- 7. The average salary of all NFL players
Select AVG(salary) from players;

-- 8. The names and positions of players with a salary above 10_000_000
select name, position from players where Salary >= 10000000;

-- "COMMIT: NFL - wow there's a lot of nfl data"

-- HUNGRY FOR MORE!!!!!!!

-- 9. The player with the highest salary in the NFL
select name, salary from players order by salary desc limit 1;

-- 10. The name and position of the first 100 players with the lowest salaries
select name, position from players order by salary asc limit 100;

-- 11. The average salary for a DE in the nfl
select AVG(salary) from players where position = 'DE';

-- 12. The names of all the players on the Buffalo Bills
select name from players where team_id = '1';

-- 13. The total salary of all players on the New York Giants
select SUM(salary) from players where team_id = '18';    

-- 14. The player with the lowest salary on the Green Bay Packers
select name, salary from players Where team_id = '23' order by salary asc limit 1;
select MIN(Salary) from players where team_id = '23';