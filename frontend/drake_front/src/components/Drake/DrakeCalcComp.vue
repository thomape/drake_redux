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
                      v-model="rstar"
                      :rules="rStarRules"
                      label="R*"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col>
                    <v-text-field
                      v-model="fp"
                      :rules="nameRules"
                      label="fp"
                      required
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <v-text-field
                      v-model="ne"
                      :rules="nameRules"
                      label="ne"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col>
                    <v-text-field
                      v-model="f1"
                      :rules="nameRules"
                      label="f1"
                      required
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <v-text-field
                      v-model="fi"
                      :rules="nameRules"
                      label="fi"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col>
                    <v-text-field
                      v-model="fc"
                      :rules="nameRules"
                      label="fc"
                      required
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <v-text-field
                      v-model="L"
                      :rules="nameRules"
                      label="L"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col>
                    <v-btn
                      :disabled="!valid"
                      color="success"
                      class="mr-4"
                      @click="calculate"
                    >
                      Calculate
                    </v-btn>
                    <v-btn color="error" class="mr-4" @click="reset">
                      Reset
                    </v-btn>
                  </v-col>
                </v-row>
              </v-form>
            </v-container>
            <v-container fluid class="drakeOption">
              <v-radio-group class="options" row>
                <v-radio
                  label="Original Values"
                  color="blue"
                  value="Original Values"
                >
                </v-radio>
                <v-radio
                  label="Current Values"
                  color="blue"
                  value="Current Values"
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
    <!-- <v-container fluid class="drakeOption">
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
    </v-container> -->
    <!-- <v-container class="userInput">
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-row>
          <v-col>
            <v-text-field
              v-model="rstar"
              :rules="rStarRules"
              label="R*"
              required
            ></v-text-field>
          </v-col>
          <v-col>
            <v-text-field
              v-model="fp"
              :rules="nameRules"
              label="fp"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-text-field
              v-model="ne"
              :rules="nameRules"
              label="ne"
              required
            ></v-text-field>
          </v-col>
          <v-col>
            <v-text-field
              v-model="f1"
              :rules="nameRules"
              label="f1"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-text-field
              v-model="fi"
              :rules="nameRules"
              label="fi"
              required
            ></v-text-field>
          </v-col>
          <v-col>
            <v-text-field
              v-model="fc"
              :rules="nameRules"
              label="fc"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-text-field
              v-model="L"
              :rules="nameRules"
              label="L"
              required
            ></v-text-field>
          </v-col>
          <v-col>
            <v-btn
              :disabled="!valid"
              color="success"
              class="mr-4"
              @click="calculate"
            >
              Calculate
            </v-btn>

            <v-btn color="error" class="mr-4" @click="reset">
              Reset
            </v-btn></v-col
          >
        </v-row>
      </v-form>
    </v-container> -->
  </div>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    name: "",
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
    ],
    rStarRules: [
      (v) => !!v || "Rate of star formation",
      (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
    ],
    answer: 1000,
  }),

  methods: {
    calculate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
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
  font-size: 55px;
  text-align: center;
  padding-top: 27px;
}
</style>
