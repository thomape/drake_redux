<template>
  <div class="outer">
    <div class="background">
      <p>
        The Drake equation is comprised seven varibles. Each varible has a
        useful range which allows for semi-realistic predictions. The original
        estimates and the current estimates vary greatly and that is simply
        because some of the varibles which were purely assumptions when the
        equation was concienved, have now been changed by sceince.
      </p>
      <p>
        The calculator has a few options to demostrate the aformentioned
        varibility. It also provideds a guided experience which will help the
        user understand the ranges that make sense supported by our current
        sceintific knowledge. The user-defined option will allow for any input,
        ambitious or otherwise.
      </p>
      <p>
        It should also be mentioned that the Drake equation was never intended
        to be used for sceintific research purposes, but rather as and ice
        breaker for the first SETI convention meeting. Its intial purpose was
        simply designed as an exercise to escape personal ego or beliefs and
        stimulate productive conversation. Until science has narrowed in on all
        of these varibles the equation's initial purpose should still be
        observed.
      </p>
      <div>
        <p id="equation">
          N = R<sub>*</sub> · f<sub>p</sub> · n<sub>e</sub> · f<sub>1</sub> ·
          f<sub>i</sub> · f<sub>c</sub> · L
        </p>
      </div>
      <div id="equationInfo">
        <v-list>
          <v-list-item>N</v-list-item>
          <v-list-item>R<sub>*</sub></v-list-item>
          <v-list-item>f<sub>p</sub></v-list-item>
          <v-list-item>n<sub>e</sub></v-list-item>
          <v-list-item>f<sub>1</sub></v-list-item>
          <v-list-item>f<sub>i</sub></v-list-item>
          <v-list-item>f<sub>c</sub></v-list-item>
          <v-list-item>L</v-list-item>
        </v-list>
      </div>
    </div>
    <v-container fluid class="drakeOption">
      <v-radio-group class="options" row>
        <v-radio
          label="Original Estimates"
          color="blue"
          value="Original Estimates"
        >
        </v-radio>
        <v-radio
          label="Current Estimates"
          color="blue"
          value="Current Estimates"
        ></v-radio>
        <v-radio
          label="Guided Input"
          color="blue"
          value="Guided Input"
        ></v-radio>
        <v-radio
          label="User Defined"
          color="blue"
          value="User Defined"
        ></v-radio>
      </v-radio-group>
    </v-container>
  </div>
</template>

<script></script>

<style scoped>
.drakeOption {
  align-items: center;
}
.options {
  width: 50%;
  margin: 0 auto;
}
#equation {
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  font-size: 54px;
  text-align: center;
  padding: 35px;
}
.background {
  padding: 80px;
}
.background p {
  font-family: "Times New Roman", Times, serif;
  font-size: 1.5rem;
  max-width: 870px;
  line-height: 2rem;
  margin-left: 50px;
  text-indent: 40px;
  margin: 0 auto;
  margin-bottom: 20px;
}
.outer {
  border: 3px solid Grey;
}
#equationInfo {
  border: 1px solid grey;
}
</style>
