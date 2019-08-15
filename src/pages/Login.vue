<template>
  <v-container>
    <v-row justify="center">
      <v-col xs="12">
        <v-img
          :src="require('@/assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        ></v-img>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col md="4">
        <v-form>
          <v-text-field
            label="メールアドレス"
            placeholder="メールアドレス"
            outlined=""
            :v-model="email"
          ></v-text-field>
          <v-text-field
            label="パスワード"
            outlined=""
            type="password"
            autocomplete="current-password"
            :v-model="password"
          ></v-text-field>
          <v-btn block large v-on:click="login">ログイン</v-btn>
          <v-checkbox label="ログインしたままにする"></v-checkbox>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    email: String,
    password: String,
  }),
  methods: {
    login: function() {
      this.$store.dispatch('login', this.email, this.password);
    },
  },
};
</script>
