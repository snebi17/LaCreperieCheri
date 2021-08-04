<template>
  <v-container secondary fluid id="menu">
    <v-container fluid>
      <v-row class="justify-center">
        <v-col>
          <v-hover>
            <v-img
              slot-scope="{ hover }"
              src="../assets/laPistacchio2.jpg"
              width="400"
              class="ml-auto mr-0"
            >
              <v-card v-if="hover" height="100%" tile>
                <v-card-title class="text-h4 font-weight-bold"
                  >La Bomba</v-card-title
                >
                <v-card-subtitle class="text-subtitle-2"
                  >Sestavine:
                </v-card-subtitle>
                <v-card-text class="text-body-1 m-0">
                  <ul>
                    <li>bela premium čokolada</li>
                    <li>pistacija</li>
                    <li>čokoladne kroglice</li>
                    <li>plazma</li>
                    <li>maline</li>
                    <li>Kinder čokolada</li>
                  </ul>
                </v-card-text>
              </v-card>
            </v-img>
          </v-hover>
        </v-col>
        <v-col>
          <v-hover>
            <v-img
              slot-scope="{ hover }"
              src="../assets/whiteJaffa3.jpg"
              width="400"
              class="mr-auto ml-0"
            >
              <v-card v-if="hover" height="100%" tile>
                <v-card-title class="text-h4 font-weight-bold"
                  >White Jaffa</v-card-title
                >
                <v-card-subtitle class="text-subtitle-2"
                  >Sestavine:
                </v-card-subtitle>
                <v-card-text class="text-body-1 m-0">
                  <ul>
                    <li>ribana pomaranča</li>
                    <li>bela čokolada (2x preliv)</li>
                    <li>Milka čokoladke</li>
                    <li>čokoladne mrvice</li>
                    <li>ribana crunchy bela čokolada</li>
                  </ul>
                </v-card-text>
              </v-card>
            </v-img>
          </v-hover>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-hover>
            <v-img
              slot-scope="{ hover }"
              src="../assets/american-pie.jpg"
              width="400"
              class="ml-auto mr-0"
            >
              <v-card v-if="hover" height="100%" tile>
                <v-card-title class="text-h4 font-weight-bold"
                  >American Pie</v-card-title
                >
                <v-card-subtitle class="text-subtitle-2"
                  >Sestavine:
                </v-card-subtitle>
                <v-card-text class="text-body-1 m-0">
                  <ul>
                    <li>ribana jabolka</li>
                    <li>cimet</li>
                    <li>bela premium čokolada</li>
                    <li>lešnik</li>
                    <li>vanilijev puding</li>
                  </ul>
                </v-card-text>
              </v-card>
            </v-img>
          </v-hover>
        </v-col>
        <v-col>
          <v-hover>
            <v-img
              slot-scope="{ hover }"
              src="../assets/ruby1.jpg"
              width="400"
              class="mr-auto ml-0"
            >
              <v-card v-if="hover" height="100%" tile>
                <v-card-title class="text-h4 font-weight-bold"
                  >Ruby</v-card-title
                >
                <v-card-subtitle class="text-subtitle-2"
                  >Sestavine:
                </v-card-subtitle>
                <v-card-text class="text-body-1 m-0">
                  <ul>
                    <li>crunchy jagoda</li>
                    <li>rubi namaz</li>
                    <li>rubi ribana čokolada</li>
                    <li>rubi jajčka</li>
                  </ul>
                </v-card-text>
              </v-card>
            </v-img>
          </v-hover>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-card flat color="transparent">
            <v-card-title class="justify-center text-h3 font-weight-bold"
              >Premium palačinke.</v-card-title
            >
            <v-card-subtitle class="text-center text-subtitle-1"
              >Poskusite naše premium palačinke. Ne bo Vam žal!</v-card-subtitle
            >
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-container fluid primary>
      <v-row>
        <v-col>
          <v-toolbar flat color="transparent">
            <v-toolbar-items class="mx-auto">
              <v-col>
                <v-btn tile>Sladko</v-btn>
              </v-col>
              <v-col>
                <v-btn tile>Slano</v-btn>
              </v-col>
              <v-col>
                <v-btn tile>Pijače</v-btn>
              </v-col>
            </v-toolbar-items>
          </v-toolbar>
        </v-col>
      </v-row>
      <v-row class="overflow margin">
        <v-col cols="3" v-for="item in items" :key="item.id">
          <v-card>
            <v-card-text class="text-center">
              <p class="text">{{ item.name }}</p>
              <span class="text">{{ item.price }}</span>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-container secondary fluid>
      <v-row>
        <v-col>
          <v-card flat color="transparent">
            <v-card-title class="justify-center text-h3 font-weight-bold"
              >Sestavi svojo palačinko.</v-card-title
            >
            <v-card-subtitle class="text-center text-subtitle-1"
              >Si želiš palačinko sestavljeno po svojem okusu? Klikni gumb,
              sestavi palačinko in oddaj naročilo!</v-card-subtitle
            >
            <v-card-actions class="justify-center">
              <v-btn rounded color="primary">Sestavi svojo</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  name: "Menu",
  data() {
    return {
      items: [],
      errors: null,
    };
  },
  computed: {
    rows() {
      var rows = [];
      var arr = this.items;

      for (let i = 0; i < arr.length; i += 4) {
        var row = [];
        for (let j = 0; j < 4; j++) {
          row.push(arr[i + j]);
        }
        rows.push(row);
      }
      return rows;
    },
  },
  created() {
    this.getItems();
  },
  methods: {
    getItems() {
      axios
        .get("http://localhost:4000/menu")
        .then((items) => (this.items = items.data))
        .catch((errors) => (this.errors = errors));
    },
    redirect() {
      if (this.$route.path === "/menu/make-your-own") {
        this.$router.push({
          name: "Menu",
        });
      } else {
        this.$router.push({
          name: "MakeYourOwn",
          props: { items: this.items },
        });
      }
    },
  },
};
</script>

<style>
#gallery {
	padding: 40px 0;
}
span {
  font-weight: bold;
}
.overflow {
  overflow: auto;
  height: 500px;
}
.margin {
  margin-bottom: 10px;
}
.transparent {
  background-color: transparent !important;
}
ul,
li {
  margin: 0;
  padding: 0;
  list-style: none;
}
.opacity {
  opacity: 0.4;
}
</style>
