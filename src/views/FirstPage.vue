<template>
    <nav>
        <Header></Header>
    </nav>

    <div class="container">
        <div class="box box1-fp">
            <div class="contentBox1-fp">
                <font-awesome-icon icon="fa-solid fa-users" class="iconUsers-fp" />
                <p>Nomor Antrian</p>
            </div>
        </div>

        <div class="box box2-fp">
            <div class="box box2-1-fp">
                <div class="textAntrian-fp">
                    ANTRIAN
                </div>
                <div class="nomorAntrian-fp">{{ getAntrianTerakhir }}</div>
            </div>
            <div class="box box2-2-fp">
                <div class="contentBox2-2-fp">
                    <font-awesome-icon icon="fa-solid fa-circle-plus" class="iconPlus-fp" />
                    <p>Ambil Nomor</p>
                </div>
                <!-- <span class="loader"></span> -->
            </div>
        </div>
    </div>
</template>

<script setup>
import Header from '../components/HeaderComponent.vue'
import { ref, computed } from 'vue'
import { useStoreAdmin } from '@/stores/storeAdmin';
import { useStoreAntrian } from '@/stores/storeAntrian';

/*Using Store*/
const storeAdmin = useStoreAdmin()
const storeAntrian = useStoreAntrian()

//computed
const getAntrianTerakhir = computed(() => {
    let antrian = storeAntrian.getAntrianAktifTerbesar
    return antrian
})

// const getAntrianAktif = computed(() => {
//     let antrianAktif = storeAntrian.ge
// })

</script>

<style scoped>
.iconUsers-fp {
    color: white;
    height: 25px;
    width: 25px;
}

.container {
    height: 100vh;
    padding: 10px;
    margin-top: 20px;
}


.box1-fp {
    margin: auto;
    width: 30%;
    margin-top: 30px;
    height: 50px;
    border-radius: 15px;
    background-color: #2A2F4F;
    padding: 0;
    padding-top: 10px;
}

.contentBox1-fp {
    display: flex;
    justify-content: center
}

.contentBox1-fp p {
    color: white;
    margin-left: 10px;
}

.box2-fp {
    margin: auto;
    margin-top: 20px;
    width: 30%;
    height: 350px;
    margin-bottom: 20px;
    border-radius: 15px;
    background-color: #2A2F4F;
}

.box2-1-fp {
    margin: 10px;
    height: 220px;
    border-radius: 15px;
    text-align: center;
}

.box2-2-fp {
    margin: 10px;
    height: 50px;
    border-radius: 15px;
    padding: 0;
    padding-top: 10px;
    cursor: pointer;
}

.iconPlus-fp {
    color: #0D42FF;
    height: 25px;
    widows: 25px;
}

.contentBox2-2-fp {
    display: flex;
    justify-content: center
}

.contentBox2-2-fp p {
    color: #2A2F4F;
    margin-left: 10px;
}

.textAntrian-fp {
    font-size: 40px;
    font-weight: bold;
    margin-top: 20px;
}

.nomorAntrian-fp {
    font-size: 60px;
    font-weight: bold;
}

/* Extra small devices (phones, 400px and down) */
@media only screen and (max-width: 399px) {

    .iconUsers-fp {
        color: white;
        height: 25px;
        width: 25px;
    }

    .container {
        height: 100vh;
        padding: 10px;
        margin-top: 20px;
    }

    .box1-fp {
        margin: auto;
        width: 80%;
        margin-top: 30px;
        height: 50px;
        border-radius: 15px;
        background-color: #2A2F4F;
        padding: 0;
        padding-top: 10px;
    }

    .box2-fp {
        margin: auto;
        margin-top: 15px;
        width: 80%;
        height: 275px;
        margin-bottom: 20px;
        border-radius: 15px;
        background-color: #2A2F4F;
    }

    .textAntrian-fp {
        font-size: 30px;
        font-weight: bold;
        margin-top: 5px;
    }

    .nomorAntrian-fp {
        font-size: 60px;
        font-weight: bold;
    }

    .box2-1-fp {
        margin: 10px;
        height: 180px;
        border-radius: 15px;
        text-align: center;
    }

    .box2-2-fp {
        margin: 10px;
        height: 30px;
        border-radius: 15px;
        padding: 0;
        padding-top: 10px;
    }

    .contentBox2-2-fp {
        display: flex;
        justify-content: center
    }

    .contentBox2-2-fp p {
        color: #2A2F4F;
        margin-left: 10px;
    }

    .box2-2-fp {
        margin: 10px;
        height: 35px;
        border-radius: 15px;
        padding: 0;
        padding-top: 5px;
    }
}

/* Extra small devices (phones, 400px and up) */
@media only screen and (min-width: 400px) {

    .iconUsers-fp {
        color: white;
        height: 25px;
        width: 25px;
    }

    .container {
        height: 100vh;
        padding: 10px;
        margin-top: 20px;
    }

    .box1-fp {
        margin: auto;
        width: 70%;
        margin-top: 30px;
        height: 50px;
        border-radius: 15px;
        background-color: #2A2F4F;
        padding: 0;
        padding-top: 10px;
    }

    .box2-fp {
        margin: auto;
        margin-top: 15px;
        width: 70%;
        height: 280px;
        margin-bottom: 20px;
        border-radius: 15px;
        background-color: #2A2F4F;
    }

    .box2-1-fp {
        margin: 10px;
        height: 180px;
        border-radius: 15px;
        text-align: center;
    }

    .box2-2-fp {
        margin: 10px;
        height: 40px;
        border-radius: 15px;
        padding: 0;
        padding-top: 7px;
    }

    .textAntrian-fp {
        font-size: 32px;
        font-weight: bold;
        margin-top: 0px;
    }
}

@media only screen and (min-width: 500px) {

    .iconUsers-fp {
        color: white;
        height: 25px;
        width: 25px;
    }

    .container {
        height: 100vh;
        padding: 10px;
        margin-top: 20px;
    }

    .box1-fp {
        margin: auto;
        width: 70%;
        margin-top: 30px;
        height: 50px;
        border-radius: 15px;
        background-color: #2A2F4F;
        padding: 0;
        padding-top: 10px;
    }

    .box2-fp {
        margin: auto;
        margin-top: 15px;
        width: 70%;
        height: 300px;
        margin-bottom: 20px;
        border-radius: 15px;
        background-color: #2A2F4F;
    }

    .box2-1-fp {
        margin: 10px;
        height: 180px;
        border-radius: 15px;
        text-align: center;
    }

    .box2-2-fp {
        margin: 10px;
        height: 40px;
        border-radius: 15px;
        padding: 0;
        padding-top: 7px;
    }

    .textAntrian-fp {
        font-size: 32px;
        font-weight: bold;
        margin-top: 0px;
    }
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {

    .iconUsers-fp {
        color: white;
        height: 25px;
        width: 25px;
    }

    .container {
        height: 100vh;
        padding: 10px;
        margin-top: 20px;
    }

    .box1-fp {
        margin: auto;
        width: 70%;
        margin-top: 30px;
        height: 50px;
        border-radius: 15px;
        background-color: #2A2F4F;
        padding: 0;
        padding-top: 10px;
    }

    .box2-fp {
        margin: auto;
        margin-top: 15px;
        width: 70%;
        height: 310px;
        margin-bottom: 20px;
        border-radius: 15px;
        background-color: #2A2F4F;
    }

    .box2-1-fp {
        margin: 10px;
        height: 190px;
        border-radius: 15px;
        text-align: center;
    }

    .box2-2-fp {
        margin: 10px;
        height: 40px;
        border-radius: 15px;
        padding: 0;
        padding-top: 7px;
    }

    .textAntrian-fp {
        font-size: 40px;
        font-weight: bold;
        margin-top: 0px;
    }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
    .iconUsers-fp {
        color: white;
        height: 25px;
        width: 25px;
    }

    .container {
        height: 100vh;
        padding: 10px;
        margin-top: 20px;
    }

    .iconUsers-fp {
        color: white;
        height: 25px;
        width: 25px;
    }

    .container {
        height: 100vh;
        padding: 10px;
        margin-top: 20px;
    }


    .box1-fp {
        margin: auto;
        width: 45%;
        margin-top: 30px;
        height: 50px;
        border-radius: 15px;
        background-color: #2A2F4F;
        padding: 0;
        padding-top: 10px;
    }

    .contentBox1-fp {
        display: flex;
        justify-content: center
    }

    .contentBox1-fp p {
        color: white;
        margin-left: 10px;
    }

    .box2-fp {
        margin: auto;
        margin-top: 15px;
        width: 45%;
        height: 350px;
        margin-bottom: 20px;
        border-radius: 15px;
        background-color: #2A2F4F;
    }

    .box2-1-fp {
        margin: 10px;
        height: 220px;
        border-radius: 15px;
        text-align: center;
    }

    .box2-2-fp {
        margin: 10px;
        height: 50px;
        border-radius: 15px;
        padding: 0;
        padding-top: 10px;
    }

    .iconPlus-fp {
        color: #0D42FF;
        height: 25px;
        widows: 25px;
    }

    .contentBox2-2-fp {
        display: flex;
        justify-content: center
    }

    .contentBox2-2-fp p {
        color: #2A2F4F;
        margin-left: 10px;
    }

    .textAntrian-fp {
        font-size: 40px;
        font-weight: bold;
        margin-top: 20px;
    }

    .nomorAntrian-fp {
        font-size: 60px;
        font-weight: bold;
    }
}


/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {

    .iconUsers-fp {
        color: white;
        height: 25px;
        width: 25px;
    }

    .container {
        height: 100vh;
        padding: 10px;
        margin-top: 20px;
    }

    .iconUsers-fp {
        color: white;
        height: 25px;
        width: 25px;
    }

    .container {
        height: 100vh;
        padding: 10px;
        margin-top: 20px;
    }


    .box1-fp {
        margin: auto;
        width: 40%;
        margin-top: 30px;
        height: 50px;
        border-radius: 15px;
        background-color: #2A2F4F;
        padding: 0;
        padding-top: 10px;
    }

    .contentBox1-fp {
        display: flex;
        justify-content: center
    }

    .contentBox1-fp p {
        color: white;
        margin-left: 10px;
    }

    .box2-fp {
        margin: auto;
        margin-top: 20px;
        width: 40%;
        height: 350px;
        margin-bottom: 20px;
        border-radius: 15px;
        background-color: #2A2F4F;
    }

    .box2-1-fp {
        margin: 10px;
        height: 220px;
        border-radius: 15px;
        text-align: center;
    }

    .box2-2-fp {
        margin: 10px;
        height: 50px;
        border-radius: 15px;
        padding: 0;
        padding-top: 10px;
    }

    .iconPlus-fp {
        color: #0D42FF;
        height: 25px;
        widows: 25px;
    }

    .contentBox2-2-fp {
        display: flex;
        justify-content: center
    }

    .contentBox2-2-fp p {
        color: #2A2F4F;
        margin-left: 10px;
    }

    .textAntrian-fp {
        font-size: 40px;
        font-weight: bold;
        margin-top: 20px;
    }

    .nomorAntrian-fp {
        font-size: 60px;
        font-weight: bold;
    }
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {

    .iconUsers-fp {
        color: white;
        height: 25px;
        width: 25px;
    }

    .container {
        height: 100vh;
        padding: 10px;
        margin-top: 20px;
    }

    .iconUsers-fp {
        color: white;
        height: 25px;
        width: 25px;
    }

    .container {
        height: 100vh;
        padding: 10px;
        margin-top: 20px;
    }


    .box1-fp {
        margin: auto;
        width: 45%;
        margin-top: 30px;
        height: 50px;
        border-radius: 15px;
        background-color: #2A2F4F;
        padding: 0;
        padding-top: 10px;
    }

    .contentBox1-fp {
        display: flex;
        justify-content: center
    }

    .contentBox1-fp p {
        color: white;
        margin-left: 10px;
    }

    .box2-fp {
        margin: auto;
        margin-top: 15px;
        width: 45%;
        height: 350px;
        margin-bottom: 20px;
        border-radius: 15px;
        background-color: #2A2F4F;
    }

    .box2-1-fp {
        margin: 10px;
        height: 220px;
        border-radius: 15px;
        text-align: center;
    }

    .box2-2-fp {
        margin: 10px;
        height: 50px;
        border-radius: 15px;
        padding: 0;
        padding-top: 10px;
    }

    .iconPlus-fp {
        color: #0D42FF;
        height: 25px;
        widows: 25px;
    }

    .contentBox2-2-fp {
        display: flex;
        justify-content: center
    }

    .contentBox2-2-fp p {
        color: #2A2F4F;
        margin-left: 10px;
    }

    .textAntrian-fp {
        font-size: 40px;
        font-weight: bold;
        margin-top: 20px;
    }

    .nomorAntrian-fp {
        font-size: 60px;
        font-weight: bold;
    }
}

@media only screen and (min-width: 1280px) {
    .iconUsers-fp {
        color: white;
        height: 25px;
        width: 25px;
    }

    .container {
        height: 100vh;
        padding: 10px;
        margin-top: 20px;
    }

    .iconUsers-fp {
        color: white;
        height: 25px;
        width: 25px;
    }

    .container {
        height: 100vh;
        padding: 10px;
        margin-top: 20px;
    }


    .box1-fp {
        margin: auto;
        width: 35%;
        margin-top: 50px;
        height: 50px;
        border-radius: 15px;
        background-color: #2A2F4F;
        padding: 0;
        padding-top: 10px;
    }

    .contentBox1-fp {
        display: flex;
        justify-content: center
    }

    .contentBox1-fp p {
        color: white;
        margin-left: 10px;
    }

    .box2-fp {
        margin: auto;
        margin-top: 15px;
        width: 35%;
        height: 350px;
        margin-bottom: 20px;
        border-radius: 15px;
        background-color: #2A2F4F;
    }

    .box2-1-fp {
        margin: 10px;
        height: 220px;
        border-radius: 15px;
        text-align: center;
    }

    .box2-2-fp {
        margin: 10px;
        height: 50px;
        border-radius: 15px;
        padding: 0;
        padding-top: 10px;
    }

    .iconPlus-fp {
        color: #0D42FF;
        height: 25px;
        widows: 25px;
    }

    .contentBox2-2-fp {
        display: flex;
        justify-content: center
    }

    .contentBox2-2-fp p {
        color: #2A2F4F;
        margin-left: 10px;
    }

    .textAntrian-fp {
        font-size: 40px;
        font-weight: bold;
        margin-top: 20px;
    }

    .nomorAntrian-fp {
        font-size: 60px;
        font-weight: bold;
    }
}


@media only screen and (min-width: 1366px) {
    .iconUsers-fp {
        color: white;
        height: 25px;
        width: 25px;
    }

    .iconUsers-fp {
        color: white;
        height: 25px;
        width: 25px;
    }

    .container {
        height: 100vh;
        padding: 10px;
        margin-top: 20px;
    }


    .box1-fp {
        margin: auto;
        width: 35%;
        margin-top: 50px;
        height: 50px;
        border-radius: 15px;
        background-color: #2A2F4F;
        padding: 0;
        padding-top: 10px;
    }

    .contentBox1-fp {
        display: flex;
        justify-content: center
    }

    .contentBox1-fp p {
        color: white;
        margin-left: 10px;
    }

    .box2-fp {
        margin: auto;
        margin-top: 15px;
        width: 35%;
        height: 350px;
        margin-bottom: 20px;
        border-radius: 15px;
        background-color: #2A2F4F;
    }

    .box2-1-fp {
        margin: 10px;
        height: 220px;
        border-radius: 15px;
        text-align: center;
    }

    .box2-2-fp {
        margin: 10px;
        height: 50px;
        border-radius: 15px;
        padding: 0;
        padding-top: 10px;
    }

    .iconPlus-fp {
        color: #0D42FF;
        height: 25px;
        widows: 25px;
    }

    .contentBox2-2-fp {
        display: flex;
        justify-content: center
    }

    .contentBox2-2-fp p {
        color: #2A2F4F;
        margin-left: 10px;
    }

    .textAntrian-fp {
        font-size: 40px;
        font-weight: bold;
        margin-top: 20px;
    }

    .nomorAntrian-fp {
        font-size: 60px;
        font-weight: bold;
    }
}

@media only screen and (min-width: 1440px) {
    .iconUsers-fp {
        color: white;
        height: 25px;
        width: 25px;
    }

    .container {
        height: 100vh;
        padding: 10px;
        margin-top: 20px;
    }

    .iconUsers-fp {
        color: white;
        height: 25px;
        width: 25px;
    }

    .container {
        height: 100vh;
        padding: 10px;
        margin-top: 20px;
    }


    .box1-fp {
        margin: auto;
        width: 30%;
        margin-top: 100px;
        height: 50px;
        border-radius: 15px;
        background-color: #2A2F4F;
        padding: 0;
        padding-top: 10px;
    }

    .contentBox1-fp {
        display: flex;
        justify-content: center
    }

    .contentBox1-fp p {
        color: white;
        margin-left: 10px;
    }

    .box2-fp {
        margin: auto;
        margin-top: 15px;
        width: 30%;
        height: 350px;
        margin-bottom: 20px;
        border-radius: 15px;
        background-color: #2A2F4F;
    }

    .box2-1-fp {
        margin: 10px;
        height: 220px;
        border-radius: 15px;
        text-align: center;
    }

    .box2-2-fp {
        margin: 10px;
        height: 50px;
        border-radius: 15px;
        padding: 0;
        padding-top: 10px;
    }

    .iconPlus-fp {
        color: #0D42FF;
        height: 25px;
        widows: 25px;
    }

    .contentBox2-2-fp {
        display: flex;
        justify-content: center
    }

    .contentBox2-2-fp p {
        color: #2A2F4F;
        margin-left: 10px;
    }

    .textAntrian-fp {
        font-size: 40px;
        font-weight: bold;
        margin-top: 20px;
    }

    .nomorAntrian-fp {
        font-size: 60px;
        font-weight: bold;
    }
}

@media only screen and (min-width: 1920px) {
    .iconUsers-fp {
        color: white;
        height: 25px;
        width: 25px;
    }

    .container {
        height: 100vh;
        padding: 10px;
        margin-top: 20px;
    }

    .iconUsers-fp {
        color: white;
        height: 25px;
        width: 25px;
    }

    .container {
        height: 100vh;
        padding: 10px;
        margin-top: 20px;
    }


    .box1-fp {
        margin: auto;
        width: 30%;
        margin-top: 180px;
        height: 50px;
        border-radius: 15px;
        background-color: #2A2F4F;
        padding: 0;
        padding-top: 10px;
    }

    .contentBox1-fp {
        display: flex;
        justify-content: center
    }

    .contentBox1-fp p {
        color: white;
        margin-left: 10px;
    }

    .box2-fp {
        margin: auto;
        margin-top: 15px;
        width: 30%;
        height: 350px;
        margin-bottom: 20px;
        border-radius: 15px;
        background-color: #2A2F4F;
    }

    .box2-1-fp {
        margin: 10px;
        height: 220px;
        border-radius: 15px;
        text-align: center;
    }

    .box2-2-fp {
        margin: 10px;
        height: 50px;
        border-radius: 15px;
        padding: 0;
        padding-top: 10px;
    }

    .iconPlus-fp {
        color: #0D42FF;
        height: 25px;
        widows: 25px;
    }

    .contentBox2-2-fp {
        display: flex;
        justify-content: center
    }

    .contentBox2-2-fp p {
        color: #2A2F4F;
        margin-left: 10px;
    }

    .textAntrian-fp {
        font-size: 40px;
        font-weight: bold;
        margin-top: 20px;
    }

    .nomorAntrian-fp {
        font-size: 60px;
        font-weight: bold;
    }
}


.loader {
    display: block;
    position: relative;
    height: 20px;
    width: 140px;
    background-image:
        linear-gradient(#FFF 20px, transparent 0),
        linear-gradient(#FFF 20px, transparent 0),
        linear-gradient(#FFF 20px, transparent 0),
        linear-gradient(#FFF 20px, transparent 0);
    background-repeat: no-repeat;
    background-size: 20px auto;
    background-position: 0 0, 40px 0, 80px 0, 120px 0;
    animation: pgfill 1s linear infinite;
}

@keyframes pgfill {
    0% {
        background-image: linear-gradient(#FFF 20px, transparent 0), linear-gradient(#FFF 20px, transparent 0), linear-gradient(#FFF 20px, transparent 0), linear-gradient(#FFF 20px, transparent 0);
    }

    25% {
        background-image: linear-gradient(#FF3D00 20px, transparent 0), linear-gradient(#FFF 20px, transparent 0), linear-gradient(#FFF 20px, transparent 0), linear-gradient(#FFF 20px, transparent 0);
    }

    50% {
        background-image: linear-gradient(#FF3D00 20px, transparent 0), linear-gradient(#FF3D00 20px, transparent 0), linear-gradient(#FFF 20px, transparent 0), linear-gradient(#FFF 20px, transparent 0);
    }

    75% {
        background-image: linear-gradient(#FF3D00 20px, transparent 0), linear-gradient(#FF3D00 20px, transparent 0), linear-gradient(#FF3D00 20px, transparent 0), linear-gradient(#FFF 20px, transparent 0);
    }

    100% {
        background-image: linear-gradient(#FF3D00 20px, transparent 0), linear-gradient(#FF3D00 20px, transparent 0), linear-gradient(#FF3D00 20px, transparent 0), linear-gradient(#FF3D00 20px, transparent 0);
    }
}</style>
