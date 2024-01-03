<template>
    <div class="container">
        <div class="box box1-sp">
            <div class="box box1-1-sp">
                    <div class="nomorAnda-sp">Nomor Antrian Anda</div>
                    <div class="angkaAntrian-sp">{{ antrianAnda }}</div>
            </div> 
        </div>
        <div class="box box2-sp">
            <div class="box box2-refresh-sp">
                <div class="contentBox2-2-sp">
                    <font-awesome-icon icon="fa-solid fa-rotate-right" class="iconPlus-sp"/>
                    <p>Refresh</p>
                </div>
            </div>

            <div class="box box2-1-sp">
                <div class="textAntrian-sp">
                    ANTRIAN
                </div>
                <div class="nomorAntrian-sp">{{ listAntrian[0].nomorAntrian }}</div>
                <div class="nomorLoket-sp">Ke Loket 1</div>
            </div>

            <div class="box box2-2-sp">
                <div class="textAntrian-sp">
                    ANTRIAN
                </div>
                <div class="nomorAntrian-sp">{{ listAntrian[1].nomorAntrian }}</div>
                <div class="nomorLoket-sp">Ke Loket 2</div>
            </div>

            <div class="box box2-3-sp">
                <div class="textAntrian-sp">
                    ANTRIAN
                </div>
                <div class="nomorAntrian-sp">{{ listAntrian[2].nomorAntrian }}</div>
                <div class="nomorLoket-sp">Ke Loket 3</div>
            </div>
        </div>
        
    </div>
</template>

<script setup>
    import { reactive, ref } from 'vue'

const antrianAnda = ref(1)
const listAntrian = reactive([
    {
    id: '0001',
    nomorAntrian: '1',
    isActive: true,
    isQueue: true,
    isLoket: '1'
    },
    {
    id: '0002',
    nomorAntrian: '2',
    isActive: true,
    isQueue: true,
    isLoket: '2'
    },
    {
    id: '0003',
    nomorAntrian: '3',
    isActive: true,
    isQueue: true,
    isLoket: '3'
    }
])
</script>

<style scoped>

.iconUsers-sp {
    color: white;
    height: 25px;
    widows: 25px;
}

.container {
    height: 100%;
    padding: 10px;
    margin-top: 0px;
}


.box1-sp {
    margin: auto;
    width: 30%;
    margin-top: 10px;
    height: 200px;
    border-radius: 15px;
    background-color: #2A2F4F;
    padding: 0;
    padding-top: 20px;
    padding-bottom: 20px;
}

.box1-1-sp {
    margin: 10px;
    height: 140px;
    border-radius: 15px;
    text-align: center;
    margin-left: 30px;
    margin-right: 30px;
}

.box2-sp {
    margin: auto;
    width: 30%;
    height: 900px;
    margin-bottom: 20px;
    border-radius: 15px;
    background-color: #2A2F4F;
}

.box2-1-sp,
.box2-2-sp,
.box2-3-sp {
    margin: 10px;
    height: 240px;
    border-radius: 15px;
    text-align: center;
}

.box2-refresh-sp {
    margin: 10px;
    height: 50px;
    border-radius: 15px;
    padding: 0;
    padding-top: 10px;
    background-color: yellow;
    cursor: pointer;
}

.iconPlus-sp {
    color: #0D42FF;
    height: 25px;
    widows: 25px;
}


.contentBox2-2-sp {
    display: flex;
    justify-content: center
}

.contentBox2-2-sp p {
    color: #2A2F4F;
    margin-left: 10px;
    font-size: 18px;
}

.textAntrian-sp {
    font-size: 30px;
    font-weight: bold;
    margin-top: 0px;
}

.nomorAntrian-sp {
    font-size: 80px;
    font-weight: bold;
}

.nomorLoket-sp {
    font-size: 30px;
    font-weight: bold;
}

.angkaAntrian-sp {
    font-size: 60px;
    font-weight: bold;
}

.nomorAnda-sp {
    font-size: 20px;
    font-weight: bold;
}

@media only screen and (max-width: 399px) {
    .box1-sp {
        margin: auto;
        width: 80%;
        margin-top: 10px;
        margin-bottom: 15px;
        height: 140px;
        border-radius: 15px;
        background-color: #2A2F4F;
        padding: 0;
        padding-top: 15px;
        padding-bottom: 15px;
    }

    .box1-1-sp {
        margin: 0px;
        height: 110px;
        border-radius: 15px;
        text-align: center;
        margin-left: 20px;
        margin-right: 20px;
    }

    .angkaAntrian-sp {
        font-size: 40px;
        font-weight: bold;
    }

    .nomorAnda-sp {
        font-size: 16px;
        font-weight: bold;
    }

    .box2-sp {
        margin: auto;
        width: 80%;
        height: 720px;
        margin-bottom: 20px;
        border-radius: 15px;
        background-color: #2A2F4F;
    }
    
    .box2-1-sp,
    .box2-2-sp,
    .box2-3-sp {
        margin: 10px;
        height: 180px;
        border-radius: 15px;
        text-align: center;
        margin-bottom: 20px;
    }

    .textAntrian-sp {
        font-size: 20px;
        font-weight: bold;
        margin-top: 10px;
    }
    
    .nomorAntrian-sp {
        font-size: 45px;
        font-weight: bold;
    }
    
    .nomorLoket-sp {
        font-size: 20px;
        font-weight: bold;
    }

    .box2-refresh-sp {
        margin-bottom: 20px;
    }
}

@media only screen and (min-width: 400px) {
    .box1-sp {
        margin: auto;
        width: 80%;
        margin-top: 10px;
        margin-bottom: 15px;
        height: 140px;
        border-radius: 15px;
        background-color: #2A2F4F;
        padding: 0;
        padding-top: 15px;
        padding-bottom: 15px;
    }

    .box1-1-sp {
        margin: 0px;
        height: 110px;
        border-radius: 15px;
        text-align: center;
        margin-left: 20px;
        margin-right: 20px;
    }

    .angkaAntrian-sp {
        font-size: 40px;
        font-weight: bold;
    }

    .nomorAnda-sp {
        font-size: 16px;
        font-weight: bold;
    }

    .box2-sp {
        margin: auto;
        width: 80%;
        height: 720px;
        margin-bottom: 20px;
        border-radius: 15px;
        background-color: #2A2F4F;
    }
    
    .box2-1-sp,
    .box2-2-sp,
    .box2-3-sp {
        margin: 10px;
        height: 180px;
        border-radius: 15px;
        text-align: center;
        margin-bottom: 20px;
    }

    .textAntrian-sp {
        font-size: 20px;
        font-weight: bold;
        margin-top: 10px;
    }
    
    .nomorAntrian-sp {
        font-size: 45px;
        font-weight: bold;
    }
    
    .nomorLoket-sp {
        font-size: 20px;
        font-weight: bold;
    }

    .box2-refresh-sp {
        margin-bottom: 20px;
    }
}

@media only screen and (min-width: 500px) {
    .box1-sp {
        margin: auto;
        width: 70%;
        margin-top: 10px;
        height: 180px;
        border-radius: 15px;
        background-color: #2A2F4F;
        padding: 0;
        padding-top: 20px;
        padding-bottom: 20px;
        margin-bottom: 20px;
    }

    .box1-1-sp {
        margin: 0px;
        height: 140px;
        border-radius: 15px;
        text-align: center;
        margin-left: 20px;
        margin-right: 20px;
    }

    .angkaAntrian-sp {
        font-size: 60px;
        font-weight: bold;
    }

    .nomorAnda-sp {
        font-size: 20px;
        font-weight: bold;
    }

    .box2-sp {
        margin: auto;
        width: 70%;
        height: 900px;
        margin-bottom: 20px;
        border-radius: 15px;
        background-color: #2A2F4F;
    }
    
    .box2-1-sp,
    .box2-2-sp,
    .box2-3-sp {
        margin: 10px;
        height: 240px;
        border-radius: 15px;
        text-align: center;
        margin-bottom: 20px;
    }

    .textAntrian-sp {
        font-size: 30px;
        font-weight: bold;
        margin-top: 10px;
    }
    
    .nomorAntrian-sp {
        font-size: 60px;
        font-weight: bold;
    }
    
    .nomorLoket-sp {
        font-size: 30px;
        font-weight: bold;
    }
}

@media only screen and (min-width: 600px) {
    .box1-sp {
        margin: auto;
        width: 60%;
        margin-top: 10px;
        height: 180px;
        border-radius: 15px;
        background-color: #2A2F4F;
        padding: 0;
        padding-top: 20px;
        padding-bottom: 20px;
        margin-bottom: 20px;
    }

    .box1-1-sp {
        margin: 0px;
        height: 140px;
        border-radius: 15px;
        text-align: center;
        margin-left: 20px;
        margin-right: 20px;
    }

    .angkaAntrian-sp {
        font-size: 60px;
        font-weight: bold;
    }

    .nomorAnda-sp {
        font-size: 20px;
        font-weight: bold;
    }

    .box2-sp {
        margin: auto;
        width: 60%;
        height: 900px;
        margin-bottom: 20px;
        border-radius: 15px;
        background-color: #2A2F4F;
    }
    
    .box2-1-sp,
    .box2-2-sp,
    .box2-3-sp {
        margin: 10px;
        height: 240px;
        border-radius: 15px;
        text-align: center;
        margin-bottom: 20px;
    }

    .textAntrian-sp {
        font-size: 30px;
        font-weight: bold;
        margin-top: 10px;
    }
    
    .nomorAntrian-sp {
        font-size: 60px;
        font-weight: bold;
    }
    
    .nomorLoket-sp {
        font-size: 30px;
        font-weight: bold;
    }
}

@media only screen and (min-width: 768px) {
    .box1-sp {
        margin: auto;
        width: 60%;
        margin-top: 10px;
        height: 220px;
        border-radius: 15px;
        background-color: #2A2F4F;
        padding: 0;
        padding-top: 30px;
        padding-bottom: 30px;
        margin-bottom: 20px;
    }

    .box1-1-sp {
        margin: 0px;
        height: 160px;
        border-radius: 15px;
        text-align: center;
        margin-left: 30px;
        margin-right: 30px;
    }

    .angkaAntrian-sp {
        font-size: 70px;
        font-weight: bold;
    }

    .nomorAnda-sp {
        font-size: 22px;
        font-weight: bold;
    }

    .box2-sp {
        margin: auto;
        width: 60%;
        height: 900px;
        margin-bottom: 20px;
        border-radius: 15px;
        background-color: #2A2F4F;
    }
    
    .box2-1-sp,
    .box2-2-sp,
    .box2-3-sp {
        margin: 10px;
        height: 240px;
        border-radius: 15px;
        text-align: center;
        margin-bottom: 20px;
    }

    .textAntrian-sp {
        font-size: 30px;
        font-weight: bold;
        margin-top: 10px;
    }
    
    .nomorAntrian-sp {
        font-size: 70px;
        font-weight: bold;
    }
    
    .nomorLoket-sp {
        font-size: 30px;
        font-weight: bold;
    }
}

@media only screen and (min-width: 992px) {
    .box1-sp {
        margin: auto;
        width: 50%;
        margin-top: 10px;
        height: 220px;
        border-radius: 15px;
        background-color: #2A2F4F;
        padding: 0;
        padding-top: 30px;
        padding-bottom: 30px;
        margin-bottom: 20px;
    }

    .box1-1-sp {
        margin: 0px;
        height: 160px;
        border-radius: 15px;
        text-align: center;
        margin-left: 30px;
        margin-right: 30px;
    }

    .angkaAntrian-sp {
        font-size: 70px;
        font-weight: bold;
    }

    .nomorAnda-sp {
        font-size: 22px;
        font-weight: bold;
    }

    .box2-sp {
        margin: auto;
        width: 50%;
        height: 900px;
        margin-bottom: 20px;
        border-radius: 15px;
        background-color: #2A2F4F;
    }
    
    .box2-1-sp,
    .box2-2-sp,
    .box2-3-sp {
        margin: 10px;
        height: 240px;
        border-radius: 15px;
        text-align: center;
        margin-bottom: 20px;
    }

    .textAntrian-sp {
        font-size: 30px;
        font-weight: bold;
        margin-top: 10px;
    }
    
    .nomorAntrian-sp {
        font-size: 70px;
        font-weight: bold;
    }
    
    .nomorLoket-sp {
        font-size: 30px;
        font-weight: bold;
    }
}

@media only screen and (min-width: 1200px) {
    .box1-sp {
        margin: auto;
        width: 40%;
        margin-top: 10px;
        height: 220px;
        border-radius: 15px;
        background-color: #2A2F4F;
        padding: 0;
        padding-top: 30px;
        padding-bottom: 30px;
        margin-bottom: 20px;
    }

    .box1-1-sp {
        margin: 0px;
        height: 160px;
        border-radius: 15px;
        text-align: center;
        margin-left: 30px;
        margin-right: 30px;
    }

    .angkaAntrian-sp {
        font-size: 70px;
        font-weight: bold;
    }

    .nomorAnda-sp {
        font-size: 22px;
        font-weight: bold;
    }

    .box2-sp {
        margin: auto;
        width: 40%;
        height: 900px;
        margin-bottom: 20px;
        border-radius: 15px;
        background-color: #2A2F4F;
    }
    
    .box2-1-sp,
    .box2-2-sp,
    .box2-3-sp {
        margin: 10px;
        height: 240px;
        border-radius: 15px;
        text-align: center;
        margin-bottom: 20px;
    }

    .textAntrian-sp {
        font-size: 30px;
        font-weight: bold;
        margin-top: 10px;
    }
    
    .nomorAntrian-sp {
        font-size: 70px;
        font-weight: bold;
    }
    
    .nomorLoket-sp {
        font-size: 30px;
        font-weight: bold;
    }
}

@media only screen and (min-width: 1280px) {
    .box1-sp {
        margin: auto;
        width: 40%;
        margin-top: 10px;
        height: 220px;
        border-radius: 15px;
        background-color: #2A2F4F;
        padding: 0;
        padding-top: 30px;
        padding-bottom: 30px;
        margin-bottom: 20px;
    }

    .box1-1-sp {
        margin: 0px;
        height: 160px;
        border-radius: 15px;
        text-align: center;
        margin-left: 30px;
        margin-right: 30px;
    }

    .angkaAntrian-sp {
        font-size: 70px;
        font-weight: bold;
    }

    .nomorAnda-sp {
        font-size: 22px;
        font-weight: bold;
    }

    .box2-sp {
        margin: auto;
        width: 40%;
        height: 900px;
        margin-bottom: 20px;
        border-radius: 15px;
        background-color: #2A2F4F;
    }
    
    .box2-1-sp,
    .box2-2-sp,
    .box2-3-sp {
        margin: 10px;
        height: 240px;
        border-radius: 15px;
        text-align: center;
        margin-bottom: 20px;
    }

    .textAntrian-sp {
        font-size: 30px;
        font-weight: bold;
        margin-top: 10px;
    }
    
    .nomorAntrian-sp {
        font-size: 70px;
        font-weight: bold;
    }
    
    .nomorLoket-sp {
        font-size: 30px;
        font-weight: bold;
    }
}

@media only screen and (min-width: 1366px) {
    .box1-sp {
        margin: auto;
        width: 40%;
        margin-top: 10px;
        height: 220px;
        border-radius: 15px;
        background-color: #2A2F4F;
        padding: 0;
        padding-top: 30px;
        padding-bottom: 30px;
        margin-bottom: 20px;
    }

    .box1-1-sp {
        margin: 0px;
        height: 160px;
        border-radius: 15px;
        text-align: center;
        margin-left: 30px;
        margin-right: 30px;
    }

    .angkaAntrian-sp {
        font-size: 70px;
        font-weight: bold;
    }

    .nomorAnda-sp {
        font-size: 22px;
        font-weight: bold;
    }

    .box2-sp {
        margin: auto;
        width: 40%;
        height: 900px;
        margin-bottom: 20px;
        border-radius: 15px;
        background-color: #2A2F4F;
    }
    
    .box2-1-sp,
    .box2-2-sp,
    .box2-3-sp {
        margin: 10px;
        height: 240px;
        border-radius: 15px;
        text-align: center;
        margin-bottom: 20px;
    }

    .textAntrian-sp {
        font-size: 30px;
        font-weight: bold;
        margin-top: 10px;
    }
    
    .nomorAntrian-sp {
        font-size: 70px;
        font-weight: bold;
    }
    
    .nomorLoket-sp {
        font-size: 30px;
        font-weight: bold;
    }
}

@media only screen and (min-width: 1440px) {
    .box1-sp {
        margin: auto;
        width: 40%;
        margin-top: 10px;
        height: 220px;
        border-radius: 15px;
        background-color: #2A2F4F;
        padding: 0;
        padding-top: 30px;
        padding-bottom: 30px;
        margin-bottom: 20px;
    }

    .box1-1-sp {
        margin: 0px;
        height: 160px;
        border-radius: 15px;
        text-align: center;
        margin-left: 30px;
        margin-right: 30px;
    }

    .angkaAntrian-sp {
        font-size: 70px;
        font-weight: bold;
    }

    .nomorAnda-sp {
        font-size: 22px;
        font-weight: bold;
    }

    .box2-sp {
        margin: auto;
        width: 40%;
        height: 900px;
        margin-bottom: 20px;
        border-radius: 15px;
        background-color: #2A2F4F;
    }
    
    .box2-1-sp,
    .box2-2-sp,
    .box2-3-sp {
        margin: 10px;
        height: 240px;
        border-radius: 15px;
        text-align: center;
        margin-bottom: 20px;
    }

    .textAntrian-sp {
        font-size: 30px;
        font-weight: bold;
        margin-top: 10px;
    }
    
    .nomorAntrian-sp {
        font-size: 70px;
        font-weight: bold;
    }
    
    .nomorLoket-sp {
        font-size: 30px;
        font-weight: bold;
    }
}

@media only screen and (min-width: 1920px) {
    .box1-sp {
        margin: auto;
        width: 40%;
        margin-top: 10px;
        height: 220px;
        border-radius: 15px;
        background-color: #2A2F4F;
        padding: 0;
        padding-top: 30px;
        padding-bottom: 30px;
        margin-bottom: 20px;
    }

    .box1-1-sp {
        margin: 0px;
        height: 160px;
        border-radius: 15px;
        text-align: center;
        margin-left: 30px;
        margin-right: 30px;
    }

    .angkaAntrian-sp {
        font-size: 70px;
        font-weight: bold;
    }

    .nomorAnda-sp {
        font-size: 22px;
        font-weight: bold;
    }

    .box2-sp {
        margin: auto;
        width: 40%;
        height: 900px;
        margin-bottom: 20px;
        border-radius: 15px;
        background-color: #2A2F4F;
    }
    
    .box2-1-sp,
    .box2-2-sp,
    .box2-3-sp {
        margin: 10px;
        height: 240px;
        border-radius: 15px;
        text-align: center;
        margin-bottom: 20px;
    }

    .textAntrian-sp {
        font-size: 30px;
        font-weight: bold;
        margin-top: 10px;
    }
    
    .nomorAntrian-sp {
        font-size: 70px;
        font-weight: bold;
    }
    
    .nomorLoket-sp {
        font-size: 30px;
        font-weight: bold;
    }
}





</style>