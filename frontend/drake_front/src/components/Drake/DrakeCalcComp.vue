<template>
  <div class="outer">
    <div class="background">
      <v-container>
        <v-row>
          <v-col>
            <p>
              The Drake equation is comprised seven varibles. Each varible has a
              useful range which allows for semi-realistic predictions. The
              original estimates and the current estimates vary greatly and that
              is simply because some of the varibles which were purely
              assumptions when the equation was concienved, have now been
              changed by sceince.
            </p>
            <p>
              The calculator has a few options to demostrate the aformentioned
              varibility. It also provideds a guided experience which will help
              the user understand the ranges that make sense supported by our
              current sceintific knowledge. The user-defined option will allow
              for any input, ambitious or otherwise.
            </p>
            <p>
              It should also be mentioned that the Drake equation was never
              intended to be used for sceintific research purposes, but rather
              as and ice breaker for the first SETI convention meeting. Its
              intial purpose was simply designed as an exercise to escape
              personal ego or beliefs and stimulate productive conversation.
              Until science has narrowed in on all of these varibles the
              equation's initial purpose should still be observed.
            </p>
          </v-col>
          <v-col>
            <v-container class="userInput">
              <v-form ref="form" v-model="valid" lazy-validation>
                <v-row id="answerRow">
                  <p>{{ answer }}</p>
                </v-row>
                <v-row>
                  <v-col>
                    <v-text-field
                      v-model="emptyEst.rstar"
                      :rules="rStarRules"
                      label="R*"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col>
                    <v-text-field
                      v-model="emptyEst.fp"
                      :rules="fpRules"
                      label="fp"
                      required
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <v-text-field
                      v-model="emptyEst.ne"
                      :rules="neRules"
                      label="ne"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col>
                    <v-text-field
                      v-model="emptyEst.f1"
                      :rules="f1Rules"
                      label="f1"
                      required
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <v-text-field
                      v-model="emptyEst.fi"
                      :rules="fiRules"
                      label="fi"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col>
                    <v-text-field
                      v-model="emptyEst.fc"
                      :rules="fcRules"
                      label="fc"
                      required
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <v-text-field
                      v-model="emptyEst.ll"
                      :rules="llRules"
                      label="L"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col>
                    <v-btn
                      :disabled="!valid"
                      color="success"
                      class="mr-4"
                      id="calc"
                      @click="calculate"
                    >
                      Calculate
                    </v-btn>
                    <v-btn color="error" class="mr-4" id="reset" @click="reset">
                      Reset
                    </v-btn>
                  </v-col>
                </v-row>
              </v-form>
            </v-container>
            <v-container fluid class="drakeOption">
              <v-radio-group class="options" row>
                <v-radio
                  @click="original"
                  label="Original Values"
                  color="blue"
                  value="Original Values"
                >
                </v-radio>
                <v-radio
                  @click="current"
                  label="Current Values"
                  color="blue"
                  value="Current Values"
                ></v-radio>
                <v-radio
                  @click="guided"
                  label="Guided Input"
                  color="blue"
                  value="Guided Input"
                ></v-radio>
                <v-radio
                  @click="user"
                  label="User Defined"
                  color="blue"
                  value="User Defined"
                ></v-radio>
              </v-radio-group>
              <v-switch
                class="hiLo"
                :label="`${hiLo ? 'High' : 'Low'}`"
                v-model="hiLo"
                @click="hiLo"
              ></v-switch>
            </v-container>
          </v-col>
        </v-row>
      </v-container>
      <div>
        <p id="equation">
          N = R<sub>*</sub> · f<sub>p</sub> · n<sub>e</sub> · f<sub>1</sub> ·
          f<sub>i</sub> · f<sub>c</sub> · L
        </p>
      </div>
      <div id="equationInfo">
        <v-list>
          <v-list-item id="rstarText">
            N - The number of civilizations in the Milky Way galaxy whose
            electromagnetic emissions are detectable.
          </v-list-item>
          <v-list-item
            >R<sub>*</sub>
            <div class="explaination">
              - The rate of formation of stars suitable for the development of
              intelligent life (number per year).
            </div></v-list-item
          >
          <v-list-item
            >f<sub>p</sub>
            <div class="explaination">
              - The fraction of those stars with planetary systems.
            </div></v-list-item
          >
          <v-list-item
            >n<sub>e</sub>
            <div class="explaination">
              - The number of planets, per solar system, with an environment
              suitable for life.
            </div></v-list-item
          >
          <v-list-item
            >f<sub>1</sub>
            <div class="explaination">
              - The fraction of suitable planets on which life actually appears.
            </div></v-list-item
          >
          <v-list-item
            >f<sub>i</sub>
            <div class="explaination">
              - The fraction of life bearing planets on which intelligent life
              emerges.
            </div></v-list-item
          >
          <v-list-item
            >f<sub>c</sub>
            <div class="explaination">
              - The fraction of civilizations that develop a technology that
              produces detectable signs of their existence.
            </div></v-list-item
          >
          <v-list-item class="NL">
            L - The average length of time such civilizations produce such signs
            (years).
          </v-list-item>
        </v-list>
        <a href="https://www.seti.org/drake-equation-index "
          >Information provided by SETI</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    name: "",
    rStarRules: [
      (v) => !!v || "Rate of star formation",
      //(v) => (v && v.length <= 10) || "Name must be less than 10 characters",
    ],
    fpRules: [(v) => !!v || "Percent with planets"],
    neRules: [(v) => !!v || "Number of goldie locks planets"],
    f1Rules: [(v) => !!v || "Percent of life bearing planets"],
    fiRules: [(v) => !!v || "Percent of  intelligent life bearing planets"],
    fcRules: [(v) => !!v || "Percent that transmit information"],
    llRules: [(v) => !!v || "Length of transimission time"],
    answer: 0,
    hiLo: false,
    originalEstLo: {
      rstar: 1.0,
      fp: 0.2,
      ne: 1.0,
      f1: 1.0,
      fi: 1.0,
      fc: 0.1,
      ll: 1000.0,
    },
    originalEstHi: {
      rstar: 1.0,
      fp: 0.5,
      ne: 5.0,
      f1: 1.0,
      fi: 1.0,
      fc: 0.2,
      ll: 100000000.0,
    },
    currentEstLo: {
      rstar: 1.5,
      fp: 0.00001,
      ne: 0.00001,
      f1: 0.00001,
      fi: 0.000000001,
      fc: 0.2,
      ll: 304.0,
    },
    currentEstHi: {
      rstar: 3.0,
      fp: 1.0,
      ne: 0.2,
      f1: 0.13,
      fi: 1.0,
      fc: 0.2,
      ll: 1000000000.0,
    },
    guidedEst: { rstar: 0, fp: 0, ne: 0, f1: 0, fi: 0, fc: 0, ll: 0 },
    userEst: { rstar: 0, fp: 0, ne: 0, f1: 0, fi: 0, fc: 0, ll: 0 },
    emptyEst: {
      rstar: null,
      fp: null,
      ne: null,
      f1: null,
      fi: null,
      fc: null,
      ll: null,
    },
  }),
  methods: {
    calculate() {
      this.$refs.form.validate();
      this.answer =
        this.emptyEst.rstar *
        this.emptyEst.fp *
        this.emptyEst.ne *
        this.emptyEst.f1 *
        this.emptyEst.fi *
        this.emptyEst.fc *
        this.emptyEst.ll;
    },
    reset() {
      this.$refs.form.reset();
      this.answer = 0;
    },
    original() {
      if (this.hiLo) {
        this.emptyEst = this.originalEstHi;
        this.answer = 1;
      } else {
        this.emptyEst = this.originalEstLo;
        this.answer = 2;
      }
    },
    current() {
      if (this.hiLo) {
        this.emptyEst = this.currentEstHi;
        this.answer = 3;
      } else {
        this.emptyEst = this.currentEstLo;
        this.answer = 4;
      }
    },
    guided() {
      this.emptyEst = this.guidedEst;
    },
    user() {
      this.userEst.rstar = this.this.emptyEst = this.userEst;
    },
  },
};
</script>

<style scoped>
.drakeOption {
  border: 1px solid gray;
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
a:link,
a:visited {
  background-color: gray;
  color: white;
  padding: 14px 25px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
}
a:hover,
a:active {
  background-color: rgb(112, 112, 112);
  font-size: 112%;
}
#calc:hover {
  font-size: 112%;
}
#reset:hover {
  font-size: 112%;
}
.explaination {
  padding-left: 10px;
  font-size: 1.1rem;
}
.NL {
  font-size: 1.1rem;
}
.userInput {
  max-width: 870px;
  border: 1px solid grey;
  margin-bottom: 25px;
}
#answerRow {
  height: 100px;
  border: 5px solid gray;
  margin: 20px;
}
#answerRow p {
  font-size: 45px;
  text-align: center;
  padding-top: 27px;
}
.hiLo {
  padding-left: 25px;
}
</style>
