<template>
  <v-container>
    <v-row justify="center">
      <h1>Vuetify であそぼう！</h1>
    </v-row>
    <v-row justify="center">
      <v-col md="4">
        <v-card>
          <v-card-title>ログイン画面</v-card-title>
          <v-card-text>
            ログイン画面作ってみた！なおログイン機能はまだできてないもよう．
          </v-card-text>
          <v-card-actions>
            <v-btn outlined to="/login">Go</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col md="4">
        <v-card>
          <v-card-title>エラーメッセージ</v-card-title>
          <v-card-text>
            エラーメッセージを出せるようにしてみたよ．
            <v-text-field
              label="エラーメッセージを入力"
              v-model="errorMessage"
            ></v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-btn outlined @click="addErrorMessage">
              エラーメッセージを表示
            </v-btn>
            <v-btn outlined @click="truncate">リセット</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    errorMessage: '',
  }),
  methods: {
    addErrorMessage: function() {
      this.$store.dispatch('appendToErrorMessages', this.errorMessage);
    },
    truncate: function() {
      this.$store.dispatch('truncateErrorMessages');
      this.errorMessage = '';
    },
  },
};
</script>
