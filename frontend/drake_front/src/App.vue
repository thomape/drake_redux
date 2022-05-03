<template>
  <v-app id="inspire">
    <!-- <v-main> -->
    <v-app-bar app>
      <!-- <v-container class="py-0 fill-height" centered>
          <v-btn to="home" text>Home</v-btn>
          <v-btn to="history" text>History</v-btn>
          <v-btn to="images" text>Images</v-btn>
        </v-container> -->
      <v-tabs centered class="ml-n9" color="grey darken-1">
        <v-tab to="home"> Home </v-tab>
        <v-tab to="drake"> Drake Equation </v-tab>
        <v-tab to="fermi"> Fermi's Paradox </v-tab>
        <v-tab to="twins"> Twins Paradox </v-tab>
        <v-tab to="travel"> Travel </v-tab>
      </v-tabs>
      <div>
        <v-btn icon @click="toggle_dark_mode">
          <v-icon>mdi-theme-light-dark</v-icon>
        </v-btn>
      </div>
    </v-app-bar>

    <v-main class="grey darken-2">
      <v-container>
        <v-row>
          <v-col cols="2">
            <v-sheet rounded="lg">
              <v-list color="transparent">
                <!-- Home Section -->
                <div v-if="home">
                  <v-list-item link>
                    <v-list-item-content>
                      <v-list-item-title> Overview </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  <v-divider class="my-2"></v-divider>
                  <v-list-item link>
                    <v-list-item-content>
                      <v-list-item-title> Histroy </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </div>
                <!-- Drake Section -->
                <div v-if="drake">
                  <v-list-item link>
                    <v-list-item-content>
                      <v-list-item-title> Drake Overview </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  <v-divider class="my-2"></v-divider>
                  <v-list-item link>
                    <v-list-item-content>
                      <v-list-item-title> Drake Histroy </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </div>
                <!-- Fermi Section -->
                <div v-if="fermi">
                  <v-list-item link>
                    <v-list-item-content>
                      <v-list-item-title>Fermi Overview </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  <v-divider class="my-2"></v-divider>
                  <v-list-item link>
                    <v-list-item-content>
                      <v-list-item-title> Fermi Histroy </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </div>
                <!-- Twins Section -->
                <div v-if="twins">
                  <v-list-item link>
                    <v-list-item-content>
                      <v-list-item-title> Twins Overview </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  <v-divider class="my-2"></v-divider>
                  <v-list-item link>
                    <v-list-item-content>
                      <v-list-item-title> Twins Histroy </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </div>
                <!-- Travel Section -->
                <div v-if="travel">
                  <v-list-item link>
                    <v-list-item-content>
                      <v-list-item-title> Travel Overview </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  <v-divider class="my-2"></v-divider>
                  <v-list-item link>
                    <v-list-item-content>
                      <v-list-item-title> Travel Histroy </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </div>
              </v-list>
            </v-sheet>
          </v-col>

          <v-col>
            <v-sheet min-height="70vh" rounded="lg">
              <router-view />
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  methods: {
    toggle_dark_mode: function () {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      localStorage.setItem("dark_theme", this.$vuetify.theme.dark.toString());
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
    home() {
      return this.$route.name == "home";
    },
    drake() {
      return this.$route.name == "drake";
    },
    fermi() {
      return this.$route.name == "fermi";
    },
    twins() {
      return this.$route.name == "twins";
    },
    travel() {
      return this.$route.name == "travel";
    },
  },
};
</script>

<style></style>
