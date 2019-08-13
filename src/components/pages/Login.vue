<template>
  <v-container>
    <v-row>
      <v-col xs="12">
        <v-img
          :src="require('@/assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        ></v-img>
      </v-col>
    </v-row>
    <v-row>
      <v-col md="4" offset-md="4">
        <v-form>
          <v-text-field
            label="メールアドレス"
            placeholder="メールアドレス"
            outlined=""
          ></v-text-field>
          <v-text-field
            label="パスワード"
            outlined=""
            type="password"
            aria-autocomplete="current-password"
          ></v-text-field>
          <v-btn block large>ログイン</v-btn>
          <v-checkbox label="ログインしたままにする"></v-checkbox>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({}),
};
</script>
