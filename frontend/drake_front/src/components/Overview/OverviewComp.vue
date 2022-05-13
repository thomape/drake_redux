<template>
  <div class="outer">
    <div class="inner">
      <div>
        <h1 class="a1-h1">Astronomy or Philosophy?</h1>
      </div>
      <div class="overview-div">
        <div id="overview">
          <p>
            Within the astronomical community there are many interesting
            scientific equations that help humankind better understand the space
            in which we occupy. Everything from the vastness of the cosmos above
            all the way down to the quarks that perform seemingly impossible
            feats. Some of the science is so well proven that it governs nearly
            everything we do and perceive, such as Einstein’s general and
            special relativity equations. There also exists, formulas or thought
            experiments that border on the line between astronomy and
            philosophy. This site is dedicated to those experiments.
          </p>
        </div>
        <div id="drake">
          <p>
            The Drake equation, while not a strong scientific model to stand on,
            gives use the ability to imagine about the possibilities that may
            exist. It also has the power to curb any over-zealous tendencies
            that human emotion may lend. At its core, the Drake equation is a
            set of seven parameters that allow us to calculate the possibility
            of life within the universe.
          </p>
          <img src="@/assets/drake1.jpg" />
        </div>
        <div id="fermi">
          <p>
            Fermi’s paradox doesn’t include any type of mathematical calculation
            or scientific experiments, but it does compliment the Drake equation
            nicely. The premise is that; if the universe is infinite, why then
            haven’t we encountered any species other than what is familiar to
            use here on Earth? This is a thought experiment that helps us
            contemplate possible reasons for this phenomenon.
          </p>
          <img src="@/assets/paradox.jpeg" />
        </div>
        <div id="twin">
          <p>
            The Twin paradox has a great deal of math and science surrounding
            it. However, the concept is particularly difficult to relate to for
            many. Much of this has to do with human ego and one’s perception of
            their universe. The fundamental concept is that if one twin went on
            an epic space journey and the other remained behind on Earth their
            perception of time would be very different. The two primary factors
            at play are the speed of the traveling twin and the distance from
            the twin left on Earth.
          </p>
          <img src="@/assets/twin.jpg" />
        </div>
        <div id="travel">
          <div>
            <p>
              The last section isn’t so much about science and math, but a
              simple demonstration of how vast space truly is. We have been
              conditioned through popular media and movies to believe that
              traveling to Saturn or the closest galaxy is as simple as saying a
              catchy punch line and then being transported through space while
              white streaks of light pass by the ship’s windows. While this
              would be ideal, and in some areas of research this is the goal,
              but the hard reality is that this is far more difficult to achieve
              than just building a super-fast ship. In some sects the belief is
              that, given our current understanding of science it is impossible
              and will only exist on the silver screens.
            </p>
          </div>

          <div>
            <img src="@/assets/travel.jpeg" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script></script>

<style scoped>
.a1-h1 {
  padding-left: 50px;
  padding-bottom: 50px;
  font-size: 3rem;
}
.outer {
  padding: 30px;
  padding-right: 100px;
}
.overview-div {
  font-family: "Times New Roman", Times, serif;
  font-size: 1.5rem;
  max-width: 870px;
  line-height: 2rem;
  margin-left: 50px;
  text-indent: 40px;
}
.overview-div div {
  padding: 10px;
}
.outer {
  border: 3px solid Grey;
  display: flex;
  justify-content: center;
}
img {
  border-radius: 8px;
}
#drake img {
  height: 400px;
  filter: grayscale();
}
#fermi img {
  height: 300px;
}
#twin img {
  height: 400px;
}
#travel img {
  height: 400px;
  justify-content: right;
}
</style>
