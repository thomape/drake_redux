<template>
  <v-app id="inspire">
    <v-main>
      <v-app-bar app>
        <v-app-bar-title>🚀Pulsar Creations🚀</v-app-bar-title>
        <v-tabs centered class="ml-n9" color="grey darken-">
          <v-tab to="overview"> Overview </v-tab>
          <v-tab to="drake"> Drake Equation </v-tab>
          <v-tab to="fermi"> Fermi's Paradox </v-tab>
          <v-tab to="twin"> Twin Paradox </v-tab>
          <v-tab to="travel"> Travel </v-tab>
        </v-tabs>
        <div>
          <v-btn icon x-large @click="toggleDarkmode">
            <v-icon>mdi-theme-light-dark</v-icon>
          </v-btn>
        </div>
      </v-app-bar>

      <!-- <v-main class="grey darken-2"> -->
      <v-container class="main">
        <v-row>
          <v-col cols="2">
            <v-sheet rounded="lg">
              <v-list color="transparent">
                <!-- Overview Section -->
                <div v-if="overview">
                  <v-list-item link to="overview">
                    <v-list-item-icon>
                      <v-icon>mdi-information-outline</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title> Overview </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  <v-divider></v-divider>
                  <v-list-item link to="timeline">
                    <v-list-item-icon>
                      <v-icon>mdi-chart-timeline-variant-shimmer</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title> Timeline </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  <v-divider></v-divider>
                  <v-list-item link to="history">
                    <v-list-item-icon>
                      <v-icon>mdi-history</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title> Histroy </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </div>
                <!-- Drake Section -->
                <div v-if="drake">
                  <v-list-item link to="drake">
                    <v-list-item-icon>
                      <v-icon>mdi-information-outline</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title> Overview </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  <v-divider></v-divider>
                  <v-list-item link to="drakeCalculator">
                    <v-list-item-icon>
                      <v-icon>mdi-calculator-variant-outline</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title> Calculator </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  <v-divider></v-divider>
                  <v-list-item link to="drakeHistory">
                    <v-list-item-icon>
                      <v-icon>mdi-history</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title> Histroy </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </div>
                <!-- Fermi Section -->
                <div v-if="fermi">
                  <v-list-item link to="fermi">
                    <v-list-item-icon>
                      <v-icon>mdi-information-outline</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title> Overview </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  <v-divider></v-divider>
                  <v-list-item link to="fermiHistory">
                    <v-list-item-icon>
                      <v-icon>mdi-history</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title> Histroy </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </div>
                <!-- Twins Section -->
                <div v-if="twin">
                  <v-list-item link to="twin">
                    <v-list-item-icon>
                      <v-icon>mdi-information-outline</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title> Overview </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  <v-divider></v-divider>
                  <v-list-item link to="twinCalculator">
                    <v-list-item-icon>
                      <v-icon>mdi-calculator-variant-outline</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title> Calculator </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  <v-divider></v-divider>
                  <v-list-item link to="twinHistory">
                    <v-list-item-icon>
                      <v-icon>mdi-history</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title> Histroy </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </div>
                <!-- Travel Section -->
                <div v-if="travel">
                  <v-list-item link to="travel">
                    <v-list-item-icon>
                      <v-icon>mdi-information-outline</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title> Overview </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  <v-divider></v-divider>
                  <v-list-item link to="travelCalculator">
                    <v-list-item-icon>
                      <v-icon>mdi-calculator-variant-outline</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title> Calculator </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  <v-divider></v-divider>
                  <v-list-item link to="travelHistory">
                    <v-list-item-icon>
                      <v-icon>mdi-history</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title> Histroy </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </div>
              </v-list>
            </v-sheet>
          </v-col>

          <v-col>
            <v-sheet min-height="100vh" rounded="lg">
              <transition name="moveInUp">
                <router-view />
              </transition>
            </v-sheet>
          </v-col>
        </v-row>
        <div>
          <v-btn icon @click="gotoTop">
            <v-icon x-large>mdi-arrow-up-bold-circle-outline</v-icon>
          </v-btn>
        </div>
      </v-container>
    </v-main>
    <v-footer class="footer">
      <div>
        <p>Copyright ©️ Thomas Errington. All rights reserved.</p>
      </div>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",
  methods: {
    toggleDarkmode: function () {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      localStorage.setItem("dark_theme", this.$vuetify.theme.dark.toString());
    },
    gotoTop: function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  },
  mounted() {
    const theme = localStorage.getItem("dark_theme");
    if (theme) {
      if (theme === "true") {
        this.$vuetify.theme.dark = true;
      } else {
        this.$vuetify.theme.dark = false;
      }
    } else if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      this.$vuetify.theme.dark = true;
      localStorage.setItem("dark_theme", this.$vuetify.theme.dark.toString());
    }
  },
  computed: {
    overview() {
      return (
        this.$route.name == "overview" ||
        this.$route.name == "root" ||
        this.$route.name == "timeline" ||
        this.$route.name == "history"
      );
    },
    drake() {
      return (
        this.$route.name == "drake" ||
        this.$route.name == "drakeCalculator" ||
        this.$route.name == "drakeHistory"
      );
    },
    fermi() {
      return this.$route.name == "fermi" || this.$route.name == "fermiHistory";
    },
    twin() {
      return (
        this.$route.name == "twin" ||
        this.$route.name == "twinCalculator" ||
        this.$route.name == "twinHistory"
      );
    },
    travel() {
      return (
        this.$route.name == "travel" ||
        this.$route.name == "travelCalculator" ||
        this.$route.name == "travelHistory"
      );
    },
  },
};
</script>

<style>
.a1-h1 {
  padding-left: 35px;
  padding-bottom: 50px;
  font-size: 3rem;
}
.outer {
  padding: 30px;
  padding-right: 100px;
}
.moveInUp-enter-active {
  animation: fadeIn 2s ease-in;
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}
.moveInUp-leave-active {
  animation: moveInUp 0.3s ease-in;
}
@keyframes moveInUp {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-400px);
  }
}
.overview-div {
  font-family: "Times New Roman", Times, serif;
  font-size: 1.5rem;
  max-width: 770px;
  line-height: 2rem;
  margin-left: 50px;
  text-indent: 40px;
}
.overview-div div {
  padding: 10px;
}
.footer {
  font-style: italic;
  text-align: center;
  font-size: 12px;
}
</style>
