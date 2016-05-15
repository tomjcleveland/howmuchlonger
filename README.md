# How much longer?
Not as long as you'd think.

Check it out at [howmuchlonger.me](http://howmuchlonger.me)

## How it's calculated
I'm using the very sparse data provided by the US Social Security Administration, which you can find [here](https://www.ssa.gov/oact/STATS/table4c6.html).

To smooth-out the curve a bit I assume that the life expectancy decreases linearly between successive years in that data set. I'm aware that it doesn't really do that.

Here's all I'm doing:
```javascript
export function timeLeft(lifeObj, birthday) {
    var age = yearsDifference(birthday, new Date());
    var whole = Math.floor(age)
    var fraction = age - whole
    var upper = lifeObj[whole.toString()]
    var lower = lifeObj[(whole+1).toString()]
    return upper - ((upper-lower) * fraction);
}

```
`timeLeft()` returns the number of years someone has left on this planet. `lifeObj` is the Javascript object that holds the actuarial data I'm using.

## Why I built it
I'm trying to see what the fuss over React is about. Oh and remind everyone about their inescapable mortality.