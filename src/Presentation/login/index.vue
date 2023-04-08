<script setup lang="ts">
    import useLoginViewModel from './login.viewModel'
    const { user, login, token } = useLoginViewModel()
</script>

<template>
    <form @submit="login">
        <input type="email" placeholder="Email" v-model="user.email">
        <input type="password" placeholder="*******" v-model="user.password">
        <button type="submit">Proceed</button>
    </form>

    <p v-if="token.token">Token is {{ token?.token }}</p>
    <p v-if="token.refresh_token">Refresh Token is {{ token?.refresh_token }}</p>
</template>