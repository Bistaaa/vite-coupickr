<script>

</script>

<template>
    <div class="appheader-container">
        <img id="nav-logo" src="../assets/img/Logo-oro-modificato.png" alt="logo">
    </div>
</template>

<style lang="scss" scoped>
.appheader-container {
    background-color: black;
    position: fixed;
    top: 0;
    left: 0;
    height: 12vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 99;

    #nav-logo {
        height: 70%;
    }
}
</style>
